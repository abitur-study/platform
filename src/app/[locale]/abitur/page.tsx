import { FAECHER } from "../../../../content/registry";
import { Kacheln, Kopf } from "@/components/Kacheln";
import { getMessages, isLocale, LOCALES } from "@/i18n";
import { alleAufgaben } from "@/lib/content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function AbiturIndex({
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
        titel="Abitur"
        titelAkzent={t.abitur.themen.toLocaleLowerCase(locale)}
        unter={t.abitur.chooseFach}
      />
      <Kacheln
        variante="fach"
        leer={t.liste.leer}
        baldLabel={t.liste.bald}
        fertigLabel={t.liste.fertig}
        nochNichtLabel={t.liste.nochNicht}
        bereitLabel={t.liste.bereit}
        oeffnenLabel={t.liste.oeffnen}
        items={FAECHER.map((f) => {
          const n = alle.filter(
            (a) => a.bereich === "abitur" && a.fach === f.slug,
          ).length;
          return {
            href: `/${locale}/abitur/${f.slug}`,
            titel: f.name,
            text: f.themen.map((th) => th.name).join(" · ") || undefined,
            zahl: String(n),
            meta: t.liste.anzahl,
            bald: n === 0,
          };
        })}
      />
    </>
  );
}
