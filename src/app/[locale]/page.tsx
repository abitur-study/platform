import Link from "next/link";
import { getMessages, isLocale, LOCALES } from "@/i18n";
import { notFound } from "next/navigation";
import { alleAufgaben } from "@/lib/content";
import { LandingMini } from "@/components/LandingMini";
import { FAECHER } from "../../../content/registry";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/** Abitur kartının köşesindeki fonksiyon grafiği — spec'teki dekoratif çizim. */
function AbiturDeko() {
  return (
    <svg
      viewBox="0 0 320 220"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      className="pointer-events-none absolute -right-7 -bottom-6 h-auto w-[300px] opacity-12"
    >
      <line x1="0" y1="150" x2="320" y2="150" stroke="currentColor" strokeWidth="2" />
      <line x1="60" y1="0" x2="60" y2="220" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8 214 C60 40 120 20 168 116 C210 200 262 176 312 62"
        fill="none"
        className="stroke-akzent"
        strokeWidth="6"
      />
      <text x="196" y="44" fontFamily="Georgia,serif" fontStyle="italic" fontSize="44" fill="currentColor">
        f(x)
      </text>
    </svg>
  );
}

/** Sprachzertifikat kartı — açılış/kapanış tırnağı. */
function SzDeko() {
  return (
    <svg
      viewBox="0 0 320 220"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      className="pointer-events-none absolute right-2 bottom-2 h-auto w-[280px] opacity-14"
    >
      <text x="4" y="196" fontFamily="Georgia,serif" fontSize="230" className="fill-akzent">
        „
      </text>
      <text x="168" y="196" fontFamily="Georgia,serif" fontSize="230" className="fill-akzent">
        “
      </text>
    </svg>
  );
}

export default async function Landing({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getMessages(locale);

  const alle = alleAufgaben();
  const anzahl = {
    sz: alle.filter((a) => a.bereich === "sprachzertifikat").length,
    abitur: alle.filter((a) => a.bereich === "abitur").length,
  };

  const tueren = [
    {
      href: `/${locale}/abitur`,
      nr: "01",
      meta: `${FAECHER.length} ${t.landing.faecher} · ${anzahl.abitur} ${t.liste.anzahl}`,
      titel: t.landing.abiturTitle,
      text: t.landing.abiturDesc,
      marken: ["AFB I", "AFB II", "AFB III"],
      go: t.landing.abiturGo,
      deko: <AbiturDeko />,
    },
    {
      href: `/${locale}/sprachzertifikat`,
      nr: "02",
      meta: `C1 · C2 · ${anzahl.sz} ${t.liste.anzahl}`,
      titel: "Sprach­zertifikat",
      text: t.landing.szDesc,
      marken: ["Einfach", "Mittel", "Schwer"],
      go: t.landing.szGo,
      deko: <SzDeko />,
    },
  ];

  const gruende = [
    {
      titel: t.landing.warum1Titel,
      text: t.landing.warum1,
      svg: (
        <>
          <rect x="0" y="64" width="68" height="32" className="fill-warnung-schwach" />
          <rect x="80" y="38" width="68" height="58" className="fill-akzent" />
          <rect x="160" y="8" width="68" height="88" className="fill-tinte" />
          <text x="24" y="86" fontFamily="Georgia,serif" fontSize="18" className="fill-tinte">
            I
          </text>
          <text x="100" y="86" fontFamily="Georgia,serif" fontSize="18" className="fill-papier">
            II
          </text>
          <text x="178" y="86" fontFamily="Georgia,serif" fontSize="18" className="fill-papier">
            III
          </text>
        </>
      ),
    },
    {
      titel: t.landing.warum2Titel,
      text: t.landing.warum2,
      svg: (
        <>
          <line x1="8" y1="20" x2="150" y2="20" className="stroke-tinte" strokeWidth="8" />
          <line x1="8" y1="48" x2="110" y2="48" className="stroke-tinte" strokeWidth="8" />
          <line x1="8" y1="76" x2="130" y2="76" className="stroke-tinte" strokeWidth="8" />
          <line x1="168" y1="10" x2="168" y2="86" className="stroke-akzent" strokeWidth="4" />
          <polygon points="196,48 168,32 168,64" className="fill-akzent" />
          <rect x="204" y="34" width="28" height="28" fill="var(--color-markierung)" />
        </>
      ),
    },
    {
      titel: t.landing.warum3Titel,
      text: t.landing.warum3,
      svg: (
        <>
          <rect x="0" y="8" width="112" height="80" fill="none" className="stroke-tinte" strokeWidth="4" />
          <circle cx="56" cy="48" r="22" className="fill-akzent" />
          <line x1="132" y1="16" x2="232" y2="80" className="stroke-warnung" strokeWidth="6" />
          <line x1="232" y1="16" x2="132" y2="80" className="stroke-warnung" strokeWidth="6" />
        </>
      ),
    },
  ];

  return (
    <>
      {/* — Hero — */}
      <section data-reveal="left" className="grid justify-items-center pt-6 text-center">
        <p className="flex items-center justify-center gap-3 text-base font-bold leading-snug">
          <span aria-hidden className="block size-3 rounded-full bg-akzent" />
          {t.landing.kicker}
        </p>
        <h1 className="t-hero mt-6">
          {t.landing.heroA}
          <br />
          <span className="text-akzent">{t.landing.heroB}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[35rem]">{t.landing.heroText}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {tueren.map((k) => (
            <Link
              key={k.href}
              href={k.href}
              className="rounded-full border border-linie bg-papier px-[1.875rem] py-3.5 text-base font-bold leading-snug transition-colors hover:bg-tinte hover:text-papier"
            >
              {k.titel}
            </Link>
          ))}
        </div>
      </section>

      {/* — İki kapı — */}
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        {tueren.map((k) => (
          <Link
            key={k.href}
            href={k.href}
            data-reveal={k.nr === "01" ? "left" : "right"}
            className="relative flex min-h-[26rem] flex-col overflow-hidden border border-linie bg-papier p-8 transition-colors hover:bg-papier-2"
          >
            {k.deko}
            <div className="relative flex items-baseline justify-between text-base font-bold leading-snug">
              <span>
                {t.landing.tuer} {k.nr}
              </span>
              <span className="text-akzent">{k.meta}</span>
            </div>
            <h2 className="t-52 relative mt-6">{k.titel}</h2>
            <p className="relative mt-4 max-w-[25rem]">{k.text}</p>
            <div className="relative mt-6 flex flex-wrap gap-2 text-base font-bold">
              {k.marken.map((m) => (
                <span key={m} className="rounded-full border border-linie px-4 py-0.5">
                  {m}
                </span>
              ))}
            </div>
            <div className="relative mt-auto pt-8 text-base font-bold">
              {k.go} <span aria-hidden className="text-akzent">▸</span>
            </div>
          </Link>
        ))}
      </div>

      {/* — Neden farklıyız — */}
      <section className="mt-24">
        <h2 data-reveal="left" className="t-52 max-w-[47.5rem]">{t.landing.warum}</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {gruende.map((g, i) => (
            <div key={g.titel} data-reveal="up" data-reveal-delay={i * 120}>
              <svg viewBox="0 0 240 96" aria-hidden className="block h-auto w-full max-w-[15rem]">
                {g.svg}
              </svg>
              <h3 className="t-22 mt-6">{g.titel}</h3>
              <p className="mt-4 max-w-[30rem]">{g.text}</p>
            </div>
          ))}
        </div>
      </section>

      <LandingMini t={t} />
    </>
  );
}
