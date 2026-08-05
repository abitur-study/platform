import { tr, type Messages } from "./messages/tr";
import { de } from "./messages/de";
import { en } from "./messages/en";

/**
 * Arayüz çevirisi — kütüphane yok, 10 satır.
 * Statik export'ta middleware çalışmadığı için dil prefiksi her zaman yazılır: /tr, /de, /en.
 * Slug'lar (abitur, mathematik, analysis …) dile göre DEĞİŞMEZ; sadece arayüz metinleri çevrilir.
 */
export const LOCALES = ["tr", "de", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "tr";

const SOEZLUEK: Record<Locale, Messages> = { tr, de, en };

export const getMessages = (locale: Locale): Messages => SOEZLUEK[locale];

export const isLocale = (v: string): v is Locale =>
  (LOCALES as readonly string[]).includes(v);

/** Ekran okuyucu ve <html lang> için tam dil etiketleri. */
export const HTML_LANG: Record<Locale, string> = {
  tr: "tr-TR",
  de: "de-DE",
  en: "en-GB",
};

export const LOCALE_LABEL: Record<Locale, string> = {
  tr: "Türkçe",
  de: "Deutsch",
  en: "English",
};
