import Link from "next/link";

/**
 * Liste sayfalarının tamamı bu bileşeni kullanır — kart işaretlemesi tek yerde.
 * Üç düzen var, tasarım spec'indeki üç liste ekranına birebir karşılık gelir:
 *   fach    — ders listesi: büyük satır kartı, sağda dev sayı
 *   thema   — konu listesi: solda mavi sıra numarası
 *   aufgabe — soru listesi: solda numara, sağda pill etiketler
 */
export type Kachel = {
  href: string;
  titel: string;
  text?: string;
  /** Sağdaki ikincil bilgi (ör. "5 soru"). */
  meta?: string;
  /** Solda ya da sağda basılan iri sayı. */
  zahl?: string;
  /** Pill etiketler; ilki dolu mavi, kalanı çerçeveli. */
  marken?: string[];
  /** İçeriği henüz olmayan ders/konu: bağlantı değil, soluk bir kutu. */
  bald?: boolean;
};

type Variante = "fach" | "thema" | "aufgabe";

const KARTE =
  "border border-linie p-6 transition-colors sm:p-8 hover:bg-papier-2 items-center gap-6";

function Pfeil() {
  return (
    <span aria-hidden className="text-akzent">
      ▸
    </span>
  );
}

/** Henüz yazılmamış ders/konu — tıklanamaz, kısa bir not taşır. */
function BaldKarte({ k, label }: { k: Kachel; label: string }) {
  return (
    <div className="flex min-h-[12.5rem] flex-col justify-between border border-linie p-6 opacity-55 sm:p-8">
      <h3 className="t-22">{k.titel}</h3>
      <p className="text-base leading-relaxed">{k.text ?? label}</p>
    </div>
  );
}

export function Kacheln({
  items,
  leer,
  baldLabel,
  variante = "thema",
  fertigLabel,
  nochNichtLabel,
  bereitLabel,
  oeffnenLabel,
}: {
  items: Kachel[];
  leer: string;
  baldLabel: string;
  variante?: Variante;
  fertigLabel?: string;
  nochNichtLabel?: string;
  bereitLabel?: string;
  oeffnenLabel?: string;
}) {
  if (items.length === 0) return <p className="mt-8">{leer}</p>;

  /* — Ders listesi: hazır olanlar büyük satır, olmayanlar soluk ızgara — */
  if (variante === "fach") {
    const fertig = items.filter((k) => !k.bald);
    const offen = items.filter((k) => k.bald);
    return (
      <>
        {fertig.length > 0 && (
          <section className="mt-24">
            <h2 className="text-base font-bold">{fertigLabel}</h2>
            <div className="mt-6 grid gap-8">
              {fertig.map((k) => (
                <Link
                  key={k.href}
                  href={k.href}
                  data-reveal="right"
                  className={`grid sm:grid-cols-[minmax(0,1fr)_auto] ${KARTE}`}
                >
                  <div>
                    <p className="flex items-center gap-3 text-base font-bold text-akzent">
                      <span aria-hidden className="block size-3 rounded-full bg-akzent" />
                      {bereitLabel}
                    </p>
                    <h3 className="t-52 mt-4">{k.titel}</h3>
                    {k.text && <p className="mt-2">{k.text}</p>}
                  </div>
                  <div className="sm:text-right">
                    <div className="t-52">{k.zahl}</div>
                    <div className="text-base">{k.meta}</div>
                    <div className="mt-4 text-base font-bold">
                      {oeffnenLabel} <Pfeil />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {offen.length > 0 && (
          <section className="mt-24">
            <h2 className="text-base font-bold">{nochNichtLabel}</h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {offen.map((k) => (
                <BaldKarte key={k.href} k={k} label={baldLabel} />
              ))}
            </div>
          </section>
        )}
      </>
    );
  }

  /* — Soru listesi: numara · başlık · pill etiketler — */
  if (variante === "aufgabe") {
    return (
      <div className="mt-16 grid gap-8">
        {items.map((k, i) => (
          <Link
            key={k.href}
            href={k.href}
            data-reveal="right"
            data-reveal-delay={i * 60}
            className={`grid items-start sm:grid-cols-[auto_minmax(0,1fr)_minmax(12.5rem,17.5rem)] ${KARTE}`}
          >
            <div className="t-32 tabular-nums text-akzent">
              {k.zahl ?? i + 1}
            </div>
            <div>
              <h3 className="t-22 text-pretty">{k.titel}</h3>
              {k.text && <p className="mt-2">{k.text}</p>}
            </div>
            <div className="flex flex-wrap items-center gap-2 text-base font-bold sm:justify-end">
              {k.marken?.map((m, j) => (
                <span
                  key={m}
                  className={
                    j === 0
                      ? "rounded-full bg-akzent px-4 py-0.5 text-papier"
                      : "rounded-full border border-linie px-4 py-0.5"
                  }
                >
                  {m}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    );
  }

  /* — Konu listesi: iri mavi sıra numarası · ad · sayı — */
  return (
    <div className="mt-16 grid gap-8">
      {items.map((k, i) => {
        const nr = k.zahl ?? String(i + 1);
        if (k.bald)
          return (
            <div
              key={k.href}
              className="grid items-center gap-6 border border-linie p-6 opacity-55 sm:p-8 sm:grid-cols-[auto_minmax(0,1fr)_auto]"
            >
              <div className="t-52 !leading-none tabular-nums">{nr}</div>
              <div>
                <h3 className="t-32">{k.titel}</h3>
                {k.text && <p className="mt-2">{k.text}</p>}
              </div>
              <div className="text-base font-bold sm:text-right">{baldLabel}</div>
            </div>
          );
        return (
          <Link
            key={k.href}
            href={k.href}
            data-reveal="right"
            data-reveal-delay={i * 60}
            className={`grid sm:grid-cols-[auto_minmax(0,1fr)_auto] ${KARTE}`}
          >
            <div className="t-52 !leading-none tabular-nums text-akzent">{nr}</div>
            <div>
              <h3 className="t-32">{k.titel}</h3>
              {k.text && <p className="mt-2">{k.text}</p>}
            </div>
            <div className="text-base font-bold sm:text-right">
              {k.meta} <Pfeil />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

/** Sayfa başlığı + üstünde geri dönüş izi. */
export function Kopf({
  pfad,
  titel,
  titelAkzent,
  unter,
  meta,
}: {
  pfad: { href: string; label: string }[];
  /** Soru sayfasında başlığı AufgabeView basar; burada yalnızca iz gösterilir. */
  titel?: string;
  /** Başlığın mavi basılan ikinci kelimesi — spec'te "Abitur *dersleri*". */
  titelAkzent?: string;
  unter?: string;
  /** Başlığın altındaki kalın sayaç satırı. */
  meta?: string[];
}) {
  return (
    <header>
      <nav className="flex flex-wrap gap-2.5 text-base">
        {pfad.map((p, i) => (
          <span key={p.href} className="flex gap-2.5">
            {i > 0 && <span aria-hidden>/</span>}
            <Link href={p.href} className="hover:text-akzent">
              {p.label}
            </Link>
          </span>
        ))}
        {titel && (
          <>
            <span aria-hidden>/</span>
            <span className="font-bold">{titel}</span>
          </>
        )}
      </nav>

      {titel && (
        <h1 className="t-hero mt-8">
          {titel}
          {titelAkzent && <span className="text-akzent"> {titelAkzent}</span>}
        </h1>
      )}
      {meta && meta.length > 0 && (
        <p className="mt-4 flex flex-wrap gap-8 text-base font-bold">
          {meta.map((m, i) => (
            <span key={m} className={i === 1 ? "text-akzent" : undefined}>
              {m}
            </span>
          ))}
        </p>
      )}
      {unter && <p className="mt-6 max-w-[30rem]">{unter}</p>}
    </header>
  );
}
