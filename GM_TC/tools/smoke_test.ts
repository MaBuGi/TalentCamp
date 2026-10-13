// Røgtest af en arcade-side i headless Chromium via DevTools-protokollen.
//   deno run -A tools/smoke_test.ts algebra/arcade/index.html <screenshot-mappe>
// Tjekker filtre, en hel pilotopgave med klip, udvalgte + LaTeX-eksport, og konsolfejl.
const [pagePath, shotDir = "."] = Deno.args;
const url = "file://" + (await Deno.realPath(pagePath));
const port = 9333;
const chrome = new Deno.Command("chromium", {
  args: ["--headless=new", "--disable-gpu", "--no-sandbox", "--hide-scrollbars", `--remote-debugging-port=${port}`,
    "--autoplay-policy=no-user-gesture-required", "--user-data-dir=" + (await Deno.makeTempDir()), "about:blank"],
  stdout: "null", stderr: "null",
}).spawn();

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
let targets: any[] = [];
for (let i = 0; i < 50 && !targets.length; i++) {
  await sleep(200);
  try { targets = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).filter((t: any) => t.type === "page"); } catch { /* starter */ }
}
const ws = new WebSocket(targets[0].webSocketDebuggerUrl);
await new Promise((r) => ws.onopen = r);
let id = 0;
const pending = new Map<number, (v: any) => void>();
const errors: string[] = [];
ws.onmessage = (ev) => {
  const m = JSON.parse(ev.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)!(m); pending.delete(m.id); }
  if (m.method === "Runtime.exceptionThrown") errors.push("exception: " + JSON.stringify(m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text));
  if (m.method === "Runtime.consoleAPICalled" && m.params.type === "error") errors.push("console.error: " + m.params.args.map((a: any) => a.value ?? a.description).join(" "));
  if (m.method === "Log.entryAdded" && m.params.entry.level === "error") errors.push("log: " + m.params.entry.text + " " + (m.params.entry.url || ""));
};
const send = (method: string, params: any = {}) => new Promise<any>((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const js = async (expr: string) => {
  // eval i en funktion, så const/let ikke lever videre mellem kald
  const wrapped = `(function () { return eval(${JSON.stringify(expr)}); })()`;
  const r = await send("Runtime.evaluate", { expression: wrapped, awaitPromise: true, returnByValue: true });
  if (r.result?.exceptionDetails) throw new Error(expr + " -> " + JSON.stringify(r.result.exceptionDetails));
  return r.result?.result?.value;
};
const shot = async (name: string) => {
  const r = await send("Page.captureScreenshot", { format: "png" });
  await Deno.writeFile(`${shotDir}/${name}.png`, Uint8Array.from(atob(r.result.data), (c) => c.charCodeAt(0)));
};
let fails = 0;
const ok = (cond: boolean, what: string) => { console.log(`${cond ? "OK  " : "FEJL"} ${what}`); if (!cond) fails++; };

await send("Runtime.enable"); await send("Log.enable"); await send("Page.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1400, height: 1000, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url: url + "#2007-1" });
await sleep(1500);
await js(`new Promise(r => { const t = setInterval(() => { if (window.__mjReady) { clearInterval(t); r(1); } }, 100); setTimeout(() => r(0), 15000); })`);
await js(`localStorage.clear(); location.hash = '#2007-1'; location.reload(); 1`);
await sleep(1500);
await js(`new Promise(r => { const t = setInterval(() => { if (window.__mjReady) { clearInterval(t); r(1); } }, 100); setTimeout(() => r(0), 15000); })`);
await sleep(800);

// --- filtre ---
const total = await js(`document.querySelectorAll('#mapList .qlink').length`);
ok(total === 120, `listen viser alle opgaver (${total})`);
const expPot = await js(`window.ABEL.filter(p => p.topics.includes('potens')).length`);
await js(`document.querySelector('[data-ftopic="potens"]').click(); 1`);
const nPot = await js(`document.querySelectorAll('#mapList .qlink').length`);
ok(nPot === expPot, `delemne "potens" giver ${nPot} (forventet ${expPot})`);
const expPot5 = await js(`window.ABEL.filter(p => p.topics.includes('potens') && Math.ceil(p.id.split('-')[1] / 4) === 5).length`);
await js(`document.querySelector('[data-fdiff="5"]').click(); 1`);
const nPot5 = await js(`document.querySelectorAll('#mapList .qlink').length`);
ok(nPot5 === expPot5, `+ sværhed 5 giver ${nPot5} (forventet ${expPot5})`);
await js(`document.getElementById('fTopicsClear').click(); document.getElementById('fDiffClear').click(); document.getElementById('fAnim').click(); 1`);
const nAnim = await js(`document.querySelectorAll('#mapList .qlink').length`);
ok(nAnim === 15, `"Med animation" giver ${nAnim}`);
await js(`document.getElementById('fAnim').click(); const i = document.getElementById('fq'); i.value = '2015/16'; i.dispatchEvent(new Event('input')); 1`);
await sleep(400);
const nSearch = await js(`document.querySelectorAll('#mapList .qlink').length`);
ok(nSearch === 5, `søgning "2015/16" giver ${nSearch}`);
await js(`const i = document.getElementById('fq'); i.value = ''; i.dispatchEvent(new Event('input')); 1`);
await sleep(400);
await shot("desktop_start");

// --- pilotopgave 2007-1: trin, klip, slutsvar ---
const videoOk = async (sel: string) => js(`new Promise(r => { const v = document.querySelector('${sel}'); if (!v) return r('ingen video'); if (v.readyState >= 1) return r(v.duration); v.addEventListener('loadedmetadata', () => r(v.duration)); v.addEventListener('error', () => r('fejl ' + (v.error && v.error.code))); setTimeout(() => r('timeout ' + v.readyState), 6000); })`);
await js(`document.querySelector('[data-q="2007-1"]').click(); 1`);
await sleep(300);
ok(await js(`document.querySelector('#qroot').dataset.q`) === "2007-1", "opgave 2007-1 åbnet");
await js(`document.querySelector('.step.active [data-pick="1"]').click(); 1`);
ok(await js(`document.querySelectorAll('.step.active .opt.wrong').length`) === 1, "forkert valg markeres");
await js(`document.querySelector('.step.active [data-pick="0"]').click(); 1`);
await sleep(300);
const d1 = await videoOk('.step.active video');
ok(typeof d1 === "number" && d1 > 1, `klip 1 indlæst (${d1} s)`);
ok(String(await js(`document.querySelector('.step.active video').getAttribute('src')`)) === "media/2007-1/01.mp4", "klip 1 har rigtig sti");
await js(`document.querySelector('.step.active [data-next]').click(); 1`);
await js(`const i = document.querySelector('.step.active input[data-num]'); i.value = '-49'; document.querySelector('.step.active [data-check]').click(); 1`);
await sleep(300);
const d2 = await videoOk('.step.active video');
ok(typeof d2 === "number", `trin 2 (tal-svar -49) godkendt og klip 2 indlæst (${d2} s)`);
await js(`document.querySelector('.step.active [data-next]').click(); 1`);
ok(await js(`document.querySelectorAll('.step.active .opts.abc .opt').length`) === 5, "slutsvar viser A–E");
await js(`document.querySelector('.step.active [data-pick="2"]').click(); 1`);
await sleep(300);
const d3 = await videoOk('.step.active video');
ok(typeof d3 === "number", `slutsvar C godkendt og klip 3 indlæst (${d3} s)`);
await js(`document.querySelector('.step.active [data-next]').click(); 1`);
await sleep(500);
ok(await js(`!!document.querySelector('#finish .finish')`), "løsningsfeltet vises");
ok(await js(`document.querySelectorAll('#player [data-chap]').length`) === 3, "afspiller med 3 kapitler");
ok(await js(`document.getElementById('solved').textContent`) === "1/120", "Løst-tæller er 1/120");
await js(`document.querySelector('#player [data-chap="2"]').click(); 1`);
ok(String(await js(`document.getElementById('pv').getAttribute('src')`)) === "media/2007-1/03.mp4", "kapitel-knap skifter klip");
await shot("desktop_finish");

// --- ikke-pilot: kun A–E + hint ---
await js(`document.querySelector('[data-q="2005-1"]').click(); 1`);
await sleep(300);
ok(await js(`document.querySelectorAll('.step.active .opts.abc .opt').length`) === 5, "almindelig opgave viser A–E direkte");
await js(`document.querySelector('.step.active [data-hint]').click(); 1`);
ok(await js(`document.querySelector('.step.active .fb.info') !== null`), "hint vises");
await js(`document.querySelector('.step.active [data-pick="1"]').click(); 1`);
await js(`document.querySelector('.step.active [data-next]').click(); 1`);
ok(await js(`document.querySelector('.big-stars').querySelectorAll('.on').length`) === 2, "hint giver højst 2 stjerner");

// --- udvalgte + LaTeX ---
await js(`document.querySelector('.q-head [data-star]').click(); document.querySelector('[data-star="2022-6"]').click(); 1`);
ok(await js(`document.getElementById('selN').textContent`) === "2", "2 opgaver udvalgt");
await js(`document.getElementById('selBtn').click(); 1`);
await sleep(300);
const tex = String(await js(`document.getElementById('exportBox').value`));
ok(tex.includes("\\begin{opg}") && tex.includes("\\label{opg:abel-2005-1}") && tex.includes("$x^2 + y^2 = 1$") && tex.includes("\\textbf{E}"), "LaTeX-eksport har opg-miljø, label, $-matematik og svar");
ok(!/\\lt\b|\\gt\b|\\\(|\\\)/.test(tex), "ingen MathJax-rester (\\lt, \\( ) i LaTeX");
await js(`document.querySelector('[data-copy="key"]').click(); 1`);
await sleep(200);
ok(String(await js(`document.getElementById('exportBox').value`)).includes("Opgave 1: B"), "facit-eksport");
await shot("desktop_udvalgte");

// --- review ---
await js(`document.getElementById('reviewBtn').click(); 1`);
ok(await js(`document.querySelector('.q-title').textContent.startsWith('Gentag')`), "Gentag-visning åbner");

// --- alle opgaver: vis alle trin + løsningen, og tæl MathJax-fejl og formler der stikker ud ---
const ids: string[] = await js(`window.ABEL.map(p => p.id)`);
let mjErr = 0, wide = 0;
const wideIds: string[] = [];
for (const pid of ids) {
  await js(`location.hash = '#${pid}'; document.querySelector('[data-q="${pid}"]').click(); 1`);
  for (let k = 0; k < 6; k++) {
    const more = await js(`(() => { const s = document.querySelector('.step.active [data-show]'); if (s) { s.click(); const n = document.querySelector('.step.active [data-next]'); if (n) n.click(); return 1; } return 0; })()`);
    if (!more) break;
  }
  await js(`new Promise(r => setTimeout(r, 120))`);
  await js(`new Promise(r => { const t = setInterval(() => { if (!document.querySelector('#main') || !/\\\\\\(/.test(document.querySelector('#main').innerText)) { clearInterval(t); r(1); } }, 50); setTimeout(() => { clearInterval(t); r(0); }, 3000); })`);
  const e = await js(`document.querySelectorAll('#main mjx-merror, #main [data-mjx-error]').length`);
  const w = await js(`[...document.querySelectorAll('#main .sol, #main .q-text, #main .done-step')].filter(el => el.scrollWidth > el.clientWidth + 2).length`);
  mjErr += e; if (w) { wide += w; wideIds.push(pid); }
  if (e) console.log(`     MathJax-fejl i ${pid}`);
}
ok(mjErr === 0, `alle ${ids.length} opgaver + løsninger renderer uden MathJax-fejl`);
ok(wide === 0, `ingen tekst/løsning stikker ud til siden${wideIds.length ? ' (' + wideIds.join(', ') + ')' : ''}`);
await js(`localStorage.clear(); 1`);

// --- mobil + mørkt tema ---
await send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
await js(`location.hash = '#2016-15'; location.reload(); 1`);
await sleep(2500);
const overflow = await js(`document.documentElement.scrollWidth - document.documentElement.clientWidth`);
ok(overflow <= 0, `ingen vandret scroll på 390 px (${overflow})`);
await shot("mobil_lys");
await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: "dark" }] });
await sleep(500);
await shot("mobil_moerk");
await send("Emulation.setDeviceMetricsOverride", { width: 1400, height: 1000, deviceScaleFactor: 1, mobile: false });
await sleep(500);
await shot("desktop_moerk");

console.log(errors.length ? "KONSOLFEJL:\n  " + errors.join("\n  ") : "OK   ingen konsolfejl");
if (errors.length) fails++;
ws.close();
chrome.kill();
Deno.exit(fails ? 1 : 0);
