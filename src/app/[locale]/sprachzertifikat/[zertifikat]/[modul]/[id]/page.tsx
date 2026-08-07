import {
  modulBySlug,
  zertifikatBySlug,
} from "../../../../../../../content/registry";
import { AufgabeView } from "@/components/AufgabeView";
import { Kopf } from "@/components/Kacheln";
import { getMessages, isLocale, LOCALES } from "@/i18n";
import { alleAufgaben, zertifikatAufgabe } from "@/lib/content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    alleAufgaben()
      .filter((a) => a.bereich === "sprachzertifikat")
      .map((a) => ({
        locale,
        zertifikat: a.bereich === "sprachzertifikat" ? a.zertifikat : "",
        modul: a.bereich === "sprachzertifikat" ? a.modul : "",
        id: a.id,
      })),
  );
}

export default async function SzAufgabeSeite({
  params,
}: {
  params: Promise<{
    locale: string;
    zertifikat: string;
    modul: string;
    id: string;
  }>;
}) {
  const { locale, zertifikat: zSlug, modul: mSlug, id } = await params;
  const z = zertifikatBySlug(zSlug);
  const m = modulBySlug(mSlug);
  const a = zertifikatAufgabe(zSlug, mSlug, id);
  if (!isLocale(locale) || !z || !m || !a || a.bereich !== "sprachzertifikat")
    notFound();
  const t = getMessages(locale);

  return (
    <>
      <Kopf
        pfad={[
          { href: `/${locale}/sprachzertifikat`, label: t.sz.title },
          { href: `/${locale}/sprachzertifikat/${z.slug}`, label: z.name },
          {
            href: `/${locale}/sprachzertifikat/${z.slug}/${m.slug}`,
            label: m.name,
          },
        ]}
      />
      <AufgabeView a={a} locale={locale} t={t} />
    </>
  );
}
