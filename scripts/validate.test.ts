/**
 * scripts/validate.ts kapılarının testi. Framework yok: node:test + node:assert.
 * Çalıştırma: npm test
 *
 * Negatif durumlar için gerçek bir seed sorusu klonlanıp bozulur —
 * elle uydurulmuş fixture yerine sahadaki veri kullanılır.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { ladeDatei } from "../src/lib/content";
import type { Aufgabe, AbiturAufgabe } from "../content/schema";
import {
  findeMultipleChoice,
  pruefeLatex,
  pruefeOperatoren,
  pruefePunkte,
  pruefeSchritte,
  pruefeZertifikat,
  aehnlichkeit,
} from "./validate";

const WURZEL = join(process.cwd(), "content", "aufgaben");
const alleDateien = readdirSync(WURZEL, { recursive: true, encoding: "utf8" })
  .filter((p) => p.endsWith(".json"))
  .map((p) => join(WURZEL, p))
  .sort();

const gold = ladeDatei(
  join(WURZEL, "abitur/mathematik/analysis/mathe-analysis-extremwert-schachtel-001.json"),
) as AbiturAufgabe;
const klon = <T extends Aufgabe>(a: T): T => structuredClone(a);

// --- 2) Çoktan seçmeli dedektörü ---------------------------------------

test("şıklı metni reddeder", () => {
  const mc = `Welche Aussage über den Graphen von $f$ trifft zu?

A) Ein Hochpunkt bei $x=1$.
B) Ein Tiefpunkt bei $x=1$.
C) Ein Sattelpunkt bei $x=1$.
D) Keine der Aussagen.`;
  assert.ok(findeMultipleChoice(mc).length > 0);
});

test("anahtar kelimeleri ve kutucukları yakalar", () => {
  assert.ok(findeMultipleChoice("Kreuze die richtige Lösung an.").length > 0);
  assert.ok(findeMultipleChoice("Welche der folgenden Aussagen gilt?").length > 0);
  assert.ok(findeMultipleChoice("Richtig oder falsch?").length > 0);
  assert.ok(findeMultipleChoice("☐ Ableitung ☐ Stammfunktion").length > 0);
  assert.ok(findeMultipleChoice("[ ] Hochpunkt\n[ ] Tiefpunkt").length > 0);
});

test("gerçek Abitur alt şıkları yanlış pozitif vermez", () => {
  // Bu soruda a)/b)/c) meşru alt şıklardır — geçmeli.
  assert.deepEqual(findeMultipleChoice(gold.aufgabenstellung), []);
  // Ve mevcut tüm sorular için de geçmeli (regresyon kalkanı).
  for (const pfad of alleDateien) {
    const a = ladeDatei(pfad);
    assert.deepEqual(findeMultipleChoice(a.aufgabenstellung), [], pfad);
  }
});

test("kısa ama emir kipi olan iki alt şık yeterli değil", () => {
  const echt = "a) Bestimmen Sie $f'(x)$.\nb) Skizzieren Sie $f$.\nc) Deuten Sie das Ergebnis mit Sie-Form.";
  assert.deepEqual(findeMultipleChoice(echt), []);
});

// --- 3) LaTeX ------------------------------------------------------------

test("geçerli LaTeX geçer, bozuk LaTeX yakalanır", () => {
  assert.deepEqual(pruefeLatex(gold), []);
  const kaputt = klon(gold);
  kaputt.aufgabenstellung = "Berechnen Sie $\\frac{1}$ und $\\notacommand{x}$.";
  const fehler = pruefeLatex(kaputt);
  assert.equal(fehler.length, 1);
  assert.match(fehler[0], /^aufgabenstellung:/);
});

// --- 4) Adım kalitesi ----------------------------------------------------

test("kısa warum.tr yakalanır", () => {
  assert.deepEqual(pruefeSchritte(gold), []);
  const kurz = klon(gold);
  kurz.loesung.schritte[1].warum.tr = "Çünkü öyle.";
  assert.deepEqual(pruefeSchritte(kurz), ["schritte[1].warum.tr çok kısa (11 < 40)"]);
});

test("üçten az adım yakalanır", () => {
  const wenig = klon(gold);
  wenig.loesung.schritte = wenig.loesung.schritte.slice(0, 2);
  assert.ok(pruefeSchritte(wenig).some((f) => f.includes("en az 3")));
});

// --- 5) Puan -------------------------------------------------------------

test("puan toplamı uyuşmazlığı yakalanır", () => {
  assert.deepEqual(pruefePunkte(gold), []);
  const falsch = klon(gold);
  falsch.loesung.schritte[0].teilpunkte += 1;
  assert.deepEqual(pruefePunkte(falsch), [
    `puan uyuşmuyor: Σ teilpunkte = ${gold.loesung.gesamtpunkte + 1}, gesamtpunkte = ${gold.loesung.gesamtpunkte}`,
  ]);
});

// --- 6) Operatörler ------------------------------------------------------

test("beyaz liste dışı operatör yakalanır", () => {
  assert.deepEqual(pruefeOperatoren(gold), []);
  const falsch = klon(gold);
  falsch.operatoren = ["bestimmen", "ankreuzen"];
  assert.deepEqual(pruefeOperatoren(falsch), ['bilinmeyen operatör: "ankreuzen"']);
});

// --- 7) Sertifika --------------------------------------------------------

test("zertifikat ↔ niveau uyuşmazlığı yakalanır", () => {
  const zert = {
    ...gold,
    bereich: "sprachzertifikat",
    zertifikat: "goethe-c1",
    modul: "schreiben",
    niveau: "C2",
  } as unknown as Aufgabe;
  assert.equal(pruefeZertifikat(zert).length, 1);
  assert.deepEqual(pruefeZertifikat({ ...zert, niveau: "C1" } as Aufgabe), []);
  assert.deepEqual(pruefeZertifikat(gold), []); // abitur → konu dışı
});

// --- 10) Tekrar ----------------------------------------------------------

test("aynı metin 1, farklı sorular düşük benzerlik", () => {
  assert.equal(aehnlichkeit(gold.aufgabenstellung, gold.aufgabenstellung), 1);
  assert.ok(aehnlichkeit("Bestimmen Sie die Nullstellen.", "Skizzieren Sie den Graphen.") < 0.85);
});
