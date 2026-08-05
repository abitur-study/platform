import type { Messages } from "@/messages/tr";

/**
 * Landing'in alt bölümü — spec'teki altı örnek görsel. Eğriler artifact'ta
 * runtime'da hesaplanıyordu; burada aynı fonksiyonlardan önceden üretilip
 * statik path olarak gömüldü (bu sitede çalışma anında JS yok).
 */
const GRID = (
  <g className="text-tinte"><line x1="60" y1="0" x2="60" y2="200" stroke="currentColor" strokeOpacity="0.14" /><line x1="120" y1="0" x2="120" y2="200" stroke="currentColor" strokeOpacity="0.14" /><line x1="180" y1="0" x2="180" y2="200" stroke="currentColor" strokeOpacity="0.14" /><line x1="240" y1="0" x2="240" y2="200" stroke="currentColor" strokeOpacity="0.14" /><line x1="0" y1="50" x2="300" y2="50" stroke="currentColor" strokeOpacity="0.14" /><line x1="0" y1="100" x2="300" y2="100" stroke="currentColor" strokeOpacity="0.14" /><line x1="0" y1="150" x2="300" y2="150" stroke="currentColor" strokeOpacity="0.14" /></g>
);

const ZEICHNUNGEN = [
  /* 0 — f(x) = x³ − 6x² + 9x */
  <>
    {GRID}
    <line x1="0" y1="122.2" x2="300" y2="122.2" stroke="currentColor" />
    <line x1="36" y1="0" x2="36" y2="200" stroke="currentColor" />
    <path d="M0.0,208.6 L2.7,200.1 L5.5,191.9 L8.2,184.0 L10.9,176.5 L13.6,169.3 L16.4,162.5 L19.1,155.9 L21.8,149.7 L24.5,143.8 L27.3,138.2 L30.0,132.9 L32.7,127.9 L35.5,123.1 L38.2,118.7 L40.9,114.5 L43.6,110.6 L46.4,106.9 L49.1,103.5 L51.8,100.3 L54.5,97.4 L57.3,94.7 L60.0,92.2 L62.7,89.9 L65.5,87.9 L68.2,86.1 L70.9,84.4 L73.6,83.0 L76.4,81.7 L79.1,80.7 L81.8,79.8 L84.5,79.1 L87.3,78.5 L90.0,78.1 L92.7,77.9 L95.5,77.8 L98.2,77.8 L100.9,78.0 L103.6,78.3 L106.4,78.7 L109.1,79.2 L111.8,79.9 L114.5,80.6 L117.3,81.5 L120.0,82.4 L122.7,83.4 L125.5,84.5 L128.2,85.7 L130.9,86.9 L133.6,88.2 L136.4,89.5 L139.1,90.9 L141.8,92.3 L144.5,93.7 L147.3,95.2 L150.0,96.7 L152.7,98.2 L155.5,99.7 L158.2,101.2 L160.9,102.7 L163.6,104.2 L166.4,105.7 L169.1,107.2 L171.8,108.6 L174.5,110.0 L177.3,111.3 L180.0,112.6 L182.7,113.9 L185.5,115.0 L188.2,116.2 L190.9,117.2 L193.6,118.2 L196.4,119.0 L199.1,119.8 L201.8,120.5 L204.5,121.1 L207.3,121.6 L210.0,121.9 L212.7,122.1 L215.5,122.2 L218.2,122.2 L220.9,122.0 L223.6,121.7 L226.4,121.2 L229.1,120.5 L231.8,119.7 L234.5,118.7 L237.3,117.5 L240.0,116.2 L242.7,114.6 L245.5,112.9 L248.2,110.9 L250.9,108.8 L253.6,106.4 L256.4,103.8 L259.1,100.9 L261.8,97.8 L264.5,94.5 L267.3,90.9 L270.0,87.1 L272.7,83.0 L275.5,78.7 L278.2,74.1 L280.9,69.1 L283.6,63.9 L286.4,58.5 L289.1,52.7 L291.8,46.6 L294.5,40.2 L297.3,33.4 L300.0,26.4" fill="none" className="stroke-akzent" strokeWidth="3" />
  </>,
  /* 1 — belirli integral, −2…2 arası alan */
  <>
    {GRID}
    <path d="M50.0,166.7 L50.0,100.0 L53.3,95.6 L56.7,91.4 L60.0,87.3 L63.3,83.4 L66.7,79.6 L70.0,76.0 L73.3,72.5 L76.7,69.2 L80.0,66.0 L83.3,63.0 L86.7,60.1 L90.0,57.3 L93.3,54.7 L96.7,52.3 L100.0,50.0 L103.3,47.9 L106.7,45.9 L110.0,44.0 L113.3,42.3 L116.7,40.7 L120.0,39.3 L123.3,38.1 L126.7,37.0 L130.0,36.0 L133.3,35.2 L136.7,34.5 L140.0,34.0 L143.3,33.6 L146.7,33.4 L150.0,33.3 L153.3,33.4 L156.7,33.6 L160.0,34.0 L163.3,34.5 L166.7,35.2 L170.0,36.0 L173.3,37.0 L176.7,38.1 L180.0,39.3 L183.3,40.7 L186.7,42.3 L190.0,44.0 L193.3,45.9 L196.7,47.9 L200.0,50.0 L203.3,52.3 L206.7,54.7 L210.0,57.3 L213.3,60.1 L216.7,63.0 L220.0,66.0 L223.3,69.2 L226.7,72.5 L230.0,76.0 L233.3,79.6 L236.7,83.4 L240.0,87.3 L243.3,91.4 L246.7,95.6 L250.0,100.0 L250.0,166.7 Z" className="fill-warnung-schwach" stroke="none" />
    <line x1="0" y1="166.7" x2="300" y2="166.7" stroke="currentColor" />
    <line x1="150" y1="0" x2="150" y2="200" stroke="currentColor" />
    <path d="M0.0,183.3 L2.7,177.9 L5.5,172.6 L8.2,167.4 L10.9,162.3 L13.6,157.3 L16.4,152.4 L19.1,147.6 L21.8,142.9 L24.5,138.3 L27.3,133.7 L30.0,129.3 L32.7,125.0 L35.5,120.8 L38.2,116.7 L40.9,112.7 L43.6,108.8 L46.4,104.9 L49.1,101.2 L51.8,97.6 L54.5,94.1 L57.3,90.7 L60.0,87.3 L62.7,84.1 L65.5,81.0 L68.2,78.0 L70.9,75.0 L73.6,72.2 L76.4,69.5 L79.1,66.9 L81.8,64.3 L84.5,61.9 L87.3,59.6 L90.0,57.3 L92.7,55.2 L95.5,53.2 L98.2,51.2 L100.9,49.4 L103.6,47.7 L106.4,46.0 L109.1,44.5 L111.8,43.1 L114.5,41.7 L117.3,40.5 L120.0,39.3 L122.7,38.3 L125.5,37.3 L128.2,36.5 L130.9,35.8 L133.6,35.1 L136.4,34.6 L139.1,34.1 L141.8,33.8 L144.5,33.5 L147.3,33.4 L150.0,33.3 L152.7,33.4 L155.5,33.5 L158.2,33.8 L160.9,34.1 L163.6,34.6 L166.4,35.1 L169.1,35.8 L171.8,36.5 L174.5,37.3 L177.3,38.3 L180.0,39.3 L182.7,40.5 L185.5,41.7 L188.2,43.1 L190.9,44.5 L193.6,46.0 L196.4,47.7 L199.1,49.4 L201.8,51.2 L204.5,53.2 L207.3,55.2 L210.0,57.3 L212.7,59.6 L215.5,61.9 L218.2,64.3 L220.9,66.9 L223.6,69.5 L226.4,72.2 L229.1,75.0 L231.8,78.0 L234.5,81.0 L237.3,84.1 L240.0,87.3 L242.7,90.7 L245.5,94.1 L248.2,97.6 L250.9,101.2 L253.6,104.9 L256.4,108.8 L259.1,112.7 L261.8,116.7 L264.5,120.8 L267.3,125.0 L270.0,129.3 L272.7,133.7 L275.5,138.3 L278.2,142.9 L280.9,147.6 L283.6,152.4 L286.4,157.3 L289.1,162.3 L291.8,167.4 L294.5,172.6 L297.3,177.9 L300.0,183.3" fill="none" className="stroke-warnung" strokeWidth="3" />
  </>,
  /* 2 — eğik düzlemde kuvvet bileşenleri (spec'te birebir bu koordinatlar) */
  <>
    <polygon points="12,196 300,196 300,74" className="fill-papier" stroke="currentColor" strokeWidth="1.5" />
    <polygon points="150,140 186,125 200,159 164,174" fill="var(--color-markierung)" stroke="currentColor" strokeWidth="1.5" />
    <line x1="175" y1="150" x2="175" y2="205" stroke="currentColor" strokeWidth="2.5" />
    <polygon points="175,214 169,200 181,200" fill="currentColor" />
    <line x1="175" y1="150" x2="126" y2="169" className="stroke-akzent" strokeWidth="2.5" />
    <polygon points="117,172 129,161 133,177" className="fill-akzent" />
    <line x1="175" y1="150" x2="212" y2="196" className="stroke-warnung" strokeWidth="2.5" />
    <polygon points="219,203 205,197 215,189" className="fill-warnung" />
  </>,
  /* 3 — titrasyon eğrisi, kırmızı nokta eşdeğerlik noktası */
  <>
    {GRID}
    <line x1="0" y1="200" x2="300" y2="200" stroke="currentColor" />
    <line x1="0" y1="0" x2="0" y2="200" stroke="currentColor" />
    <path d="M0.0,162.9 L2.7,162.9 L5.5,162.9 L8.2,162.9 L10.9,162.9 L13.6,162.9 L16.4,162.9 L19.1,162.9 L21.8,162.9 L24.5,162.9 L27.3,162.9 L30.0,162.9 L32.7,162.9 L35.5,162.9 L38.2,162.8 L40.9,162.8 L43.6,162.8 L46.4,162.8 L49.1,162.8 L51.8,162.8 L54.5,162.8 L57.3,162.8 L60.0,162.8 L62.7,162.8 L65.5,162.8 L68.2,162.8 L70.9,162.7 L73.6,162.7 L76.4,162.6 L79.1,162.6 L81.8,162.5 L84.5,162.4 L87.3,162.3 L90.0,162.1 L92.7,162.0 L95.5,161.7 L98.2,161.4 L100.9,161.0 L103.6,160.6 L106.4,160.0 L109.1,159.2 L111.8,158.3 L114.5,157.1 L117.3,155.6 L120.0,153.8 L122.7,151.6 L125.5,149.0 L128.2,145.7 L130.9,141.9 L133.6,137.3 L136.4,132.1 L139.1,126.2 L141.8,119.6 L144.5,112.4 L147.3,104.9 L150.0,97.1 L152.7,89.4 L155.5,81.8 L158.2,74.7 L160.9,68.1 L163.6,62.2 L166.4,57.0 L169.1,52.4 L171.8,48.6 L174.5,45.3 L177.3,42.6 L180.0,40.4 L182.7,38.6 L185.5,37.2 L188.2,36.0 L190.9,35.1 L193.6,34.3 L196.4,33.7 L199.1,33.2 L201.8,32.9 L204.5,32.6 L207.3,32.3 L210.0,32.1 L212.7,32.0 L215.5,31.9 L218.2,31.8 L220.9,31.7 L223.6,31.6 L226.4,31.6 L229.1,31.6 L231.8,31.5 L234.5,31.5 L237.3,31.5 L240.0,31.5 L242.7,31.5 L245.5,31.5 L248.2,31.5 L250.9,31.4 L253.6,31.4 L256.4,31.4 L259.1,31.4 L261.8,31.4 L264.5,31.4 L267.3,31.4 L270.0,31.4 L272.7,31.4 L275.5,31.4 L278.2,31.4 L280.9,31.4 L283.6,31.4 L286.4,31.4 L289.1,31.4 L291.8,31.4 L294.5,31.4 L297.3,31.4 L300.0,31.4" fill="none" className="stroke-akzent" strokeWidth="3" />
    <circle cx="150" cy="97.1" r="7" className="fill-warnung" stroke="currentColor" strokeWidth="1.5" />
  </>,
  /* 4 — enzim aktivitesi, optimum 37 °C */
  <>
    {GRID}
    <line x1="0" y1="200" x2="300" y2="200" stroke="currentColor" />
    <line x1="0" y1="0" x2="0" y2="200" stroke="currentColor" />
    <path d="M0.0,199.8 L2.7,199.8 L5.5,199.8 L8.2,199.7 L10.9,199.6 L13.6,199.6 L16.4,199.5 L19.1,199.4 L21.8,199.2 L24.5,199.1 L27.3,198.9 L30.0,198.7 L32.7,198.4 L35.5,198.1 L38.2,197.8 L40.9,197.4 L43.6,197.0 L46.4,196.5 L49.1,195.9 L51.8,195.2 L54.5,194.5 L57.3,193.6 L60.0,192.6 L62.7,191.6 L65.5,190.3 L68.2,189.0 L70.9,187.5 L73.6,185.8 L76.4,183.9 L79.1,181.9 L81.8,179.7 L84.5,177.2 L87.3,174.6 L90.0,171.7 L92.7,168.6 L95.5,165.2 L98.2,161.7 L100.9,157.8 L103.6,153.8 L106.4,149.4 L109.1,144.9 L111.8,140.1 L114.5,135.2 L117.3,130.0 L120.0,124.6 L122.7,119.1 L125.5,113.4 L128.2,107.6 L130.9,101.7 L133.6,95.8 L136.4,89.8 L139.1,83.9 L141.8,77.9 L144.5,72.1 L147.3,66.4 L150.0,60.9 L152.7,55.6 L155.5,50.6 L158.2,45.8 L160.9,41.4 L163.6,37.3 L166.4,33.6 L169.1,30.4 L171.8,27.6 L174.5,25.4 L177.3,23.6 L180.0,22.3 L182.7,21.6 L185.5,21.5 L188.2,23.1 L190.9,27.2 L193.6,33.6 L196.4,42.0 L199.1,52.0 L201.8,63.4 L204.5,75.6 L207.3,88.4 L210.0,101.2 L212.7,113.8 L215.5,125.8 L218.2,137.0 L220.9,147.3 L223.6,156.5 L226.4,164.7 L229.1,171.7 L231.8,177.6 L234.5,182.5 L237.3,186.6 L240.0,189.8 L242.7,192.4 L245.5,194.4 L248.2,195.9 L250.9,197.1 L253.6,197.9 L256.4,198.6 L259.1,199.0 L261.8,199.3 L264.5,199.6 L267.3,199.7 L270.0,199.8 L272.7,199.9 L275.5,199.9 L278.2,200.0 L280.9,200.0 L283.6,200.0 L286.4,200.0 L289.1,200.0 L291.8,200.0 L294.5,200.0 L297.3,200.0 L300.0,200.0" fill="none" className="stroke-warnung" strokeWidth="3" />
    <line x1="185" y1="21" x2="185" y2="200" className="stroke-akzent" strokeWidth="2" strokeDasharray="6 5" />
  </>,
  /* 5 — Erörterung argüman şeması */
  <>
    <rect x="86" y="4" width="128" height="38" fill="none" stroke="currentColor" strokeWidth="2.5" />
    <line x1="150" y1="42" x2="150" y2="66" stroke="currentColor" strokeWidth="2" />
    <line x1="60" y1="66" x2="240" y2="66" stroke="currentColor" strokeWidth="2" />
    <line x1="60" y1="66" x2="60" y2="84" stroke="currentColor" strokeWidth="2" />
    <line x1="240" y1="66" x2="240" y2="84" stroke="currentColor" strokeWidth="2" />
    <rect x="6" y="84" width="108" height="38" className="fill-akzent" />
    <rect x="186" y="84" width="108" height="38" fill="none" stroke="currentColor" strokeWidth="2.5" />
    <line x1="60" y1="122" x2="60" y2="150" stroke="currentColor" strokeWidth="2" />
    <line x1="240" y1="122" x2="240" y2="150" stroke="currentColor" strokeWidth="2" />
    <line x1="60" y1="150" x2="240" y2="150" stroke="currentColor" strokeWidth="2" />
    <line x1="150" y1="150" x2="150" y2="162" stroke="currentColor" strokeWidth="2" />
    <rect x="86" y="162" width="128" height="34" fill="var(--color-markierung)" stroke="currentColor" strokeWidth="2.5" />
  </>,
];

export function LandingMini({ t }: { t: Messages }) {
  return (
    <section className="mt-24">
      <h2 className="t-52 max-w-[47.5rem]">{t.landing.mehr}</h2>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {t.landing.mini.map((m, i) => (
          <div
            key={m.titel}
            data-reveal="up"
            data-reveal-delay={i * 90}
            className="border border-linie p-8"
          >
            <span className="rounded-full border border-linie px-4 py-0.5 text-base font-bold">
              {m.pill}
            </span>
            <h3 className="t-22 mt-4">{m.titel}</h3>
            <svg
              viewBox="0 0 300 200"
              aria-hidden
              className="mt-6 block h-auto w-full text-tinte"
            >
              {ZEICHNUNGEN[i]}
            </svg>
            <p className="mt-4 text-base leading-relaxed">{m.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
