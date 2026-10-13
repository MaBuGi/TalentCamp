"""2006/07 opg. 17: Anna og Berit – tidslinje med søjler for "dengang", "nu" og "om 6 år"."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from theme import *  # noqa: E402,F401

U = 0.085  # højde pr. leveår


def bar(age, color, label):
    r = Rectangle(width=0.8, height=age * U, stroke_width=0, fill_color=color, fill_opacity=0.8)
    lab = M(label, size=34, color=color)
    return VGroup(r, lab)


class P2006_17(AbelScene):
    pid = "2006-17"

    def construct(self):
        base = Line(LEFT * 6.3, RIGHT * 6.3, color=BORDER).shift(DOWN * 2.4)
        xs = {"Dengang": -4.2, "Nu": 0.0, "Om 6 år": 4.2}
        heads = VGroup(*[T(k, 24, SUBTLE).move_to([x, -2.85, 0]) for k, x in xs.items()])
        legend = VGroup(T("Anna", 22, PURPLE), T("Berit", 22, CYAN)).arrange(RIGHT, buff=0.5).to_corner(UL, buff=0.4).shift(DOWN * 0.5)

        def pair(x, a_age, a_lab, b_age, b_lab):
            A = bar(a_age, PURPLE, a_lab)
            B = bar(b_age, CYAN, b_lab)
            A[0].move_to([x - 0.5, -2.4 + a_age * U / 2, 0])
            B[0].move_to([x + 0.5, -2.4 + b_age * U / 2, 0])
            A[1].next_to(A[0], UP, buff=0.12)
            B[1].next_to(B[0], UP, buff=0.12)
            return A, B

        self.step("Hvor lang tid er gået?")
        self.play(Create(base), FadeIn(heads), FadeIn(legend))
        A0, B0 = pair(xs["Dengang"], 24, r"4b", 6, r"b")
        self.play(GrowFromEdge(A0[0], DOWN), GrowFromEdge(B0[0], DOWN), FadeIn(A0[1]), FadeIn(B0[1]))
        A1, B1 = pair(xs["Nu"], 30, r"5b", 12, r"2b")
        self.play(GrowFromEdge(A1[0], DOWN), FadeIn(A1[1]))
        gap = Arrow([xs["Dengang"] + 0.9, 1.0, 0], [xs["Nu"] - 0.9, 1.0, 0], color=YELLOW, buff=0)
        gapl = M(r"5b - 4b = b\ \text{år}", size=34, color=YELLOW).next_to(gap, UP, buff=0.1)
        self.play(GrowArrow(gap), Write(gapl))
        self.play(GrowFromEdge(B1[0], DOWN), FadeIn(B1[1]))
        nb = M(r"b + b = 2b", size=30, color=CYAN).next_to(B1[1], RIGHT, buff=0.2)
        self.play(FadeIn(nb))
        self.wait(1.0)

        self.step("Om 6 år")
        A2, B2 = pair(xs["Om 6 år"], 36, r"5b+6", 18, r"2b+6")
        self.play(GrowFromEdge(A2[0], DOWN), GrowFromEdge(B2[0], DOWN), FadeIn(A2[1]), FadeIn(B2[1]))
        eq = VGroup(
            M(r"5b + 6 = 2(2b + 6)", size=42),
            M(r"5b + 6 = 4b + 12", size=42),
            M(r"b = 6", size=48, color=GREEN),
        ).arrange(DOWN, buff=0.22).to_edge(RIGHT, buff=0.5).shift(UP * 2.0)
        self.play(FadeOut(gap), FadeOut(gapl), FadeOut(nb))
        for e in eq:
            self.play(Write(e), run_time=0.8)
        self.wait(1.0)

        self.step("Sæt ind")
        nums = {A0: "24", B0: "6", A1: "30", B1: "12", A2: "36", B2: "18"}
        anims = []
        for m, s in nums.items():
            new = M(s, size=36, color=m[1].get_color()).move_to(m[1])
            anims.append(Transform(m[1], new))
        self.play(*anims)
        self.play(FadeOut(eq))
        res = M(r"30 + 12 = 42", size=56, color=GREEN).to_edge(RIGHT, buff=0.7).shift(UP * 2.0)
        self.play(Indicate(A1[0], color=GREEN), Indicate(B1[0], color=GREEN), Write(res))
        self.play(Create(box(res, GREEN)))
        self.play(FadeIn(T("Svar D: 42", 28, GREEN).next_to(res, DOWN, buff=0.35), shift=UP * 0.2))
        self.wait(1.5)
