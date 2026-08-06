import Link from "next/link";
import type { Locale } from "@/i18n";
import type { Messages } from "@/messages/tr";
import { alleAufgaben } from "@/lib/content";
import { FAECHER, ZERTIFIKATE } from "../../content/registry";
import { Sprachwahl } from "./Sprachwahl";
import { Bewegung } from "./Bewegung";
import { Fusszeile } from "./Fusszeile";
import { MenueSchliesser } from "./MenueSchliesser";

type Eintrag = { href: string; name: string; bald: boolean };

/**
 * Başlıktaki açılır menü. Native `<details>`: açılıp kapanması, klavyesi ve
 * ekran okuyucudaki "genişletildi" durumu tarayıcıdan geliyor — Chrome sunucu
 * bileşeni olarak kalıyor, ders listesi istemciye taşınmıyor.
 *
 * `name` ikisine de aynı: HTML'in exclusive-accordion kuralı gereği biri
 * açılınca diğeri kendiliğinden kapanır.
 *
 * Konumlandırma iki kademeli. Dar ekranda `<details>` static kalır, panel
 * başlığın iç kabına (px-5) yaslanıp `inset-x-5` ile iki kenara oturur:
 * 375px'te taşma ve yatay kaydırma olmaz. sm'den itibaren `<details>`
 * relative olur, panel kendi başlığının altına açılır.
 */
function Menue({
  titel,
  alleHref,
  alleLabel,
  baldLabel,
  eintraege,
}: {
  titel: string;
  alleHref: string;
  alleLabel: string;
  baldLabel: string;
  eintraege: Eintrag[];
}) {
  return (
    <details name="hauptmenue" data-menue className="group static sm:relative">
      <summary className="flex cursor-pointer list-none items-center gap-1.5 hover:text-akzent [&::-webkit-details-marker]:hidden">
        {titel}
        <span
          aria-hidden
          className="inline-block text-akzent transition-transform group-open:rotate-90"
        >
          ▸
        </span>
      </summary>
      {/* sm:mt-[1.625rem] — panel başlığın ALT kenarından sarksın diye summary'nin
          altından başlığın bitişine kadar olan boşluk (py-5 + 3px ilerleme çubuğu).
          Olmazsa panel başlığın ortasından açılır, alt çizgiyi ve ilerleme
          çubuğunu örter. Başlık dolgusu değişirse burası birkaç px kayar — kozmetik. */}
      <ul className="absolute inset-x-5 top-full mt-1 z-50 max-h-[min(70vh,32rem)] overflow-y-auto border border-linie bg-papier py-2 text-base font-normal sm:inset-x-auto sm:left-0 sm:mt-[1.625rem] sm:w-max sm:min-w-64 sm:max-w-xs">
        {/* Genel bakış sayfası menüden kaybolmasın. */}
        <li className="border-b border-linie">
          <Link
            href={alleHref}
            className="block px-5 py-2.5 font-bold hover:bg-papier-2 hover:text-akzent"
          >
            {alleLabel}
          </Link>
        </li>
        {eintraege.map((e) =>
          e.bald ? (
            // Sorusu olmayan ders: liste sayfalarındaki `bald` kartlarıyla aynı
            // davranış — bağlantı değil, soluk bir satır. Boş sayfaya götürmez.
            <li key={e.href}>
              <span className="flex items-baseline justify-between gap-4 px-5 py-2.5 opacity-55">
                {e.name}
                <span className="text-sm whitespace-nowrap">{baldLabel}</span>
              </span>
            </li>
          ) : (
            <li key={e.href}>
              <Link
                href={e.href}
                className="block px-5 py-2.5 hover:bg-papier-2 hover:text-akzent"
              >
                {e.name}
              </Link>
            </li>
          ),
        )}
      </ul>
    </details>
  );
}

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

  // Menü de liste sayfaları gibi davransın: sorusu olmayan ders/sertifika
  // tıklanabilir olmasın. Sayım build sırasında yapılır, runtime maliyeti yok.
  const alle = alleAufgaben();
  const faecher: Eintrag[] = FAECHER.map((f) => ({
    href: `${kok}/abitur/${f.slug}`,
    name: f.name,
    bald: !alle.some((a) => a.bereich === "abitur" && a.fach === f.slug),
  }));
  const zertifikate: Eintrag[] = ZERTIFIKATE.map((z) => ({
    href: `${kok}/sprachzertifikat/${z.slug}`,
    name: z.name,
    bald: !alle.some(
      (a) => a.bereich === "sprachzertifikat" && a.zertifikat === z.slug,
    ),
  }));

  return (
    <div className="flex min-h-dvh flex-col">
      <Bewegung />
      <MenueSchliesser />
      <a
        href="#inhalt"
        className="kein-druck sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-2 focus:rounded focus:bg-akzent focus:px-3 focus:py-2 focus:text-papier"
      >
        {t.nav.skipToContent}
      </a>

      <header className="kein-druck sticky top-0 z-40 border-b border-linie bg-papier">
        {/* relative: dar ekranda açılır paneller bu kaba yaslanır (bkz. Menue). */}
        <div className="relative mx-auto flex max-w-6xl flex-wrap items-center gap-x-7 gap-y-2 px-5 py-5 sm:px-10">
          <Link href={kok} className="flex items-center gap-2.5 text-base font-bold">
            <span aria-hidden className="block size-3.5 bg-akzent" />
            {t.site.title}
          </Link>
          <nav aria-label={t.nav.home} className="flex gap-6 text-base font-bold">
            <Menue
              titel={t.nav.abitur}
              alleHref={`${kok}/abitur`}
              alleLabel={t.nav.alleFaecher}
              baldLabel={t.liste.bald}
              eintraege={faecher}
            />
            <Menue
              titel={t.nav.sz}
              alleHref={`${kok}/sprachzertifikat`}
              alleLabel={t.nav.alleZertifikate}
              baldLabel={t.liste.bald}
              eintraege={zertifikate}
            />
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


      <main id="inhalt" className="mx-auto w-full max-w-6xl flex-1 px-5 py-12 sm:px-10">
        {children}
      </main>

      <Fusszeile t={t} />
    </div>
  );
}
