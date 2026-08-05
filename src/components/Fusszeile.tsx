import type { Messages } from "@/messages/tr";
import { KONTAKT } from "../../content/kontakt";

/** Küçük ikonlar — spec'teki 24×24 çizimler, aksan renginde. */
const IKONEN = {
  email: (
    <>
      <rect x="2" y="5" width="20" height="14" fill="none" stroke="currentColor" strokeWidth="2" />
      <polyline points="2,5 12,13 22,5" fill="none" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  telefon: (
    <path
      d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L17 13l4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.4" fill="currentColor" />
    </>
  ),
  github: (
    <>
      <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M9 20.5v-3.2c0-.9.3-1.5.7-1.9-2.4-.3-4.9-1.2-4.9-5.3 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10 10 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.1-2.5 5-4.9 5.3.4.4.7 1 .7 2v3.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </>
  ),
};

/** Boş bırakılan kanal hiç basılmaz — yarım dolu bir liste görünmesin. */
function kanaele() {
  const roh: [keyof typeof IKONEN, string, string][] = [
    ["email", KONTAKT.email, `mailto:${KONTAKT.email}`],
    ["telefon", KONTAKT.telefon, `tel:${KONTAKT.telefon.replace(/\s/g, "")}`],
    ["instagram", KONTAKT.instagram, `https://${KONTAKT.instagram}`],
    ["github", KONTAKT.github, `https://${KONTAKT.github}`],
  ];
  return roh.filter(([, wert]) => wert.trim().length > 0);
}

function Punkt() {
  return <span aria-hidden className="block size-3 shrink-0 rounded-full bg-akzent" />;
}

export function Fusszeile({ t }: { t: Messages }) {
  const liste = kanaele();

  return (
    <footer className="kein-druck mt-24 border-t border-linie">
      <div className="mx-auto grid max-w-6xl gap-12 px-10 py-16 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="flex items-center gap-3 text-base font-bold">
            <Punkt />
            {t.footer.wer}
          </p>
          <p className="mt-4 max-w-[25rem]">{t.footer.werText}</p>
        </div>

        <div>
          <p className="flex items-center gap-3 text-base font-bold">
            <Punkt />
            {t.footer.kontakt}
          </p>
          {liste.length > 0 ? (
            <ul className="mt-4 grid gap-2">
              {liste.map(([art, wert, href]) => (
                <li key={art}>
                  <a href={href} className="flex items-center gap-3 hover:text-akzent">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden
                      className="block size-5 shrink-0 text-akzent"
                    >
                      {IKONEN[art]}
                    </svg>
                    {wert}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 max-w-[25rem]">{t.footer.kontaktLeer}</p>
          )}
        </div>

        <div>
          <p className="flex items-center gap-3 text-base font-bold">
            <Punkt />
            {t.footer.mitmachen}
          </p>
          <p className="mt-4 max-w-[25rem]">{t.footer.mitmachenText}</p>
          {KONTAKT.email && (
            <a
              href={`mailto:${KONTAKT.email}`}
              className="mt-4 inline-block rounded-full border border-linie px-[1.875rem] py-3.5 text-base font-bold transition-colors hover:bg-tinte hover:text-papier"
            >
              {t.footer.mitmachenCta} <span aria-hidden className="text-akzent">▸</span>
            </a>
          )}
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 border-t border-linie px-10 py-6 text-base">
        <p>{t.footer.nonprofit}</p>
        <p>{t.footer.license}</p>
      </div>
    </footer>
  );
}
