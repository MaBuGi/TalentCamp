"""2012/13 opg. 20: x + x² + … + x²⁰¹² = 0 har kun rødderne 0 og −1."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from theme import *  # noqa: E402,F401


def g(x, n=12):  # 1 + x + … + x^(n−1), samme form som 1 + x + … + x^2011
    return sum(x ** k for k in range(n))


def h(x, n=6):  # 1 + x² + … + x^(2n−2), samme form som 1 + x² + … + x^2010
    return sum(x ** (2 * k) for k in range(n))


class P2012_20(AbelScene):
    pid = "2012-20"

    def construct(self):
        self.step("Sæt x uden for")
        e0 = M(r"x + x^2 + x^3 + \dots + x^{2012} = 0", size=50).to_edge(UP, buff=1.0)
        self.play(Write(e0))
        e1 = M(r"x", r"\cdot", r"(1 + x + x^2 + \dots + x^{2011})", r"= 0", size=50).next_to(e0, DOWN, buff=0.5)
        e1[0].set_color(GREEN)
        self.play(TransformMatchingShapes(e0.copy(), e1))
        r0 = M(r"x = 0", size=50, color=GREEN).next_to(e1, DOWN, buff=0.6)
        hl = box(r0, GREEN)
        self.play(Write(r0), Create(hl))
        self.wait(1.0)

        self.step("Par leddene")
        self.play(FadeOut(e0), FadeOut(r0), FadeOut(hl), e1.animate.to_edge(UP, buff=0.9).scale(0.8))
        pair = M(r"(1 + x) + x^2(1 + x) + x^4(1 + x) + \dots + x^{2010}(1 + x)", size=36).next_to(e1, DOWN, buff=0.35)
        fac = M(r"=", r"(1 + x)", r"(1 + x^2 + x^4 + \dots + x^{2010})", size=40).next_to(pair, DOWN, buff=0.3)
        fac[1].set_color(GREEN)
        fac[2].set_color(BLUE)
        self.play(Write(pair))
        self.play(Write(fac))
        ax = Axes(x_range=[-1.2, 1.2, 0.5], y_range=[-1, 7, 1], x_length=6.4, y_length=3.4,
                  axis_config={"color": BORDER, "include_tip": False}).shift(DOWN * 1.9 + LEFT * 2.6)
        hl = ax.plot(h, x_range=[-1.03, 1.03], color=BLUE, stroke_width=4)
        one = DashedLine(ax.c2p(-1.2, 1), ax.c2p(1.2, 1), color=MUTED)
        lab1 = M("1", size=24, color=MUTED).next_to(ax.c2p(-1.2, 1), LEFT, buff=0.1)
        self.play(Create(ax), Create(one), FadeIn(lab1), Create(hl))
        why = VGroup(
            T("lige potenser er aldrig negative,", 22, SUBTLE),
            T("så den blå faktor er mindst 1", 22, SUBTLE),
            T("og bliver aldrig 0", 22, BLUE),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.12).next_to(ax, RIGHT, buff=0.6)
        self.play(FadeIn(why))
        self.wait(1.0)

        self.step("To løsninger")
        self.play(FadeOut(why), FadeOut(hl), FadeOut(one), FadeOut(lab1))
        f = ax.plot(lambda x: x * g(x), x_range=[-1.08, 0.72], color=YELLOW, stroke_width=4)
        cap = M(r"y = x + x^2 + \dots", size=28, color=YELLOW).next_to(ax.c2p(0.72, 0.72 * g(0.72)), LEFT, buff=0.15)
        self.play(Create(f), FadeIn(cap))
        roots = VGroup(Dot(ax.c2p(0, 0), color=GREEN, radius=0.1), Dot(ax.c2p(-1, 0), color=GREEN, radius=0.1))
        self.play(FadeIn(roots), Flash(roots[0], color=GREEN), Flash(roots[1], color=GREEN))
        res = M(r"x = 0 \ \text{ og } \ x = -1", size=46, color=GREEN).next_to(ax, RIGHT, buff=0.6).shift(UP * 0.3)
        self.play(Write(res))
        self.play(Create(box(res, GREEN)))
        self.play(FadeIn(T("Svar B: 2 løsninger", 28, GREEN).next_to(res, DOWN, buff=0.4), shift=UP * 0.2))
        self.wait(1.5)
