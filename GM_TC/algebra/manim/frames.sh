#!/usr/bin/env bash
# Trækker sidste frame (og en midt-frame) ud af hvert klip, til visuelt tjek.
#   bash frames.sh <mappe med NN.mp4> <ud-mappe>
set -euo pipefail
src=$1; out=$2
mkdir -p "$out"
for f in "$src"/*.mp4; do
  b=$(basename "$f" .mp4)
  d=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$f")
  ffmpeg -v error -y -ss "$(python3 -c "print($d / 2)")" -i "$f" -frames:v 1 -vf scale=640:-1 "$out/${b}_mid.png"
  ffmpeg -v error -y -sseof -0.3 -i "$f" -frames:v 1 -vf scale=640:-1 "$out/${b}_end.png"
done
ls "$out"
