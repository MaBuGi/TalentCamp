"""2017/18 opg. 11: ⁿ√n = n^(1/n) – grafen har toppunkt i e, og √2 = ⁴√4."""
import sys
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from theme import *  # noqa: E402,F401


def f(x):
    return x ** (1 / x)


class P2017_11(AbelScene):
    pid = "2017-11"

    def construct(self):
        ax = Axes(x_range=[0, 7, 1], y_range=[0.9, 1.5, 0.1], x_length=7.0, y_length=5.0,
                  axis_config={"color": BORDER, "include_tip": False}).shift(LEFT * 3.0 + DOWN * 0.4)
        COLX = 1.1  # venstre kant af tekstkolonnen
        xn = VGroup(*[M(str(v), size=24, color=MUTED).next_to(ax.c2p(v, 0.9), DOWN) for v in range(1, 7)])
        yn = VGroup(*[M(s, size=22, color=MUTED).next_to(ax.c2p(0, v), LEFT) for v, s in ((1.0, "1{,}0"), (1.2, "1{,}2"), (1.4, "1{,}4"))])

        self.step("Funktionen")
        fx = M(r"f(x) = x^{1/x}", size=46, color=BLUE).move_to([COLX, 2.3, 0], aligned_edge=LEFT)
        self.play(Write(fx))
        self.play(Create(ax), FadeIn(xn), FadeIn(yn))
        g = ax.plot(f, x_range=[1, 6.9], color=BLUE, stroke_width=5)
        self.play(Create(g), run_time=2)
        top = Dot(ax.c2p(np.e, f(np.e)), color=YELLOW)
        topl = M(r"x = e \approx 2{,}718", size=30, color=YELLOW).next_to(top, UP, buff=0.2)
        self.play(FadeIn(top), Write(topl))
        cap = T("stiger op til e, falder derefter", 22, SUBTLE).next_to(fx, DOWN, buff=0.25).align_to(fx, LEFT)
        self.play(FadeIn(cap))
        self.wait(1.0)

        self.step("To ens højder")
        d2 = Dot(ax.c2p(2, f(2)), color=PURPLE, radius=0.1)
        d4 = Dot(ax.c2p(4, f(4)), color=PURPLE, radius=0.1)
        lvl = DashedLine(ax.c2p(1.6, np.sqrt(2)), ax.c2p(4.6, np.sqrt(2)), color=PURPLE)
        self.play(FadeIn(d2), FadeIn(d4), Create(lvl))
        l24 = M(r"\sqrt[4]{4} = (2^2)^{1/4} = 2^{1/2} = \sqrt2", size=34, color=PURPLE).next_to(cap, DOWN, buff=0.5).align_to(fx, LEFT)
        self.play(Write(l24))
        self.wait(1.0)

        self.step("Størst")
        pts = {1: GREEN, 3: GREEN, 6: ORANGE}
        ds = VGroup(*[Dot(ax.c2p(n, f(n)), color=c, radius=0.1) for n, c in pts.items()])
        labs = VGroup(
            M(r"1", size=26).next_to(ds[0], DOWN + RIGHT, buff=0.1),
            M(r"\sqrt[3]3", size=30, color=GREEN).next_to(ds[1], UP, buff=0.15),
            M(r"\sqrt[6]6", size=30, color=ORANGE).next_to(ds[2], UP, buff=0.15),
        )
        self.play(FadeOut(topl), FadeIn(ds), FadeIn(labs))
        cmp = VGroup(
            M(r"(\sqrt[3]3)^6 = 9", size=34, color=GREEN),
            M(r"(\sqrt2)^6 = 8,\ \ (\sqrt[6]6)^6 = 6", size=34),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.25).next_to(l24, DOWN, buff=0.5).align_to(fx, LEFT)
        self.play(Write(cmp))
        self.play(Indicate(ds[1], color=GREEN, scale_factor=1.6), Create(box(cmp[0], GREEN)))
        self.play(FadeIn(T("Svar C: ∛3", 30, GREEN).next_to(cmp, DOWN, buff=0.5).align_to(fx, LEFT), shift=UP * 0.2))
        self.wait(1.5)
