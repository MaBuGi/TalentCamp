"""2016/17 opg. 15: √(6 + √(6 + …)) – udtrykket indeholder sig selv; cobweb mod fixpunktet 3."""
import sys
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from theme import *  # noqa: E402,F401


class P2016_15(AbelScene):
    pid = "2016-15"

    def construct(self):
        self.step("Udtrykket i sig selv")
        outer = M(r"x", r"=", r"\sqrt{6 + \sqrt{6 + \sqrt{6 + \sqrt{6 + \cdots}}}}", size=60).shift(UP * 1.4)
        self.play(Write(outer))
        same = M(r"x", r"=", r"\sqrt{6 + x}", size=72, color=YELLOW).shift(DOWN * 1.0)
        txt = T("under den yderste rod står 6 plus hele udtrykket igen", 24, SUBTLE).next_to(outer, DOWN, buff=0.4)
        self.play(FadeIn(txt))
        self.play(TransformMatchingShapes(outer.copy(), same))
        hl = box(same)
        self.play(Create(hl))
        self.wait(1.0)

        self.step("Løs ligningen")
        self.play(FadeOut(outer), FadeOut(txt), FadeOut(hl), same.animate.scale(0.7).to_edge(UP, buff=0.9).to_edge(RIGHT, buff=0.8))
        ax = Axes(x_range=[0, 4, 1], y_range=[0, 4, 1], x_length=5.4, y_length=5.4,
                  axis_config={"color": BORDER, "include_tip": False}).shift(LEFT * 3.1 + DOWN * 0.4)
        nums = VGroup(*[M(str(v), size=22, color=MUTED).next_to(ax.c2p(v, 0), DOWN) for v in (1, 2, 3)])
        g = ax.plot(lambda t: np.sqrt(6 + t), x_range=[0, 4], color=BLUE, stroke_width=4)
        d = ax.plot(lambda t: t, x_range=[0, 4], color=MUTED, stroke_width=2)
        gl = M(r"y = \sqrt{6 + t}", size=28, color=BLUE).next_to(ax.c2p(0.3, np.sqrt(6.3)), UP, buff=0.15)
        dl = M(r"y = t", size=26, color=MUTED).next_to(ax.c2p(3.9, 3.9), DOWN, buff=0.1)
        self.play(Create(ax), FadeIn(nums), Create(d), Create(g), FadeIn(gl), FadeIn(dl))
        # cobweb fra t = 0: √6, √(6+√6), … -> 3
        t = 0.0
        web = VGroup()
        vals = []
        for _ in range(5):
            y = np.sqrt(6 + t)
            web.add(Line(ax.c2p(t, t), ax.c2p(t, y), color=YELLOW, stroke_width=3))
            web.add(Line(ax.c2p(t, y), ax.c2p(y, y), color=YELLOW, stroke_width=3))
            vals.append(y)
            t = y
        self.play(Create(web), run_time=3, rate_func=linear)
        seq = M(r"\sqrt6 \approx 2{,}449,\ \ 2{,}906,\ \ 2{,}984,\ \dots \to 3", size=30, color=YELLOW)
        seq.next_to(same, DOWN, buff=0.45).align_to(same, RIGHT)
        self.play(Write(seq))
        alg = VGroup(
            M(r"x^2 = 6 + x", size=40),
            M(r"x^2 - x - 6 = 0", size=40),
            M(r"(x - 3)(x + 2) = 0", size=40),
        ).arrange(DOWN, buff=0.3, aligned_edge=LEFT).next_to(seq, DOWN, buff=0.5).align_to(seq, LEFT)
        for a in alg:
            self.play(Write(a), run_time=0.8)
        self.wait(1.0)

        self.step("Vælg roden")
        fix = Dot(ax.c2p(3, 3), color=GREEN, radius=0.11)
        self.play(FadeIn(fix), Flash(fix, color=GREEN))
        sol = VGroup(
            M(r"x = 3", size=52, color=GREEN),
            M(r"x = -2\ \text{forkastes: en rod er} \ge 0", size=30, color=RED),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.25).next_to(alg, DOWN, buff=0.4).align_to(alg, LEFT)
        self.play(Write(sol[0]))
        self.play(FadeIn(sol[1]))
        self.play(Create(box(sol[0], GREEN)))
        self.play(FadeIn(self.note("Svar D: 3", 30, GREEN).to_edge(RIGHT, buff=1.0).to_edge(DOWN, buff=0.35), shift=UP * 0.2))
        self.wait(1.5)
