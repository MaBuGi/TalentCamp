#!/usr/bin/env bash
# Deler abelkonkurransen.pdf + løsningerne op i én mappe pr. emne.
# Kør fra GM_TC/:  bash tools/split_topics.sh
set -euo pipefail
SRC=/home/von/TC/HowToWinMathCompetitions/Geometri_Runde_1/geometry_smash
P="$SRC/abelkonkurransen.pdf"
L="$SRC/abelkonkurransen_løsninger.pdf"

split() {  # emne  opgave-sider  løsnings-sider
  local d=$1
  mkdir -p "$d"
  qpdf "$P" --pages . "$2" -- "$d/opgaver.pdf"
  qpdf "$L" --pages . "$3" -- "$d/loesninger.pdf"
  pdftotext -layout "$d/opgaver.pdf" "$d/opgaver.txt"
  pdftotext -layout "$d/loesninger.pdf" "$d/loesninger.txt"
  printf '%-13s %2s opg-sider  %2s løs-sider  %3s opgaver  %3s løsninger\n' "$d" \
    "$(qpdf --show-npages "$d/opgaver.pdf")" "$(qpdf --show-npages "$d/loesninger.pdf")" \
    "$(grep -c '^Oppgave [0-9]* 20' "$d/opgaver.txt")" \
    "$(grep -c 'Oppgave [0-9]* 20[0-9]*/20[0-9]*\.' "$d/loesninger.txt")"
}

split algebra      2-23  2-19
split geometri     24-48 20-43
split kombinatorik 49-69 44-66
split talteori     70-85 67-85
