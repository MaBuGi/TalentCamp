"""2005/06 opg. 13: A = 6B, hvor B er A uden det midterste ciffer."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from theme import *  # noqa: E402,F401


def digit(tex, color):
    sq = RoundedRectangle(width=1.1, height=1.3, corner_radius=0.12, stroke_color=color, stroke_width=3,
                          fill_color=SURFACE, fill_opacity=1)
    return VGroup(sq, M(tex, size=56, color=color).move_to(sq))


class P2005_13(AbelScene):
    pid = "2005-13"

    def construct(self):
        self.step("Skriv cifrene op")
        A = VGroup(digit("x", BLUE), digit("y", PURPLE), digit("z", ORANGE)).arrange(RIGHT, buff=0.15).shift(LEFT * 3 + UP * 1.3)
        lA = M("A =", size=50).next_to(A, LEFT, buff=0.3)
        self.play(FadeIn(lA), LaggedStart(*[FadeIn(d, shift=DOWN * 0.2) for d in A], lag_ratio=0.2))
        vA = M(r"= 100x + 10y + z", size=44).next_to(A, RIGHT, buff=0.35)
        self.play(Write(vA))
        B = VGroup(A[0].copy(), A[2].copy())
        lB = M("B =", size=50)
        self.play(B.animate.arrange(RIGHT, buff=0.15).shift(DOWN * 1.6).align_to(A, LEFT))
        lB.next_to(B, LEFT, buff=0.3)
        gone = Cross(A[1], stroke_color=RED, stroke_width=5)
        self.play(FadeIn(lB), Create(gone))
        vB = M(r"= 10x + z", size=44).next_to(B, RIGHT, buff=0.35)
        self.play(Write(vB))
        self.wait(1.0)

        self.step("Opstil ligningen")
        self.play(*[FadeOut(m) for m in (A, lA, vA, B, lB, vB, gone)])
        lines = [
            r"100x + 10y + z = 6(10x + z)",
            r"100x + 10y + z = 60x + 6z",
            r"40x + 10y = 5z",
            r"8x + 2y = z",
        ]
        eqs = VGroup(*[M(s, size=48) for s in lines]).arrange(DOWN, buff=0.35).shift(UP * 0.4)
        eqs[-1].set_color(YELLOW)
        self.play(Write(eqs[0]))
        for i in range(1, 4):
            self.play(TransformMatchingShapes(eqs[i - 1].copy(), eqs[i]), run_time=0.9)
        hl = box(eqs[-1])
        self.play(Create(hl))
        self.wait(1.0)

        self.step("Cifrene er højst 9")
        self.play(FadeOut(eqs[:3]), FadeOut(hl), eqs[3].animate.to_edge(UP, buff=1.0))
        reason = VGroup(
            M(r"z \le 9 \ \Rightarrow\ 8x \le 9 \ \Rightarrow\ x = 1", size=40),
            M(r"8 + 2y \le 9 \ \Rightarrow\ y = 0 \ \Rightarrow\ z = 8", size=40),
        ).arrange(DOWN, buff=0.3).next_to(eqs[3], DOWN, buff=0.5)
        self.play(Write(reason[0]))
        self.play(Write(reason[1]))
        check = M(r"A = 108 = 6 \cdot 18 = 6B", size=46, color=GREEN).next_to(reason, DOWN, buff=0.5)
        ts = M(r"1 + 0 + 8 = 9", size=50, color=GREEN).next_to(check, DOWN, buff=0.35)
        self.play(Write(check))
        self.play(Write(ts))
        self.play(Create(box(ts, GREEN)))
        self.play(FadeIn(self.note("Svar B: tværsum 9", 28, GREEN).to_edge(RIGHT, buff=0.8), shift=UP * 0.2))
        self.wait(1.5)
