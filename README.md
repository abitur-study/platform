# Abitur & Sprachzertifikat

İstanbul Erkek Lisesi / Alman Lisesi öğrencileri için ücretsiz, reklamsız,
açık kaynak çalışma sitesi. Abitur dersleri ve Goethe-Zertifikat C1/C2.

**Açık uçlu sorular, her adımı gerekçeli çözümler.** Çoktan seçmeli yok —
sınavda nasıl yazıyorsan burada da öyle yazıyorsun.

---

## Neden farklı

- **Çoktan seçmeli hiç yok.** Her soru Abitur sınav formatında, yazılı üretim.
- **Her çözüm adımının gerekçesi var.** "Bu adım neden atıldı?" sorusunun
  cevabı her adımın yanında — Almanca ve Türkçe.
- **Hiçbir veri toplanmaz.** Hesap yok, takip yok, reklam yok, analytics yok.
- Sorular çıkmış Abitur sınavları ve okul klausurları örnek alınarak yazıldı;
  sayılar ve bağlam değiştirildi. Resmî sınav metni değildir.

## Nasıl çalışıyor

Çalışma anında sunucu ve veritabanı **yok** — build'in kendisi backend.

```
content/schema.ts          Zod sözleşmesi (bereich: abitur | sprachzertifikat)
content/registry.ts        dersler, konular, sertifikalar, izinli operatörler
content/aufgaben/**.json   sorular
src/lib/content.ts         build sırasında okur ve doğrular
src/lib/markdown.ts        Markdown + LaTeX → HTML (remark/rehype + KaTeX)
src/app/[locale]/…         kök layout; params bir Promise, await edilir
```

Soru eklemek = doğru klasöre bir JSON koymak. Rotalar `registry.ts`'ten
kendiliğinden üretilir; kayıt ya da import gerekmez.

`src/i18n.ts` + `src/messages/{tr,de,en}.ts` — elle yazılmış i18n.
`tr.ts` referans sözlüktür; tipi diğer iki dilde anahtar eşliğini zorunlu kılar.

## Geliştirme

```bash
npm install
npm run dev        # http://localhost:3000

npm run validate   # şema + puan toplamları + LaTeX, her içerik JSON'u üzerinde
npm run test       # doğrulayıcının kendi testleri
npm run build      # out/ klasörüne statik export
```

`npm run validate` on kapıdan geçirir: şema, çoktan seçmeli dedektörü, LaTeX
derlemesi, `warum` alanlarının uzunluğu, puan toplamı, operatör beyaz listesi,
`id` benzersizliği ve sorular arası metin benzerliği.

## Soru yazmak

`docs/soru-yazimi/BRIEF.md` kendi kendine yeten bir yazım kılavuzudur: şema,
müfredat sınırları, KaTeX tuzakları ve doğrulama kapıları.
`docs/soru-yazimi/ornek-aufgabe.json` hedef kalite seviyesidir.

Katkı vermek istersen hangi ders ve konu olduğunu belirterek yaz.

## Lisans

- **Kod:** [GNU AGPL-3.0](LICENSE) — türetilmiş bir servis çalıştıran herkes
  kaynağını da açmak zorundadır. Bu proje ücretsiz kalsın diye böyle seçildi.
- **İçerik** (`content/aufgaben/**`): CC BY-SA 4.0.

Kâr amacı gütmez · reklam yok · takip yok.
