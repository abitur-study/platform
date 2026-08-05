import {
  MODULE,
  ZERTIFIKATE,
  zertifikatBySlug,
} from "../../../../../content/registry";
import { Kacheln, Kopf } from "@/components/Kacheln";
import { getMessages, isLocale, LOCALES } from "@/i18n";
import { zertifikatAufgaben } from "@/lib/content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    ZERTIFIKATE.map((z) => ({ locale, zertifikat: z.slug })),
  );
}

export default async function ZertifikatSeite({
  params,
}: {
  params: Promise<{ locale: string; zertifikat: string }>;
}) {
  const { locale, zertifikat: zSlug } = await params;
  const z = zertifikatBySlug(zSlug);
  if (!isLocale(locale) || !z) notFound();
  const t = getMessages(locale);

  return (
    <>
      <Kopf
        pfad={[
          { href: `/${locale}`, label: t.nav.home },
          { href: `/${locale}/sprachzertifikat`, label: t.sz.title },
        ]}
        titel={z.name}
        unter={t.sz.module}
      />
      <Kacheln
        leer={t.liste.leer}
        baldLabel={t.liste.bald}
        items={MODULE.map((m) => {
          const n = zertifikatAufgaben(z.slug, m.slug).length;
          return {
            href: `/${locale}/sprachzertifikat/${z.slug}/${m.slug}`,
            titel: m.name,
            meta: `${n} ${t.liste.anzahl} →`,
            bald: n === 0,
          };
        })}
      />
    </>
  );
}
