"""2019/20 opg. 4: gennemsnitsfart = samlet strækning / samlet tid (ikke gennemsnit af farterne)."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from theme import *  # noqa: E402,F401


class P2019_4(AbelScene):
    pid = "2019-4"

    def construct(self):
        ax = Axes(x_range=[0, 1.75, 0.25], y_range=[0, 100, 15], x_length=6.4, y_length=5.0,
                  axis_config={"color": BORDER, "include_tip": False}).shift(LEFT * 3.0 + DOWN * 0.4)
        xl = VGroup(*[M(s, size=24, color=MUTED).next_to(ax.c2p(v, 0), DOWN) for v, s in ((0.5, "0{,}5"), (1, "1"), (1.5, "1{,}5"))])
        yl = VGroup(*[M(str(v), size=24, color=MUTED).next_to(ax.c2p(0, v), LEFT) for v in (45, 90)])
        tx = T("tid (timer)", 20, MUTED).next_to(ax.x_axis, DOWN, buff=0.55).align_to(ax.x_axis, RIGHT)
        ty = T("km", 20, MUTED).next_to(ax.y_axis, UP, buff=0.15)

        self.step("Første halvdel")
        self.play(Create(ax), FadeIn(xl), FadeIn(yl), FadeIn(tx), FadeIn(ty))
        p0, p1, p2 = ax.c2p(0, 0), ax.c2p(1, 45), ax.c2p(1.5, 90)
        seg1 = Line(p0, p1, color=BLUE, stroke_width=6)
        self.play(Create(seg1), run_time=1.5)
        g1 = VGroup(DashedLine(ax.c2p(1, 0), p1, color=MUTED), DashedLine(ax.c2p(0, 45), p1, color=MUTED))
        self.play(Create(g1))
        l1 = M(r"45\ \text{km/t i } 1\ \text{t}", size=30, color=BLUE).next_to(seg1.get_center(), DR, buff=0.1)
        self.play(FadeIn(l1))
        self.wait(1.0)

        self.step("Anden halvdel")
        seg2 = Line(p1, p2, color=CYAN, stroke_width=6)
        self.play(Create(seg2), run_time=0.75)
        g2 = VGroup(DashedLine(ax.c2p(1.5, 0), p2, color=MUTED), DashedLine(ax.c2p(0, 90), p2, color=MUTED))
        self.play(Create(g2))
        l2 = M(r"90\ \text{km/t i } \tfrac12\ \text{t}", size=32, color=CYAN).next_to(seg2.get_center(), RIGHT, buff=0.25)
        self.play(FadeIn(l2))
        side = VGroup(
            T("Samlet:", 26, SUBTLE),
            M(r"90\ \text{km på } 1{,}5\ \text{t}", size=36),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.2)
        side.move_to([1.6, 1.9, 0], aligned_edge=UL)
        self.play(FadeIn(side))
        self.wait(1.0)

        self.step("Gennemsnitsfart")
        avg = DashedLine(p0, p2, color=GREEN, stroke_width=5, dash_length=0.15)
        self.play(Create(avg))
        r1 = M(r"\frac{90}{1{,}5} = 60\ \text{km/t}", size=44, color=GREEN).next_to(side, DOWN, buff=0.5).align_to(side, LEFT)
        self.play(Write(r1))
        trap = Line(p0, ax.c2p(90 / 67.5, 90), color=RED, stroke_width=3)
        trap_l = M(r"\tfrac{45 + 90}{2} = 67{,}5", size=30, color=RED).next_to(r1, DOWN, buff=0.55).align_to(r1, LEFT)
        why = VGroup(T("forkert: de to farter", 20, RED), T("varer ikke lige længe", 20, RED)).arrange(DOWN, aligned_edge=LEFT, buff=0.08)
        why.next_to(trap_l, DOWN, buff=0.15).align_to(trap_l, LEFT)
        self.play(Create(trap), FadeIn(trap_l), FadeIn(why))
        self.play(Create(box(r1, GREEN)))
        self.play(FadeIn(T("Svar A: 60 km/t", 30, GREEN).next_to(why, DOWN, buff=0.45).align_to(r1, LEFT), shift=UP * 0.2))
        self.wait(1.5)
