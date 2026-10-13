/* Abel runde 1 · Algebra (2005/06–2025/26), oversat til dansk.
   Kilde: abelkonkurransen.pdf s. 2–23 og abelkonkurransen_løsninger.pdf s. 2–19 (se ../opgaver.pdf og ../loesninger.pdf).
   q(id, delemner, opgavetekst, [A,B,C,D,E], svar, officiel løsning, hint)
   id = 'ÅÅÅÅ-nr' hvor ÅÅÅÅ er sæsonens første år, fx '2007-1' = 2007/2008 opgave 1.
   Brug \( \) til matematik, \lt og \gt i stedet for < og >. */
(function () {
  const T = String.raw;
  const P = [];
  const q = (id, topics, text, opts, ans, sol, hint) => P.push({ id, topics, text, opts, ans, sol, hint: hint || null });

  /* ---------------- 2005/2006 ---------------- */
  q('2005-1', ['broek'], T`Fyrre procent af et tal er 144. Tallet er`,
    [T`\(720\)`, T`\(360\)`, T`\(288\)`, T`\(240\)`, T`\(320\)`], 'B',
    T`Én procent af tallet er \(144/40 = 3{,}6\), så hundrede procent er \(360\).`,
    T`Find først 1 % af tallet.`);
  q('2005-3', ['potens'], T`\(\sqrt{9^3}\) er lig med`,
    [T`\(3\)`, T`\(9\)`, T`\(18\)`, T`\(27\)`, T`ingen af disse tal`], 'D',
    T`\(\sqrt{9^3} = (\sqrt 9)^3 = 3^3 = 27\).`,
    T`Tag kvadratroden først, og opløft bagefter.`);
  q('2005-5', ['identitet', 'broek'], T`Hvis \(x = \frac ab\), \(a \ne b\) og \(b \ne 0\), så er \(\dfrac{a+b}{a-b}\) lig med`,
    [T`\(\dfrac{x}{x+1}\)`, T`\(\dfrac{x+1}{x-1}\)`, T`\(1\)`, T`\(x - \dfrac1x\)`, T`\(x + \dfrac1x\)`], 'B',
    T`Divider tæller og nævner med \(b\): \(\dfrac{a+b}{a-b} = \dfrac{a/b + 1}{a/b - 1} = \dfrac{x+1}{x-1}\).`,
    T`Divider tæller og nævner med \(b\).`);
  q('2005-6', ['broek', 'ligning'], T`Af 300 elever på en skole er 144 drenge. 45 % af eleverne i første klasse og 50 % af eleverne på de andre klassetrin er drenge. Antallet af elever i første klasse er`,
    [T`\(100\)`, T`\(95\)`, T`\(110\)`, T`\(80\)`, T`\(120\)`], 'E',
    T`Lad \(x\) være antallet af elever i første klasse. Så er \(0{,}45x + 0{,}5(300 - x) = 144\), dvs. \(150 - 0{,}05x = 144\), så \(x = 120\).`,
    T`Kald antallet i første klasse \(x\), og tæl drengene på to måder.`);
  q('2005-8', ['ligning', 'identitet'], T`Vi har tre positive tal. De tre mulige produkter af to af dem er 10, 15 og 24. Det mellemste tal er`,
    [T`\(2{,}5\)`, T`\(3\)`, T`\(4\)`, T`\(4{,}2\)`, T`ingen af disse tal`], 'C',
    T`Kald tallene \(x \lt y \lt z\). Så er \(xy = 10\), \(xz = 15\) og \(yz = 24\), og \(y^2 = \dfrac{(xy)(yz)}{xz} = \dfrac{10 \cdot 24}{15} = 16\), så \(y = 4\).`,
    T`Gang de to produkter, der indeholder det mellemste tal, og divider med det tredje.`);
  q('2005-10', ['tekst', 'ligning'], T`En formiddag i børnehaven var der fem gange så mange børn ude som inde. Efter frokost kom tre børn mere ud, og så var der otte gange så mange børn ude som inde. Antallet af børn i børnehaven den dag var`,
    [T`\(6\)`, T`\(18\)`, T`\(36\)`, T`\(54\)`, T`\(72\)`], 'D',
    T`Før frokost var \(5x\) børn ude og \(x\) inde. Efter frokost var \(5x + 3\) ude og \(x - 3\) inde, så \(5x + 3 = 8(x - 3)\), dvs. \(x = 9\). I alt var der \(x + 5x = 54\) børn.`,
    T`Lad \(x\) være antallet af børn indenfor før frokost.`);
  q('2005-12', ['foelge'], T`Hans deltager i en hamburger-spisekonkurrence. Den første burger tager 1 minut. Den anden tager 2 minutter, den tredje 4, og sådan bliver tiderne ved med at fordobles. Antallet af burgere, han kan nå at spise i løbet af de 4 timer konkurrencen varer, er`,
    [T`færre end 8`, T`\(8\)`, T`\(9\)`, T`\(10\)`, T`flere end 10`], 'A',
    T`7 burgere tager \(1 + 2 + 4 + 8 + 16 + 32 + 64 = 127\) minutter, hvilket han når inden for de 240 minutter. 8 burgere ville tage \(127 + 128 = 255\) minutter.`,
    T`\(1 + 2 + 4 + \dots + 2^{n-1} = 2^n - 1\).`);
  q('2005-13', ['cifre', 'ligning'], T`\(A\) er et trecifret tal. Hvis vi fjerner det midterste ciffer i \(A\), får vi det tocifrede tal \(B\). Hvis \(A = 6 \cdot B\), så er tværsummen af \(A\)`,
    [T`\(3\)`, T`\(9\)`, T`\(12\)`, T`\(18\)`, T`\(21\)`], 'B',
    T`Skriv \(A = 100x + 10y + z\) med cifre \(x, y, z\), \(x \ge 1\). Så er \(B = 10x + z\), og \(100x + 10y + z = 6(10x + z)\) giver \(40x + 10y = 5z\), dvs. \(8x + 2y = z\). Da \(z \le 9\), er \(x = 1\) og \(y = 0\), så \(z = 8\). Altså \(A = 108\), og tværsummen er 9.`,
    T`Skriv \(A = 100x + 10y + z\) og \(B = 10x + z\).`);
  q('2005-16', ['identitet'], T`Hvis \(a\) og \(b\) er to positive tal, så \((a+b)^4 = 2(a^2 - b^2)^2\) og \(a^2 + b^2 = 30\), så er \(ab\) lig med`,
    [T`\(5\)`, T`\(6\)`, T`\(8\)`, T`\(10\)`, T`\(15\)`], 'A',
    T`\(2(a^2 - b^2)^2 = 2(a-b)^2(a+b)^2\), så \((a+b)^4 = 2(a-b)^2(a+b)^2\) giver \((a+b)^2 = 2(a-b)^2\), dvs. \(a^2 + 2ab + b^2 = 2a^2 - 4ab + 2b^2\), altså \(a^2 + b^2 = 6ab\). Da \(a^2 + b^2 = 30\), er \(ab = 5\).`,
    T`Faktorisér \(a^2 - b^2\), og divider begge sider med \((a+b)^2\).`);
  q('2005-17', ['sammenlign', 'potens'], T`Det største af tallene \(\frac54\), \(\sqrt2\), \(\sqrt[4]5\), \(\dfrac{\sqrt[4]5 + \sqrt[4]4}{2}\) og \(\sqrt[5]5\) er`,
    [T`\(\dfrac54\)`, T`\(\sqrt2\)`, T`\(\sqrt[4]5\)`, T`\(\dfrac{\sqrt[4]5 + \sqrt[4]4}{2}\)`, T`\(\sqrt[5]5\)`], 'C',
    T`\(\frac54 \lt \sqrt2\), fordi \((5/4)^2 = 25/16 \lt 2\), og \(\sqrt2 \lt \sqrt[4]5\), fordi \((\sqrt2)^4 = 4 \lt 5\). Desuden er \(\sqrt[5]5 \lt \sqrt[4]5\), og gennemsnittet af \(\sqrt[4]5\) og \(\sqrt[4]4\) er også mindre end \(\sqrt[4]5\).`,
    T`Opløft tallene i samme potens, så rødderne forsvinder.`);

  /* ---------------- 2006/2007 ---------------- */
  q('2006-4', ['broek'], T`Lad \(a, b, c\) og \(d\) være positive tal. Hvis \(\frac ab = \frac25\) og \(\frac cd = \frac25\), så er \(\dfrac{a+c}{b+d}\) lig med`,
    [T`\(4/5\)`, T`\(3/5\)`, T`\(2/5\)`, T`\(1/5\)`, T`umuligt at afgøre`], 'C',
    T`\(a = \frac25 b\) og \(c = \frac25 d\), så \(\dfrac{a+c}{b+d} = \dfrac{\frac25(b+d)}{b+d} = \frac25\).`,
    T`Skriv \(a\) og \(c\) udtrykt ved \(b\) og \(d\).`);
  q('2006-7', ['identitet'], T`Hvis \(1/x = x + 2\), så er \(1/x^2\) lig med`,
    [T`\(x^2 + 5\)`, T`\(2x + 5\)`, T`\(x^2 + 2x + 4\)`, T`\(2x + 1\)`, T`\(x + 3\)`], 'B',
    T`\(\dfrac1{x^2} = \dfrac1x \cdot \dfrac1x = \dfrac{x+2}{x} = 1 + \dfrac2x = 1 + 2(x + 2) = 2x + 5\).`,
    T`\(1/x^2 = (1/x)\cdot(1/x)\). Brug ligningen to gange.`);
  q('2006-10', ['tekst'], T`Lille Ola bruger 6 sekunder på at løbe med kørselsretningen på et rullebånd. Han bruger 24 sekunder på at løbe den samme strækning tilbage mod kørselsretningen. Hvis han står stille på rullebåndet, bruger han`,
    [T`12 s`, T`15 s`, T`16 s`, T`18 s`, T`20 s`], 'C',
    T`Lad \(s\) være båndets længde, \(v\) Olas fart og \(v_0\) båndets fart. Så er \(s = 6(v + v_0)\) og \(s = 24(v - v_0)\). Fire gange den første ligning minus den anden giver \(3s = 48v_0\), så når han står stille, bruger han \(s/v_0 = 16\) sekunder.`,
    T`Opstil to ligninger med Olas fart \(v\) og båndets fart \(v_0\).`);
  q('2006-17', ['tekst'], T`Anna er nu fem gange så gammel, som Berit var, da Anna var fire gange så gammel som Berit. Om seks år er Anna dobbelt så gammel som Berit. Summen af deres aldre nu er`,
    [T`\(14\)`, T`\(21\)`, T`\(35\)`, T`\(42\)`, T`\(49\)`], 'D',
    T`Lad \(b\) være Berits alder, da Anna var \(4b\) år. Anna er nu \(5b\) år, så der er gået \(b\) år, og Berit er nu \(2b\) år. Om 6 år er Anna \(5b + 6\) og Berit \(2b + 6\), og \(5b + 6 = 2(2b + 6)\) giver \(b = 6\). Summen er \(5b + 2b = 42\).`,
    T`Lad \(b\) være Berits alder dengang Anna var \(4b\).`);
  q('2006-19', ['identitet', 'ligning'], T`Ola skriver fire tal ned. Summen af hvert par af tallene er 2, 3, 4, 6, 7 og 8. Summen af kvadraterne af de fire tal er`,
    [T`\(29\)`, T`\(35\)`, T`\(141/4\)`, T`\(39\)`, T`umuligt at afgøre`], 'D',
    T`Hvert tal indgår i tre af de seks parsummer, så \(a + b + c + d = 30/3 = 10\). Kvadrerer vi parsummerne og lægger sammen, får vi \(178 = 3(a^2 + b^2 + c^2 + d^2) + 2(ab + ac + ad + bc + bd + cd) = 2(a^2 + b^2 + c^2 + d^2) + (a + b + c + d)^2\). Altså er \(a^2 + b^2 + c^2 + d^2 = (178 - 100)/2 = 39\).`,
    T`Hvor mange gange indgår hvert tal i de seks summer?`);

  /* ---------------- 2007/2008 ---------------- */
  q('2007-1', ['identitet'], T`\(1997 \cdot 2003 - 1993 \cdot 2007\) er lig med`,
    [T`\(0\)`, T`\(20\)`, T`\(40\)`, T`\(420\)`, T`\(840\)`], 'C',
    T`\(1997 \cdot 2003 - 1993 \cdot 2007 = (2000 - 3)(2000 + 3) - (2000 - 7)(2000 + 7) = 2000^2 - 3^2 - 2000^2 + 7^2 = 40\).`,
    T`Skriv hver faktor som \(2000\) plus eller minus noget.`);
  q('2007-4', ['potens'], T`Hvis \(x \gt 0\), så er \(\sqrt{\sqrt{\sqrt x}}\) lig med`,
    [T`\(x\sqrt x\)`, T`\(\sqrt[3]x\)`, T`\(\sqrt[8]x\)`, T`\(\sqrt[8]{x^3}\)`, T`\(\sqrt[8]{x^7}\)`], 'C',
    T`\(\sqrt{\sqrt{\sqrt x}} = \left(\left(x^{1/2}\right)^{1/2}\right)^{1/2} = x^{1/8} = \sqrt[8]x\).`,
    T`Skriv kvadratrod som potensen \(\tfrac12\).`);
  q('2007-5', ['cifre'], T`Hvilket af disse tal er ikke et heltal? (\(11! = 1 \cdot 2 \cdot 3 \cdot 4 \cdot 5 \cdot 6 \cdot 7 \cdot 8 \cdot 9 \cdot 10 \cdot 11\).)`,
    [T`\(11!/20\)`, T`\(11!/21\)`, T`\(11!/22\)`, T`\(11!/23\)`, T`\(11!/24\)`], 'D',
    T`\(20 = 4 \cdot 5\), \(21 = 3 \cdot 7\), \(22 = 2 \cdot 11\) og \(24 = 4 \cdot 6\) går alle op i \(11!\). Men 23 er et primtal, som ikke er en faktor i \(11!\).`,
    T`Hvilken af nævnerne er et primtal større end 11?`);
  q('2007-12', ['tekst'], T`Arne, Beate og Cecilie er til løbetræning og vil se, hvem der løber 100 meter hurtigst. I mål er Cecilie 2 m foran Beate og 4 m foran Arne. De løber igen, men denne gang starter Cecilie 4 m bag startlinjen og Beate 2 m bag startlinjen, mens Arne starter på startlinjen. Antag, at de løber med konstant fart, og at hver af dem løber lige hurtigt begge gange. Hvad bliver rækkefølgen i mål?`,
    [T`Arne – Beate – Cecilie`, T`Cecilie – Beate – Arne`, T`Alle tre kommer samtidig`, T`Beate og Cecilie kommer samtidig først`, T`Beate kommer først, og Arne og Cecilie samtidig efter`], 'B',
    T`Når Cecilie har løbet 100 m, har Arne løbet 96 m og Beate 98 m. I andet løb er de så alle tre 4 m fra målstregen. Cecilie løber de sidste 4 m hurtigst, Beate næsthurtigst og Arne langsomst.`,
    T`Hvor står de tre, når Cecilie har løbet 100 m i andet løb?`);
  q('2007-13', ['identitet'], T`Forskellen mellem arealerne af to cirkler er \(\pi\), og summen af radierne i de to cirkler er 2. Radius i den største cirkel er`,
    [T`\(9/8\)`, T`\(5/4\)`, T`\(11/8\)`, T`\(6/4\)`, T`\(13/8\)`], 'B',
    T`Lad \(R\) og \(r\) være radierne. Så er \(\pi = \pi R^2 - \pi r^2\), dvs. \(1 = R^2 - r^2 = (R + r)(R - r) = 2(R - r)\). Med \(r = 2 - R\) fås \(1 = 2(2R - 2)\), så \(R = 5/4\).`,
    T`\(R^2 - r^2 = (R + r)(R - r)\).`);
  q('2007-16', ['foelge', 'cifre'], T`\(a_1 = 1\), \(a_2 = 2\) og \(a_{n+1} = a_n a_{n-1}\) når \(n \ge 2\). Sidste ciffer i \(a_{2007}\) er`,
    [T`\(1\)`, T`\(2\)`, T`\(4\)`, T`\(6\)`, T`\(8\)`], 'B',
    T`Sidste ciffer i \(a_{n+1}\) er sidste ciffer i produktet af sidste ciffer i \(a_n\) og \(a_{n-1}\). Sidste cifre: \(1, 2, 2, 4, 8, 2, 6, 2, 2, 4, 8, 2, 6, \dots\), periodisk med periode 6 fra \(a_2\). Da \(2007 = 6 \cdot 334 + 3\), har \(a_{2007}\) samme sidste ciffer som \(a_3\), altså 2.`,
    T`Følg kun det sidste ciffer. Det bliver periodisk.`);
  q('2007-17', ['ligning', 'ulighed'], T`De positive tal \(a, b, c\) og \(d\) opfylder \(4a + b = 4c + d\) og \(2a - b = 4c - d\). Det største af tallene er`,
    [T`\(a\)`, T`\(b\)`, T`\(c\)`, T`\(d\)`, T`umuligt at afgøre`], 'D',
    T`Lægger vi ligningerne sammen, får vi \(6a = 8c\), så \(a \gt c\). Trækker vi den anden fra den første, får vi \(2a + 2b = 2d\), dvs. \(d = a + b\). Så \(d \gt a \gt c\) og \(d \gt b\).`,
    T`Læg ligningerne sammen, og træk dem fra hinanden.`);

  /* ---------------- 2008/2009 ---------------- */
  q('2008-1', ['tekst'], T`Per, Pål og Kari spiser pandekager. Pål spiser halvt så mange som Per, mens Kari spiser dobbelt så mange som Per. Tilsammen spiser de 21 pandekager. Hvor mange pandekager spiser Per og Pål tilsammen?`,
    [T`\(8\)`, T`\(9\)`, T`\(10\)`, T`\(12\)`, T`Opgaven har ingen løsning.`], 'B',
    T`Hvis Pål spiser \(x\) pandekager, spiser Per \(2x\) og Kari \(4x\), i alt \(7x = 21\), så \(x = 3\). Per og Pål spiser \(6 + 3 = 9\).`,
    T`Lad den, der spiser færrest, spise \(x\).`);
  q('2008-6', ['tekst'], T`Per starter 100 m bag Pål, og efter 50 sekunder er han 100 m foran Pål. Per cykler med farten 15 m/s. Hvor hurtigt cykler Pål?`,
    [T`7 m/s`, T`8 m/s`, T`9 m/s`, T`10 m/s`, T`11 m/s`], 'E',
    T`Per cykler \(15 \cdot 50 = 750\) m på de 50 sekunder. Pål cykler 200 m kortere, altså \(550\) m på 50 s, dvs. 11 m/s.`,
    T`Hvor meget længere end Pål kører Per?`);
  q('2008-7', ['ligning'], T`To bananer, tre pærer og fire æbler koster tilsammen 70 kroner. Tre bananer, én pære og seks æbler koster 63 kroner. Hvad skal du betale for én banan og to æbler?`,
    [T`13 kroner`, T`14 kroner`, T`15 kroner`, T`17 kroner`, T`Det kan ikke afgøres.`], 'D',
    T`Lad én banan og to æbler koste \(x\) kr, og én pære \(p\) kr. Så er \(2x + 3p = 70\) og \(3x + p = 63\). Altså \(7x = 3(3x + p) - (2x + 3p) = 3 \cdot 63 - 70 = 119\), så \(x = 17\).`,
    T`Opfat "én banan og to æbler" som én ukendt.`);
  q('2008-9', ['broek', 'identitet'], T`Firmaet Singel og Pukk A/S skar sine ansattes lønninger med \(p\) %. Efter en lang strejke steg lønningerne med \(p\) % igen. På første lønningsdag efter strejken opdagede de ansatte, at de var gået 4 % ned i løn. Hvor stor var \(p\)?`,
    [T`\(8\)`, T`\(12\)`, T`\(16\)`, T`\(20\)`, T`ingen af disse`], 'D',
    T`Lad \(L\) være lønnen og \(P = p/100\). Efter nedskæring og stigning er lønnen \((1 + P)(1 - P)L = (1 - P^2)L = 0{,}96L\). Altså \(P^2 = 0{,}04\), \(P = 0{,}2\) og \(p = 20\).`,
    T`\((1 + P)(1 - P) = 1 - P^2\).`);
  q('2008-14', ['ulighed'], T`\(a, b, c\) og \(d\) er hele tal, som opfylder \(a + b + c \lt 48\), \(b + c - d \gt 20\) og \(a + c + d \gt 36\). Hvad er den mindst mulige værdi af \(c\)?`,
    [T`\(8\)`, T`\(9\)`, T`\(11\)`, T`\(29\)`, T`Der findes ingen mindste værdi.`], 'C',
    T`Da tallene er hele, er \(a + b + c \le 47\), \(b + c - d \ge 21\) og \(a + c + d \ge 37\). Så er \(a + b + 2c \ge 21 + 37 = 58\), og \(c = (a + b + 2c) - (a + b + c) \ge 58 - 47 = 11\). Og \(c = 11\) kan lade sig gøre: \((a, b, c, d) = (26, 10, 11, 0)\).`,
    T`Læg de to "større end"-uligheder sammen.`);
  q('2008-17', ['identitet', 'cifre'], T`\(x\) og \(y\) er positive heltal, så \(x^2 + xy + x + y = 143\). Hvad er \(x - y\)?`,
    [T`\(5\)`, T`\(7\)`, T`\(9\)`, T`\(11\)`, T`\(13\)`], 'B',
    T`\(x^2 + xy + x + y = (x + 1)(x + y) = 143 = 11 \cdot 13\), og da \(y \ge 1\) og 143 ikke er et kvadrattal, er \(2 \le x + 1 \lt x + y\). Så \(x + 1 = 11\) og \(x + y = 13\). Altså \(x = 10\), \(y = 3\) og \(x - y = 7\).`,
    T`Faktorisér venstresiden.`);

  /* ---------------- 2009/2010 ---------------- */
  q('2009-3', ['ligning', 'broek'], T`I en parkeringskælder står der i alt 100 biler og knallerter. Anna tæller, at de har 356 hjul. Hvad er forholdet mellem antallet af biler og antallet af knallerter?`,
    [T`\(\dfrac{11}4\)`, T`\(\dfrac{37}{13}\)`, T`\(3\)`, T`\(\dfrac{39}{11}\)`, T`\(\dfrac{13}4\)`], 'D',
    T`Hvis alle var knallerter, var der 200 hjul. De \(156\) ekstra hjul er \(78\) ekstra par, så der er 78 biler og 22 knallerter. Forholdet er \(78/22 = 39/11\).`,
    T`Lad som om alle køretøjer er knallerter.`);
  q('2009-5', ['broek'], T`Der er 12 drenge og 18 piger i et skoleorkester. Gennemsnitsalderen for drengene er 10,5 år, mens gennemsnitsalderen for alle børnene i orkestret er 11 år. Hvad er gennemsnitsalderen for pigerne?`,
    [T`\(11\tfrac19\)`, T`\(11\tfrac16\)`, T`\(11\tfrac14\)`, T`\(11\tfrac13\)`, T`\(11\tfrac12\)`], 'D',
    T`Drengenes aldre summerer til \(12 \cdot 10{,}5 = 126\), alle børnenes til \(30 \cdot 11 = 330\). Pigernes summerer til \(204\), og gennemsnittet er \(204/18 = 11\tfrac13\).`,
    T`Regn med summer af aldre i stedet for gennemsnit.`);
  q('2009-8', ['broek'], T`Sigrid bager småkager. På halvdelen har hun chokolade, på en tredjedel af resten har hun nødder, og på en fjerdedel af dem, der hverken har chokolade eller nødder, har hun rosiner. På ni kager har hun ingenting. Hvor mange småkager bager Sigrid?`,
    [T`\(24\)`, T`\(32\)`, T`\(36\)`, T`\(48\)`, T`\(54\)`], 'C',
    T`9 kager er tre fjerdedele af dem uden chokolade og nødder, så 12 har hverken chokolade eller nødder. De 12 er to tredjedele af dem uden chokolade, så 18 har ikke chokolade. Det er halvdelen, så hun bager 36.`,
    T`Regn baglæns fra de 9 kager.`);
  q('2009-13', ['potens'], T`Hvor mange forskellige tal er der blandt tallene \(\sqrt{6^3}\), \(2^{3/2} \cdot 3^{3/2}\), \(2^{1/2} \cdot 3^{1/3}\), \(\sqrt8 \cdot \sqrt{27}\) og \(\sqrt[6]{72}\)?`,
    [T`\(1\)`, T`\(2\)`, T`\(3\)`, T`\(4\)`, T`\(5\)`], 'B',
    T`\(\sqrt{6^3} = 2^{3/2} \cdot 3^{3/2}\), og \(\sqrt8 \cdot \sqrt{27} = 2^{3/2} \cdot 3^{3/2}\). Desuden er \(\sqrt[6]{72} = (2^3 \cdot 3^2)^{1/6} = 2^{1/2} \cdot 3^{1/3}\). Der er altså kun to forskellige tal.`,
    T`Skriv alle tallene som \(2^s \cdot 3^t\).`);
  q('2009-19', ['identitet'], T`Et negativt tal \(x\) opfylder \(x^2 + x + 1/x + 1/x^2 = 4\). Hvad er \(x^4 + 1/x^4\)?`,
    [T`\(2\)`, T`\(4\)`, T`\(47\)`, T`\(49\)`, T`Umuligt at afgøre`], 'C',
    T`Med \(t = x + 1/x\) er \(x^2 + 1/x^2 = t^2 - 2\), så ligningen bliver \(t^2 + t - 6 = 0\), dvs. \(t = 2\) eller \(t = -3\). Da \(x \lt 0\), er \(t = -3\). Så er \(x^2 + 1/x^2 = 7\) og \(x^4 + 1/x^4 = 7^2 - 2 = 47\).`,
    T`Sæt \(t = x + 1/x\).`);

  /* ---------------- 2010/2011 ---------------- */
  q('2010-1', ['sammenlign', 'broek'], T`Hvilket af tallene er størst?`,
    [T`\(1/(3 \cdot 2)\)`, T`\(1/2^3\)`, T`\(1/3^2\)`, T`\(1/(3/2)\)`, T`\((1/3)/2\)`], 'D',
    T`Alle tallene er mindre end \(1/2\), undtagen \(1/(3/2) = 2/3\).`,
    T`Hvilke af tallene er mindre end \(\frac12\)?`);
  q('2010-4', ['potens'], T`Hvad er \(2^{16} + 2^{16} + \dots + 2^{16}\) (16 led)?`,
    [T`\(4^9\)`, T`\(2^{19}\)`, T`\(16^5\)`, T`\(2^{22}\)`, T`\(2^{32}\)`], 'C',
    T`\(16 \cdot 2^{16} = 16 \cdot (2^4)^4 = 16 \cdot 16^4 = 16^5\).`,
    T`16 ens led er \(16\) gange leddet.`);
  q('2010-7', ['tekst'], T`Astrid har som mål at løbe seks kilometer på 25 minutter. På de første fire kilometer løber hun i gennemsnit 15 km/t. Hvor hurtigt skal hun løbe de sidste to kilometer for at nå målet?`,
    [T`12 km/t`, T`\(13\tfrac13\) km/t`, T`\(15\tfrac23\) km/t`, T`16 km/t`, T`18 km/t`], 'B',
    T`De første 4 km tager \(\frac4{15}\) time \(= 16\) min. Så har hun \(9\) min \(= \frac3{20}\) time til de sidste 2 km, dvs. farten \(2 / \frac3{20} = 13\tfrac13\) km/t.`,
    T`Hvor mange minutter har hun tilbage til de sidste 2 km?`);
  q('2010-10', ['broek', 'identitet'], T`Hvad er \(\dfrac{a^2 + b^2 + c^2}{ac}\), hvis \(\dfrac ab = 2\) og \(\dfrac bc = 5\)?`,
    [T`\(3{,}6\)`, T`\(5{,}4\)`, T`\(10{,}5\)`, T`\(11{,}75\)`, T`\(12{,}6\)`], 'E',
    T`\(a/c = (a/b)(b/c) = 10\). Så er \(\dfrac{a^2 + b^2 + c^2}{ac} = \dfrac ac + \dfrac{b/c}{a/b} + \dfrac ca = 10 + \dfrac52 + \dfrac1{10} = 12{,}6\).`,
    T`Vælg fx \(c = 1\). Så er \(b = 5\) og \(a = 10\).`);
  q('2010-20', ['ulighed'], T`Anne, Bjørn, Celine, Dag og Erik var på svampetur. Anne og Bjørn plukkede tilsammen lige så mange svampe som Celine og Dag tilsammen. Bjørn og Dag plukkede tilsammen flere svampe end Anne og Celine tilsammen, som igen plukkede flere end Dag og Erik tilsammen. Erik og Celine plukkede tilsammen flere svampe end Dag og Anne tilsammen. Hvem plukkede flest svampe?`,
    [T`Anne`, T`Bjørn`, T`Celine`, T`Dag`, T`Erik`], 'B',
    T`Med forbogstaverne: \(a + b = c + d\), \(b + d \gt a + c\), \(a + c \gt d + e\), \(e + c \gt d + a\). Ligningen og første ulighed giver \(d - a = b - c \gt -(d - a)\), så \(d \gt a\) og \(b \gt c\). Første og anden ulighed giver \(b \gt e\). Lægger vi ligningen og sidste ulighed sammen, får vi \(2b \gt b + e \gt 2d\), så \(b \gt d\). Bjørn plukkede flest.`,
    T`Skriv alt som (u)ligheder med forbogstaverne, og kombinér dem.`);

  /* ---------------- 2011/2012 ---------------- */
  q('2011-4', ['tekst', 'ligning'], T`I salgsafdelingen i et firma er der en leder og mange sælgere. Hver dag i en arbejdsuge (mandag til fredag) skriver hver sælger én rapport, enten til lederen eller til en af de andre sælgere. En uge fik halvdelen af sælgerne to rapporter hver, den anden halvdel fik kun én rapport hver, mens lederen fik 420 rapporter. Hvor mange sælgere er der i afdelingen?`,
    [T`\(100\)`, T`\(105\)`, T`\(120\)`, T`\(125\)`, T`\(140\)`], 'C',
    T`Med \(x\) sælgere skrives \(5x\) rapporter. Modtaget er \(\frac x2 \cdot 2 + \frac x2 \cdot 1 + 420 = \frac32 x + 420\). Altså \(5x = \frac32 x + 420\), så \(x = 120\).`,
    T`Tæl rapporterne både når de skrives og når de modtages.`);
  q('2011-8', ['cifre'], T`Et firecifret tal \(a\) skrevet baglæns giver tallet \(b\). Summen af \(a\) og \(b\) er 6985. Hvad er tværsummen af \(a\)?`,
    [T`\(14\)`, T`\(17\)`, T`\(21\)`, T`\(23\)`, T`\(26\)`], 'D',
    T`Skriv \(a = \overline{x_3x_2x_1x_0}\). I additionen \(\overline{x_3x_2x_1x_0} + \overline{x_0x_1x_2x_3} = 6985\) giver første kolonne \(x_3 + x_0 \in \{5, 6\}\) og sidste kolonne \(x_0 + x_3 \in \{5, 15\}\), så \(x_0 + x_3 = 5\). Der er så mente fra både anden og tredje kolonne, så \(x_1 + x_2 = 18\). Tværsummen er \(23\).`,
    T`Opstil additionen kolonne for kolonne.`);
  q('2011-11', ['broek', 'cifre'], T`Lad \(x = 0{,}126126\overline{126}\), hvor stregen betyder, at cifrene 126 gentages uendeligt. I alle svarmulighederne skal \(p\) og \(q\) være positive heltal. Da gælder`,
    [T`\(x\) kan skrives på formen \(p/q\) med \(q \le 100\)`, T`\(x\) kan skrives på formen \(p/q\) med \(q \le 300\), men ikke med \(q \le 100\)`, T`\(x\) kan skrives på formen \(p/q\) med \(q \le 1000\), men ikke med \(q \le 300\)`, T`\(x\) kan skrives på formen \(p/q\), men ikke med \(q \le 1000\)`, T`\(x\) kan ikke skrives på formen \(p/q\)`], 'B',
    T`\(1000x - x = 126\), så \(x = \frac{126}{999} = \frac{14}{111}\). Brøken kan ikke forkortes mere, så den mindste nævner er 111.`,
    T`Beregn \(1000x - x\).`);
  q('2011-14', ['sammenlign', 'ulighed'], T`Hvilket af tallene er størst?`,
    [T`\(\dfrac{\pi + 3}2\)`, T`\(\dfrac{\pi + 6}3\)`, T`\(\sqrt{3\pi}\)`, T`\(\dfrac2{1/\pi + 1/3}\)`, T`\(\sqrt{\dfrac{\pi^2 + 9}2}\)`], 'E',
    T`\(E^2 - A^2 = (\pi - 3)^2/4 \gt 0\), så \(E \gt A\). \(A - B = (\pi - 3)/6 \gt 0\), \(A^2 - C^2 = (\pi - 3)^2/4 \gt 0\) og \(1/D^2 - 1/C^2 = \frac14(\frac1\pi - \frac13)^2 \gt 0\). Så \(D \lt C \lt A \lt E\): harmonisk, geometrisk, aritmetisk og kvadratisk middelværdi af \(\pi\) og 3.`,
    T`Genkend middelværdierne af \(\pi\) og \(3\).`);
  q('2011-16', ['broek', 'cifre'], T`Tre reelle tal \(a, b\) og \(c\) vælges, så \(a/b\), \(b/c\) og \(c/a\) alle er heltal. Hvor mange forskellige ordnede taltripler \((a/b, b/c, c/a)\) kan du lave på denne måde? (Fx regnes \((1,1,2)\), \((1,2,1)\) og \((1,2,2)\) som tre forskellige tripler.)`,
    [T`\(1\)`, T`\(2\)`, T`\(4\)`, T`\(6\)`, T`\(8\)`], 'C',
    T`Da \((a/b)(b/c)(c/a) = 1\) og alle tre er heltal, skal de alle være \(\pm1\) med produkt 1: \((1,1,1)\), \((1,-1,-1)\), \((-1,1,-1)\), \((-1,-1,1)\). Alle fire fås med \(a = 1\), \(b = \pm1\), \(c = \pm1\).`,
    T`Hvad er produktet af de tre brøker?`);

  /* ---------------- 2012/2013 ---------------- */
  q('2012-1', ['potens'], T`Hvad er \(3^6 \cdot 9^{12}\) lig med?`,
    [T`\(12^{18}\)`, T`\(9^{15}\)`, T`\(15^{18}\)`, T`\(3^{18}\)`, T`Ingen af disse.`], 'B',
    T`\(3^6 \cdot 9^{12} = (3^2)^3 \cdot 9^{12} = 9^3 \cdot 9^{12} = 9^{15}\).`,
    T`Skriv \(3^6\) som en potens af 9.`);
  q('2012-5', ['tekst'], T`Lars er dobbelt så gammel som Kari, og Karis alder er en tredjedel af Stians alder. For fem år siden var Lars halvt så gammel som Stian. Hvad er summen af de nuværende aldre for Kari, Lars og Stian?`,
    [T`30 år`, T`54 år`, T`60 år`, T`90 år`, T`120 år`], 'A',
    T`\(L = 2K\), \(S = 3K\) og \(S - 5 = 2(L - 5)\). Indsat: \(3K - 5 = 4K - 10\), så \(K = 5\). Summen er \(K + 2K + 3K = 30\).`,
    T`Udtryk alle aldre ved Karis alder \(K\).`);
  q('2012-9', ['sammenlign'], T`Hvilket tal er størst?`,
    [T`\(0{,}3\)`, T`\(\sqrt{0{,}095}\)`, T`\(0{,}1/0{,}30\)`, T`\(0{,}5^2\)`, T`\(240/723\)`], 'C',
    T`\(C = 1/3\) er større end \(0{,}3\) og \(0{,}25\). Desuden er \(240/723 \lt 240/720 = 1/3\), og \(C^2 = 1/9 = 0{,}111\ldots \gt 0{,}095 = B^2\).`,
    T`\(0{,}1/0{,}30 = 1/3\).`);
  q('2012-11', ['foelge'], T`Hvad er gennemsnittet af alle positive trecifrede tal?`,
    [T`\(500\)`, T`\(549{,}5\)`, T`\(599\)`, T`\(599{,}5\)`, T`\(600\)`], 'B',
    T`Tallene er \(100, 101, \dots, 999\). Gennemsnittet af 100 og 999 er \(549{,}5\), og det samme gælder 101 og 998, 102 og 997 osv. Så gennemsnittet er \(549{,}5\).`,
    T`Par det mindste og det største tal.`);
  q('2012-15', ['ulighed', 'potens'], T`Hvis \(m = 2 \cdot 3 \cdot 4 \cdot 5 \cdots 31 \cdot 32\), hvad er så sandt om \(m\)?`,
    [T`\(m \lt 2^{40}\)`, T`\(2^{40} \lt m \lt 2^{70}\)`, T`\(2^{70} \lt m \lt 2^{100}\)`, T`\(2^{100} \lt m \lt 2^{130}\)`, T`\(2^{130} \lt m\)`], 'D',
    T`Erstat hver faktor med potensen af 2 lige under: \(m \gt 2 \cdot 2 \cdot 4^4 \cdot 8^8 \cdot 16^{16} \cdot 32 = 2^{103}\). Erstat hver faktor med potensen af 2 lige over: \(m \lt 2 \cdot 4^2 \cdot 8^4 \cdot 16^8 \cdot 32^{16} = 2^{129}\).`,
    T`Erstat hver faktor med en nærliggende potens af 2.`);
  q('2012-20', ['funktion'], T`Hvor mange reelle løsninger har ligningen \(x + x^2 + \dots + x^{2012} = 0\)?`,
    [T`\(1\)`, T`\(2\)`, T`\(1006\)`, T`\(2011\)`, T`\(2012\)`], 'B',
    T`\(x = 0\) er en løsning. Andre løsninger opfylder \(1 + x + \dots + x^{2011} = 0\), dvs. \((1 + x)(1 + x^2 + x^4 + \dots + x^{2010}) = 0\). Så \(x = -1\) er en løsning, og den sidste faktor er mindst 1, så der er ikke flere.`,
    T`Sæt \(x\) uden for parentes, og par leddene to og to.`);

  /* ---------------- 2013/2014 ---------------- */
  q('2013-2', ['tekst'], T`For to år siden var Petter tre gange så gammel som Ulrik. Om to år er Ulrik kun halvt så gammel som Petter. Hvad er summen af Ulriks og Petters aldre nu?`,
    [T`\(18\)`, T`\(20\)`, T`\(22\)`, T`\(24\)`, T`\(26\)`], 'B',
    T`\(P - 2 = 3(U - 2)\) og \(P + 2 = 2(U + 2)\) giver \(P = 3U - 4 = 2U + 2\), så \(U = 6\), \(P = 14\) og summen er \(20\).`,
    T`Opstil to ligninger i \(P\) og \(U\).`);
  q('2013-3', ['ligning'], T`Tre reelle tal \(x, y\) og \(z\) opfylder \(3x + y = 1\), \(3y + z = \frac12\) og \(3z + x = -\frac12\). Hvad er værdien af \(x + y + z\)?`,
    [T`\(1\)`, T`\(\frac12\)`, T`\(\frac13\)`, T`\(\frac14\)`, T`\(0\)`], 'D',
    T`Summen af de tre ligninger er \(4(x + y + z) = 1\), så \(x + y + z = \frac14\).`,
    T`Læg alle tre ligninger sammen.`);
  q('2013-6', ['ulighed'], T`Hadia, Jens og Siv samler på biler. Du har fået at vide, at ingen af dem har flere end fem biler, og at ingen to af dem har flere end syv biler tilsammen. Hvad er det højeste antal biler, de tre kan have tilsammen?`,
    [T`\(8\)`, T`\(9\)`, T`\(10\)`, T`\(11\)`, T`\(12\)`], 'C',
    T`Lægger vi de tre parsummer sammen, får vi \(2(\text{total}) \le 21\), så totalen er højst 10. Fordelingen \(4, 3, 3\) giver 10.`,
    T`Læg de tre parsummer sammen.`);
  q('2013-9', ['potens', 'identitet'], T`Hvilken af svarmulighederne er lig med \(\dfrac{1 + \sqrt2}{\sqrt2 - 1}\)?`,
    [T`\(1 + \sqrt2\)`, T`\(3 + 2\sqrt2\)`, T`\(3\sqrt2\)`, T`\(2 + \sqrt2\)`, T`\(1 + \tfrac23\sqrt2\)`], 'B',
    T`Forlæng med \(\sqrt2 + 1\): \(\dfrac{(1 + \sqrt2)^2}{(\sqrt2)^2 - 1} = 3 + 2\sqrt2\).`,
    T`Forlæng med \(\sqrt2 + 1\).`);
  q('2013-12', ['sammenlign'], T`Hvilket tal er størst?`,
    [T`\(3{,}13 \cdot 3{,}15\)`, T`\(9{,}85\)`, T`\(\sqrt{9{,}61}\,\pi\)`, T`\(\pi^2\)`, T`\(\dfrac{\pi^3}{3{,}15}\)`], 'D',
    T`\(3{,}13 \cdot 3{,}15 = 3{,}14^2 - 0{,}01^2 \lt 3{,}14^2 \lt \pi^2\), og \(3{,}14^2 \gt 9{,}85\). \(\sqrt{9{,}61}\,\pi = 3{,}1\pi \lt \pi^2\), og \(3{,}15 \gt \pi\) giver \(\pi^3/3{,}15 \lt \pi^2\).`,
    T`Sammenlign alt med \(\pi^2\).`);
  q('2013-17', ['funktion'], T`Hvor mange reelle løsninger har ligningen \(2x^6 + 3x^4 - 2x^2 = 0\)?`,
    [T`\(1\)`, T`\(2\)`, T`\(3\)`, T`\(5\)`, T`\(6\)`], 'C',
    T`\(x = 0\) er en løsning. Ellers divideres med \(x^2\): \(2u^2 + 3u - 2 = 0\) med \(u = x^2\), som giver \(u = \frac12\) eller \(u = -2\). Kun \(u = \frac12\) er mulig, og den giver \(x = \pm\sqrt{1/2}\). I alt tre løsninger.`,
    T`Sæt \(x^2\) uden for parentes, og substituér \(u = x^2\).`);

  /* ---------------- 2014/2015 ---------------- */
  q('2014-1', ['broek'], T`Hvilket af udtrykkene er ikke lig med \(0{,}8\)?`,
    [T`\(\dfrac45\)`, T`\(\dfrac1{1{,}25}\)`, T`\(\dfrac{0{,}016}{0{,}020}\)`, T`\(\dfrac{8/3}{20/6}\)`, T`\(\dfrac{0{,}08}{0{,}64}\)`], 'E',
    T`\(\dfrac{0{,}08}{0{,}64} = \dfrac18 \ne 0{,}8\). De andre er alle \(0{,}8\).`,
    T`Forlæng hver brøk, så der ikke er decimaler.`);
  q('2014-3', ['broek'], T`Johanne har 18 røde blyanter. Det er 15 % af alle hendes blyanter. Desuden er 40 % blå, og 45 % er grønne. Hvor mange blå blyanter har hun?`,
    [T`\(40\)`, T`\(45\)`, T`\(46\)`, T`\(48\)`, T`\(50\)`], 'D',
    T`\(18/15 \cdot 40 = 48\) blå blyanter.`,
    T`Hvor mange blyanter svarer 1 % til?`);
  q('2014-5', ['tekst'], T`Den unge studerende Kari kører sydpå fra Trondheim og ind i et område med strækningsmåling. Bilen bliver fotograferet af to fotobokse placeret 10 km fra hinanden, og hvis gennemsnitsfarten mellem dem er over 80 km/t, får Kari en bøde. Uheldigvis er Kari lidt uopmærksom og kører de første 9 kilometer med en gennemsnitsfart på 90 km/t. Hvad er den højeste gennemsnitsfart, Kari kan have den sidste kilometer uden at få bøde?`,
    [T`10 km/t`, T`20 km/t`, T`32 km/t`, T`40 km/t`, T`ingen af disse`], 'D',
    T`De 10 km må højst tage \(\frac18\) time. De første 9 km tog \(\frac1{10}\) time, så den sidste kilometer skal tage mindst \(\frac18 - \frac1{10} = \frac1{40}\) time, dvs. højst 40 km/t.`,
    T`Regn i tid, ikke i fart.`);
  q('2014-8', ['tekst'], T`I en skoleklasse er der 20 elever. Hvis én ny dreng starter i klassen, bliver der dobbelt så mange drenge som piger. Hvad er produktet af antallet af drenge og antallet af piger i klassen?`,
    [T`\(75\)`, T`\(84\)`, T`\(91\)`, T`\(96\)`, T`\(100\)`], 'C',
    T`Med den nye dreng er der 21 elever: 14 drenge og 7 piger. Før var der 13 drenge og 7 piger, og \(13 \cdot 7 = 91\).`,
    T`Hvor mange er der i klassen, når den nye dreng er kommet?`);
  q('2014-13', ['potens'], T`Hvad er \(3a^b + 8a^{-3b}\), hvis \(a^b = 2\)?`,
    [T`\(5\)`, T`\(7\)`, T`\(8\)`, T`\(24\)`, T`\(70\)`], 'B',
    T`\(a^{-3b} = (a^b)^{-3} = 2^{-3} = \frac18\), så \(3a^b + 8a^{-3b} = 6 + 1 = 7\).`,
    T`\(a^{-3b} = (a^b)^{-3}\).`);
  q('2014-16', ['identitet'], T`Vi har to terninger (kuber). Summen af de to kubers rumfang er 25. Summen af en sidelængde i den ene kube og en sidelængde i den anden er 4. Hvad er summen af de to kubers samlede overfladearealer?`,
    [T`\(37{,}5\)`, T`\(38\)`, T`\(57\)`, T`\(60\)`, T`\(85{,}5\)`], 'C',
    T`\(a + b = 4\) og \(a^3 + b^3 = (a + b)(a^2 - ab + b^2) = 25\), så \(a^2 - ab + b^2 = \frac{25}4\). Samtidig er \(a^2 + 2ab + b^2 = 16\). Kombineret: \(3(a^2 + b^2) = 2 \cdot \frac{25}4 + 16\), så \(a^2 + b^2 = \frac{19}2\), og overfladen er \(6(a^2 + b^2) = 57\).`,
    T`\(a^3 + b^3 = (a + b)(a^2 - ab + b^2)\).`);

  /* ---------------- 2015/2016 ---------------- */
  q('2015-1', ['ligning'], T`Anne og Beate har tilsammen 120 kr, Beate og Cecilie har tilsammen 60 kr, og Anne og Cecilie har tilsammen 70 kr. Hvor mange kroner har de i alt?`,
    [T`\(120\)`, T`\(125\)`, T`\(130\)`, T`\(180\)`, T`\(190\)`], 'B',
    T`Summen af de tre beløb er 250 kr. Her er alles penge talt med to gange, så de har \(250/2 = 125\) kr.`,
    T`Læg de tre beløb sammen. Hvor mange gange er hver persons penge talt med?`);
  q('2015-5', ['identitet'], T`Hvad er \(\dfrac{2016^4 - 2015^4}{2015^2 + 2016^2}\) lig med?`,
    [T`\(2015\)`, T`\(4031\)`, T`\(4033\)`, T`\(2 \cdot (2016^2 - 2015^2)\)`, T`\(2015 \cdot 2016\)`], 'B',
    T`\(2016^4 - 2015^4 = (2016^2 - 2015^2)(2016^2 + 2015^2) = (2016 - 2015)(2016 + 2015)(2016^2 + 2015^2) = 4031(2016^2 + 2015^2)\).`,
    T`\(a^4 - b^4 = (a^2 - b^2)(a^2 + b^2)\).`);
  q('2015-9', ['tekst'], T`Anne og Berit er tilsammen 60 år. Anne er tre gange så gammel, som Berit var, da Anne var så gammel, som Berit er nu. Hvad er tværsummen af Annes alder?`,
    [T`\(1\)`, T`\(3\)`, T`\(5\)`, T`\(7\)`, T`\(9\)`], 'E',
    T`Lad Anne være \(a\) og Berit \(b\). For \(a - b\) år siden var Anne \(b\) år og Berit \(2b - a\). Så \(a = 3(2b - a)\), dvs. \(2a = 3b\). Med \(a + b = 60\) fås \(a = 36\), og tværsummen er 9.`,
    T`Hvor mange år er der gået, siden Anne var \(b\) år?`);
  q('2015-13', ['sammenlign', 'identitet'], T`Hvilket af tallene er størst?`,
    [T`\(2014 \cdot 2016\)`, T`\(1971 \cdot 2060\)`, T`\(2000^2 + 15^2\)`, T`\(41{,}5^2 \cdot 48{,}5^2\)`, T`\(2015^2\)`], 'B',
    T`\(A = 2015^2 - 1 \lt E\). \(E = 2000^2 + 2 \cdot 2000 \cdot 15 + 15^2 \gt C\). \(D = (45^2 - 3{,}5^2)^2 \lt 2015^2 = E\). Endelig er \(B = 1970 \cdot 2060 + 2060 = (2015 - 45)(2015 + 45) + 2060 = 2015^2 - 2025 + 2060 = 2015^2 + 35 \gt E\).`,
    T`Skriv produkterne som \((m - k)(m + k)\) med \(m = 2015\).`);
  q('2015-20', ['ulighed', 'foelge'], T`Tallet \(x\) er givet ved \[\frac1x = \frac1{2016^2} + \frac1{2017^2} + \dots + \frac1{4030^2}.\] Hvilket af disse heltal ligger nærmest \(x\)?`,
    [T`\(2015\)`, T`\(2016\)`, T`\(3024\)`, T`\(4029\)`, T`\(4031\)`], 'E',
    T`For hvert \(k\) er \(\dfrac1{k^2} \lt \dfrac1{k(k-1)} = \dfrac1{k-1} - \dfrac1k\). Summeret fra \(k = 2016\) til \(4030\) giver det \(\dfrac1x \lt \dfrac1{2015} - \dfrac1{4030} = \dfrac1{4030}\), så \(x \gt 4030\). (Den tilsvarende vurdering nedefra giver \(x \lt 4033\).)`,
    T`Teleskopér: \(\frac1{k^2} \lt \frac1{k-1} - \frac1k\).`);

  /* ---------------- 2016/2017 ---------------- */
  q('2016-1', ['sammenlign'], T`Hvilket tal er det mindste?`,
    [T`\(\dfrac{10 + \pi}{100}\)`, T`\(0{,}15\)`, T`\(\sqrt{0{,}02}\)`, T`\(\dfrac2{15}\)`, T`\(0{,}5^3\)`], 'E',
    T`\(A = 0{,}1314\ldots\), \(B = 0{,}15\), \(D = 0{,}1333\ldots\) og \(E = 0{,}125\), så \(E\) er mindst af dem. Og \(E^2 = \frac1{64} \lt \frac1{50} = C^2\).`,
    T`Skriv tallene som decimaltal.`);
  q('2016-10', ['sammenlign', 'ulighed'], T`Hvilket af tallene skal stå i midten, hvis de ordnes i stigende rækkefølge?`,
    [T`\(\pi\)`, T`\(\sqrt{12}\)`, T`\(\dfrac72\)`, T`\(\dfrac{\sqrt{11} + \sqrt{13}}2\)`, T`\(\dfrac2{\frac1{\sqrt{11}} + \frac1{\sqrt{13}}}\)`], 'D',
    T`\(11 \cdot 13 \lt 12^2\) giver \(D^2 = \frac14(24 + 2\sqrt{143}) \lt 12 = B^2\). \(C^2 = \frac{49}4 \gt 12\), og \(A^2 = \pi^2 \lt 11\) giver \(A \lt \sqrt{11} \lt E \lt D\) (harmonisk middel er mindre end aritmetisk). Ordningen er \(A \lt E \lt D \lt B \lt C\).`,
    T`\(D\) og \(E\) er det aritmetiske og det harmoniske gennemsnit af \(\sqrt{11}\) og \(\sqrt{13}\).`);
  q('2016-13', ['sammenlign'], T`Lad \(n = \frac16 + \frac17 + \frac18 + \frac19 + \frac1{10} + \frac1{11}\). Hvilket tal er størst?`,
    [T`\(\dfrac1n\)`, T`\(\dfrac1{n^2}\)`, T`\(n\)`, T`\(n^2\)`, T`De er alle lige store.`], 'B',
    T`\(n\) er \(\frac16\) plus fem tal, der er mindre end \(\frac16\), så \(n \lt 1\). Derfor er \(n^2 \lt n \lt 1/n \lt 1/n^2\).`,
    T`Er \(n\) større eller mindre end 1?`);
  q('2016-15', ['foelge'], T`Hvad er værdien af \(\sqrt{6 + \sqrt{6 + \sqrt{6 + \cdots}}}\)?`,
    [T`\(\dfrac83\)`, T`\(2\sqrt2\)`, T`\(\dfrac{\sqrt6 + \sqrt{12}}2\)`, T`\(3\)`, T`\(\sqrt2 + \sqrt3\)`], 'D',
    T`Kald værdien \(x\). Så er \(x = \sqrt{6 + x}\), dvs. \(x^2 - x - 6 = 0\) med løsningerne \(3\) og \(-2\). Da \(x\) er en kvadratrod, er \(x = 3\).`,
    T`Udtrykket under den yderste rod er \(6\) plus udtrykket selv.`);
  q('2016-16', ['foelge', 'identitet'], T`Hvad er værdien af produktet \(x(x - 1)\cdots(x - 4031)\), hvis \(x = 2015{,}5\)?`,
    [T`\(0\)`, T`\(\dfrac{(4031!)^2}{2^{2016} \cdot 2016!}\)`, T`\(\dfrac{(4031!)^2}{2^{2016} \cdot 2015!}\)`, T`\(\dfrac{(4031!)^2}{2^{4032} \cdot 2015!}\)`, T`Ingen af disse.`], 'E',
    T`Produktet har 4032 faktorer placeret symmetrisk om 0, heraf 2016 negative, så \(P = Q^2\) med \(Q = x(x - 1)\cdots(x - 2015) = \frac{4031 \cdot 4029 \cdots 1}{2^{2016}}\). Ganges tæller og nævner med \(4030 \cdot 4028 \cdots 2 = 2^{2015} \cdot 2015!\), fås \(Q = \dfrac{4031!}{2^{4031} \cdot 2015!}\). Så \(P = \dfrac{(4031!)^2}{2^{8062}(2015!)^2}\), som ikke er blandt A–D.`,
    T`Faktorerne er \(\pm\frac12, \pm\frac32, \dots\). Hvad er fortegnet?`);

  /* ---------------- 2017/2018 ---------------- */
  q('2017-2', ['tekst'], T`Rejser man fra Norge til San Francisco, skal man stille uret 9 timer tilbage. Magnus' rejse fra San Francisco varer 21 timer, og da han ankommer til lufthavnen i Trondheim, er klokken i Norge 11 om formiddagen. Hvad var klokken i San Francisco ved afrejse?`,
    [T`2 om morgenen`, T`2 om eftermiddagen`, T`5 om morgenen`, T`5 om eftermiddagen`, T`11 om aftenen`], 'C',
    T`Ved ankomsten er klokken i San Francisco 2 om morgenen. Magnus rejste 21 timer tidligere, altså kl. 5 om morgenen dagen før.`,
    T`Omregn ankomsttiden til San Francisco-tid først.`);
  q('2017-5', ['ligning'], T`Antag, at \(a + b = 2\), \(b + c = 3\), \(c + d = 4\), \(d + e = 5\) og \(a + e = 6\). Hvad er værdien af \(a + b + c + d + e\)?`,
    [T`\(10\)`, T`\(12\)`, T`\(15\)`, T`\(20\)`, T`Umuligt at bestemme`], 'A',
    T`Summen af de fem ligninger er \(2(a + b + c + d + e) = 20\), så summen er 10.`,
    T`Læg alle ligningerne sammen.`);
  q('2017-6', ['ligning'], T`Antag, at \(a = b + 2\), \(b = c + 3\), \(c = d - 4\), \(d = e + 5\) og \(e = a - 6\). Hvad er værdien af \(a + b + c + d + e\)?`,
    [T`\(1\)`, T`\(6\)`, T`\(11\)`, T`\(16\)`, T`Umuligt at bestemme`], 'E',
    T`Øger vi alle fem tal med 1, holder alle ligningerne stadig, men summen vokser med 5. Summen er altså ikke bestemt.`,
    T`Hvad sker der, hvis du lægger 1 til alle tallene?`);
  q('2017-11', ['sammenlign', 'potens'], T`Hvilket af disse tal er størst?`,
    [T`\(\sqrt[6]6\)`, T`\(\sqrt[4]4\)`, T`\(\sqrt[3]3\)`, T`\(\sqrt2\)`, T`\(1\)`], 'C',
    T`For \(n \gt 1\) er \(\sqrt[n]n \gt 1\), så 1 er mindst. \(\sqrt[3]3 = \sqrt[6]9 \gt \sqrt[6]6\) og \(\sqrt[3]3 = \sqrt[6]9 \gt \sqrt[6]8 = \sqrt2 = \sqrt[4]4\). Så \(\sqrt[3]3\) er størst.`,
    T`Opløft i 6. potens (eller skriv alle som 6. rødder).`);
  q('2017-13', ['ulighed'], T`Hvor mange følger af heltal \(a_1, a_2, \dots, a_{10}\) opfylder ulighederne \[0 \lt a_1 \lt a_2 \lt \dots \lt a_{10} \lt 13?\]`,
    [T`\(45\)`, T`\(55\)`, T`\(66\)`, T`\(110\)`, T`\(132\)`], 'C',
    T`En sådan følge svarer til et valg af ti af de tolv tal \(1, 2, \dots, 12\). Antallet er \(\binom{12}{10} = \frac{12 \cdot 11}2 = 66\).`,
    T`Følgen er bestemt af, hvilke to tal fra 1–12 der udelades.`);
  q('2017-15', ['tekst'], T`Mona løber flere gange rundt på en løbebane. En flue starter fra Monas skulder og flyver i modsat retning rundt om banen, til den rammer Mona. Så vender den og flyver rundt om banen, til den rammer Mona igen. Det gentager den, til den har ramt Mona 10 gange. Fluen flyver tre gange så hurtigt, som Mona løber. Hvor mange omgange har Mona løbet, når fluen rammer hende for tiende gang?`,
    [T`\(7/2\)`, T`\(4\)`, T`\(14/3\)`, T`\(5\)`, T`\(15/4\)`], 'E',
    T`Mål i omgange og i den tid, Mona bruger på én omgang. Når fluen flyver modsat, ændres afstanden med fart 4, så det tager \(\frac14\). I samme retning ændres den med fart 2, så det tager \(\frac12\). To træf tager \(\frac34\), og ti træf tager \(5 \cdot \frac34 = \frac{15}4\), som også er antallet af omgange.`,
    T`Brug relativ fart: \(3 + 1\) og \(3 - 1\).`);
  q('2017-17', ['foelge', 'cifre'], T`Du skriver en række tal på en (stor) tavle. Hvert tal fremkommer ved at tage det forrige tal, stryge det sidste ciffer og så lægge 10 til. Det første tal er \(2^{2017}\). Hvad er tal nummer 1000?`,
    [T`\(1\)`, T`\(10\)`, T`\(11\)`, T`\(16\)`, T`\(2^{1017}\)`], 'C',
    T`Hvis \(a = 10m + k\), bliver næste tal \(m + 10\). For \(a \ge 410\) er næste tal under \(a/8\), så efter højst 670 skridt er tallet under 410. Derefter kommer et tal under 51, så et under 16, og så 11, som gentager sig (11 → 1 + 10 = 11). Faktisk er der 608 tal større end 11.`,
    T`Hvad sker der med 11? Og hvor hurtigt skrumper store tal?`);

  /* ---------------- 2018/2019 ---------------- */
  q('2018-4', ['potens'], T`Brøken \(\dfrac{2 + \sqrt2}{1 + \sqrt2}\) kan forenkles til`,
    [T`\(\dfrac43\)`, T`\(\dfrac32\)`, T`\(\sqrt2\)`, T`\(1 + \sqrt2\)`, T`ingen af disse`], 'C',
    T`\(2 + \sqrt2 = \sqrt2(\sqrt2 + 1)\), så brøken er \(\sqrt2\).`,
    T`Sæt \(\sqrt2\) uden for parentes i tælleren.`);
  q('2018-5', ['potens', 'ligning'], T`Ligningen \(2^{x+1} + 2^{x-4} = 5^2 + 2^{x-1}\) har løsningen`,
    [T`\(x = \frac12\)`, T`\(x = 1\)`, T`\(x = 2\)`, T`\(x = 3\)`, T`\(x = 4\)`], 'E',
    T`Ligningen kan skrives \(2^{x-4}(2^5 + 1 - 2^3) = 25\), dvs. \(2^{x-4} \cdot 25 = 25\). Så \(2^{x-4} = 1\) og \(x = 4\).`,
    T`Sæt \(2^{x-4}\) uden for parentes.`);
  q('2018-10', ['foelge'], T`På en hylde står en række glas. Du lægger én ært i det første glas. I det næste lægger du tre ærter, så glas nummer to har to ærter mere end det første. I det tredje lægger du fire ærter mere end i glas nummer to, og i det fjerde otte ærter mere end i glas nummer tre. Sådan fortsætter du med at fordoble forskellen fra ét glas til det næste. Antallet af ærter i glas nummer \(n\) er da`,
    [T`\(2n - 1\)`, T`\(n^2 - n + 1\)`, T`\(3^{n-1} - (n-1)(n-2)2^{n-3}\)`, T`\(2^{n-1} + 2^{n-2}\)`, T`\(2^n - 1\)`], 'E',
    T`Glas \(n\) har \(2^{n-1}\) flere ærter end glas \(n - 1\). Så glas \(n\) har \(1 + 2 + 2^2 + \dots + 2^{n-1} = 2^n - 1\) ærter.`,
    T`Tjek svarmulighederne for \(n = 1, 2, 3, 4\): 1, 3, 7, 15.`);
  q('2018-16', ['identitet', 'funktion'], T`Hvor mange reelle tal \(x\) mellem \(1/5\) og \(5\) er sådan, at både \(x + 1/x\) og \(x^2 + 1/x^2\) er heltal?`,
    [T`\(10\)`, T`\(9\)`, T`\(8\)`, T`\(7\)`, T`\(6\)`], 'D',
    T`\(x^2 + 1/x^2 = (x + 1/x)^2 - 2\), så det er nok at \(x + 1/x = n\) er et heltal. For \(n = 2\) er der én løsning (\(x = 1\)), for \(n \gt 2\) to løsninger med produkt 1. Den største løsning \(x_+\) opfylder \(n - 1 \lt x_+ \lt n\), så den ligger under 5 netop når \(n \le 5\). I alt \(1 + 2 \cdot 3 = 7\) løsninger.`,
    T`Det er nok, at \(x + 1/x\) er et heltal. Hvorfor?`);
  q('2018-19', ['funktion'], T`Konstanterne \(a, b, c\) og \(d\) er alle forskellige fra 0. To lineære funktioner \(f\) og \(g\) er givet ved \(f(x) = ax + b\) og \(g(x) = cx + d\). Hvis \(f(d) = g(b) = 0\), hvad kan du så sige med sikkerhed om \(f\) og \(g\)?`,
    [T`\(f\) og \(g\) er den samme funktion.`, T`Graferne for \(f\) og \(g\) er parallelle linjer.`, T`Graferne for \(f\) og \(g\) står vinkelret på hinanden.`, T`Spejler man grafen for \(f\) i linjen \(y = x\), får man grafen for \(g\).`, T`Ingen af de øvrige påstande er nødvendigvis sande.`], 'D',
    T`Grafen for \(f\) går gennem \((0, b)\) og \((d, 0)\), grafen for \(g\) gennem \((0, d)\) og \((b, 0)\). Spejling i \(y = x\) bytter de to par punkter, så linjerne er spejlbilleder af hinanden.`,
    T`Find skæringerne med akserne for begge grafer.`);

  /* ---------------- 2019/2020 ---------------- */
  q('2019-4', ['tekst'], T`Nils kører 90 km. Den første halvdel af strækningen kører han med 45 km/t. Så kører han de resterende 45 km med 90 km/t. Hvad er hans gennemsnitsfart?`,
    [T`60 km/t`, T`\(45\sqrt2\) km/t \(\approx 63{,}6\) km/t`, T`65 km/t`, T`67,5 km/t`, T`\(45\sqrt{\tfrac52}\) km/t \(\approx 71{,}2\) km/t`], 'A',
    T`Første halvdel tager 1 time, anden halvdel en halv time. I alt 1,5 time for 90 km, dvs. \(90/1{,}5 = 60\) km/t.`,
    T`Gennemsnitsfart er samlet strækning delt med samlet tid.`);
  q('2019-9', ['sammenlign', 'ulighed'], T`Hvis \(1 \gt a \gt b \gt 0\), hvilket af disse tal er så størst?`,
    [T`\(a\)`, T`\(ab\)`, T`\(\dfrac{2a}{a + b}\)`, T`\(\dfrac{\sqrt a}{\sqrt{a + b}}\)`, T`Umuligt at afgøre`], 'C',
    T`\(a\), \(ab\) og \(\sqrt a/\sqrt{a + b}\) er alle mindre end 1, mens \(2a/(a + b) \gt 1\), da \(a \gt b\).`,
    T`Hvilke tal er mindre end 1?`);
  q('2019-13', ['identitet'], T`Fem reelle tal \(a, b, c, d\) og \(e\) har gennemsnit 2 og produkt 1. Desuden er \[\frac1{abcd} + \frac1{bcde} + \frac1{cdea} + \frac1{deab} = 8.\] Så er \(eabc\) lig med`,
    [T`\(-6\)`, T`\(-1/6\)`, T`\(0\)`, T`\(1/2\)`, T`\(2\)`], 'D',
    T`Tager vi også \(\frac1{eabc}\) med, er summen af alle fem brøker \(\dfrac{a + b + c + d + e}{abcde} = \dfrac{10}1 = 10\). Så \(\frac1{eabc} = 2\), og \(eabc = \frac12\).`,
    T`Hvad er \(\frac1{abcd}\) gange \(abcde\)?`);
  q('2019-16', ['identitet'], T`To tal \(x\) og \(y\) opfylder \(x^2 + 2y^2 - 2xy = 26\) og \(x^2 + 2y^2 + 2xy = 106\). Hvad er værdien af \(x^4 + 4y^4\)?`,
    [T`\(2019\)`, T`\(2564\)`, T`\(2756\)`, T`\(5512\)`, T`Umuligt at afgøre`], 'C',
    T`Ganger vi ligningerne, får vi \((x^2 + 2y^2)^2 - 4x^2y^2 = 26 \cdot 106\), dvs. \(x^4 + 4y^4 = 2756\).`,
    T`Gang de to ligninger med hinanden.`);
  q('2019-18', ['funktion'], T`Funktionen \(f(x) = x^2 + ax + b\), hvor \(a\) og \(b\) er konstanter, opfylder \(f(2) = 2\). Hvilken af følgende påstande er da nødvendigvis sand?`,
    [T`\(f(2) \gt f(1)\)`, T`\(2 \cdot f(1) = f(2) + f(0)\)`, T`\(f(0) \ne 0\)`, T`\(f(f(1)) = f(1)\)`, T`\(f(1) \gt 0\)`], 'D',
    T`\(f(2) = 2\) giver \(2a + b = -2\), så \(f(1) = 1 + a + b = -1 - a\). Parablen er symmetrisk om \(x = -a/2\), og \(1 + (-1 - a) = -a\), så \(f(-1 - a) = f(1)\), dvs. \(f(f(1)) = f(1)\). De andre påstande afhænger af \(a\) og \(b\).`,
    T`Udtryk \(f(1)\) ved \(a\), og brug parablens symmetri.`);

  /* ---------------- 2020/2021 ---------------- */
  q('2020-1', ['sammenlign', 'broek'], T`Hvilket tal er mindst?`,
    [T`\(\dfrac59\)`, T`\(\dfrac{15}{28}\)`, T`\(\dfrac{26}{45}\)`, T`\(\dfrac7{14}\)`, T`\(\dfrac{13}{23}\)`], 'D',
    T`\(\frac7{14} = \frac12\), og alle de andre er større end \(\frac12\).`,
    T`Sammenlign hver brøk med \(\frac12\).`);
  q('2020-2', ['potens'], T`Hvilket tal er kvadratroden af \(2^{2^{100}}\)?`,
    [T`\(2^{2^{50}}\)`, T`\(2^{100}\)`, T`\(2^{2^{99}}\)`, T`\(2^{2^{\sqrt{100}}}\)`, T`\(\sqrt2^{\sqrt2^{100}}\)`], 'C',
    T`\(\sqrt{2^x} = 2^{x/2}\), og med \(x = 2^{100}\) er \(x/2 = 2^{99}\).`,
    T`\(\sqrt{2^x} = 2^{x/2}\). Hvad er halvdelen af \(2^{100}\)?`);
  q('2020-3', ['ligning'], T`Et æble og en banan koster tilsammen 11 kroner. En appelsin og en banan koster tilsammen 13 kroner. Et æble og en appelsin koster tilsammen 12 kroner. Hvor mange kroner koster et æble, en banan og en appelsin tilsammen?`,
    [T`\(12\)`, T`\(14\)`, T`\(16\)`, T`\(17\)`, T`\(18\)`], 'E',
    T`Summen af de tre priser er prisen for to æbler, to bananer og to appelsiner. Så én af hver koster \((11 + 13 + 12)/2 = 18\).`,
    T`Læg de tre priser sammen.`);
  q('2020-4', ['broek'], T`Pia har været på rejse i Argentina, Bahamas og Chile og kommer hjem med mange souvenirs. 70 % af dem er ikke fra Argentina. 82 % er ikke fra Chile. Hvor mange er fra Bahamas?`,
    [T`24 %`, T`38 %`, T`48 %`, T`52 %`, T`Umuligt at afgøre`], 'D',
    T`30 % er fra Argentina og 18 % fra Chile, i alt 48 %. Resten, 52 %, er fra Bahamas.`,
    T`Hvor mange procent er fra Argentina?`);
  q('2020-15', ['potens', 'identitet'], T`Hvilket af udtrykkene har ikke samme værdi som de andre?`,
    [T`\((1 + \sqrt2)^2\)`, T`\(\sqrt8 + \sqrt9\)`, T`\(\dfrac{1 + \sqrt2}{\sqrt2 - 1}\)`, T`\(3 + 2\sqrt2\)`, T`\(\dfrac{\sqrt2 + 9}{2 - \sqrt2}\)`], 'E',
    T`A, B og C forenkles alle til \(3 + 2\sqrt2\). Men \(E = \dfrac{(\sqrt2 + 9)(2 + \sqrt2)}{2} = 10 + \tfrac{11}2\sqrt2\).`,
    T`Forenkl hvert udtryk til formen \(p + q\sqrt2\).`);

  /* ---------------- 2021/2022 ---------------- */
  q('2021-7', ['sammenlign', 'potens'], T`Hvilket tal er størst?`,
    [T`\(2\sqrt[3]{10}\)`, T`\(\sqrt{17}\)`, T`\(9^{2/3}\)`, T`\(4\)`, T`\(\pi\)`], 'C',
    T`\(B \gt \sqrt{16} = D \gt E\). \(B^6 = 17^3 \lt 18^3 = 8 \cdot 9^3 \lt 9^4 = C^6\), så \(C \gt B\). Og \(A^3 = 80 \lt 81 = C^3\), så \(C \gt A\).`,
    T`Opløft i 3. eller 6. potens.`);
  q('2021-9', ['foelge', 'broek'], T`Beregn \[\cfrac{1}{2020} + \cfrac{1}{\cfrac{1}{2019} + \cfrac{1}{\cfrac{1}{2018} + \cfrac{1}{\ddots + \cfrac{1}{\cfrac13 + \cfrac{1}{\frac12 + 1}}}}}\]`,
    [T`\(\dfrac{2018}{2020}\)`, T`\(\dfrac{2019}{2020}\)`, T`\(\dfrac{2020}{2020}\)`, T`\(\dfrac{2021}{2020}\)`, T`\(\dfrac{2022}{2020}\)`], 'D',
    T`Regn nedefra: \(\frac13 + \frac1{\frac12 + 1} = \frac13 + \frac23 = 1\), \(\frac14 + \frac11 = \frac54\), \(\frac15 + \frac45 = 1\), \(\frac16 + 1 = \frac76\), … Udtrykket, der starter med \(\frac1n\), er 1 for ulige \(n\) og \(\frac{n+1}n\) for lige \(n\). Da 2020 er lige, er svaret \(\frac{2021}{2020}\).`,
    T`Regn de nederste etager ud, og led efter et mønster.`);
  q('2021-10', ['ulighed'], T`To reelle tal \(x\) og \(y\) opfylder \(xy \ne 0\) og \(x \lt y\). Hvilken af følgende påstande er da helt sikkert sand?`,
    [T`\(x + 0{,}1 \le y\)`, T`\(\dfrac1{x^3} \lt \dfrac1{y^3}\)`, T`\(x^2 \lt y^2\)`, T`\(x^3 \lt y^3\)`, T`\(\dfrac1x \gt \dfrac1y\)`], 'D',
    T`Modeksempler: A: \(x = 0{,}05\), \(y = 0{,}1\). B: \(x = 1\), \(y = 2\). C: \(x = -2\), \(y = -1\). E: \(x = -1\), \(y = 1\). Men \(y^3 - x^3 = (y - x)(y^2 + xy + x^2) \gt 0\), da \(y^2 + xy + x^2 \gt 0\).`,
    T`Prøv med negative tal.`);
  q('2021-11', ['funktion'], T`Du har uendeligt mange linjer \(\dots, \ell_{-2}, \ell_{-1}, \ell_0, \ell_1, \ell_2, \dots\) i planen. Ligningen for linje \(\ell_n\) er \[n^4 y + \frac{x}{n^2 + 1} + n = 0.\] Hvor mange af disse linjer skærer alle de andre linjer?`,
    [T`\(0\)`, T`\(1\)`, T`\(2\)`, T`\(4\)`, T`Uendeligt mange`], 'B',
    T`For \(n \ne 0\) har \(\ell_n\) og \(\ell_{-n}\) ligningerne \(n^4 y + \frac{x}{n^2 + 1} \pm n = 0\), så de er parallelle og skærer ikke hinanden. Linjen \(\ell_0\) er \(x = 0\), og den skærer \(\ell_n\) i \((0, -1/n^3)\). Kun \(\ell_0\) skærer alle de andre.`,
    T`Sammenlign \(\ell_n\) og \(\ell_{-n}\).`);
  q('2021-17', ['identitet'], T`De reelle tal \(x, y\) og \(z\) opfylder \(x + y + z = 4\), \(xy + yz + xz = -9\) og \(xyz = -12\). Hvad er \[\frac{x^2 + y^2 + z^2}{x^3 + y^3 + z^3}?\]`,
    [T`\(\dfrac14\)`, T`\(2021\)`, T`\(-\dfrac12\)`, T`\(3\)`, T`\(-\dfrac78\)`], 'A',
    T`\(x^2 + y^2 + z^2 = 4^2 - 2(-9) = 34\). Identiteten \(x^3 + y^3 + z^3 = 3xyz + (x + y + z)(x^2 + y^2 + z^2 - xy - yz - xz)\) giver \(x^3 + y^3 + z^3 = -36 + 4(34 + 9) = 136\). Brøken er \(34/136 = \frac14\).`,
    T`\(x^3 + y^3 + z^3 - 3xyz = (x + y + z)(x^2 + y^2 + z^2 - xy - yz - xz)\).`);

  /* ---------------- 2022/2023 ---------------- */
  q('2022-2', ['potens'], T`Hvilket udtryk er lig med \(\dfrac{a\sqrt{ab^4}}{(\sqrt{ab})^3}\) (når \(a \gt 0\) og \(b \gt 0\))?`,
    [T`\(1\)`, T`\(\sqrt a\)`, T`\(\sqrt b\)`, T`\(\sqrt{a^3b}\)`, T`\(\dfrac ba\)`], 'C',
    T`\(\dfrac{a\sqrt{ab^4}}{(\sqrt{ab})^3} = \dfrac{ab^2\sqrt a}{ab\sqrt{ab}} = \dfrac{b}{\sqrt b} = \sqrt b\).`,
    T`Skriv alt som \(a^s b^t\).`);
  q('2022-3', ['potens', 'ulighed'], T`Hvad er \(\sqrt[3]{100}\) afrundet til nærmeste heltal?`,
    [T`\(3\)`, T`\(4\)`, T`\(5\)`, T`\(6\)`, T`\(7\)`], 'C',
    T`\(4^3 = 64\) og \(5^3 = 125\), så \(4 \lt \sqrt[3]{100} \lt 5\). Og \(4{,}5^3 = \frac{729}8 \lt 100\), så det afrundede tal er 5.`,
    T`Sammenlign \(100\) med \(4{,}5^3\).`);
  q('2022-6', ['funktion'], T`Hvor mange heltal \(a\) er der, så ligningerne \(x^2 + y^2 = 1\) og \(x + y = a\) har mindst én fælles løsning med reelle tal \(x\) og \(y\)?`,
    [T`\(0\)`, T`\(1\)`, T`\(2\)`, T`\(3\)`, T`Uendeligt mange`], 'D',
    T`Den første ligning er cirklen med centrum \((0,0)\) og radius 1, den anden en linje med afstanden \(|a|/\sqrt2\) til origo. De skærer hinanden netop når \(|a| \le \sqrt2\), dvs. for heltallene \(a = -1, 0, 1\).`,
    T`Tegn det: en cirkel og en linje.`);
  q('2022-8', ['potens', 'identitet'], T`Hvad er udtrykket \[\frac{\dfrac{\sqrt6}{\sqrt3 - \sqrt2} - \dfrac{\sqrt3}{2 - \sqrt3}}{\sqrt2 - 1}\] lig med?`,
    [T`\(2\)`, T`\(3\)`, T`\(\sqrt6\)`, T`\(2\sqrt3\)`, T`\(3\sqrt2\)`], 'B',
    T`\(\frac1{\sqrt3 - \sqrt2} = \sqrt3 + \sqrt2\) og \(\frac1{2 - \sqrt3} = 2 + \sqrt3\). Tælleren er \(\sqrt6(\sqrt3 + \sqrt2) - \sqrt3(2 + \sqrt3) = 3\sqrt2 + 2\sqrt3 - 2\sqrt3 - 3 = 3(\sqrt2 - 1)\), så udtrykket er 3.`,
    T`\((\sqrt3 - \sqrt2)(\sqrt3 + \sqrt2) = 1\).`);
  q('2022-9', ['potens'], T`To reelle tal \(a\) og \(b\) opfylder \(3^a = 4^b = 6\). Hvad er værdien af \((a - 1)(2b - 1)\)?`,
    [T`\(1\)`, T`\(\sqrt6\)`, T`\(2\sqrt3\)`, T`\(6\)`, T`Ingen af disse`], 'A',
    T`\(3^{a-1} = 3^a/3 = 2\) og \(2^{2b-1} = 4^b/2 = 3\). Så \(3^{(a-1)(2b-1)} = 2^{2b-1} = 3\), og \((a - 1)(2b - 1) = 1\).`,
    T`Hvad er \(3^{a-1}\)? Og \(2^{2b-1}\)?`);

  /* ---------------- 2023/2024 ---------------- */
  q('2023-2', ['identitet', 'funktion'], T`Peter prøver at finde reelle tal \(x\) og \(y\), så \(x^2 + y^2 = 5\) og \(xy = 1\). Hvad kan man sige med sikkerhed om sådanne tal?`,
    [T`\(x \lt y\)`, T`\(x = y\)`, T`\(x \gt y\)`, T`Hverken udsagn A, B eller C er sikkert.`, T`Der findes ingen sådanne reelle tal \(x, y\).`], 'D',
    T`Betingelserne er symmetriske i \(x\) og \(y\), så hverken A eller C kan være sikre, og B ville kræve \(2x^2 = 5\) og \(x^2 = 1\). Indsættes \(y = 1/x\), fås \(x^4 - 5x^2 + 1 = 0\), med positive løsninger \(x^2 = \frac12(5 \pm \sqrt{21})\). Der findes altså løsninger.`,
    T`Er betingelserne symmetriske i \(x\) og \(y\)?`);
  q('2023-13', ['potens', 'identitet'], T`Hvilket tal har samme værdi som \[\sqrt{\frac{\pi + \sqrt{\pi^2 - \pi}}2} + \sqrt{\frac{\pi - \sqrt{\pi^2 - \pi}}2}\,?\]`,
    [T`\(\pi\)`, T`\(\sqrt\pi\)`, T`\(\sqrt{\pi^2 - \pi}\)`, T`\(\pi - \sqrt\pi\)`, T`\(\sqrt{\pi + \sqrt\pi}\)`], 'E',
    T`Kvadrér udtrykket: \(\frac{\pi + \sqrt{\pi^2 - \pi}}2 + \frac{\pi - \sqrt{\pi^2 - \pi}}2 + 2\sqrt{\frac{\pi^2 - (\pi^2 - \pi)}4} = \pi + \sqrt\pi\).`,
    T`Kvadrér udtrykket.`);
  q('2023-15', ['sammenlign', 'identitet'], T`Hvilket tal er størst?`,
    [T`\(\sqrt4 - \sqrt3\)`, T`\(\sqrt3 - \sqrt2\)`, T`\(\sqrt[3]3 - \sqrt[3]2\)`, T`\(\sqrt[3]2 - 1\)`, T`\(\sqrt[4]2 - 1\)`], 'B',
    T`\(D \gt E\), da \((\sqrt[3]2)^{12} = 16 \gt 8 = (\sqrt[4]2)^{12}\). Med \((x - y)(x + y) = x^2 - y^2\) er \(1/A = \sqrt4 + \sqrt3 \gt \sqrt3 + \sqrt2 = 1/B\). Med \((x - y)(x^2 + xy + y^2) = x^3 - y^3\) er \(1/C = 3^{2/3} + 3^{1/3}2^{1/3} + 2^{2/3} \gt 2^{2/3} + 2^{1/3} + 1 = 1/D\). Og \(1/D \gt \sqrt2 + \sqrt3 = 1/B\), så \(B\) er størst.`,
    T`Sammenlign de omvendte tal.`);
  q('2023-16', ['foelge'], T`Udregn \[\frac{(0! + 1!) \cdot (1! + 2!) \cdot (2! + 3!) \cdots (2023! + 2024!)}{0! \cdot 1! \cdot 2! \cdots 2023!}.\] (Her er \(n! = 1 \cdot 2 \cdots n\), og \(0! = 1! = 1\).)`,
    [T`\(2023!\)`, T`\(2023! \cdot 2023\)`, T`\(2024!\)`, T`\(2025!\)`, T`Ingen af disse.`], 'D',
    T`Udtrykket er et produkt af brøkerne \(\frac{n! + (n+1)!}{n!}\) for \(n = 0, 1, \dots, 2023\). Da \((n+1)! = n!(n+1)\), er hver brøk \(n + 2\). Produktet er \(2 \cdot 3 \cdots 2025 = 2025!\).`,
    T`Hvad er \(\frac{n! + (n+1)!}{n!}\)?`);
  q('2023-17', ['foelge', 'cifre'], T`Følgen \(a_n\) er defineret ved \(a_1 = 23\) og \(a_n = 5a_{n-1} + 7\) for \(n = 2, 3, \dots\). Hvad er det næstsidste ciffer i \(a_{2023}\)?`,
    [T`\(1\)`, T`\(2\)`, T`\(4\)`, T`\(6\)`, T`\(9\)`], 'A',
    T`Følg kun de to sidste cifre: \(23, 22, 17, 92, 67, 42, 17, \dots\). Fra \(a_3\) gentager \(17, 92, 67, 42\) sig med periode 4, så \(a_{4k+3}\) ender på 17. Da \(2023 = 4 \cdot 505 + 3\), ender \(a_{2023}\) på 17.`,
    T`Følg kun de to sidste cifre.`);

  /* ---------------- 2024/2025 ---------------- */
  q('2024-1', ['broek'], T`Hvilket tal er \(\dfrac{\frac12 + \frac13}{\frac16}\) lig med?`,
    [T`\(1{,}2\)`, T`\(2{,}4\)`, T`\(4{,}0\)`, T`\(4{,}8\)`, T`\(5{,}0\)`], 'E',
    T`\(\left(\frac12 + \frac13\right)/\frac16 = \frac56 \cdot 6 = 5\).`,
    T`At dividere med \(\frac16\) er at gange med 6.`);
  q('2024-4', ['potens'], T`Hvad er kvadratroden af \(2^{16}\)?`,
    [T`\(2^{15}\)`, T`\(2^4\)`, T`\(1024\)`, T`\(512\)`, T`\(256\)`], 'E',
    T`\(\sqrt{2^{16}} = 2^8 = 256\), fordi \((2^8)^2 = 2^{16}\).`,
    T`Halvér eksponenten.`);
  q('2024-5', ['sammenlign'], T`Hvilket af tallene er størst?`,
    [T`\(1/\sqrt8\)`, T`\(0{,}33\)`, T`\(1/\sqrt{10}\)`, T`\(0{,}250\)`, T`\(1/3\)`], 'A',
    T`Kvadrér: \(A^2 = \frac18\), \(C^2 = \frac1{10}\), \(D^2 = \frac1{16}\), \(E^2 = \frac19\). \(A^2\) har den mindste nævner, så \(A\) er størst af dem, og \(B = 0{,}33 \lt E\).`,
    T`Kvadrér tallene.`);
  q('2024-13', ['identitet'], T`Hvert af tallene \(a, b, c\) og \(d\) er enten 1 eller 0, og \(a \ne c\) og \(b \ne d\). Hvad er \((a + b)(a + c)(b + c)(b + d)(c + d)\) nødvendigvis lig med?`,
    [T`\(0\)`, T`\(1\)`, T`\(a^2 + b^2\)`, T`\(c + d\)`, T`\(2bc\)`], 'E',
    T`\(a + c = b + d = 1\), så produktet er \((a + b)(b + c)(c + d)\). Desuden er \(ac = bd = 0\), så \((a + b)(c + d) = ad + bc\), og \((ad + bc)(b + c) = b^2c + bc^2 = 2bc\), da \(b^2 = b\) og \(c^2 = c\). Med \(a = d = 0\), \(b = c = 1\) ser vi, at A–D ikke holder.`,
    T`Hvad er \(a + c\) og \(b + d\)?`);
  q('2024-17', ['ulighed', 'funktion'], T`For reelle tal \(x\) lader vi \(\lfloor x \rfloor\) betegne det største heltal mindre end eller lig med \(x\). Fx er \(\lfloor 4 \rfloor = 4\), \(\lfloor \pi \rfloor = 3\) og \(\lfloor -1{,}9 \rfloor = -2\). Hvilken svarmulighed er nødvendigvis sand for alle reelle tal \(x\) og \(y\)?`,
    [T`\(\lfloor x \rfloor + \lfloor y \rfloor = \lfloor x + y \rfloor\)`, T`\(\lfloor x \rfloor + \lfloor y \rfloor \lt \lfloor x + y \rfloor\)`, T`\(\lfloor x \rfloor \cdot \lfloor y \rfloor = \lfloor xy \rfloor\)`, T`\(\lfloor x \rfloor \cdot \lfloor y \rfloor \le \lfloor xy \rfloor\)`, T`Ingen af A, B, C eller D behøver at være sande.`], 'E',
    T`Modeksempler: A: \(x = y = \frac12\) giver \(0 + 0 \ne 1\). B: lighed når \(x\) og \(y\) er heltal. C: \(x = \frac12\), \(y = 2\) giver \(0 \cdot 2 \ne 1\). D: \(x = y = -\frac32\) giver \((-2)(-2) = 4 \gt 2 = \lfloor 2{,}25 \rfloor\).`,
    T`Find et modeksempel til hver af A–D. Prøv negative tal for D.`);
  q('2024-18', ['cifre', 'identitet'], T`Alle tocifrede positive heltal \(10, 11, \dots, 99\) står skrevet på en tavle. Jane visker hvert tal ud og skriver i stedet produktet af tallets cifre. Hvad er summen af tallene, der nu står på tavlen?`,
    [T`\(2024\)`, T`\(2025\)`, T`\(4904\)`, T`\(4905\)`, T`Ingen af disse.`], 'B',
    T`Rækken med tierciffer \(n\) giver \(n(0 + 1 + \dots + 9) = 45n\). I alt \((1 + 2 + \dots + 9) \cdot 45 = 45 \cdot 45 = 2025\).`,
    T`Saml tallene efter tiercifferet.`);

  /* ---------------- 2025/2026 ---------------- */
  q('2025-1', ['tekst'], T`Om et år bliver Marie dobbelt så gammel, som hun var for tre år siden. Om hvor mange år bliver hun tre gange så gammel, som hun er nu?`,
    [T`\(8\)`, T`\(9\)`, T`\(12\)`, T`\(14\)`, T`\(16\)`], 'D',
    T`Er Marie \(a\) år, er \(a + 1 = 2(a - 3)\), så \(a = 7\). Hun bliver \(3a = 21\) om 14 år.`,
    T`Kald Maries alder nu \(a\).`);
  q('2025-4', ['ligning'], T`Hvis \(10a + 6b = -4\) og \(21b + 9c = 5\), så er \(27c - 105a\) lig med`,
    [T`\(-37\)`, T`\(-27\)`, T`\(7\)`, T`\(17\)`, T`\(57\)`], 'E',
    T`Gang den første ligning med \(\frac{21}2\) og den anden med 3: \(105a + 63b = -42\) og \(63b + 27c = 15\). Træk den første fra den anden: \(27c - 105a = 57\).`,
    T`Gang ligningerne, så \(b\)-leddene bliver ens.`);
  q('2025-7', ['foelge'], T`I en uendelig talfølge \(p, 5, q, r, 3, \dots\) er hvert led lig med summen af de to næste led i følgen. Hvad er værdien af \(p + q + r\)?`,
    [T`\(3\)`, T`\(5\)`, T`\(8\)`, T`\(14\)`, T`\(18\)`], 'D',
    T`\(r + 3 = q\), \(q + r = 5\) og \(5 + q = p\). Så \(2r + 3 = 5\), \(r = 1\), \(q = 4\), \(p = 9\), og \(p + q + r = 14\).`,
    T`Skriv en ligning for hvert led.`);
  q('2025-9', ['foelge'], T`Følgen \(a_0, a_1, a_2, \dots\) opfylder \(a_0 = 0\) og \(a_n = n - a_{n-1}\) for alle \(n \ge 1\). Hvad er værdien af \(a_{2025}\)?`,
    [T`\(2026\)`, T`\(2025\)`, T`\(1014\)`, T`\(1013\)`, T`\(1012\)`], 'D',
    T`\(a_{n+1} = n + 1 - a_n = n + 1 - (n - a_{n-1}) = a_{n-1} + 1\), så \(a_{n+2k} = a_n + k\). Med \(a_1 = 1\) er \(a_{2025} = a_1 + 1012 = 1013\).`,
    T`Udtryk \(a_{n+1}\) ved \(a_{n-1}\).`);
  q('2025-13', ['tekst'], T`Nils og Henrik skal male et hegn. Hvis Nils gjorde det alene, ville han bruge én time, og hvis Henrik gjorde det alene, ville han bruge én time og 15 minutter. Hvor lang tid bruger de, hvis de arbejder samtidig og starter fra hver sin ende?`,
    [T`26 minutter og 40 sekunder`, T`33 minutter og 20 sekunder`, T`33 minutter og 45 sekunder`, T`37 minutter og 30 sekunder`, T`2 timer og 15 minutter`], 'B',
    T`På én time maler Nils 1 hegn og Henrik \(\frac45\) hegn, tilsammen \(\frac95\). Så ét hegn tager \(\frac59\) time, altså 33 minutter og 20 sekunder.`,
    T`Hvor stor en del af hegnet maler de på én time?`);
  q('2025-20', ['identitet', 'cifre'], T`Det er et faktum, at \(3^{20} + 4^9 + 6^{10} = pq\), hvor \(p\) og \(q\) er primtal. Hvad er sidste ciffer i \(p + q\)?`,
    [T`\(2\)`, T`\(4\)`, T`\(6\)`, T`\(7\)`, T`\(8\)`], 'A',
    T`\(3^{20} + 4^9 + 6^{10} = 3^{20} + 2 \cdot 3^{10} \cdot 2^9 + 2^{18} = (3^{10} + 2^9)^2\). Så \(p = q = 3^{10} + 2^9\). \(3^{10}\) ender på 9 og \(2^9 = 512\) på 2, så \(p\) ender på 1, og \(p + q = 2p\) ender på 2.`,
    T`Skriv alle tre led som potenser af 2 og 3. Ligner det en kvadratsætning?`);

  /* ---------------- delemner ---------------- */
  const TOPICS = [
    { k: 'broek', name: 'Brøker, procent & forhold' },
    { k: 'potens', name: 'Potenser & rødder' },
    { k: 'sammenlign', name: 'Hvilket tal er størst?' },
    { k: 'ligning', name: 'Ligningssystemer' },
    { k: 'tekst', name: 'Tekstopgaver: alder, fart, arbejde' },
    { k: 'identitet', name: 'Omskrivning & identiteter' },
    { k: 'foelge', name: 'Følger & summer' },
    { k: 'funktion', name: 'Funktioner & polynomier' },
    { k: 'ulighed', name: 'Uligheder & vurderinger' },
    { k: 'cifre', name: 'Cifre & heltal' }
  ];

  /* ---------------- pilot: guidede trin, ét manim-klip pr. trin ----------------
     Trin i: klip media/<id>/0(i+1).mp4. Sidste klip hører til slutsvaret A–E.
     mcq: o[0] er rigtigt (vises blandet). num: a = facit. */
  const STEPS = {
    '2007-1': [
      { k: 'mcq', p: T`Begge faktorer i \(1997 \cdot 2003\) ligger lige langt fra 2000. Skriv produktet om.`,
        o: [T`\((2000 - 3)(2000 + 3)\)`, T`\((2000 - 3)^2\)`, T`\(2000^2 - 3\)`, T`\((2000 + 3)^2 - 6\)`],
        why: T`\(1997 = 2000 - 3\) og \(2003 = 2000 + 3\). Et produkt af en differens og en sum.` },
      { k: 'num', p: T`Med \((a - b)(a + b) = a^2 - b^2\) er \(1997 \cdot 2003 = 2000^2 - 9\). Hvad er \(1993 \cdot 2007 - 2000^2\)?`, a: -49,
        why: T`\(1993 \cdot 2007 = (2000 - 7)(2000 + 7) = 2000^2 - 49\).` }
    ],
    '2013-3': [
      { k: 'mcq', p: T`Læg de tre ligninger sammen. Hvad står der på venstresiden?`,
        o: [T`\(4x + 4y + 4z\)`, T`\(3x + 3y + 3z\)`, T`\(x + y + z\)`, T`\(9x + 3y + 3z\)`],
        why: T`Hver variabel optræder én gang med koefficient 3 og én gang med koefficient 1.` },
      { k: 'num', p: T`Hvad er summen af højresiderne \(1 + \frac12 - \frac12\)?`, a: 1,
        why: T`Så \(4(x + y + z) = 1\).` }
    ],
    '2019-4': [
      { k: 'num', p: T`Hvor mange timer tager de første 45 km med 45 km/t?`, a: 1,
        why: T`\(45/45 = 1\) time.` },
      { k: 'num', p: T`Hvor mange timer tager de sidste 45 km med 90 km/t?`, a: 0.5,
        why: T`\(45/90 = 0{,}5\) time. Den hurtige del varer kortest, så den tæller mindst i gennemsnittet.` }
    ],
    '2020-4': [
      { k: 'num', p: T`70 % er ikke fra Argentina. Hvor mange procent er fra Argentina?`, a: 30,
        why: T`\(100 - 70 = 30\).` },
      { k: 'num', p: T`82 % er ikke fra Chile. Hvor mange procent er fra Chile?`, a: 18,
        why: T`\(100 - 82 = 18\). Argentina og Chile udgør altså \(48\) %.` }
    ],
    '2015-5': [
      { k: 'mcq', p: T`Tælleren har formen \(a^4 - b^4\). Hvordan faktoriseres den?`,
        o: [T`\((a^2 - b^2)(a^2 + b^2)\)`, T`\((a - b)^4\)`, T`\((a^2 - b^2)^2\)`, T`\((a - b)(a^3 + b^3)\)`],
        why: T`\(a^4 - b^4 = (a^2)^2 - (b^2)^2\) er en differens af to kvadrater. Faktoren \(a^2 + b^2\) går ud mod nævneren.` },
      { k: 'num', p: T`Tilbage er \(2016^2 - 2015^2\). Hvad er det?`, a: 4031,
        why: T`\(2016^2 - 2015^2 = (2016 - 2015)(2016 + 2015) = 1 \cdot 4031\).` }
    ],
    '2022-6': [
      { k: 'mcq', p: T`Hvad beskriver ligningen \(x^2 + y^2 = 1\)?`,
        o: [T`En cirkel med centrum \((0, 0)\) og radius 1`, T`En cirkel med radius \(\frac12\)`, T`En parabel`, T`En ret linje`],
        why: T`Punkterne med afstand 1 til origo.` },
      { k: 'mcq', p: T`Linjen \(x + y = a\) har afstanden \(|a|/\sqrt2\) til origo. Hvornår rammer den cirklen?`,
        o: [T`Når \(|a| \le \sqrt2\)`, T`Når \(|a| \le 1\)`, T`Når \(|a| \le 2\)`, T`For alle \(a\)`],
        why: T`Linjen rammer cirklen, når afstanden højst er radius: \(|a|/\sqrt2 \le 1\). Ved \(a = \pm\sqrt2\) er den tangent.` }
    ],
    '2017-11': [
      { k: 'mcq', p: T`Alle tallene (undtagen 1) har formen \(\sqrt[n]n\). Hvilken funktion skal vi se på?`,
        o: [T`\(f(x) = x^{1/x}\)`, T`\(f(x) = \sqrt x\)`, T`\(f(x) = x^x\)`, T`\(f(x) = 1/x\)`],
        why: T`\(\sqrt[n]n = n^{1/n}\). Grafen stiger op til \(x = e \approx 2{,}718\) og falder derefter.` },
      { k: 'mcq', p: T`Hvordan forholder \(\sqrt2\) og \(\sqrt[4]4\) sig til hinanden?`,
        o: [T`De er lige store`, T`\(\sqrt2 \gt \sqrt[4]4\)`, T`\(\sqrt2 \lt \sqrt[4]4\)`, T`Det kan ikke afgøres`],
        why: T`\(\sqrt[4]4 = 4^{1/4} = (2^2)^{1/4} = 2^{1/2}\).` }
    ],
    '2022-9': [
      { k: 'num', p: T`\(3^a = 6\). Hvad er \(3^{a-1}\)?`, a: 2,
        why: T`\(3^{a-1} = 3^a/3 = 6/3 = 2\).` },
      { k: 'num', p: T`\(4^b = 2^{2b} = 6\). Hvad er \(2^{2b-1}\)?`, a: 3,
        why: T`\(2^{2b-1} = 2^{2b}/2 = 6/2 = 3\).` }
    ],
    '2005-13': [
      { k: 'mcq', p: T`Skriv \(A = 100x + 10y + z\). Hvad er \(B\), når det midterste ciffer fjernes?`,
        o: [T`\(10x + z\)`, T`\(10y + z\)`, T`\(10x + y\)`, T`\(x + z\)`],
        why: T`Tilbage står cifrene \(x\) og \(z\).` },
      { k: 'mcq', p: T`\(100x + 10y + z = 6(10x + z)\). Hvad forenkles det til?`,
        o: [T`\(8x + 2y = z\)`, T`\(4x + y = z\)`, T`\(40x = 5z\)`, T`\(x + y = z\)`],
        why: T`\(40x + 10y = 5z\), divideret med 5. Da \(z \le 9\), må \(x = 1\) og \(y = 0\).` }
    ],
    '2016-15': [
      { k: 'mcq', p: T`Kald værdien \(x\). Under den yderste rod står \(6\) plus …?`,
        o: [T`… \(x\) selv, så \(x = \sqrt{6 + x}\)`, T`… \(\sqrt6\), så \(x = \sqrt{6 + \sqrt6}\)`, T`… \(6\), så \(x = \sqrt{12}\)`, T`… ingenting, så \(x = \sqrt6\)`],
        why: T`Uendelige udtryk indeholder sig selv. Det er nøglen.` },
      { k: 'num', p: T`\(x = \sqrt{6 + x}\) giver \(x^2 - x - 6 = 0\). Hvad er den positive løsning?`, a: 3,
        why: T`\(x^2 - x - 6 = (x - 3)(x + 2)\). Den negative løsning forkastes, da \(x\) er en kvadratrod.` }
    ],
    '2023-16': [
      { k: 'mcq', p: T`Se på én faktor: \(\dfrac{n! + (n+1)!}{n!}\). Hvad er den?`,
        o: [T`\(n + 2\)`, T`\(n + 1\)`, T`\(2n + 1\)`, T`\((n + 1)!\)`],
        why: T`\((n+1)! = n! \cdot (n + 1)\), så brøken er \(1 + (n + 1) = n + 2\).` },
      { k: 'num', p: T`Faktorerne er \(n + 2\) for \(n = 0, 1, \dots, 2023\). Hvad er den sidste faktor?`, a: 2025,
        why: T`Produktet er \(2 \cdot 3 \cdot 4 \cdots 2025\).` }
    ],
    '2006-17': [
      { k: 'mcq', p: T`Lad Berit være \(b\) år, dengang Anna var \(4b\). Anna er nu \(5b\). Hvor mange år er der gået?`,
        o: [T`\(b\) år`, T`\(4b\) år`, T`\(2b\) år`, T`\(5b\) år`],
        why: T`\(5b - 4b = b\). Berit er altså nu \(b + b = 2b\).` },
      { k: 'num', p: T`Om 6 år: \(5b + 6 = 2(2b + 6)\). Hvad er \(b\)?`, a: 6,
        why: T`\(5b + 6 = 4b + 12\), så \(b = 6\). Anna er 30 og Berit 12.` }
    ],
    '2012-20': [
      { k: 'mcq', p: T`Sæt \(x\) uden for parentes: \(x(1 + x + \dots + x^{2011}) = 0\). Hvilken løsning ser du med det samme?`,
        o: [T`\(x = 0\)`, T`\(x = 1\)`, T`\(x = 2012\)`, T`Ingen`],
        why: T`Et produkt er 0, når en faktor er 0.` },
      { k: 'mcq', p: T`Par leddene: \(1 + x + \dots + x^{2011} = (1 + x)(1 + x^2 + x^4 + \dots + x^{2010})\). Hvor mange reelle rødder har den sidste faktor?`,
        o: [T`Ingen: alle led er \(\ge 0\), og det første er 1`, T`Én: \(x = -1\)`, T`1005`, T`2010`],
        why: T`Lige potenser er aldrig negative, så summen er mindst 1. Kun \(x = -1\) kommer fra faktoren \(1 + x\).` }
    ],
    '2024-17': [
      { k: 'mcq', p: T`Prøv A med \(x = y = \frac12\). Hvad får du?`,
        o: [T`\(0 + 0 = 0\), men \(\lfloor 1 \rfloor = 1\), så A er falsk`, T`\(0 + 0 = 0 = \lfloor 1 \rfloor\), så A holder`, T`\(1 + 1 = 2\)`],
        why: T`Brøkdelene kan tilsammen give et helt tal ekstra. Og B er falsk, når \(x\) og \(y\) er heltal.` },
      { k: 'mcq', p: T`Prøv D med \(x = y = -\frac32\). Hvad er \(\lfloor x \rfloor \cdot \lfloor y \rfloor\) og \(\lfloor xy \rfloor\)?`,
        o: [T`\(4\) og \(2\), så D er falsk`, T`\(1\) og \(2\), så D holder`, T`\(4\) og \(4\), så D holder`],
        why: T`\(\lfloor -1{,}5 \rfloor = -2\), så produktet er 4, mens \(xy = 2{,}25\) og \(\lfloor 2{,}25 \rfloor = 2\).` }
    ],
    '2025-20': [
      { k: 'mcq', p: T`Skriv \(6^{10}\) med potenser af 2 og 3, så det passer med \(3^{20} = (3^{10})^2\) og \(4^9 = (2^9)^2\).`,
        o: [T`\(2 \cdot 3^{10} \cdot 2^9\)`, T`\(3^{10} \cdot 2^9\)`, T`\(2^{20} \cdot 3^{10}\)`, T`\(6 \cdot 3^{10}\)`],
        why: T`\(6^{10} = 2^{10} \cdot 3^{10} = 2 \cdot 3^{10} \cdot 2^9\): det dobbelte produkt.` },
      { k: 'mcq', p: T`Så er \(3^{20} + 4^9 + 6^{10} = (3^{10})^2 + 2 \cdot 3^{10} \cdot 2^9 + (2^9)^2\). Det er`,
        o: [T`\((3^{10} + 2^9)^2\)`, T`\((3^{10} + 2^{18})^2\)`, T`\((3^{20} + 2^9)^2\)`, T`\((3 + 2)^{20}\)`],
        why: T`Første kvadratsætning. Så \(p = q = 3^{10} + 2^9\).` },
      { k: 'num', p: T`\(3^{10}\) ender på 9, og \(2^9 = 512\). Hvad er sidste ciffer i \(p\)?`, a: 1,
        why: T`\(9 + 2 = 11\), så \(p\) ender på 1, og \(p + q = 2p\) ender på 2.` }
    ]
  };

  window.ABEL = P;
  window.ABEL_TOPICS = TOPICS;
  window.ABEL_STEPS = STEPS;
})();
