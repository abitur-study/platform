"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Başlıktaki açılır menüler `<details>` — açma/kapama, klavye ve odak
 * tarayıcının işi, bunun için JS gerekmiyor. Üç şeyi native `<details>`
 * kendi başına yapamıyor, bu bileşen yalnızca onları ekliyor:
 *
 *  1. Sayfa değişince kapat. Chrome layout'ta yaşıyor, gezinmede yeniden
 *     mount EDİLMEZ — menü açık kalır ve yeni sayfanın üstünü örterdi.
 *  2. Dışarı tıklayınca kapat.
 *  3. Escape ile kapat, odağı summary'ye geri ver.
 *
 * Markup değil, yalnızca davranış: hiçbir şey render etmez, böylece ders
 * listesi sunucu bileşeninde kalır ve istemciye veri olarak taşınmaz.
 * JS çalışmazsa menü yine açılıp kapanır, sadece bu üç kolaylık olmaz.
 */
const OFFEN = "details[data-menue][open]";

export function MenueSchliesser() {
  const pfad = usePathname();

  useEffect(() => {
    for (const d of document.querySelectorAll<HTMLDetailsElement>(OFFEN))
      d.open = false;
  }, [pfad]);

  useEffect(() => {
    const draussen = (e: PointerEvent) => {
      for (const d of document.querySelectorAll<HTMLDetailsElement>(OFFEN)) {
        // İçeri yapılan tıklamaya karışma: summary'nin kendi toggle'ı ve
        // bağlantıların tıklaması bozulmasın (pointerdown, click'ten önce
        // geldiği için burada kapatmak bağlantıyı DOM'dan kaldırırdı).
        if (!d.contains(e.target as Node)) d.open = false;
      }
    };
    const taste = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      const offen = document.querySelector<HTMLDetailsElement>(OFFEN);
      if (!offen) return;
      offen.open = false;
      offen.querySelector("summary")?.focus();
    };
    addEventListener("pointerdown", draussen);
    addEventListener("keydown", taste);
    return () => {
      removeEventListener("pointerdown", draussen);
      removeEventListener("keydown", taste);
    };
  }, []);

  return null;
}
