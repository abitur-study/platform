import { z } from "zod";

/**
 * Tek şema, üç iş:
 *  1. content/aufgaben/**.json dosyalarını build'de doğrular
 *  2. Claude'a structured output şeması olarak verilir (Faz 2)
 *  3. TypeScript tiplerini üretir
 */

const Md = z.string().min(1); // Markdown + LaTeX ($...$ ve $$...$$)

/** Çözümün tek bir adımı — projenin kalbi. */
export const Schritt = z.object({
  nr: z.number().int().positive(),
  titel: Md, // "Erste Ableitung bilden"
  inhalt: Md, // adımın kendisi (DE, LaTeX içerebilir)
  warum: z.object({
    // "bu adım NEDEN atıldı" — ezber değil gerekçe
    de: Md,
    tr: Md,
  }),
  teilpunkte: z.number().int().nonnegative(),
});

export const Material = z.object({
  typ: z.enum(["text", "tabelle", "abbildung", "audio", "formelsammlung"]),
  titel: z.string().min(1),
  inhalt: z.string().min(1),
  quelle: z.string().min(1), // telif için zorunlu
  lizenz: z.string().min(1),
});

const Basis = z.object({
  id: z
    .string()
    .regex(/^[a-z0-9-]+$/, "id yalnızca küçük harf, rakam ve tire içerebilir"),
  titel: z.string().min(1),
  sprache: z.enum(["de", "en"]), // Englisch dersinde "en"
  schwierigkeit: z.number().int().min(1).max(5),
  bearbeitungszeit_min: z.number().int().positive(),

  aufgabenstellung: Md, // sorunun kendisi — açık uçlu, şıksız
  material: z.array(Material).default([]),
  tipps: z.array(Md).min(1).max(3), // çözümden önce kademeli ipuçları

  loesung: z.object({
    schritte: z.array(Schritt).min(3),
    gesamtpunkte: z.number().int().positive(),
    haeufige_fehler: z.array(Md).default([]),
  }),

  // Köken ve yönetişim
  quelle: z.string().min(1),
  lizenz: z.literal("CC BY-SA 4.0"),
  status: z.enum(["entwurf", "ki-geprueft", "veroeffentlicht"]),
  generiert_mit: z.string().optional(), // "claude-opus-5 / 2026-07-31"
  geprueft_von: z.string().optional(), // öğretmen adı — yayın için zorunlu
  version: z.number().int().positive(),
});

export const FAECHER_SLUGS = [
  "mathematik",
  "physik",
  "chemie",
  "biologie",
  "deutsch",
  "englisch",
] as const;

export const ZERTIFIKAT_SLUGS = ["goethe-c1", "goethe-c2"] as const;
export const MODUL_SLUGS = ["lesen", "hoeren", "schreiben", "sprechen"] as const;

export const AufgabeSchema = z.discriminatedUnion("bereich", [
  Basis.extend({
    bereich: z.literal("abitur"),
    fach: z.enum(FAECHER_SLUGS),
    themenbereich: z.string().min(1), // "Analysis"
    themenbereich_slug: z.string().regex(/^[a-z0-9-]+$/), // "analysis"
    unterthema: z.string().min(1), // "Extremwertprobleme"
    niveau: z.enum(["GK", "LK"]), // Grundkurs / Leistungskurs
    operatoren: z.array(z.string().min(1)).min(1), // Abitur-Operatoren
  }),
  Basis.extend({
    bereich: z.literal("sprachzertifikat"),
    zertifikat: z.enum(ZERTIFIKAT_SLUGS),
    modul: z.enum(MODUL_SLUGS),
    niveau: z.enum(["C1", "C2"]), // zertifikat ile tutarlılığı validate.ts kontrol eder
    textsorte: z.string().min(1).optional(), // "Erörterung", "Leserbrief", "Vortrag"
  }),
]);

export type Aufgabe = z.infer<typeof AufgabeSchema>;
export type AbiturAufgabe = Extract<Aufgabe, { bereich: "abitur" }>;
export type ZertifikatAufgabe = Extract<Aufgabe, { bereich: "sprachzertifikat" }>;
export type SchrittT = z.infer<typeof Schritt>;
