"""2015/16 opg. 5: (2016⁴ − 2015⁴)/(2015² + 2016²) via a⁴ − b⁴ = (a² − b²)(a² + b²)."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from theme import *  # noqa: E402,F401


class P2015_5(AbelScene):
    pid = "2015-5"

    def construct(self):
        self.step("Faktorisér tælleren")
        frac = M(r"{2016^4 - 2015^4", r"\over", r"2015^2 + 2016^2}", size=60).shift(UP * 1.4)
        self.play(Write(frac))
        gen = M(r"a^4 - b^4", r"=", r"(a^2)^2 - (b^2)^2", r"=", r"(a^2 - b^2)(a^2 + b^2)", size=40, color=YELLOW).shift(DOWN * 0.6)
        self.play(Write(gen[0]))
        self.play(Write(gen[1:3]))
        self.play(Write(gen[3:]))
        frac2 = M(r"{(2016^2 - 2015^2)", r"(2016^2 + 2015^2)", r"\over", r"2015^2 + 2016^2}", size=52).shift(DOWN * 2.2)
        self.play(TransformMatchingShapes(frac.copy(), frac2))
        self.wait(1.0)

        self.step("Forkort")
        self.play(FadeOut(frac), FadeOut(gen), frac2.animate.move_to(UP * 1.6))
        self.play(frac2[1].animate.set_color(PURPLE), frac2[3].animate.set_color(PURPLE))
        cross = VGroup(*[Line(m.get_corner(DL), m.get_corner(UR), color=RED, stroke_width=5) for m in (frac2[1], frac2[3])])
        same = T("samme tal: 2016² + 2015² = 2015² + 2016²", 22, PURPLE).next_to(frac2, DOWN, buff=0.35)
        self.play(FadeIn(same))
        self.play(Create(cross))
        rest = M(r"2016^2 - 2015^2", r"=", r"(2016 - 2015)", r"(2016 + 2015)", size=48).shift(DOWN * 0.7)
        self.play(Write(rest))
        self.wait(1.0)

        self.step("Regn ud")
        val = M(r"=", r"1", r"\cdot", r"4031", r"=", r"4031", size=60).next_to(rest, DOWN, buff=0.6)
        val[5].set_color(GREEN)
        self.play(Write(val))
        self.play(Create(box(val[5], GREEN)))
        self.play(FadeIn(self.note("Svar B: 4031", 30, GREEN), shift=UP * 0.2))
        self.wait(1.5)
