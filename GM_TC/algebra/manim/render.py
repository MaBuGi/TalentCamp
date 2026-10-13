#!/usr/bin/env python3
"""Renderer pilotscenerne og lægger klippene ind i arcaden.

    python3 render.py                 # alle scener i scenes/
    python3 render.py 2007-1 2013-3   # kun nogle
    python3 render.py --quality h     # 1080p (standard: m = 720p30)

For hver scene scenes/p<ÅÅÅÅ>_<nr>.py (klasse P<ÅÅÅÅ>_<nr>):
  manim --save_sections  ->  ../arcade/media/<id>/01.mp4, 02.mp4, …
og til sidst skrives ../arcade/media/manifest.js (window.ABEL_MEDIA).
Antallet af klip skal være antal guidede trin i content.js + 1 (slutsvaret).
"""
import argparse, json, shutil, subprocess, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
ARCADE = HERE.parent / 'arcade'
MEDIA = ARCADE / 'media'
BUILD = HERE / 'build'
MANIM = shutil.which('manim') or str(Path.home() / '.local/bin/manim')


def steps_per_problem():
    js = (ARCADE / 'content.js').read_text(encoding='utf-8')
    out = subprocess.run(['node', '-e', 'const window={};' + js + ';console.log(JSON.stringify(window.ABEL_STEPS))'],
                         capture_output=True, text=True, check=True).stdout
    return {k: len(v) for k, v in json.loads(out).items()}


def duration(mp4):
    out = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', str(mp4)],
                         capture_output=True, text=True, check=True).stdout
    return round(float(out), 2)


def render(scene_file, quality):
    stem = scene_file.stem                      # p2007_1
    pid = stem[1:].replace('_', '-')            # 2007-1
    cls = 'P' + stem[1:]                        # P2007_1
    print(f'· {pid}: rendering …', flush=True)
    res = subprocess.run([MANIM, f'-q{quality}', '--save_sections', '--disable_caching', '--media_dir', str(BUILD),
                          str(scene_file), cls], cwd=HERE, capture_output=True, text=True)
    if res.returncode != 0:
        print(res.stdout[-3000:], res.stderr[-3000:], sep='\n')
        print(f'  manim FEJLEDE for {pid}', flush=True)
        return pid, None
    qdir = {'l': '480p15', 'm': '720p30', 'h': '1080p60', 'k': '2160p60'}[quality]
    sec_dir = BUILD / 'videos' / stem / qdir / 'sections'
    meta = json.loads((sec_dir / f'{cls}.json').read_text(encoding='utf-8'))
    dst = MEDIA / pid
    if dst.exists():
        shutil.rmtree(dst)
    dst.mkdir(parents=True)
    clips = []
    for i, sec in enumerate(meta, 1):
        src = sec_dir / sec['video']
        out = dst / f'{i:02d}.mp4'
        # +faststart så browseren kan starte afspilningen før hele filen er hentet
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(src), '-c', 'copy', '-movflags', '+faststart', str(out)], check=True)
        clips.append({'src': f'media/{pid}/{i:02d}.mp4', 'label': sec['name'], 'dur': duration(out)})
    return pid, clips


def from_existing(scene_file, quality):
    """Byg manifest-indgangen ud fra allerede renderede klip (uden at rendere igen)."""
    stem = scene_file.stem
    pid, cls = stem[1:].replace('_', '-'), 'P' + stem[1:]
    qdir = {'l': '480p15', 'm': '720p30', 'h': '1080p60', 'k': '2160p60'}[quality]
    meta_file = BUILD / 'videos' / stem / qdir / 'sections' / f'{cls}.json'
    clips_on_disk = sorted((MEDIA / pid).glob('*.mp4'))
    if not meta_file.exists() or not clips_on_disk:
        return pid, None
    meta = json.loads(meta_file.read_text(encoding='utf-8'))
    return pid, [{'src': f'media/{pid}/{c.name}', 'label': s['name'], 'dur': duration(c)} for c, s in zip(clips_on_disk, meta)]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('ids', nargs='*')
    ap.add_argument('--quality', default='m', choices='lmhk')
    ap.add_argument('--manifest-only', action='store_true', help='skriv kun manifest.js ud fra eksisterende klip')
    args = ap.parse_args()

    want = {i.replace('-', '_') for i in args.ids}
    files = sorted(f for f in (HERE / 'scenes').glob('p*.py') if not want or f.stem[1:] in want)
    if not files:
        raise SystemExit('ingen scener fundet')

    manifest_path = MEDIA / 'manifest.js'
    manifest = {}
    if manifest_path.exists():
        txt = manifest_path.read_text(encoding='utf-8')
        manifest = json.loads(txt[txt.index('{'):txt.rindex('}') + 1])

    nsteps = steps_per_problem()
    bad = []
    for f in files:
        if args.manifest_only:
            pid, clips = from_existing(f, args.quality)
            if clips is None:
                bad.append(pid)
                continue
            manifest[pid] = clips
            continue
        pid, clips = render(f, args.quality)
        if clips is None:
            bad.append(pid)
            continue
        manifest[pid] = clips
        want_n = nsteps.get(pid, 0) + 1
        mark = 'OK' if len(clips) == want_n else f'FORKERT (content.js forventer {want_n})'
        if len(clips) != want_n:
            bad.append(pid)
        print(f'  {len(clips)} klip, {sum(c["dur"] for c in clips):.1f} s  {mark}', flush=True)

    MEDIA.mkdir(parents=True, exist_ok=True)
    manifest_path.write_text('/* Genereret af algebra/manim/render.py: ét klip pr. trin. */\nwindow.ABEL_MEDIA = '
                             + json.dumps(dict(sorted(manifest.items())), ensure_ascii=False, indent=1) + ';\n',
                             encoding='utf-8')
    print(f'manifest: {len(manifest)} opgaver -> {manifest_path.relative_to(HERE.parent)}')
    if bad:
        sys.exit('klip og trin passer ikke for: ' + ', '.join(bad))


if __name__ == '__main__':
    main()
