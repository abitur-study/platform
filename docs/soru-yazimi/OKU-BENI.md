# Nasıl kullanılır

Başka bir AI aracına 19 soruyu yazdırmak için:

1. Şu üçünü ekle:
   - `BRIEF.md`  ← ana talimat, kendi kendine yeter
   - `ornek-aufgabe.json`  ← hedef kalite seviyesi
   - `kaynaklar/` içinden **yalnızca o partiye ait** dosyalar

2. BRIEF'in §12'sindeki komutu yapıştır, dosya adlarını yaz.

3. Hepsini birden isteme. **Parti parti git** — bir seferde 4-5 soru.
   Uzun bağlamda modeller sayıları karıştırıyor.

## Önerilen partiler

| # | Ne | Kaç | Kaynak dosyaları |
|---|---|---|---|
| 1 | Elektrisches Feld | 4 | `efeld-*.txt` |
| 2 | Induktion | 4 | `induktion-*.txt` |
| 3 | Wellen | 4 | `wellen-*.txt` |
| 4 | Schwingungen | 2 | `schwingungen-*.txt` |
| 5 | Analytische Geometrie | 5 | `mathe-*.txt` |

## Gelen JSON'ları nereye koyacaksın

```
content/aufgaben/abitur/physik/elektrisches-feld/     ← physik-efeld-*.json
content/aufgaben/abitur/physik/induktion/             ← physik-induktion-*.json
content/aufgaben/abitur/physik/wellen/                ← physik-wellen-*.json
content/aufgaben/abitur/physik/schwingungen/          ← physik-schwingungen-*.json
content/aufgaben/abitur/mathematik/analytische-geometrie/  ← mathe-ageo-*.json
```

## Sonra mutlaka

```bash
npm run validate   # 10 kapı; hata verirse dosya bozuk
npm run build      # LaTeX hataları burada patlar
```

`validate` temizse soru sitede otomatik görünür — kayıt/import gerekmiyor,
klasördeki JSON'lar build sırasında taranıyor.

## Uyarı

Gelen soruların **sayılarını kendin kontrol et**. Doğrulayıcı şemayı ve
LaTeX'i denetler ama fiziğin doğru hesaplanıp hesaplanmadığını bilemez.
En sık görülen hata: 10'un kuvvetinin kayması.
