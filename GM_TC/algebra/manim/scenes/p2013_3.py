"""2013/14 opg. 3: cyklisk ligningssystem – læg alle tre ligninger sammen."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from theme import *  # noqa: E402,F401

COL = {"x": BLUE, "y": PURPLE, "z": ORANGE}


def row(lhs1, lhs2, rhs):
    """Én ligning som tre kolonner: led1, led2, = højreside."""
    a = M(lhs1, size=50).set_color_by_tex_to_color_map(COL)
    b = M(lhs2, size=50).set_color_by_tex_to_color_map(COL)
    r = M(rhs, size=50)
    return a, b, r


class P2013_3(AbelScene):
    pid = "2013-3"

    def construct(self):
        self.step("Læg sammen")
        rows = [row(r"3x", r"+\,y", r"=\ 1"), row(r"3y", r"+\,z", r"=\ \tfrac12"), row(r"3z", r"+\,x", r"=\ -\tfrac12")]
        xs = [-2.4, -0.9, 1.1]
        grid = VGroup()
        for i, (a, b, r) in enumerate(rows):
            y = 1.9 - i * 1.05
            a.move_to([xs[0], y, 0]); b.move_to([xs[1], y, 0]); r.move_to([xs[2], y, 0]).align_to([xs[2] - 0.5, 0, 0], LEFT)
            grid.add(VGroup(a, b, r))
        for g in grid:
            self.play(Write(g), run_time=0.7)
        rule = Line(LEFT * 3.4, RIGHT * 2.8, color=BORDER).shift(DOWN * 1.15)
        plus = M("+", size=50, color=MUTED).next_to(grid[2], LEFT, buff=0.5)
        self.play(Create(rule), FadeIn(plus))
        tally = VGroup(
            M(r"x:\ 3 + 1 = 4", size=34, color=BLUE),
            M(r"y:\ 1 + 3 = 4", size=34, color=PURPLE),
            M(r"z:\ 1 + 3 = 4", size=34, color=ORANGE),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.3).to_edge(RIGHT, buff=0.8).shift(UP * 0.9)
        for var, t in zip("xyz", tally):
            hits = [m for g in grid for m in g[:2] if var in m.get_tex_string()]
            self.play(*[Indicate(h, color=COL[var], scale_factor=1.15) for h in hits], FadeIn(t, shift=LEFT * 0.2), run_time=0.9)
        lhs = M(r"4x + 4y + 4z", size=54).set_color_by_tex_to_color_map(COL).move_to([-1.6, -1.9, 0])
        self.play(Write(lhs))
        self.wait(1.0)

        self.step("Højresiden")
        rhs_parts = [g[2] for g in grid]
        self.play(*[r.animate.set_color(GREEN) for r in rhs_parts])
        rsum = M(r"=\ 1 + \tfrac12 - \tfrac12 = 1", size=54, color=GREEN).next_to(lhs, RIGHT, buff=0.3)
        self.play(TransformMatchingShapes(VGroup(*[r.copy() for r in rhs_parts]), rsum))
        self.wait(1.2)

        self.step("Divider med 4")
        self.play(FadeOut(grid), FadeOut(rule), FadeOut(plus), FadeOut(tally))
        eq = VGroup(lhs, rsum)
        self.play(eq.animate.move_to(UP * 1.2))
        f1 = M(r"4(x + y + z) = 1", size=58).next_to(eq, DOWN, buff=0.6)
        f2 = M(r"x + y + z = \tfrac14", size=70, color=GREEN).next_to(f1, DOWN, buff=0.6)
        self.play(Write(f1))
        self.play(TransformMatchingShapes(f1.copy(), f2))
        self.play(Create(box(f2, GREEN)))
        self.play(FadeIn(self.note("Svar D: 1/4", 30, GREEN), shift=UP * 0.2))
        self.wait(1.5)
