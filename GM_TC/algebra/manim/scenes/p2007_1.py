"""2007/08 opg. 1: 1997·2003 − 1993·2007 via (a−b)(a+b) = a² − b²."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from theme import *  # noqa: E402,F401


def diff_squares(a, b, scale, col):
    """Kvadrat a×a med et b×b-hjørne skåret væk, og stykket der flyttes til et (a+b)×(a−b)-rektangel."""
    big = Square(a * scale, stroke_color=FG, stroke_width=2)
    cut = Square(b * scale, color=col, fill_opacity=0.55, stroke_width=0)
    cut.align_to(big, UR)
    return big, cut


class P2007_1(AbelScene):
    pid = "2007-1"

    def construct(self):
        # Trin 1: faktorerne ligger symmetrisk om 2000
        self.step("Symmetri om 2000")
        expr = M(r"1997", r"\cdot", r"2003", r"-", r"1993", r"\cdot", r"2007", size=60).shift(UP * 1.6)
        self.play(Write(expr))
        line = NumberLine(x_range=[1990, 2010, 1], length=10, include_numbers=False, color=BORDER).shift(DOWN * 1.7)
        labels = VGroup(*[M(str(v), size=24, color=MUTED).next_to(line.n2p(v), DOWN) for v in (1993, 1997, 2000, 2003, 2007)])
        self.play(Create(line), FadeIn(labels))
        d1 = VGroup(Dot(line.n2p(1997), color=BLUE), Dot(line.n2p(2003), color=BLUE))
        arc1 = VGroup(
            CurvedArrow(line.n2p(2000) + UP * 0.08, line.n2p(1997) + UP * 0.08, color=BLUE, angle=PI / 3, tip_length=0.16),
            CurvedArrow(line.n2p(2000) + UP * 0.08, line.n2p(2003) + UP * 0.08, color=BLUE, angle=-PI / 3, tip_length=0.16),
        )
        t3 = M(r"\pm 3", size=30, color=BLUE).next_to(arc1, UP, buff=0.12)
        self.play(FadeIn(d1), Create(arc1), FadeIn(t3), expr[0].animate.set_color(BLUE), expr[2].animate.set_color(BLUE))
        f1 = M(r"1997\cdot 2003", r"=", r"(2000-3)(2000+3)", size=48).next_to(expr, DOWN, buff=0.6)
        f1[0].set_color(BLUE)
        self.play(FadeIn(f1[0:2]), TransformMatchingShapes(expr[0:3].copy(), f1[2]))
        self.wait(1.2)

        # Trin 2: areal-billedet af a² − b², og det samme for 7
        self.step("Kvadrat minus kvadrat")
        self.clear_body()
        a, b = 3.0, 0.8
        corner = LEFT * 6.2 + UP * 2.0  # øverste venstre hjørne af kvadratet
        sq = Square(a, stroke_color=FG, stroke_width=2, fill_color=SURFACE, fill_opacity=1)
        sq.move_to(corner, aligned_edge=UL)
        la = M("2000", size=28).next_to(sq, LEFT, buff=0.15)
        lt = M("2000", size=28).next_to(sq, UP, buff=0.15)
        self.play(DrawBorderThenFill(sq), FadeIn(la), FadeIn(lt))
        hole = Square(b, stroke_width=0, fill_color=BG, fill_opacity=1).align_to(sq, UR)
        hole_line = DashedVMobject(Square(b, color=ORANGE, stroke_width=3).align_to(sq, UR), num_dashes=20)
        lb = M("3", size=28, color=ORANGE).next_to(hole, RIGHT, buff=0.12)
        self.play(FadeIn(hole), Create(hole_line), FadeIn(lb))
        cap = M(r"2000^2 - 3^2", size=40).next_to(sq, DOWN, buff=0.35)
        self.play(Write(cap))
        # L-figuren deles i to rektangler; den højre stribe vendes og lægges nederst
        rest = Rectangle(width=a - b, height=a, stroke_width=0, fill_color=BLUE, fill_opacity=0.45).move_to(corner, aligned_edge=UL)
        strip = Rectangle(width=b, height=a - b, stroke_width=0, fill_color=CYAN, fill_opacity=0.6)
        strip.align_to(sq, RIGHT).align_to(sq, DOWN)
        self.play(FadeIn(rest), FadeIn(strip), FadeOut(sq), FadeOut(hole), FadeOut(lt), FadeOut(la), FadeOut(cap))
        self.play(strip.animate.rotate(-PI / 2).next_to(rest, DOWN, buff=0).align_to(rest, LEFT), FadeOut(hole_line), FadeOut(lb), run_time=1.4)
        whole = VGroup(rest, strip)
        brace_r = Brace(whole, RIGHT, color=SUBTLE)
        tr = M(r"2000+3", size=28).next_to(brace_r, RIGHT, buff=0.1)
        brace_t = Brace(rest, UP, color=SUBTLE)
        tt = M(r"2000-3", size=28).next_to(brace_t, UP, buff=0.1)
        self.play(GrowFromCenter(brace_r), FadeIn(tr), GrowFromCenter(brace_t), FadeIn(tt))
        eq = M(r"(a-b)(a+b) = a^2 - b^2", size=40, color=YELLOW).move_to(RIGHT * 2.6 + UP * 1.7)
        res1 = M(r"1997\cdot 2003 = 2000^2 - 9", size=38, color=BLUE).move_to(RIGHT * 2.6 + UP * 0.2)
        res2 = M(r"1993\cdot 2007 = 2000^2 - 49", size=38, color=PURPLE).next_to(res1, DOWN, buff=0.5)
        self.play(Write(eq))
        self.play(Write(res1))
        self.play(Write(res2))
        self.wait(1.2)

        # Trin 3 (slutsvar): 2000² går ud
        self.step("Træk fra")
        self.clear_body()
        e1 = M(r"(2000^2 - 9)", r"-", r"(2000^2 - 49)", size=56).shift(UP * 0.8)
        self.play(Write(e1))
        e2 = M(r"2000^2", r"- 9", r"- 2000^2", r"+ 49", size=56).next_to(e1, DOWN, buff=0.7)
        self.play(TransformMatchingShapes(e1.copy(), e2))
        cross = VGroup(Line(e2[0].get_corner(DL), e2[0].get_corner(UR), color=RED, stroke_width=5),
                       Line(e2[2].get_corner(DL), e2[2].get_corner(UR), color=RED, stroke_width=5))
        self.play(Create(cross))
        e3 = M(r"= 49 - 9 = 40", size=64, color=GREEN).next_to(e2, DOWN, buff=0.7)
        self.play(Write(e3))
        self.play(Create(box(e3, GREEN)))
        self.play(FadeIn(self.note("Svar C: 40", 30, GREEN), shift=UP * 0.2))
        self.wait(1.5)
