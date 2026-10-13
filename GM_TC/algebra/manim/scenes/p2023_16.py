"""2023/24 opg. 16: hver brøk (n! + (n+1)!)/n! er n + 2, så produktet er 2·3·…·2025."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from theme import *  # noqa: E402,F401


class P2023_16(AbelScene):
    pid = "2023-16"

    def construct(self):
        self.step("Én faktor")
        f = M(r"\frac{n! + (n+1)!}{n!}", size=64).shift(UP * 1.5)
        self.play(Write(f))
        hint = M(r"(n+1)! = n! \cdot (n+1)", size=40, color=YELLOW).next_to(f, DOWN, buff=0.5)
        self.play(Write(hint))
        g = M(r"= \frac{n!\,\bigl(1 + (n+1)\bigr)}{n!} = n + 2", size=52).next_to(hint, DOWN, buff=0.55)
        self.play(Write(g))
        hl = box(g[0][-3:], GREEN)
        self.play(Create(hl))
        self.wait(1.0)

        self.step("Alle faktorer")
        self.play(FadeOut(hint), FadeOut(g), FadeOut(hl), f.animate.scale(0.6).to_corner(UL, buff=0.9).shift(DOWN * 0.4))
        cols = []
        for n, top in ((0, r"0!+1!"), (1, r"1!+2!"), (2, r"2!+3!"), (3, r"3!+4!")):
            fr = M(r"\frac{" + top + r"}{" + f"{n}!" + r"}", size=44)
            val = M(str(n + 2), size=54, color=GREEN)
            cols.append((fr, val))
        dots_fr = M(r"\cdots", size=44)
        last_fr = M(r"\frac{2023!+2024!}{2023!}", size=44)
        row = VGroup(*[c[0] for c in cols], dots_fr, last_fr).arrange(RIGHT, buff=0.55).shift(UP * 0.6)
        self.play(LaggedStart(*[FadeIn(m, shift=DOWN * 0.2) for m in row], lag_ratio=0.15))
        vals = VGroup()
        for fr, val in cols:
            val.next_to(fr, DOWN, buff=0.7)
            vals.add(val)
        vdots = M(r"\cdots", size=54, color=GREEN).next_to(dots_fr, DOWN, buff=0.7)
        vlast = M(r"2025", size=54, color=GREEN).next_to(last_fr, DOWN, buff=0.7)
        arrows = VGroup(*[Arrow(fr.get_bottom(), v.get_top(), buff=0.1, color=MUTED, stroke_width=3, tip_length=0.15)
                          for fr, v in [(c[0], c[1]) for c in cols] + [(last_fr, vlast)]])
        self.play(Create(arrows), LaggedStart(*[FadeIn(v) for v in [*vals, vdots, vlast]], lag_ratio=0.15))
        self.wait(1.0)

        self.step("Gang sammen")
        prod = M(r"2 \cdot 3 \cdot 4 \cdot 5 \cdots 2025", size=54).shift(DOWN * 2.0)
        self.play(TransformMatchingShapes(VGroup(*[v.copy() for v in [*vals, vdots, vlast]]), prod))
        res = M(r"= 1 \cdot 2 \cdot 3 \cdots 2025 = 2025!", size=50, color=GREEN).next_to(prod, DOWN, buff=0.3)
        self.play(Write(res))
        self.play(Create(box(res, GREEN)))
        self.play(FadeIn(self.note("Svar D: 2025!", 28, GREEN).to_corner(DR, buff=0.4), shift=UP * 0.2))
        self.wait(1.5)
