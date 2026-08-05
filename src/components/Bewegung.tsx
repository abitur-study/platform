"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Sayfanın tek client bileşeni. İki iş yapar, ikisi de kaydırmaya bağlı:
 *
 *  1. Giriş animasyonları — `[data-reveal]` öğeleri görünür alana girince
 *     `.sichtbar` sınıfını alır, gerisi CSS'te.
 *  2. Başlıktaki ilerleme çubuğu — `#fortschritt` öğesini scaleX ile sürer.
 *
 * `js-reveal` sınıfını buradan ekliyoruz: JavaScript çalışmazsa öğeler hiç
 * gizlenmez. Aksi hâlde JS'siz bir tarayıcıda sayfa bomboş görünürdü.
 */
export function Bewegung() {
  // Bu bileşen layout'ta yaşıyor: sayfa değişince yeniden mount EDİLMEZ.
  // pathname'i bağımlılığa koymazsak yeni sayfanın [data-reveal] öğeleri
  // hiç gözlemlenmez ve opacity:0'da kalır — sayfa boş görünür.
  const pfad = usePathname();

  useEffect(() => {
    const aufraeumen: (() => void)[] = [];
    const ruhig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* — 1. Giriş animasyonları — */
    // Hareket istemeyene hiç dokunma: öğeler doğrudan görünür kalsın.
    if (!ruhig) {
      document.documentElement.classList.add("js-reveal");
      const beobachter = new IntersectionObserver(
        (eintraege) => {
          for (const e of eintraege) {
            if (!e.isIntersecting) continue;
            const el = e.target as HTMLElement;
            el.style.transitionDelay = `${el.dataset.revealDelay ?? 0}ms`;
            el.classList.add("sichtbar");
            beobachter.unobserve(el); // bir kez göster, sonra bırak
          }
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
      );
      for (const el of document.querySelectorAll("[data-reveal]"))
        beobachter.observe(el);
      aufraeumen.push(() => beobachter.disconnect());
    }

    /* — 2. İlerleme çubuğu — */
    // Bu bir animasyon değil, konum göstergesi: reduced-motion'da da çalışır.
    const balken = document.getElementById("fortschritt");
    if (balken) {
      let geplant = false;
      const zeichnen = () => {
        geplant = false;
        const d = document.documentElement;
        const strecke = d.scrollHeight - d.clientHeight;
        // Kaydırılamayan kısa sayfada çubuk hiç görünmesin.
        const anteil = strecke > 0 ? d.scrollTop / strecke : 0;
        balken.style.transform = `scaleX(${Math.min(1, Math.max(0, anteil))})`;
      };
      const anfordern = () => {
        if (geplant) return;
        geplant = true;
        requestAnimationFrame(zeichnen);
      };
      addEventListener("scroll", anfordern, { passive: true });
      addEventListener("resize", anfordern, { passive: true });
      zeichnen();
      aufraeumen.push(() => {
        removeEventListener("scroll", anfordern);
        removeEventListener("resize", anfordern);
      });
    }

    return () => aufraeumen.forEach((f) => f());
  }, [pfad]);

  return null;
}
