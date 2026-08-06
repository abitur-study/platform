/**
 * İçerik doğrulayıcı: content/aufgaben/**.json altındaki her soruyu
 * şema, çoktan seçmeli yasağı, LaTeX, adım kalitesi, puan, operatör,
 * sertifika tutarlılığı, id ve tekrar kapılarından geçirir.
 *
 * Çalıştırma: npm run validate
 * Saf kontrol fonksiyonları test edilebilsin diye export edilir (scripts/validate.test.ts).
 */

import { readdirSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import type { Aufgabe } from "../content/schema";
import { OPERATOREN } from "../content/registry";
import { ladeDatei } from "../src/lib/content";
import { renderMd } from "../src/lib/markdown";

const WURZEL = join(process.cwd(), "content", "aufgaben");

/** Doğrulanacak her Markdown alanı: [alan adı, metin]. LaTeX ve MC kapıları bunu kullanır. */
export function mdFelder(a: Aufgabe): [string, string][] {
  const felder: [string, string][] = [["aufgabenstellung", a.aufgabenstellung]];
  a.material.forEach((m, i) => felder.push([`material[${i}].inhalt`, m.inhalt]));
  a.tipps.forEach((t, i) => felder.push([`tipps[${i}]`, t]));
  a.loesung.schritte.forEach((s, i) => {
    felder.push([`schritte[${i}].titel`, s.titel]);
    felder.push([`schritte[${i}].inhalt`, s.inhalt]);
    felder.push([`schritte[${i}].warum.de`, s.warum.de]);
    felder.push([`schritte[${i}].warum.tr`, s.warum.tr]);
  });
  a.loesung.haeufige_fehler.forEach((f, i) =>
    felder.push([`haeufige_fehler[${i}]`, f]),
  );
  return felder;
}

// --- 2) Çoktan seçmeli dedektörü ---------------------------------------

const MC_WOERTER = [
  "kreuze",
  "welche der folgenden",
  "richtig oder falsch",
  "mehrfachauswahl",
  "multiple choice",
];

/** Satır başındaki "A)" / "a)" şıkları. */
const SCHUSS = /^\s*[A-Za-z]\)\s*(.+)$/;

/**
 * Metinde çoktan seçmeli izi var mı? Varsa gerekçeleri döner.
 * Abitur soruları meşru olarak a)/b)/c) alt şıklarına bölünür — bunlar
 * "Bestimmen Sie ..." gibi tam emir cümleleridir. Bu yüzden bir satır ancak
 * hem kısa (<60 karakter) hem de nezaket emri ("Sie") içermiyorsa şık sayılır.
 */
export function findeMultipleChoice(text: string): string[] {
  const fehler: string[] = [];
  const klein = text.toLowerCase();

  for (const w of MC_WOERTER) {
    if (klein.includes(w)) fehler.push(`çoktan seçmeli ifadesi: "${w}"`);
  }
  if (text.includes("☐")) fehler.push('kutucuk işareti: "☐"');
  if (text.includes("[ ]")) fehler.push('kutucuk işareti: "[ ]"');

  const optionen = text
    .split("\n")
    .map((z) => z.match(SCHUSS)?.[1]?.trim())
    .filter((rest): rest is string => !!rest && rest.length < 60 && !/\bSie\b/.test(rest));
  if (optionen.length >= 3) {
    fehler.push(`${optionen.length} adet kısa şık satırı (seçenek listesi)`);
  }
  return fehler;
}

// --- 3) LaTeX / Markdown derleniyor mu ---------------------------------

export function pruefeLatex(a: Aufgabe): string[] {
  return mdFelder(a).flatMap(([feld, text]) => {
    try {
      renderMd(text);
      return [];
    } catch (e) {
      return [`${feld}: ${(e as Error).message.split("\n")[0]}`];
    }
  });
}

// --- 3b) Ham HTML kapısı ------------------------------------------------
//
// markdown.ts ham HTML geçirir, çünkü sorular kendi SVG diyagramlarını taşıyor.
// Bu kapı olmadan dışarıdan gelen bir içerik PR'ı build'e <script> enjekte
// edebilirdi — statik export'ta bu, yayınlanan sayfaya doğrudan girer.
// İzin verilen: <svg> ve çizim çocukları. Yasak: her şey.

const SVG_TAGS = new Set([
  "svg", "g", "path", "line", "polyline", "polygon", "rect", "circle",
  "ellipse", "text", "tspan", "defs", "marker", "title", "desc",
]);

export function pruefeHtml(a: Aufgabe): string[] {
  return mdFelder(a).flatMap(([feld, roh]) => {
    const fehler: string[] = [];
    // Matematik bölgeleri önce çıkarılır: "$a < v$" içindeki "< v" HTML değil.
    const text = roh.replace(/\$\$[\s\S]*?\$\$/g, " ").replace(/\$[^$\n]*\$/g, " ");
    for (const [, tag] of text.matchAll(/<\s*\/?\s*([a-zA-Z][a-zA-Z0-9-]*)[\s/>]/g)) {
      if (!SVG_TAGS.has(tag.toLowerCase())) {
        fehler.push(`${feld}: izin verilmeyen HTML etiketi <${tag}> (yalnızca SVG serbest)`);
      }
    }
    // Olay öznitelikleri ve javascript: URL'leri SVG içinde de çalışır.
    for (const [treffer] of text.matchAll(/\son[a-z]+\s*=/gi)) {
      fehler.push(`${feld}: olay özniteliği yasak ("${treffer.trim()}")`);
    }
    if (/javascript:/i.test(text)) fehler.push(`${feld}: "javascript:" URL yasak`);
    return [...new Set(fehler)];
  });
}

// --- 3c) Düz metin alanları ---------------------------------------------
//
// `titel` ve `unterthema` renderMd()'den GEÇMEZ: <h1>, kart, breadcrumb ve
// <title> etiketinde düz metin olarak basılır — sonuncusuna HTML zaten
// giremez. İçlerine LaTeX yazılırsa sayfada "$f(x)=x\,e^{-x}$" diye ham
// görünür. Üst simge gerekiyorsa Unicode kullan: e⁻ˣ, a⁻¹, b².

export function pruefeKlartext(a: Aufgabe): string[] {
  const felder: [string, string][] = [["titel", a.titel]];
  if (a.bereich === "abitur") felder.push(["unterthema", a.unterthema]);
  return felder.flatMap(([feld, text]) =>
    text.includes("$")
      ? [`${feld}: düz metin alanında LaTeX ("$") — render edilmez, Unicode kullan (e⁻ˣ)`]
      : [],
  );
}

// --- 4) Adım kalitesi ---------------------------------------------------

export function pruefeSchritte(a: Aufgabe): string[] {
  const s = a.loesung.schritte;
  const fehler = s.length >= 3 ? [] : [`yalnızca ${s.length} adım var (en az 3)`];
  s.forEach((schritt, i) => {
    for (const sprache of ["de", "tr"] as const) {
      const t = schritt.warum[sprache].trim();
      if (t.length < 40) {
        fehler.push(`schritte[${i}].warum.${sprache} çok kısa (${t.length} < 40)`);
      }
    }
  });
  return fehler;
}

// --- 5) Puan tutarlılığı ------------------------------------------------

export function pruefePunkte(a: Aufgabe): string[] {
  const summe = a.loesung.schritte.reduce((n, s) => n + s.teilpunkte, 0);
  return summe === a.loesung.gesamtpunkte
    ? []
    : [`puan uyuşmuyor: Σ teilpunkte = ${summe}, gesamtpunkte = ${a.loesung.gesamtpunkte}`];
}

// --- 6) Operatörler (yalnızca abitur) -----------------------------------

export function pruefeOperatoren(a: Aufgabe): string[] {
  if (a.bereich !== "abitur") return [];
  return a.operatoren
    .filter((op) => !OPERATOREN.includes(op.toLowerCase().trim()))
    .map((op) => `bilinmeyen operatör: "${op}"`);
}

// --- 7) Sertifika ↔ niveau tutarlılığı ----------------------------------

export function pruefeZertifikat(a: Aufgabe): string[] {
  if (a.bereich !== "sprachzertifikat") return [];
  const erwartet = a.zertifikat === "goethe-c1" ? "C1" : "C2";
  return a.niveau === erwartet
    ? []
    : [`${a.zertifikat} için niveau "${erwartet}" olmalı, "${a.niveau}" bulundu`];
}

// --- 10) Tekrar tespiti -------------------------------------------------

/** Küçük harf, noktalama yok, tek boşluk. */
export function normalisiere(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Trigram Jaccard benzerliği (0..1). */
export function aehnlichkeit(a: string, b: string): number {
  const tri = (s: string) =>
    new Set(Array.from({ length: Math.max(0, s.length - 2) }, (_, i) => s.slice(i, i + 3)));
  const A = tri(normalisiere(a));
  const B = tri(normalisiere(b));
  if (A.size === 0 || B.size === 0) return 0;
  let schnitt = 0;
  for (const t of A) if (B.has(t)) schnitt++;
  return schnitt / (A.size + B.size - schnitt);
}

// --- Ana akış -----------------------------------------------------------

/** Şema dışındaki tüm tek-dosya kapıları. */
export function pruefeAufgabe(a: Aufgabe): string[] {
  const mc = mdFelder(a)
    .filter(([feld]) => feld === "aufgabenstellung" || feld.startsWith("material["))
    .flatMap(([feld, text]) => findeMultipleChoice(text).map((f) => `${feld}: ${f}`));
  return [
    ...mc,
    ...pruefeLatex(a),
    ...pruefeHtml(a),
    ...pruefeKlartext(a),
    ...pruefeSchritte(a),
    ...pruefePunkte(a),
    ...pruefeOperatoren(a),
    ...pruefeZertifikat(a),
  ];
}

function main() {
  // recursive listeleme: henüz doldurulmamış alt dizinler kendiliğinden atlanır
  const dateien = readdirSync(WURZEL, { recursive: true, encoding: "utf8" })
    .filter((p) => p.endsWith(".json"))
    .map((p) => join(WURZEL, p))
    .sort();

  const fehler: string[] = [];
  const gesehen = new Map<string, string>(); // "klasör\0id" -> dosya
  const texte: { pfad: string; text: string }[] = [];

  for (const pfad of dateien) {
    let a: Aufgabe;
    try {
      a = ladeDatei(pfad); // 1) şema
    } catch (e) {
      fehler.push(`${pfad}: ${(e as Error).message}`);
      continue;
    }

    for (const f of pruefeAufgabe(a)) fehler.push(`${pfad}: ${f}`);

    // 8) id == dosya adı
    const name = basename(pfad, ".json");
    if (a.id !== name) fehler.push(`${pfad}: id "${a.id}" dosya adı "${name}" ile aynı değil`);

    // 9) id benzersizliği — klasör içinde. "q001" her konuda var; benzersiz
    // olan (klasör, id) çiftidir, çünkü URL de klasör yoluyla kapsamlanıyor.
    const schluessel = `${dirname(pfad)}\0${a.id}`;
    const vorher = gesehen.get(schluessel);
    if (vorher) {
      fehler.push(`${pfad}: id "${a.id}" aynı klasörde zaten ${vorher} içinde kullanılmış`);
    } else gesehen.set(schluessel, pfad);

    texte.push({ pfad, text: a.aufgabenstellung });
  }

  // 10) tekrar tespiti — ponytail: O(n²) karşılaştırma, birkaç bin dosyaya kadar sorun değil
  for (let i = 0; i < texte.length; i++) {
    for (let j = i + 1; j < texte.length; j++) {
      const s = aehnlichkeit(texte[i].text, texte[j].text);
      if (s > 0.85) {
        fehler.push(
          `${texte[j].pfad}: ${texte[i].pfad} ile çok benzer (Jaccard ${s.toFixed(2)})`,
        );
      }
    }
  }

  if (fehler.length > 0) {
    for (const f of fehler) console.error(f);
    console.error(`\n${fehler.length} hata, ${dateien.length} dosya tarandı.`);
    process.exitCode = 1;
  } else {
    console.log(`${dateien.length} dosya geçti.`);
  }
}

// Doğrudan çalıştırıldıysa tara; import edildiyse (test) sadece fonksiyonları ver.
if (process.argv[1]?.endsWith("validate.ts")) main();
