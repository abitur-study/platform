import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { AufgabeSchema, type Aufgabe } from "../../content/schema";

/**
 * İçerik yükleyici — yalnızca build sırasında çalışır (Server Component / script).
 * Veritabanı yok: content/aufgaben altındaki JSON dosyaları tek kaynak.
 */

const WURZEL = join(process.cwd(), "content", "aufgaben");

function jsonDateien(dir: string): string[] {
  const treffer: string[] = [];
  for (const eintrag of readdirSync(dir, { withFileTypes: true })) {
    const pfad = join(dir, eintrag.name);
    if (eintrag.isDirectory()) treffer.push(...jsonDateien(pfad));
    else if (eintrag.name.endsWith(".json")) treffer.push(pfad);
  }
  return treffer;
}

/** Bir dosyayı okur ve şemaya göre doğrular. Hata mesajı dosya yolunu içerir. */
export function ladeDatei(pfad: string): Aufgabe {
  const ergebnis = AufgabeSchema.safeParse(JSON.parse(readFileSync(pfad, "utf8")));
  if (!ergebnis.success) {
    const zeilen = ergebnis.error.issues.map(
      (i) => `  ${i.path.join(".") || "(kök)"}: ${i.message}`,
    );
    throw new Error(`Şema hatası — ${pfad}\n${zeilen.join("\n")}`);
  }
  return ergebnis.data;
}

let cache: Aufgabe[] | null = null;

/**
 * Tüm sorular. Üretimde yalnızca öğretmen onaylı ("veroeffentlicht") olanlar yayınlanır —
 * KI tarafından üretilmiş ama incelenmemiş içerik canlıya çıkamaz.
 */
export function alleAufgaben(): Aufgabe[] {
  if (cache) return cache;
  const alle = jsonDateien(WURZEL).sort().map(ladeDatei);
  // Geliştirmede önbelleğe almıyoruz: JSON dosyaları import edilmediği için HMR
  // onları görmez, önbellek yeni soruları gizlerdi. Üretimde build zaten tek seferlik.
  if (process.env.NODE_ENV !== "production") return alle;
  cache = alle.filter((a) => a.status === "veroeffentlicht");
  return cache;
}

export const abiturAufgaben = (fach: string, themaSlug: string) =>
  alleAufgaben().filter(
    (a) =>
      a.bereich === "abitur" &&
      a.fach === fach &&
      a.themenbereich_slug === themaSlug,
  );

export const zertifikatAufgaben = (zertifikat: string, modul: string) =>
  alleAufgaben().filter(
    (a) =>
      a.bereich === "sprachzertifikat" &&
      a.zertifikat === zertifikat &&
      a.modul === modul,
  );

export const aufgabeById = (id: string) =>
  alleAufgaben().find((a) => a.id === id);
