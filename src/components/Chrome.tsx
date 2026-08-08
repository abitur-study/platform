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
 * Marka işareti — mezuniyet kepi. Geometrik ve düz: tahta bir eşkenar
 * dörtgen, gövde tek bir yay. Süs yok, spec'teki İsviçre/editorial dile uyar.
 * currentColor kullanmıyor: tahta mavi (akzent), gövde mürekkep — logo
 * başlıktaki yazıyla aynı renkte erimesin.
 */
function Kep() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 26 20"
      className="block h-5 w-[1.625rem] shrink-0"
      fill="none"
    >
      <path d="M13 1 25 7l-12 6L1 7z" fill="var(--color-akzent)" />
      <path
        d="M6 9.5v4.2c0 1.9 3.1 3.3 7 3.3s7-1.4 7-3.3V9.5"
        stroke="var(--color-tinte)"
        strokeWidth="1.7"
        strokeLinecap="square"
      />
      <path d="M24 8v5.5" stroke="var(--color-tinte)" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

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
            <Kep />
            {t.site.title}
          </Link>
          {/* Telefonda kendi satırına iner (order-last + w-full), böylece dil
              seçici logoyla aynı satırda kalır: sticky başlık üç satır
              yerine iki satır olur. sm'den itibaren tek satır. */}
          <nav
            aria-label={t.nav.home}
            className="order-last flex w-full gap-6 text-base font-bold sm:order-none sm:w-auto"
          >
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
