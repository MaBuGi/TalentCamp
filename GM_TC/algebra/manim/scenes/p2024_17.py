"""2024/25 opg. 17: heltalsdel ⌊x⌋ – et modeksempel til hver af A–D."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from theme import *  # noqa: E402,F401


class P2024_17(AbelScene):
    pid = "2024-17"

    def construct(self):
        ax = Axes(x_range=[-2.5, 3, 1], y_range=[-3, 3, 1], x_length=6.0, y_length=5.4,
                  axis_config={"color": BORDER, "include_tip": False}).shift(LEFT * 3.4 + DOWN * 0.35)
        nums = VGroup(*[M(str(v), size=22, color=MUTED).next_to(ax.c2p(v, 0), DOWN, buff=0.12) for v in (-2, -1, 1, 2)])
        ynums = VGroup(*[M(str(v), size=22, color=MUTED).next_to(ax.c2p(0, v), LEFT, buff=0.12) for v in (-2, -1, 1, 2)])
        stairs = VGroup()
        for k in range(-3, 3):
            x0, x1 = max(k, -2.5), min(k + 1, 3)
            stairs.add(Line(ax.c2p(x0, k), ax.c2p(x1, k), color=BLUE, stroke_width=5))
            if k >= -2:
                stairs.add(Dot(ax.c2p(k, k), color=BLUE, radius=0.07))
            if k + 1 <= 2:
                stairs.add(Circle(radius=0.07, color=BLUE, stroke_width=3, fill_color=BG, fill_opacity=1).move_to(ax.c2p(k + 1, k)))
        title = M(r"y = \lfloor x \rfloor", size=40, color=BLUE).next_to(ax.c2p(-2.3, 2.3), RIGHT, buff=0)
        COLX = 0.3  # venstre kant af tekstkolonnen

        self.step("A og B")
        self.play(Create(ax), FadeIn(nums), FadeIn(ynums))
        self.play(Create(stairs), FadeIn(title), run_time=1.6)
        A = VGroup(
            M(r"\text{A: } \lfloor x \rfloor + \lfloor y \rfloor = \lfloor x + y \rfloor", size=34),
            M(r"x = y = \tfrac12:\quad 0 + 0 \ne \lfloor 1 \rfloor = 1", size=32, color=RED),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.2)
        A.move_to([COLX, 2.1, 0], aligned_edge=UL)
        p = VGroup(Dot(ax.c2p(0.5, 0), color=YELLOW), Dot(ax.c2p(1, 1), color=YELLOW))
        self.play(Write(A[0]))
        self.play(FadeIn(p), Write(A[1]))
        B = VGroup(
            M(r"\text{B: } \lfloor x \rfloor + \lfloor y \rfloor < \lfloor x + y \rfloor", size=34),
            M(r"x = y = 1:\quad 1 + 1 = \lfloor 2 \rfloor", size=32, color=RED),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.2).next_to(A, DOWN, buff=0.45).align_to(A, LEFT)
        self.play(Write(B))
        self.wait(1.0)

        self.step("C og D")
        self.play(FadeOut(p))
        C = VGroup(
            M(r"\text{C: } \lfloor x \rfloor \cdot \lfloor y \rfloor = \lfloor xy \rfloor", size=34),
            M(r"x = \tfrac12,\ y = 2:\quad 0 \cdot 2 \ne \lfloor 1 \rfloor", size=32, color=RED),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.2).next_to(B, DOWN, buff=0.45).align_to(A, LEFT)
        self.play(Write(C))
        D = VGroup(
            M(r"\text{D: } \lfloor x \rfloor \cdot \lfloor y \rfloor \le \lfloor xy \rfloor", size=34),
            M(r"x = y = -\tfrac32:\quad (-2)(-2) = 4 > 2 = \lfloor 2{,}25 \rfloor", size=29, color=RED),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.2).next_to(C, DOWN, buff=0.45).align_to(A, LEFT)
        q = Dot(ax.c2p(-1.5, -2), color=YELLOW, radius=0.1)
        ql = M(r"\lfloor -1{,}5 \rfloor = -2", size=28, color=YELLOW).next_to(q, DOWN, buff=0.3)
        self.play(FadeIn(q), FadeIn(ql))
        self.play(Write(D))
        self.wait(1.0)

        self.step("Konklusion")
        marks = VGroup(*[M(r"\times", size=44, color=RED).next_to(g[0], LEFT, buff=0.2) for g in (A, B, C, D)])
        self.play(LaggedStart(*[FadeIn(m, scale=1.4) for m in marks], lag_ratio=0.2))
        res = T("Svar E: ingen af A–D gælder altid", 28, GREEN).next_to(D, DOWN, buff=0.45).align_to(A, LEFT)
        self.play(FadeIn(res, shift=UP * 0.2))
        self.play(Create(box(res, GREEN)))
        self.wait(1.5)
