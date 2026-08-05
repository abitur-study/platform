import Link from "next/link";
import type { Locale } from "@/i18n";
import type { Messages } from "@/messages/tr";
import { Sprachwahl } from "./Sprachwahl";
import { Bewegung } from "./Bewegung";
import { Fusszeile } from "./Fusszeile";

/** Başlık, gezinme, demo uyarısı ve alt bilgi — her sayfayı saran kabuk. */
export function Chrome({
  locale,
  t,
  children,
}: {
  locale: Locale;
  t: Messages;
  children: React.ReactNode;
}) {
  const kok = `/${locale}`;
  return (
    <div className="flex min-h-dvh flex-col">
      <Bewegung />
      <a
        href="#inhalt"
        className="kein-druck sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-2 focus:rounded focus:bg-akzent focus:px-3 focus:py-2 focus:text-papier"
      >
        {t.nav.skipToContent}
      </a>

      <header className="kein-druck sticky top-0 z-40 border-b border-linie bg-papier">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-7 gap-y-2 px-10 py-5">
          <Link href={kok} className="flex items-center gap-2.5 text-base font-bold">
            <span aria-hidden className="block size-3.5 bg-akzent" />
            {t.site.title}
          </Link>
          <nav aria-label={t.nav.home} className="flex gap-6 text-base font-bold">
            <Link href={`${kok}/abitur`} className="hover:text-akzent">
              {t.nav.abitur} <span aria-hidden className="text-akzent">▸</span>
            </Link>
            <Link href={`${kok}/sprachzertifikat`} className="hover:text-akzent">
              {t.nav.sz} <span aria-hidden className="text-akzent">▸</span>
            </Link>
          </nav>
          <div className="ml-auto">
            <Sprachwahl aktuell={locale} label={t.nav.language} />
          </div>
        </div>

        {/* Kaydırma ilerlemesi — Bewegung bileşeni scaleX ile sürer. */}
        <div aria-hidden className="h-[3px]">
          <div
            id="fortschritt"
            className="h-[3px] origin-left scale-x-0 bg-akzent"
          />
        </div>
      </header>


      <main id="inhalt" className="mx-auto w-full max-w-6xl flex-1 px-10 py-12">
        {children}
      </main>

      <Fusszeile t={t} />
    </div>
  );
}
