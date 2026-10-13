"""Fælles manim-tema for Abel Arcade (Tokyo Night, samme palet som TC/motivation_slides/motivation.py).

Hver pilotscene arver AbelScene og kalder self.step("Overskrift") én gang pr. trin på siden.
render.py gemmer hvert trin som sit eget klip (manim --save_sections).
"""

from manim import *

BG = "#1a1b26"
SURFACE = "#24283b"
BORDER = "#414868"
MUTED = "#565f89"
SUBTLE = "#a9b1d6"
FG = "#c0caf5"
BLUE = "#7aa2f7"
CYAN = "#7dcfff"
PURPLE = "#bb9af7"
GREEN = "#9ece6a"
ORANGE = "#ff9e64"
YELLOW = "#e0af68"
RED = "#f7768e"

SANS = "Adwaita Sans"
MONO = "JetBrainsMono Nerd Font"

config.background_color = BG
MathTex.set_default(color=FG)
Tex.set_default(color=FG)
Integer.set_default(color=FG)
DecimalNumber.set_default(color=FG)


def T(s, size=30, color=FG, weight=NORMAL, font=SANS, **kw):
    return Text(s, font=font, font_size=size, color=color, weight=weight, **kw)


def M(*parts, size=44, color=FG, **kw):
    return MathTex(*parts, font_size=size, color=color, **kw)


def season(pid):
    y, nr = pid.split("-")
    y = int(y)
    return f"{y}/{str(y + 1)[2:]} · opg. {nr}"


class AbelScene(Scene):
    """Kicker øverst til venstre, trinlabel øverst til højre."""

    pid = "0000-0"

    def setup(self):
        self.kicker = T("ABEL " + season(self.pid).upper(), 18, MUTED, font=MONO).to_corner(UL, buff=0.4)
        self.add(self.kicker)
        self.step_label = None
        self.step_n = 0

    def step(self, title):
        """Start et nyt klip. Første animation i klippet viser trinets titel."""
        self.next_section(title)
        self.step_n += 1
        lab = T(f"{self.step_n} · {title}", 20, BLUE, font=MONO).to_corner(UR, buff=0.4)
        if self.step_label is None:
            self.play(FadeIn(lab, shift=DOWN * 0.15), run_time=0.4)
        else:
            self.play(ReplacementTransform(self.step_label, lab), run_time=0.4)
        self.step_label = lab

    def clear_body(self, *keep, run_time=0.5):
        """Fjern alt undtagen kicker, trinlabel og det der gives som keep."""
        fixed = {self.kicker, self.step_label, *keep}
        gone = [m for m in self.mobjects if m not in fixed]
        if gone:
            self.play(*[FadeOut(m) for m in gone], run_time=run_time)

    def note(self, s, size=26, color=SUBTLE):
        """Forklarende linje nederst i billedet."""
        return T(s, size, color).to_edge(DOWN, buff=0.55)


def box(mob, color=YELLOW, buff=0.12):
    return SurroundingRectangle(mob, color=color, buff=buff, corner_radius=0.08, stroke_width=3)
