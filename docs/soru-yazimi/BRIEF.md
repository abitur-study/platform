# Abitur soru yazma brief'i — 19 soru

Bu dosya kendi kendine yeter. Repoyu görmeyen bir AI aracına bu dosyayı ve
`kaynaklar/` klasöründeki ilgili metinleri verirsen, çıktı doğrudan projeye
girecek biçimde gelir.

---

## 1. Ne üretilecek

Her soru **tek bir JSON dosyası**. Toplam 19 dosya. Aşağıdaki tablo hangi
dosyanın hangi kaynaktan yazılacağını söyler.

Kaynak metinler gerçek Abitur sınavları ve okul yazılılarıdır; her birinde
**soru + tam çözüm (Erwartungshorizont)** vardır.

**İş şu:** kaynaktaki soruyu **kopyalamak değil**, aynı fiziği/matematiği
ölçen **yeni bir soru** yazmak.

- Sayıları belirgin biçimde değiştir (4,05 → 6,80 gibi; 4,05 → 4,06 değil).
- Bağlamı değiştir (bisiklet dinamosu → rüzgâr türbini, deprem → su dalgası).
- **Tek bir cümle bile birebir alınmayacak.**
- Çözüm yolu ve fizik/matematik aynı kalır — amaç bu: "sınavda böylesi çıktı".
- **Her soruyu kendin baştan hesapla.** Çözümdeki sayılar yeni sorudaki
  sayılarla tutarlı olmalı. 2–3 anlamlı basamağa yuvarla. Tek bir yanlış
  sayı bile olmayacak.

---

## 2. Yazılacak 19 dosya

### Fizik — Elektrisches Feld (4 soru)

| Soru | Kaynak |
|---|---|
| 1. | `kaynaklar/efeld-hessen-2013-A1.txt` |
| 2. | `kaynaklar/efeld-hessen-2016-B1.txt` |
| 3. | `kaynaklar/efeld-hessen-2014-A2.txt` |
| 4. | `kaynaklar/efeld-okul-klausur-03.txt` |

- `"themenbereich": "Elektrisches Feld und Kondensator"`
- `"themenbereich_slug": "elektrisches-feld"`

### Fizik — Induktion (4 soru)

| Soru | Kaynak |
|---|---|
| 1. | `kaynaklar/induktion-hessen-2011-A2.txt` |
| 2. | `kaynaklar/induktion-hessen-2013-A2.txt` |
| 3. | `kaynaklar/induktion-hessen-2015-B1.txt` |
| 4. | `kaynaklar/induktion-okul-klausur-01.txt` |

- `"themenbereich": "Elektromagnetische Induktion"`
- `"themenbereich_slug": "induktion"`

### Fizik — Wellen (4 soru)

| Soru | Kaynak |
|---|---|
| 1. | `kaynaklar/wellen-hessen-2016-B2.txt` (mekanik dalga) |
| 2. | `kaynaklar/wellen-hessen-2013-B2.txt` (mekanik dalga) |
| 3. | `kaynaklar/wellen-hessen-2012-B1.txt` (dalga optiği) |
| 4. | `kaynaklar/wellen-hessen-2015-A2.txt` (dalga optiği) |

- `"themenbereich": "Wellen und Wellenoptik"`
- `"themenbereich_slug": "wellen"`

### Fizik — Mekanik salınımlar (2 soru)

| Soru | Kaynak |
|---|---|
| 1. | `kaynaklar/schwingungen-hessen-2013-B1.txt` |
| 2. | `kaynaklar/schwingungen-hessen-2015-A1.txt` |

- `"themenbereich": "Schwingungen und Schwingkreis"`
- `"themenbereich_slug": "schwingungen"`

### Matematik — Analytische Geometrie (5 soru)

| Soru | Kaynak |
|---|---|
| 1.–5. | `kaynaklar/mathe-*.txt` dosyalarının **tamamı** — içlerinden geometri sorularını seç |

- `"fach": "mathematik"`
- `"themenbereich": "Analytische Geometrie"`
- `"themenbereich_slug": "analytische-geometrie"`

> **Dosya adı `q<üç haneli sıra>.json`** — numaralandırma her konu klasörü
> içinde 1'den başlar. Yeni dosyalar o klasördeki son numaradan devam eder:
> klasörde `q001`–`q010` varsa yenileri `q011.json`, `q012.json`, …
> Örnek: `content/aufgaben/abitur/physik/elektrisches-feld/q011.json`.
> **`id` alanı dosya adının `.json`'suz hâliyle birebir aynı olmalı** (`"id": "q011"`).
> `id` yalnızca kendi klasöründe benzersizdir — her konuda bir `q001` vardır.

---

## 3. Müfredat — buradan asla sapma

Bu okul bu konuları **işledi**. Listede olmayan hiçbir şeyi soruya sokma.
Kaynak metinde geçse bile: müfredat dışıysa o kısmı **atla**, uyarlama.

### Elektrisches Feld ✅
- Yük, yük ayrımı, **Coulomb yasası**
- Elektrik potansiyeli, gerilim, alan çizgileri
- **Homojen elektrik alan** (levhalı kondansatör), $E = U/d$
- **Millikan deneyi**, elementer yükün belirlenmesi
- **Levhalı kondansatör**, $C = Q/U$, $C = \varepsilon_0\varepsilon_r A/d$
- **Dielektrikli kondansatör**
- Devreler: seri $1/C = \sum 1/C_i$, paralel $C = \sum C_i$
- Enine alanda yüklü parçacık sapması (Braun tüpü)

### Induktion ✅
- **İndüksiyon yasası** $U_{ind} = -N\,\Delta\Phi/\Delta t$ — formülün türetilmesi dâhil
- Alan değişimi ve yüzey değişimiyle indüksiyon (raylar üzerinde iletken çubuk)
- **Serbest düşen iletken halka**
- **Lenz kuralı**
- **Öz indüksiyon**: açma/kapama olayı — **YALNIZCA NİTEL**, hesap yok
- **İndüktans $L$**, Henry

### Wellen ✅
- $\lambda$, $f$, $c = \lambda f$
- **Sabit uçtan yansıma (faz atlaması) ve serbest uçtan yansıma**
- **Duran dalgalar**
- **Girişim** — yapıcı/yıkıcı, yol farkı $\Delta s$
- **Çift yarık**: maksimum/minimum, **küçük açı yaklaşımı** ve **tanjantlı tam formül**
- **Optik ağ** (çift yarıktan daha az ağırlıklı)
- Beyaz ışık, ayrışma, görünür ışığın dalga boyları

### Mekanik salınımlar ✅
- **Harmonik salınım koşulu**: geri çağırıcı kuvvet uzanımla orantılı, $F = -D\,s$
  (hocanın sorduğu klasik soru: "Harmonik salınım nedir? Ne sağlanmalı?")
- $s(t) = A\sin(\omega t)$, genlik, periyot, frekans, $\omega = 2\pi f$
- Yaylı sarkaç $T = 2\pi\sqrt{m/D}$, basit sarkaç $T = 2\pi\sqrt{l/g}$
- Enerji dönüşümü, sönüm ve rezonans (nitel)

### Analytische Geometrie ✅
- Vektörler, skaler çarpım, vektörel çarpım
- Doğrusal bağımlılık/bağımsızlık — determinantla kontrol
- Doğru ve düzlemler: parametrik, normal, koordinat formu
- Konum ilişkileri, uzaklıklar, açılar

### ❌ KESİNLİKLE YASAK (hiç işlenmedi)

Görelilik kuramı · Radyoaktivite · Çekirdek fiziği hesapları ·
Potansiyel kuyusu · **Kondansatörün e-fonksiyonlu dolma/boşalma eğrisi ve
zaman sabiti $\tau$** (nitel anlatım serbest, hesap yasak) ·
**Öz indüksiyonda e-fonksiyonlu hesap** · Empedans/faz açısıyla AC devre ·
Tek yarık kırınımı (ana konu olarak) · Bragg yansıması · Doppler olayı ·
Polarizasyon · Diferansiyel denklemler · Bağlı sarkaçlar · Vuru (Schwebung) ·
**Matrisler ayrı bir konu olarak** · **Geçiş matrisleri / Markov zincirleri**

### ⚠️ Bu listeden ÇIKARILDI — işlendi, yazılabilir

Aşağıdakiler önceki sürümde yanlışlıkla yasak sayılmıştı. Öğrenci teyit etti:
**hepsi işlendi.** O yılın Abitur'unda çıkmadılar, ama müfredat içindeler ve
ileriki yıllarda çıkabilirler — soru yazılabilir, sadece öncelikleri düşük.

Bohrsches Atommodell · Linienspektrum (Emission/Absorption) ·
Termschema ($E = h\,f$, geçişler) · Balmer-Serie · Franck-Hertz-Versuch ·
de-Broglie-Wellenlänge $\lambda = h/p$ **(hesap dâhil)** ·
Elektronenbeugung **(hesap dâhil)**

**Tek istisna — Compton-Effekt yalnızca NİTEL.** Fotonun momentumu olduğu ve
saçılmada dalga boyunun arttığı işlendi; $\Delta\lambda = (h/m_e c)(1-\cos\theta)$
ile **hesap yaptırılmadı**. Soruda hesap olarak kullanma, açıklama düzeyinde kal.

> Determinant yalnızca doğrusal bağımlılık kontrolünde kullanılır,
> ayrı bir matris bölümü olarak değil.

---

## 4. Bozulmaz proje kuralları

1. **Asla çoktan seçmeli yok.** Yalnızca açık uçlu, yazılı üretim.
   Yasak: "Kreuze an", "Welche der folgenden", "Richtig oder falsch",
   "Multiple Choice", `☐`, `[ ]` ve `A) …` biçiminde 3+ kısa satır.
   `a)` / `b)` alt şıkları **serbest** — tam birer çalışma emri olmaları
   şartıyla ("b) Berechnen Sie …").
2. Her çözüm adımında `warum` alanı var: `de` **ve** `tr`, ikisi de
   **en az 40 karakter**. Bu, adımın *tekrarı* değil, **neden o adımın
   atıldığının gerekçesi**. Projenin kalbi burası — klişe değil, gerçek
   didaktik içgörü yaz: tipik düşünce hatası, geçerlilik sınırı, mertebe
   kontrolü, neden bu formül de öteki değil.
3. `tr` alanı gerçek Türkçe olacak — Google Translate Almancası değil.
   Fachbegriff'ler Almanca kalabilir.
4. Dil: soru ve çözüm **Almanca** (`"sprache": "de"`), yalnızca `warum.tr`
   Türkçe.

---

## 5. JSON şeması — zorunlu alanlar

```jsonc
{
  "bereich": "abitur",
  "id": "q011",                                 // == dosya adı (qNNN)
  "titel": "…",                                  // Almanca
  "fach": "physik",                              // veya "mathematik"
  "themenbereich": "Elektrisches Feld und Kondensator",  // tablodaki metin birebir
  "themenbereich_slug": "elektrisches-feld",              // tablodaki slug birebir
  "unterthema": "Kapazität und Dielektrikum",    // serbest
  "niveau": "GK",                                // HER ZAMAN "GK"
  "operatoren": ["berechnen", "erklären"],       // yalnızca §6'daki listeden
  "sprache": "de",
  "schwierigkeit": 3,                            // 1–5
  "bearbeitungszeit_min": 35,                    // 15–45
  "aufgabenstellung": "…",                       // Markdown + LaTeX
  "material": [],                                // gerekmiyorsa boş bırak
  "tipps": ["…", "…", "…"],                      // 1–3 adet, kademeli, çözümü VERMEZ
  "loesung": {
    "gesamtpunkte": 18,                          // == teilpunkte toplamı, TAM OLARAK
    "schritte": [                                // en az 3, gerçekte 4–6
      {
        "nr": 1,
        "titel": "…",
        "inhalt": "…",
        "warum": { "de": "≥40 karakter", "tr": "≥40 karakter" },
        "teilpunkte": 4
      }
    ],
    "haeufige_fehler": ["…", "…"]                // 2–5 adet, somut
  },
  "quelle": "eigene Aufgabe im Stil von Hessen Landesabitur Physik 2013, Grundkurs, Aufgabe A1",
  "lizenz": "CC BY-SA 4.0",
  "status": "veroeffentlicht",
  "generiert_mit": "…",                          // kullandığın modelin adı
  "geprueft_von": "Projektteam",
  "version": 1
}
```

`material[]` gerekiyorsa (ör. ölçüm tablosu):

```jsonc
{
  "typ": "tabelle",        // text | tabelle | abbildung | audio | formelsammlung
  "titel": "Messwerte",
  "inhalt": "…",
  "quelle": "eigene Erstellung",
  "lizenz": "CC BY-SA 4.0"
}
```

---

## 6. İzin verilen operatörler

Yalnızca bunlar, **küçük harfle**:

```
analysieren, begründen, berechnen, beschreiben, bestimmen, beurteilen,
bewerten, darstellen, deuten, entwickeln, erklären, erläutern, ermitteln,
erörtern, interpretieren, nachweisen, nennen, skizzieren, stellung nehmen,
überprüfen, untersuchen, vergleichen, zeigen, zusammenfassen
```

`herleiten` **yok** — onun yerine `entwickeln` veya `zeigen` kullan.
`aufgabenstellung` içindeki emir fiilleri `operatoren` dizisiyle uyuşmalı.

---

## 7. LaTeX / Markdown — build'i patlatan tuzaklar

Formüller **build sırasında** KaTeX ile işleniyor. Hatalı LaTeX build'i
durdurur; bu bilinçli bir tasarım.

- Satır içi `$…$`, blok `$$…$$`.
- ⚠️ **Bir `$$…$$` bloğu tamamen TEK SATIRDA olmalı.** Açan ve kapayan `$$`
  arasında `\n` olamaz. Çok satırlı array yazarsan build
  "Could not render math with KaTeX" ile düşer. *(Bu hata gerçekten oldu.)*
- ⚠️ **remark-gfm yok → Markdown tabloları ÇALIŞMAZ.** Ölçüm değerlerini
  LaTeX array ile ver, tek satırda:
  ```
  $$\begin{array}{c|c|c} n & 1 & 2 \\ \hline a\ \text{in cm} & 4{,}0 & 7{,}8 \end{array}$$
  ```
- Matematik kipinde Alman ondalık virgülü: `4{,}05` (düz `4,05` değil).
- JSON içinde **her ters bölü ikilenir**: `"$\\lambda$"`, `"\\text{m}"`,
  `"\\cdot"`. Satır sonu `\n`.
- ⚠️ **`€` karakteri KaTeX fontlarında yok** — boş kutu çıkar.
  Para tutarını `$4{,}20\ \text{EUR}$` diye yaz. *(Bu da gerçekten oldu.)*
- ⚠️ **`titel` ve `unterthema` alanlarında LaTeX YASAK.** Bu iki alan render
  edilmez; `<h1>`, kart, breadcrumb ve `<title>` etiketinde düz metin olarak
  basılır. `"$f(x)=x\\,e^{-x}$"` yazarsan sayfada dolar işaretleriyle ham
  görünür. Üst simge gerekiyorsa Unicode kullan: `e⁻ˣ`, `a⁻¹`, `b²`, `x³`.
  Doğrulayıcı bu alanlarda `$` görürse dosyayı reddeder. *(Bu da gerçekten oldu.)*
- İzinli/denenmiş komutlar: `\frac \sqrt \cdot \approx \Delta \lambda \omega
  \varphi \alpha \pi \vec{} \text{} \begin{array} \hline \Longrightarrow
  \tfrac \left( \right) \sin \cos \tan \ln \int \sum \infty \circ \mu \Omega
  \varepsilon \begin{pmatrix}`
- **Yasak** (KaTeX bilmez): `\begin{tabular}`, `\usepackage`, `\newcommand`,
  `\SI{}{}`, `\unit{}`, `\intertext`, `\shortintertext`, `\mbox`
- **Görsel dosyası yok — ama SVG var.** Soyağacı, ölçüm eğrisi, devre şeması
  gibi şekilleri düzyazıyla tarif etme; `inhalt` alanına doğrudan inline
  `<svg>` yaz. Şekli okumadan çözülemeyen bir şıkkı kelimeyle anlatmak soruyu
  çözülemez yapar.
  - `"typ": "abbildung"` kullan.
  - Renk vermek yerine tema değişkenleri: `var(--color-tinte)` (çizgi/yazı),
    `var(--color-papier)` (zemin). Sabit `#000` koyma.
  - `viewBox` + `width="100%"`, sabit piksel genişliği yok (mobil).
  - Ekran okuyucu için içeriye `<title>` ve `<desc>` koy.
  - **İzinli etiketler yalnızca:** `svg g path line polyline polygon rect
    circle ellipse text tspan defs marker title desc`. Başka HTML etiketi,
    `on…=` olay özniteliği ve `javascript:` URL'i doğrulayıcı tarafından
    reddedilir.
  - Öğrencinin kendisinin çizmesi isteniyorsa yine `skizzieren` operatörü.

---

## 8. Doğrulayıcı — dosyan bu 10 kapıdan geçecek

Projede `npm run validate` şunları denetler. Biri bile takılırsa dosya
reddedilir:

1. Şema uyumu (Zod)
2. Çoktan seçmeli dedektörü (§4'teki kalıplar)
3. Tüm LaTeX KaTeX'ten geçmeli
4. `schritte.length >= 3`; her `warum.de` ve `warum.tr` ≥ 40 karakter
5. `teilpunkte` toplamı **tam olarak** `gesamtpunkte`
6. Operatörler beyaz listede
7. Zertifikat ↔ niveau tutarlılığı
8. `id` == uzantısız dosya adı
9. `id` kendi klasöründe benzersiz
10. **`aufgabenstellung` benzerliği**: herhangi iki dosya arasında
    trigram-Jaccard > 0,85 ise hata. → Yeni soruların hem birbirine hem
    mevcut sorulara benzemesin; bağlamı ve cümle kuruluşunu gerçekten değiştir.

### Teslimden önce kendi kontrolün

- [ ] Her dosyada `teilpunkte` toplamı == `gesamtpunkte`
- [ ] `id` == dosya adı
- [ ] Her `warum.de` ve `warum.tr` ≥ 40 karakter
- [ ] Her `$$…$$` tek satırda
- [ ] `€` yok
- [ ] `titel` ve `unterthema` içinde `$` yok (üst simge gerekiyorsa `e⁻ˣ`)
- [ ] JSON ayrıştırılıyor (`python3 -m json.tool dosya.json`)
- [ ] **Her sayıyı hesap makinesiyle bir kez daha doğruladın**
- [ ] Müfredat dışı hiçbir kavram girmedi

---

## 9. Puanlama ve kapsam

- Orijinaldeki gibi: her alt şıkka `(x BE)`. Puanları çözüm adımlarına
  dağıt; `gesamtpunkte` toplamları olur.
- GK için tipik: toplam **13–22 puan**, **20–45 dakika**.
- **8 vasat soru yerine 4 mükemmel soru.** Her soru:
  - fen/matematik olarak doğru hesaplanmış,
  - öğretmen olmadan anlaşılabilir bir çözüme sahip,
  - gerçekten bir şey açıklayan `warum` alanlarına sahip olmalı.

---

## 10. Kalibrasyon örneği

`ornek-aufgabe.json` dosyası mevcut sorulardan biridir — ton, uzunluk,
`warum` alanlarının derinliği için **hedef seviye** odur. Yazmadan önce
mutlaka oku.

---

## 11. Sabitler

```
e   = 1,602·10⁻¹⁹ C          m_e = 9,109·10⁻³¹ kg
ε₀  = 8,854·10⁻¹² As/(Vm)    μ₀  = 4π·10⁻⁷ Vs/(Am)
g   = 9,81 m/s²              c   = 3,00·10⁸ m/s
h   = 6,626·10⁻³⁴ Js         m_p ≈ m_n ≈ 1,675·10⁻²⁷ kg
Havada ses hızı (20 °C) = 343 m/s
```

---

## 12. Diğer araca vereceğin komut

> Ekteki `BRIEF.md` dosyasını baştan sona oku ve harfiyen uygula.
> `ornek-aufgabe.json` hedef kalite seviyesidir.
> `kaynaklar/` klasöründeki metinler gerçek sınav soruları ve cevap
> anahtarlarıdır — bunlardan **yeni** sorular türet, kopyalama.
> Brief'teki tabloya göre şu dosyaları yaz: [dosya adlarını buraya yapıştır].
> Her dosyayı ayrı bir kod bloğunda, tam JSON olarak ver.
> Teslim etmeden önce §8'deki kontrol listesini tek tek uygula.
