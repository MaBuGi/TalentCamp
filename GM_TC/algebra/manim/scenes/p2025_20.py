"""2025/26 opg. 20: 3²⁰ + 4⁹ + 6¹⁰ = (3¹⁰ + 2⁹)², så p = q."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from theme import *  # noqa: E402,F401


class P2025_20(AbelScene):
    pid = "2025-20"

    def construct(self):
        self.step("Potenser af 2 og 3")
        e0 = M(r"3^{20}", r"+", r"4^{9}", r"+", r"6^{10}", r"= pq", size=58).to_edge(UP, buff=1.0)
        self.play(Write(e0))
        rows = VGroup(
            M(r"3^{20} = (3^{10})^2", size=44, color=BLUE),
            M(r"4^9 = 2^{18} = (2^9)^2", size=44, color=PURPLE),
            M(r"6^{10} = 2^{10} \cdot 3^{10} = 2 \cdot 3^{10} \cdot 2^9", size=44, color=YELLOW),
        ).arrange(DOWN, buff=0.35, aligned_edge=LEFT).next_to(e0, DOWN, buff=0.6)
        for r, part in zip(rows, (e0[0], e0[2], e0[4])):
            self.play(Indicate(part, color=r.get_color()), Write(r), run_time=0.9)
        self.wait(1.0)

        self.step("Kvadratsætning")
        self.play(FadeOut(rows))
        a, b = 3.0, 1.1
        o = LEFT * 5.8 + UP * 1.0
        big = Square(a, stroke_width=2, stroke_color=FG, fill_color=BLUE, fill_opacity=0.45).move_to(o, aligned_edge=UL)
        r1 = Rectangle(width=b, height=a, stroke_width=2, stroke_color=FG, fill_color=YELLOW, fill_opacity=0.4).next_to(big, RIGHT, buff=0)
        r2 = Rectangle(width=a, height=b, stroke_width=2, stroke_color=FG, fill_color=YELLOW, fill_opacity=0.4).next_to(big, DOWN, buff=0)
        sm = Square(b, stroke_width=2, stroke_color=FG, fill_color=PURPLE, fill_opacity=0.5).next_to(r2, RIGHT, buff=0)
        labs = VGroup(
            M(r"(3^{10})^2", size=34).move_to(big),
            M(r"3^{10}2^9", size=24).move_to(r1).rotate(PI / 2),
            M(r"3^{10}2^9", size=24).move_to(r2),
            M(r"(2^9)^2", size=22).move_to(sm),
        )
        sides = VGroup(
            M(r"3^{10}", size=28, color=BLUE).next_to(big, UP, buff=0.1),
            M(r"2^9", size=28, color=PURPLE).next_to(r1, UP, buff=0.1),
        )
        self.play(FadeIn(big), FadeIn(labs[0]), FadeIn(sides[0]))
        self.play(FadeIn(r1), FadeIn(r2), FadeIn(labs[1:3]), FadeIn(sides[1]))
        self.play(FadeIn(sm), FadeIn(labs[3]))
        eq = VGroup(
            M(r"(3^{10})^2 + 2\cdot 3^{10}\cdot 2^9 + (2^9)^2", size=38),
            M(r"= (3^{10} + 2^9)^2", size=50, color=GREEN),
            M(r"\Rightarrow\ p = q = 3^{10} + 2^9", size=42, color=GREEN),
        ).arrange(DOWN, buff=0.35, aligned_edge=LEFT).move_to(RIGHT * 2.6 + DOWN * 0.3)
        for e in eq:
            self.play(Write(e), run_time=0.9)
        self.wait(1.0)

        self.step("Sidste ciffer i p")
        self.play(*[FadeOut(m) for m in (big, r1, r2, sm, labs, sides, eq[0], eq[1])], eq[2].animate.next_to(e0, DOWN, buff=0.45))
        cyc = VGroup(*[M(f"3^{k}", r"\to", str(3 ** k % 10), size=40) for k in (1, 2, 3, 4)]).arrange(RIGHT, buff=0.7)
        cyc.next_to(eq[2], DOWN, buff=0.6)
        self.play(LaggedStart(*[FadeIn(c) for c in cyc], lag_ratio=0.2))
        c1 = M(r"3^{10} = 3^8 \cdot 3^2:\ \text{ender på } 1 \cdot 9 = 9", size=38, color=BLUE)
        c2 = M(r"2^9 = 512:\ \text{ender på } 2", size=38, color=PURPLE)
        c3 = M(r"p\ \text{ender på } 9 + 2 = 11 \to 1", size=42, color=GREEN)
        cc = VGroup(c1, c2, c3).arrange(DOWN, buff=0.3).next_to(cyc, DOWN, buff=0.5)
        for c in cc:
            self.play(Write(c), run_time=0.9)
        self.wait(1.0)

        self.step("p + q")
        self.play(FadeOut(cyc), FadeOut(c1), FadeOut(c2), c3.animate.next_to(eq[2], DOWN, buff=0.5))
        res = M(r"p + q = 2p\ \text{ender på } 2 \cdot 1 = 2", size=52, color=GREEN).next_to(c3, DOWN, buff=0.6)
        self.play(Write(res))
        self.play(Create(box(res, GREEN)))
        self.play(FadeIn(T("Svar A: 2", 30, GREEN).next_to(res, DOWN, buff=0.5), shift=UP * 0.2))
        self.wait(1.5)
