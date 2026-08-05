"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, LOCALE_LABEL, type Locale } from "@/i18n";

/**
 * Dil değiştirici. Slug'lar dile göre değişmediği için yolun yalnızca ilk
 * parçası takas edilir — kullanıcı bulunduğu sayfada kalır.
 *
 * Client component ama JS'siz de çalışır: statik HTML'e gerçek <a> etiketleri
 * olarak basılır, hydration olmasa bile linkler doğrudur.
 */
export function Sprachwahl({ aktuell, label }: { aktuell: Locale; label: string }) {
  const pfad = usePathname() ?? `/${aktuell}`;
  const rest = pfad.split("/").slice(2).join("/");

  return (
    <nav aria-label={label} className="flex items-center gap-1 text-sm">
      {LOCALES.map((l) => {
        const ziel = `/${l}${rest ? `/${rest}` : ""}`;
        return l === aktuell ? (
          <span
            key={l}
            aria-current="true"
            className="rounded px-2 py-1 font-semibold text-akzent"
          >
            {l.toUpperCase()}
          </span>
        ) : (
          <Link
            key={l}
            href={ziel}
            hrefLang={l}
            title={LOCALE_LABEL[l]}
            className="rounded px-2 py-1 text-tinte-schwach hover:bg-papier-2 hover:text-tinte"
          >
            {l.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
