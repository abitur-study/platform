import { ZERTIFIKATE, MODULE } from "../../../../content/registry";
import { Kacheln, Kopf } from "@/components/Kacheln";
import { getMessages, isLocale, LOCALES } from "@/i18n";
import { alleAufgaben } from "@/lib/content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function SzIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getMessages(locale);
  const alle = alleAufgaben();

  return (
    <>
      <Kopf
        pfad={[{ href: `/${locale}`, label: t.nav.home }]}
        titel={t.sz.title}
        unter={t.sz.chooseZertifikat}
      />
      <Kacheln
        leer={t.liste.leer}
        baldLabel={t.liste.bald}
        items={ZERTIFIKATE.map((z) => {
          const n = alle.filter(
            (a) => a.bereich === "sprachzertifikat" && a.zertifikat === z.slug,
          ).length;
          return {
            href: `/${locale}/sprachzertifikat/${z.slug}`,
            titel: z.name,
            text: MODULE.map((m) => m.name).join(" · "),
            meta: `${n} ${t.liste.anzahl} →`,
            bald: n === 0,
          };
        })}
      />
    </>
  );
}
