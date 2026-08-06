import type { Aufgabe } from "../../content/schema";
import type { Locale } from "@/i18n";
import type { Messages } from "@/messages/tr";
import { renderMd } from "@/lib/markdown";
import { afbSpanne } from "../../content/registry";

/** Markdown + LaTeX build sırasında HTML'e çevrilir; tarayıcıda formül JS'i yok. */
function Md({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div
      className={`prose ${className}`}
      dangerouslySetInnerHTML={{ __html: renderMd(src) }}
    />
  );
}

/**
 * Katlanır bölüm — spec'teki "İpucu" / "Başlangıç adımı" kutusu.
 * Açıkken zemin değişmez: renk sıçraması tasarım dilinde yok, sadece ok döner.
 */
function Klappe({
  titel,
  hinweis,
  rechts,
  children,
}: {
  titel: string;
  hinweis: string;
  rechts: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group mb-6 border border-linie">
      <summary className="flex items-center justify-between gap-4 px-8 py-6 transition-colors hover:bg-papier-2">
        <span className="flex flex-wrap items-center gap-4">
          <span aria-hidden className="block size-3.5 shrink-0 rounded-full bg-akzent" />
          <span className="t-22 font-bold">{titel}</span>
          <span className="text-base">{hinweis}</span>
        </span>
        <span className="shrink-0 text-base font-bold whitespace-nowrap">
          {rechts}{" "}
          <span
            aria-hidden
            className="inline-block text-akzent transition-transform group-open:rotate-90"
          >
            ▸
          </span>
        </span>
      </summary>
      <div className="px-8 pb-8">{children}</div>
    </details>
  );
}

export function AufgabeView({
  a,
  locale,
  t,
}: {
  a: Aufgabe;
  locale: Locale;
  t: Messages;
}) {
  // "Neden bu adım?" açıklaması: TR arayüzünde Türkçe, diğerlerinde Almanca.
  const warum = (w: { de: string; tr: string }) =>
    locale === "tr" ? w.tr : w.de;

  const schritte = a.loesung.schritte;
  // Baştaki sıfırlar atılır: "013" -> "13". Üç haneli numara da
  // sütuna sığsın diye ızgara sabit genişlikte değil, auto.
  const nr = String(Number(a.id.match(/(\d+)$/)?.[1] ?? 1));

  const meta: [string, string, boolean][] = [
    [t.aufgabe.dauer, `${a.bearbeitungszeit_min} ${t.aufgabe.minuten}`, false],
    ...(a.bereich === "abitur" && afbSpanne(a.operatoren)
      ? ([[t.aufgabe.afb, afbSpanne(a.operatoren), true]] as [string, string, boolean][])
      : []),
    [
      a.bereich === "abitur" ? t.aufgabe.operatoren : t.aufgabe.textsorte,
      a.bereich === "abitur" ? a.operatoren.join(", ") : (a.textsorte ?? "—"),
      false,
    ],
    // Değerde birimi tekrarlamıyoruz: etiket zaten "puan" diyor.
    [t.aufgabe.punkte, String(a.loesung.gesamtpunkte), false],
  ];

  return (
    <article>
      {/* — Numara + başlık — */}
      <header className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-6">
        <div className="font-[family-name:var(--font-display)] text-[3rem] leading-none tabular-nums text-akzent sm:text-[5rem]">
          {nr}
        </div>
        <h1 className="t-52 max-w-[52.5rem] text-pretty">{a.titel}</h1>
      </header>

      {/* — Künye şeridi — */}
      <dl className="mt-12 grid gap-8 border-y border-linie py-6 sm:grid-cols-2 lg:grid-cols-4">
        {meta.map(([k, v, akzent]) => (
          <div key={k}>
            <dt className="text-base capitalize">{k}</dt>
            <dd
              className={`font-bold leading-snug ${
                akzent ? "t-22 text-akzent" : "text-[1.375rem]"
              }`}
            >
              {v}
            </dd>
          </div>
        ))}
      </dl>

      {/* — Soru metni — */}
      <Md src={a.aufgabenstellung} className="mt-16" />

      {a.material.length > 0 && (
        <section className="mt-10">
          {a.material.map((m) => (
            <figure key={m.titel} className="mt-6 border border-linie p-6 sm:p-8">
              <figcaption className="text-base font-bold">{m.titel}</figcaption>
              <Md src={m.inhalt} className="mt-4" />
              <p className="mt-6 text-base text-tinte-schwach">
                {m.quelle} · {m.lizenz}
              </p>
            </figure>
          ))}
        </section>
      )}

      {/* — Ayraç: buradan sonrası kendi denemenden sonra — */}
      <div className="kein-druck my-12 flex items-center gap-4">
        <span aria-hidden className="h-px flex-1 bg-linie" />
        <span className="text-base font-bold">{t.aufgabe.nachVersuch}</span>
        <span aria-hidden className="h-px flex-1 bg-linie" />
      </div>

      <Klappe
        titel={t.aufgabe.tipp}
        hinweis={t.aufgabe.tippHint}
        rechts={`${a.tipps.length} ${t.aufgabe.notiz}`}
      >
        <ul className="prose grid list-disc gap-3 pl-6">
          {a.tipps.map((tipp, i) => (
            <li key={i}>
              <Md src={tipp} />
            </li>
          ))}
        </ul>
      </Klappe>

      <Klappe
        titel={t.aufgabe.ansatz}
        hinweis={t.aufgabe.ansatzHint}
        rechts={`1 / ${schritte.length}`}
      >
        <p className="text-base font-bold">{schritte[0].titel}</p>
        <Md src={schritte[0].inhalt} className="mt-3" />
      </Klappe>

      {/* — Tam çözüm — */}
      <details className="group border border-linie">
        {/*
          Tıklama alanı bilerek yalnızca oval: satırın tamamı pointer-events'i
          geçirmiyor, sadece butonun kendisi alıyor. Klavye erişimi etkilenmez —
          summary hâlâ odaklanabilir ve Enter ile açılır.
        */}
        <summary className="block p-0">
          <div className="pointer-events-none flex flex-wrap items-center justify-between gap-8 border-b border-linie p-8">
            <span>
              {schritte.length} {t.aufgabe.schritt.toLocaleLowerCase(locale)} ·{" "}
              {a.loesung.gesamtpunkte} {t.aufgabe.punkte} · {t.aufgabe.mitBegruendung}
            </span>
            <span className="pointer-events-auto cursor-pointer rounded-full border border-linie px-[1.875rem] py-3.5 text-base font-bold whitespace-nowrap transition-colors hover:bg-papier-2 group-open:bg-papier-2">
              {t.aufgabe.erklaerMir}{" "}
              <span aria-hidden className="inline-block transition-transform group-open:rotate-90">
                ▸
              </span>
            </span>
          </div>
        </summary>

        {/* Adım kısayolları */}
        <nav className="kein-druck flex flex-wrap gap-2 border-b border-linie px-8 py-6 text-base font-bold">
          <span className="self-center pr-2 font-normal">{t.aufgabe.schritteNav}</span>
          {schritte.map((s) => (
            <a
              key={s.nr}
              href={`#adim-${s.nr}`}
              className="rounded-full border border-linie px-4 py-0.5 transition-colors hover:bg-akzent hover:text-papier"
            >
              {s.nr} · {s.titel.split(/[\s—-]/)[0]}
            </a>
          ))}
        </nav>

        {schritte.map((s) => (
          <section
            key={s.nr}
            id={`adim-${s.nr}`}
            className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-6 border-b border-linie p-8 sm:py-10"
          >
            <div className="t-52 !leading-none tabular-nums text-akzent">{s.nr}</div>
            <div>
              <div className="flex items-baseline justify-between gap-6">
                <h3 className="t-22 !leading-snug">{s.titel}</h3>
                <span className="shrink-0 text-base whitespace-nowrap">
                  {s.teilpunkte} {t.aufgabe.punkte}
                </span>
              </div>
              <Md src={s.inhalt} className="mt-4" />

              {/* Gerekçe — projenin kalbi, bu yüzden gizlenmez. */}
              <div className="mt-6 bg-warnung-schwach p-6">
                <p className="text-base font-bold">{t.aufgabe.warum}</p>
                <Md src={warum(s.warum)} className="mt-2 max-w-[30rem] text-pretty" />
              </div>
            </div>
          </section>
        ))}

        {/* Puanlama */}
        <section className="p-8">
          <h3 className="text-base font-bold">{t.aufgabe.erwartungshorizont}</h3>
          <ul className="mt-4">
            {schritte.map((s) => (
              <li
                key={s.nr}
                className="flex justify-between gap-4 border-b border-linie py-2"
              >
                <span>
                  {s.nr}. {s.titel}
                </span>
                <span className="shrink-0 tabular-nums">{s.teilpunkte}</span>
              </li>
            ))}
            <li className="flex justify-between gap-4 py-2 font-bold">
              <span>{t.aufgabe.gesamt}</span>
              <span className="tabular-nums">
                {a.loesung.gesamtpunkte} {t.aufgabe.punkte}
              </span>
            </li>
          </ul>

          {a.loesung.haeufige_fehler.length > 0 && (
            <>
              <h3 className="mt-10 text-base font-bold">{t.aufgabe.haeufigeFehler}</h3>
              <ul className="prose mt-4 list-disc pl-6">
                {a.loesung.haeufige_fehler.map((f, i) => (
                  <li key={i}>
                    <Md src={f} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      </details>

      <footer className="mt-12 border-t border-linie pt-6 text-base leading-relaxed text-tinte-schwach">
        <p>
          {t.aufgabe.quelle}: {a.quelle}
        </p>
        {a.geprueft_von && (
          <p>
            {t.aufgabe.geprueftVon}: {a.geprueft_von}
          </p>
        )}
        <p>{a.lizenz}</p>
      </footer>
    </article>
  );
}
