"""2020/21 opg. 4: Pias souvenirs – procentstolpe med Argentina, Chile og resten."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from theme import *  # noqa: E402,F401

W = 11.0  # bredde af 100 %-stolpen


def seg(x0, pct, color, op=0.75, h=1.2):
    r = Rectangle(width=W * pct / 100, height=h, stroke_width=0, fill_color=color, fill_opacity=op)
    r.move_to([-W / 2 + W * (x0 + pct / 2) / 100, 0, 0])
    return r


class P2020_4(AbelScene):
    pid = "2020-4"

    def construct(self):
        frame = Rectangle(width=W, height=1.2, stroke_color=FG, stroke_width=2)
        lab100 = T("alle souvenirs = 100 %", 24, SUBTLE).next_to(frame, UP, buff=0.25)

        self.step("Argentina")
        self.play(Create(frame), FadeIn(lab100))
        not_a = seg(30, 70, SURFACE, 1)
        br = Brace(not_a, DOWN, color=SUBTLE)
        br_t = T("70 % er ikke fra Argentina", 24, SUBTLE).next_to(br, DOWN, buff=0.15)
        self.play(FadeIn(not_a), GrowFromCenter(br), FadeIn(br_t))
        arg = seg(0, 30, BLUE)
        arg_t = VGroup(T("Argentina", 22, FG), M(r"30\,\%", size=34, color=FG)).arrange(DOWN, buff=0.1).move_to(arg)
        self.play(FadeIn(arg), Write(arg_t))
        self.wait(1.0)

        self.step("Chile")
        self.play(FadeOut(br), FadeOut(br_t))
        not_c = seg(0, 82, SURFACE, 0.0)
        br2 = Brace(not_c, UP, color=SUBTLE)
        br2_t = T("82 % er ikke fra Chile", 24, SUBTLE).next_to(br2, UP, buff=0.15)
        self.play(FadeOut(lab100), GrowFromCenter(br2), FadeIn(br2_t))
        chi = seg(82, 18, ORANGE)
        chi_t = VGroup(T("Chile", 22, FG), M(r"18\,\%", size=34, color=FG)).arrange(DOWN, buff=0.1).move_to(chi)
        self.play(FadeIn(chi), Write(chi_t))
        self.wait(1.0)

        self.step("Resten")
        self.play(FadeOut(br2), FadeOut(br2_t))
        bah = seg(30, 52, GREEN, 0.55)
        bah_t = VGroup(T("Bahamas", 22, FG), M(r"52\,\%", size=40, color=FG)).arrange(DOWN, buff=0.1).move_to(bah)
        self.play(FadeIn(bah), Write(bah_t))
        calc = M(r"100 - 30 - 18 = 52", size=48, color=GREEN).shift(DOWN * 1.9)
        self.play(Write(calc))
        self.play(Create(box(calc, GREEN)))
        self.play(FadeIn(self.note("Svar D: 52 %", 30, GREEN), shift=UP * 0.2))
        self.wait(1.5)
