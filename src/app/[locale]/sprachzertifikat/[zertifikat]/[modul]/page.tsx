import {
  MODULE,
  ZERTIFIKATE,
  modulBySlug,
  zertifikatBySlug,
} from "../../../../../../content/registry";
import { Kacheln, Kopf } from "@/components/Kacheln";
import { getMessages, isLocale, LOCALES } from "@/i18n";
import { zertifikatAufgaben } from "@/lib/content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    ZERTIFIKATE.flatMap((z) =>
      MODULE.map((m) => ({ locale, zertifikat: z.slug, modul: m.slug })),
    ),
  );
}

export default async function ModulSeite({
  params,
}: {
  params: Promise<{ locale: string; zertifikat: string; modul: string }>;
}) {
  const { locale, zertifikat: zSlug, modul: mSlug } = await params;
  const z = zertifikatBySlug(zSlug);
  const m = modulBySlug(mSlug);
  if (!isLocale(locale) || !z || !m) notFound();
  const t = getMessages(locale);

  return (
    <>
      <Kopf
        pfad={[
          { href: `/${locale}`, label: t.nav.home },
          { href: `/${locale}/sprachzertifikat`, label: t.sz.title },
          { href: `/${locale}/sprachzertifikat/${z.slug}`, label: z.name },
        ]}
        titel={m.name}
        unter={t.liste.aufgaben}
      />
      <Kacheln
        leer={t.liste.leer}
        baldLabel={t.liste.bald}
        items={zertifikatAufgaben(z.slug, m.slug).map((a) => ({
          href: `/${locale}/sprachzertifikat/${z.slug}/${m.slug}/${a.id}`,
          titel: a.titel,
          text:
            a.bereich === "sprachzertifikat" ? a.textsorte ?? undefined : undefined,
          meta: `${a.niveau} · ${a.bearbeitungszeit_min} ${t.aufgabe.minuten} · ${"★".repeat(a.schwierigkeit)}`,
        }))}
      />
    </>
  );
}
