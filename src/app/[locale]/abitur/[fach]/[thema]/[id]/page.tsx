import { fachBySlug, themaBySlug } from "../../../../../../../content/registry";
import { AufgabeView } from "@/components/AufgabeView";
import { Kopf } from "@/components/Kacheln";
import { getMessages, isLocale, LOCALES } from "@/i18n";
import { alleAufgaben, aufgabeById } from "@/lib/content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    alleAufgaben()
      .filter((a) => a.bereich === "abitur")
      .map((a) => ({
        locale,
        fach: a.bereich === "abitur" ? a.fach : "",
        thema: a.bereich === "abitur" ? a.themenbereich_slug : "",
        id: a.id,
      })),
  );
}

export default async function AufgabeSeite({
  params,
}: {
  params: Promise<{ locale: string; fach: string; thema: string; id: string }>;
}) {
  const { locale, fach: fachSlug, thema: themaSlug, id } = await params;
  const fach = fachBySlug(fachSlug);
  const thema = themaBySlug(fach, themaSlug);
  const a = aufgabeById(id);
  if (!isLocale(locale) || !fach || !thema || !a || a.bereich !== "abitur")
    notFound();
  const t = getMessages(locale);

  return (
    <>
      <Kopf
        pfad={[
          { href: `/${locale}/abitur`, label: t.abitur.title },
          { href: `/${locale}/abitur/${fach.slug}`, label: fach.name },
          {
            href: `/${locale}/abitur/${fach.slug}/${thema.slug}`,
            label: thema.name,
          },
        ]}
      />
      <AufgabeView a={a} locale={locale} t={t} />
    </>
  );
}
