#!/usr/bin/env python3
"""Kontaktark til visuelt tjek: midt- og slut-frame af hvert klip for en opgave, i ét billede.

    ~/.local/share/pipx/venvs/manim/bin/python contact.py <ud-mappe> 2007-1 2013-3 …
"""
import subprocess, sys, tempfile
from pathlib import Path

from PIL import Image

MEDIA = Path(__file__).resolve().parent.parent / 'arcade' / 'media'
W = 560


def frame(mp4, at_end, dst):
    dur = float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', str(mp4)],
                               capture_output=True, text=True, check=True).stdout)
    t = max(dur - 0.25, 0) if at_end else dur * 0.55
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-ss', f'{t:.2f}', '-i', str(mp4), '-frames:v', '1',
                    '-vf', f'scale={W}:-1', str(dst)], check=True)
    return Image.open(dst)


def main():
    out = Path(sys.argv[1])
    out.mkdir(parents=True, exist_ok=True)
    for pid in sys.argv[2:]:
        clips = sorted((MEDIA / pid).glob('*.mp4'))
        with tempfile.TemporaryDirectory() as td:
            ims = []
            for c in clips:
                ims.append(frame(c, False, Path(td) / f'{c.stem}m.png'))
                ims.append(frame(c, True, Path(td) / f'{c.stem}e.png'))
            h = ims[0].height
            sheet = Image.new('RGB', (2 * W + 6, len(clips) * (h + 6)), (60, 60, 60))
            for i, im in enumerate(ims):
                sheet.paste(im, ((i % 2) * (W + 6), (i // 2) * (h + 6)))
            sheet.save(out / f'{pid}.png')
        print(out / f'{pid}.png')


if __name__ == '__main__':
    main()
