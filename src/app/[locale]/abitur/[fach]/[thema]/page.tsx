import {
  FAECHER,
  afbSpanne,
  fachBySlug,
  themaBySlug,
} from "../../../../../../content/registry";
import { Kacheln, Kopf } from "@/components/Kacheln";
import { getMessages, isLocale, LOCALES } from "@/i18n";
import { abiturAufgaben } from "@/lib/content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    FAECHER.flatMap((f) =>
      f.themen.map((th) => ({ locale, fach: f.slug, thema: th.slug })),
    ),
  );
}

export default async function ThemaSeite({
  params,
}: {
  params: Promise<{ locale: string; fach: string; thema: string }>;
}) {
  const { locale, fach: fachSlug, thema: themaSlug } = await params;
  const fach = fachBySlug(fachSlug);
  const thema = themaBySlug(fach, themaSlug);
  if (!isLocale(locale) || !fach || !thema) notFound();
  const t = getMessages(locale);

  return (
    <>
      <Kopf
        pfad={[
          { href: `/${locale}`, label: t.nav.home },
          { href: `/${locale}/abitur`, label: t.abitur.title },
          { href: `/${locale}/abitur/${fach.slug}`, label: fach.name },
        ]}
        titel={thema.name}
        unter={t.liste.aufgaben}
      />
      <Kacheln
        variante="aufgabe"
        leer={t.liste.leer}
        baldLabel={t.liste.bald}
        items={abiturAufgaben(fach.slug, thema.slug).map((a) => ({
          href: `/${locale}/abitur/${fach.slug}/${thema.slug}/${a.id}`,
          titel: a.titel,
          text: a.bereich === "abitur" ? a.unterthema : undefined,
          marken: [
            a.bereich === "abitur" ? `AFB ${afbSpanne(a.operatoren)}` : "",
            `${a.bearbeitungszeit_min} ${t.aufgabe.minuten}`,
            `${a.loesung.gesamtpunkte} ${t.aufgabe.punkte}`,
          ].filter(Boolean),
        }))}
      />
    </>
  );
}
