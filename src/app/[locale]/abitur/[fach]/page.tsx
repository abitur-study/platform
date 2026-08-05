import { FAECHER, fachBySlug } from "../../../../../content/registry";
import { Kacheln, Kopf } from "@/components/Kacheln";
import { getMessages, isLocale, LOCALES } from "@/i18n";
import { abiturAufgaben } from "@/lib/content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    FAECHER.map((f) => ({ locale, fach: f.slug })),
  );
}

export default async function FachSeite({
  params,
}: {
  params: Promise<{ locale: string; fach: string }>;
}) {
  const { locale, fach: fachSlug } = await params;
  const fach = fachBySlug(fachSlug);
  if (!isLocale(locale) || !fach) notFound();
  const t = getMessages(locale);

  return (
    <>
      <Kopf
        pfad={[
          { href: `/${locale}`, label: t.nav.home },
          { href: `/${locale}/abitur`, label: t.abitur.title },
        ]}
        titel={fach.name}
        meta={[
          `${fach.themen.length} ${t.liste.themenAnzahl}`,
          `${fach.themen.reduce((n, th) => n + abiturAufgaben(fach.slug, th.slug).length, 0)} ${t.liste.anzahl}`,
        ]}
      />
      <Kacheln
        variante="thema"
        leer={t.liste.leer}
        baldLabel={t.liste.bald}
        items={fach.themen.map((th) => {
          const n = abiturAufgaben(fach.slug, th.slug).length;
          return {
            href: `/${locale}/abitur/${fach.slug}/${th.slug}`,
            titel: th.name,
            meta: `${n} ${t.liste.anzahl}`,
            bald: n === 0,
          };
        })}
      />
    </>
  );
}
