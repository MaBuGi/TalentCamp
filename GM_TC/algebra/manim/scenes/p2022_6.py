"""2022/23 opg. 6: cirklen x² + y² = 1 og linjen x + y = a, der glider hen over den."""
import sys
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from theme import *  # noqa: E402,F401


class P2022_6(AbelScene):
    pid = "2022-6"

    def construct(self):
        ax = Axes(x_range=[-2.5, 2.5, 1], y_range=[-2.5, 2.5, 1], x_length=6.2, y_length=6.2,
                  axis_config={"color": BORDER, "include_tip": False}).shift(LEFT * 2.6 + DOWN * 0.35)
        nums = VGroup(*[M(str(v), size=22, color=MUTED).next_to(ax.c2p(v, 0), DR, buff=0.06) for v in (-2, -1, 1, 2)])
        u = ax.x_axis.get_unit_size()

        def line_for(a, color=CYAN, w=4):
            x0, x1 = max(-2.5, a - 2.5), min(2.5, a + 2.5)  # hold linjen inden for akse-kvadratet
            return Line(ax.c2p(x0, a - x0), ax.c2p(x1, a - x1), color=color, stroke_width=w)

        self.step("Cirklen")
        self.play(Create(ax), FadeIn(nums))
        circ = Circle(radius=u, color=BLUE, stroke_width=5).move_to(ax.c2p(0, 0))
        eq1 = M(r"x^2 + y^2 = 1", size=44, color=BLUE).move_to([3.7, 2.3, 0])
        r = Line(ax.c2p(0, 0), ax.c2p(np.cos(0.6), np.sin(0.6)), color=SUBTLE)
        rl = M("1", size=28, color=SUBTLE).next_to(r.get_center(), UP, buff=0.08)
        self.play(Create(circ), Write(eq1))
        self.play(Create(r), FadeIn(rl))
        cap = T("alle punkter med afstand 1 til (0, 0)", 22, SUBTLE).next_to(eq1, DOWN, buff=0.25)
        self.play(FadeIn(cap))
        self.wait(1.0)

        self.step("Linjen glider")
        self.play(FadeOut(r), FadeOut(rl), FadeOut(cap))
        a = ValueTracker(-2.2)
        ln = always_redraw(lambda: line_for(a.get_value()))
        foot = always_redraw(lambda: DashedLine(ax.c2p(0, 0), ax.c2p(a.get_value() / 2, a.get_value() / 2), color=YELLOW))

        def hits():
            av = a.get_value()
            disc = 2 - av * av
            if disc < -1e-6:
                return VGroup()
            s = np.sqrt(max(disc, 0))
            pts = {((av + s) / 2, (av - s) / 2), ((av - s) / 2, (av + s) / 2)}
            return VGroup(*[Dot(ax.c2p(x, y), color=GREEN, radius=0.09) for x, y in pts])

        dots = always_redraw(hits)
        eq2 = M(r"x + y = a", size=44, color=CYAN).next_to(eq1, DOWN, buff=0.45)
        aval = VGroup(M("a =", size=40), DecimalNumber(-2.2, num_decimal_places=2, font_size=40, color=CYAN)).arrange(RIGHT, buff=0.2)
        aval.next_to(eq2, DOWN, buff=0.4)
        aval[1].add_updater(lambda d: d.set_value(a.get_value()))
        dist = M(r"\text{afstand} = \frac{|a|}{\sqrt2}", size=36, color=YELLOW).next_to(aval, DOWN, buff=0.4)
        self.play(Write(eq2), FadeIn(aval), Create(ln), Create(foot), FadeIn(dist))
        self.add(dots)
        self.play(a.animate.set_value(-np.sqrt(2)), run_time=1.2)
        tan = M(r"a = \pm\sqrt2:\ \text{tangent}", size=30, color=GREEN).next_to(dist, DOWN, buff=0.35)
        self.play(FadeIn(tan), Flash(ax.c2p(-np.sqrt(2) / 2, -np.sqrt(2) / 2), color=GREEN))
        self.play(a.animate.set_value(np.sqrt(2)), run_time=3.0, rate_func=linear)
        self.play(a.animate.set_value(2.2), run_time=1.0)
        self.wait(0.8)

        self.step("Tæl heltallene")
        aval[1].clear_updaters()
        self.play(FadeOut(ln), FadeOut(foot), FadeOut(dots), FadeOut(aval), FadeOut(tan))
        good = VGroup(*[line_for(v, GREEN, 3) for v in (-1, 0, 1)])
        bad = VGroup(*[DashedLine(line_for(v).get_start(), line_for(v).get_end(), color=RED, stroke_width=2) for v in (-2, 2)])
        self.play(Create(good), Create(bad))
        res = M(r"|a| \le \sqrt2 \approx 1{,}41", size=38).next_to(dist, DOWN, buff=0.4)
        res2 = M(r"a \in \{-1,\ 0,\ 1\}", size=44, color=GREEN).next_to(res, DOWN, buff=0.3)
        self.play(Write(res))
        self.play(Write(res2))
        self.play(Create(box(res2, GREEN)))
        self.play(FadeIn(T("Svar D: 3 heltal", 30, GREEN).next_to(res2, DOWN, buff=0.45), shift=UP * 0.2))
        self.wait(1.5)
