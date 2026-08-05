import type { Metadata } from "next";
import "../globals.css";
import "katex/dist/katex.min.css";
import { Chrome } from "@/components/Chrome";
import { getMessages, HTML_LANG, isLocale, LOCALES } from "@/i18n";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Abitur & Sprachzertifikat",
  description:
    "Offene Aufgaben im Abiturformat und Goethe-Zertifikat C1/C2 — mit Musterlösungen, die jeden Schritt begründen. Kostenlos und werbefrei.",
};

/** Tüm rotalar [locale] altında; bu dosya aynı zamanda kök layout'tur. */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={HTML_LANG[locale]}>
      <body>
        <Chrome locale={locale} t={getMessages(locale)}>
          {children}
        </Chrome>
      </body>
    </html>
  );
}
