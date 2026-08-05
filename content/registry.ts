/**
 * Ders ve sertifika kaydı. Yeni ders/konu eklemek = buraya satır eklemek.
 * Sayfa kodu değişmez; rotalar bu listeden üretilir.
 *
 * Not: Ders ve konu adları Almanca ve çevrilmez — okulda kullanılan adlar bunlar.
 * Yalnızca arayüz metinleri (src/messages) TR/DE/EN'e çevrilir.
 */

export type Thema = { slug: string; name: string };
export type Fach = { slug: string; name: string; themen: Thema[] };

export const FAECHER: Fach[] = [
  {
    slug: "mathematik",
    name: "Mathematik",
    themen: [
      { slug: "analysis", name: "Analysis" },
      { slug: "analytische-geometrie", name: "Analytische Geometrie" },
      { slug: "stochastik", name: "Stochastik" },
    ],
  },
  {
    slug: "physik",
    name: "Physik",
    themen: [
      { slug: "elektrisches-feld", name: "Elektrisches Feld und Kondensator" },
      { slug: "magnetisches-feld", name: "Magnetisches Feld und Lorentzkraft" },
      { slug: "induktion", name: "Elektromagnetische Induktion" },
      { slug: "schwingungen", name: "Schwingungen und Schwingkreis" },
      { slug: "wellen", name: "Wellen und Wellenoptik" },
      { slug: "quantenphysik", name: "Quantenphysik" },
      { slug: "atomphysik", name: "Atom- und Röntgenphysik" },
    ],
  },
  {
    slug: "chemie",
    name: "Chemie",
    themen: [
      { slug: "stoechiometrie", name: "Stoffmenge und Stöchiometrie" },
      { slug: "reaktionskinetik", name: "Reaktionsgeschwindigkeit und Energetik" },
      { slug: "chemisches-gleichgewicht", name: "Chemisches Gleichgewicht" },
      { slug: "saeure-base", name: "Säure-Base-Chemie und Titration" },
      { slug: "kohlenhydrate", name: "Kohlenhydrate" },
      { slug: "proteine", name: "Proteine" },
      { slug: "elektrochemie", name: "Elektrochemie" },
      { slug: "kunststoffe", name: "Kunststoffe" },
    ],
  },
  {
    slug: "biologie",
    name: "Biologie",
    themen: [
      { slug: "zellatmung", name: "Zellatmung" },
      { slug: "photosynthese", name: "Photosynthese" },
      { slug: "molekulargenetik", name: "Molekulargenetik und Gentechnik" },
      { slug: "neurobiologie", name: "Neurobiologie" },
      { slug: "vererbung", name: "Klassische Genetik und Vererbung" },
      { slug: "evolution", name: "Evolution" },
      { slug: "oekologie", name: "Ökologie" },
    ],
  },
  {
    slug: "deutsch",
    name: "Deutsch",
    themen: [
      { slug: "drama", name: "Drama" },
      { slug: "epik", name: "Epik und Kurzprosa" },
      { slug: "lyrik", name: "Lyrik" },
      { slug: "kommunikation", name: "Kommunikationsmodelle" },
      { slug: "sachtext-eroerterung", name: "Sachtext und Erörterung" },
    ],
  },
  {
    slug: "englisch",
    name: "Englisch",
    themen: [
      { slug: "globalisation", name: "Globalisation" },
      { slug: "society", name: "USA and UK Society" },
      { slug: "postcolonialism", name: "Postcolonialism" },
      { slug: "science-technology", name: "Science, Technology and Dystopia" },
      { slug: "shakespeare", name: "Shakespeare" },
    ],
  },
];

export type Zertifikat = { slug: string; name: string; niveau: "C1" | "C2" };

export const ZERTIFIKATE: Zertifikat[] = [
  { slug: "goethe-c1", name: "Goethe-Zertifikat C1", niveau: "C1" },
  { slug: "goethe-c2", name: "Goethe-Zertifikat C2", niveau: "C2" },
];

export type Modul = { slug: string; name: string };

export const MODULE: Modul[] = [
  { slug: "lesen", name: "Lesen" },
  { slug: "hoeren", name: "Hören" },
  { slug: "schreiben", name: "Schreiben" },
  { slug: "sprechen", name: "Sprechen" },
];

/**
 * İzin verilen Abitur operatörleri (küçük harf). scripts/validate.ts bunu zorunlu kılar.
 * Kaynak: eyaletlerin ortak Abitur operatör listeleri.
 */
export const OPERATOREN: string[] = [
  "analysieren",
  "begründen",
  "berechnen",
  "beschreiben",
  "bestimmen",
  "beurteilen",
  "bewerten",
  "darstellen",
  "deuten",
  "entwickeln",
  "erklären",
  "erläutern",
  "ermitteln",
  "erörtern",
  "interpretieren",
  "nachweisen",
  "nennen",
  "skizzieren",
  "stellung nehmen",
  "überprüfen",
  "untersuchen",
  "vergleichen",
  "zeigen",
  "zusammenfassen",
];

/**
 * Operatör → Anforderungsbereich (KMK operatör listelerine göre).
 *
 * I   Reproduktion — bilineni yeniden verme
 * II  Reorganisation / Transfer — bilineni yeni bir bağlama uygulama
 * III Reflexion / Problemlösung — değerlendirme, yargıya varma
 *
 * Bir sorunun AFB'si ayrı bir alan olarak tutulmuyor; `operatoren`
 * dizisinden türetiliyor. Böylece tek kaynak var ve içerik JSON'larına
 * elle girilen, yanlış olabilecek ikinci bir alan eklenmiyor.
 *
 * Not: birkaç operatör sınırda durur (`entwickeln`, `überprüfen` II–III
 * arasında salınır); burada baskın seviye yazılıdır.
 */
export const OPERATOR_AFB: Record<string, 1 | 2 | 3> = {
  nennen: 1,
  beschreiben: 1,
  darstellen: 1,
  skizzieren: 1,
  zusammenfassen: 1,

  analysieren: 2,
  begründen: 2,
  berechnen: 2,
  bestimmen: 2,
  deuten: 2,
  entwickeln: 2,
  erklären: 2,
  erläutern: 2,
  ermitteln: 2,
  interpretieren: 2,
  nachweisen: 2,
  untersuchen: 2,
  vergleichen: 2,
  zeigen: 2,

  beurteilen: 3,
  bewerten: 3,
  erörtern: 3,
  "stellung nehmen": 3,
  überprüfen: 3,
};

const ROEMISCH = ["", "I", "II", "III"] as const;

/**
 * Sorunun kapsadığı AFB aralığı: tek seviyeyse "II", yayılıyorsa "I–III".
 * Tanınmayan operatör olursa yok sayılır; hiçbiri tanınmazsa boş döner.
 */
export function afbSpanne(operatoren: readonly string[]): string {
  const stufen = operatoren
    .map((o) => OPERATOR_AFB[o])
    .filter((n): n is 1 | 2 | 3 => n !== undefined);
  if (stufen.length === 0) return "";
  const min = Math.min(...stufen);
  const max = Math.max(...stufen);
  return min === max ? ROEMISCH[min] : `${ROEMISCH[min]}–${ROEMISCH[max]}`;
}

export const fachBySlug = (slug: string) => FAECHER.find((f) => f.slug === slug);
export const themaBySlug = (fach: Fach | undefined, slug: string) =>
  fach?.themen.find((t) => t.slug === slug);
export const zertifikatBySlug = (slug: string) =>
  ZERTIFIKATE.find((z) => z.slug === slug);
export const modulBySlug = (slug: string) => MODULE.find((m) => m.slug === slug);
