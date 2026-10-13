"""2022/23 opg. 9: 3^a = 4^b = 6  ⇒  3 →(a−1)→ 2 →(2b−1)→ 3, så (a−1)(2b−1) = 1."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from theme import *  # noqa: E402,F401


def node(tex, color):
    c = Circle(radius=0.55, color=color, stroke_width=4, fill_color=SURFACE, fill_opacity=1)
    return VGroup(c, M(tex, size=52, color=color).move_to(c))


class P2022_9(AbelScene):
    pid = "2022-9"

    def construct(self):
        given = M(r"3^a = 4^b = 6", size=54).to_edge(UP, buff=1.0)
        n3 = node("3", BLUE).move_to(LEFT * 4.2 + DOWN * 0.2)
        n2 = node("2", PURPLE).move_to(DOWN * 0.2)
        n3b = node("3", BLUE).move_to(RIGHT * 4.2 + DOWN * 0.2)

        self.step("Find 3^(a−1)")
        self.play(Write(given))
        e1 = M(r"3^{a-1} = \frac{3^a}{3} = \frac63 = 2", size=42, color=BLUE).next_to(given, DOWN, buff=0.45)
        self.play(Write(e1))
        a1 = Arrow(n3.get_right(), n2.get_left(), color=BLUE, buff=0.1)
        a1l = M(r"\text{opløft i } a-1", size=30, color=BLUE).next_to(a1, DOWN, buff=0.15)
        self.play(FadeIn(n3), GrowArrow(a1), FadeIn(a1l), FadeIn(n2))
        self.wait(1.0)

        self.step("Find 2^(2b−1)")
        e2 = M(r"4^b = 2^{2b} = 6 \ \Rightarrow\ 2^{2b-1} = \frac62 = 3", size=42, color=PURPLE).move_to(e1)
        self.play(FadeOut(e1, shift=UP * 0.2), FadeIn(e2, shift=UP * 0.2))
        a2 = Arrow(n2.get_right(), n3b.get_left(), color=PURPLE, buff=0.1)
        a2l = M(r"\text{opløft i } 2b-1", size=30, color=PURPLE).next_to(a2, DOWN, buff=0.15)
        self.play(GrowArrow(a2), FadeIn(a2l), FadeIn(n3b))
        self.wait(1.0)

        self.step("Sæt sammen")
        loop = CurvedArrow(n3.get_bottom() + DOWN * 0.05, n3b.get_bottom() + DOWN * 0.05, angle=PI / 2.6, color=YELLOW)
        loopl = M(r"3^{(a-1)(2b-1)} = (3^{a-1})^{2b-1} = 2^{2b-1} = 3", size=36, color=YELLOW).next_to(loop, DOWN, buff=0.2)
        self.play(Create(loop), Write(loopl))
        res = M(r"(a-1)(2b-1) = 1", size=54, color=GREEN).move_to(e2)
        self.play(FadeOut(e2), Write(res))
        self.play(Create(box(res, GREEN)))
        self.play(FadeIn(self.note("Svar A: 1", 30, GREEN).to_edge(RIGHT, buff=0.8).to_edge(DOWN, buff=0.4), shift=UP * 0.2))
        self.wait(1.5)
