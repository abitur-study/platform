/**
 * İletişim bilgileri — sitenin altındaki "Bize ulaş" bölümü buradan basılır.
 *
 * ⚠️ AŞAĞIDAKİLER HENÜZ GERÇEK DEĞİL. Tasarım taslağındaki örnek adreslerdir;
 * kendi adreslerinle değiştir. Boş bıraktığın satır sayfada hiç görünmez —
 * yani elinde yalnızca e-posta varsa diğerlerini "" yapman yeterli.
 *
 * Telefon için uluslararası biçim kullan: "+90 5xx xxx xx xx".
 */
export const KONTAKT = {
  /** mailto: bağlantısı olur. */
  email: "",
  /** tel: bağlantısı olur; boşluklar bağlantıdan otomatik temizlenir. */
  telefon: "",
  /** Sadece kullanıcı adı değil, tam adres: "instagram.com/…" */
  instagram: "",
  /** Tam adres: "github.com/…" */
  github: "",
} as const;

export type KontaktKanal = keyof typeof KONTAKT;
