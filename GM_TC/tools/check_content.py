#!/usr/bin/env python3
"""Tjekker <emne>/arcade/content.js mod <emne>/loesninger.txt.

Kør fra GM_TC/:  python3 tools/check_content.py algebra
- antal opgaver = antal løsninger i PDF'en, unikke id'er, 5 svarmuligheder, gyldige delemner
- svarbogstav for hver opgave = bogstavet i den officielle løsning
- pilot-trin: mcq har ≥2 muligheder, num har et tal
"""
import json, re, subprocess, sys
from pathlib import Path

topic = sys.argv[1] if len(sys.argv) > 1 else 'algebra'
root = Path(__file__).resolve().parent.parent / topic
js = (root / 'arcade' / 'content.js').read_text(encoding='utf-8')

dump = subprocess.run(
    ['node', '-e', 'const window={};' + js +
     ';console.log(JSON.stringify({P:window.ABEL,T:window.ABEL_TOPICS,S:window.ABEL_STEPS}))'],
    capture_output=True, text=True, check=True).stdout
data = json.loads(dump)
P, topics, steps = data['P'], {t['k'] for t in data['T']}, data['S']

# Officielle svar: "Oppgave N YYYY/YYYY." … første svarbogstav efter prikkerne før næste opgave.
txt = (root / 'loesninger.txt').read_text(encoding='utf-8')
chunks = re.split(r'\(\d+\)\s+Oppgave\s+', txt)[1:]
official = {}
for c in chunks:
    m = re.match(r'(\d+)\s+(\d{4})/\d{4}\.', c)
    if not m:
        continue
    body = re.sub(r'Abelkonkurransen.*?Side \d+ av \d+', '', c, flags=re.S)
    letters = re.findall(r'(?:\.\s?){3,}\s*([A-E])\b|[.)]\s?([A-E])\s*$', body, flags=re.M)
    flat = [a or b for a, b in letters]
    if flat:
        official[f'{m.group(2)}-{m.group(1)}'] = flat[-1]
# pdftotext blander layoutet sammen her; tjekket i PDF'en (løsninger s. 3): x^(1/8) = C
official.update({'2007-4': 'C'} if topic == 'algebra' else {})

errors = []
ids = [p['id'] for p in P]
if len(ids) != len(set(ids)):
    errors.append('dublerede id: ' + ', '.join(sorted({i for i in ids if ids.count(i) > 1})))
for p in P:
    if len(p['opts']) != 5:
        errors.append(f"{p['id']}: {len(p['opts'])} svarmuligheder")
    if p['ans'] not in 'ABCDE':
        errors.append(f"{p['id']}: svar {p['ans']}")
    for t in p['topics']:
        if t not in topics:
            errors.append(f"{p['id']}: ukendt delemne {t}")
    o = official.get(p['id'])
    if o is None:
        errors.append(f"{p['id']}: ikke fundet i løsningerne")
    elif o != p['ans']:
        errors.append(f"{p['id']}: svar {p['ans']} men løsningen siger {o}")
missing = sorted(set(official) - set(ids))
if missing:
    errors.append('mangler i content.js: ' + ', '.join(missing))
for sid, st in steps.items():
    if sid not in ids:
        errors.append(f'trin for ukendt opgave {sid}')
    for i, s in enumerate(st):
        if s['k'] == 'mcq' and len(s.get('o', [])) < 2:
            errors.append(f'{sid} trin {i + 1}: for få muligheder')
        if s['k'] == 'num' and not isinstance(s.get('a'), (int, float)):
            errors.append(f'{sid} trin {i + 1}: mangler tal')

print(f'{len(P)} opgaver, {len(official)} officielle svar fundet, {len(steps)} pilotopgaver med trin')
for t in sorted(topics):
    print(f"  {t:11s} {sum(t in p['topics'] for p in P):3d}  (primær {sum(p['topics'][0] == t for p in P)})")
if errors:
    print('FEJL:')
    print('\n'.join('  ' + e for e in errors))
    sys.exit(1)
print('OK')
