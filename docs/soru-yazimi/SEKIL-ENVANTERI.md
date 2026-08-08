# Şekil envanteri

78 sorunun tamamı için "SVG şekil çizilmeli mi, çizilecekse tam olarak ne"
kararı. Bu belge envanterdir; hiçbir SVG içermez, hiçbir soru dosyası
değiştirilmemiştir.

**Özet:  A = 16 · A+B = 38 · B = 12 · C = 8 · YAPILDI = 4  → toplam 78**

Şekil çizilecek dosya sayısı: **54** (A + A+B). Şekil çizilmeyecek: **20**
(B + C). Zaten yapılmış: **4**.

### Ders dağılımı

| Ders | Soru | A | A+B | B | C | YAPILDI |
|---|---:|---:|---:|---:|---:|---:|
| **Physik** | 43 | 14 | 27 | 2 | 0 | 0 |
| — elektrisches-feld | 10 | 3 | 7 | 0 | 0 | 0 |
| — magnetisches-feld | 5 | 3 | 2 | 0 | 0 | 0 |
| — induktion | 5 | 1 | 4 | 0 | 0 | 0 |
| — schwingungen | 6 | 0 | 6 | 0 | 0 | 0 |
| — wellen | 6 | 0 | 6 | 0 | 0 | 0 |
| — quantenphysik | 6 | 3 | 2 | 1 | 0 | 0 |
| — atomphysik | 5 | 4 | 0 | 1 | 0 | 0 |
| **Mathematik** | 20 | 1 | 7 | 10 | 2 | 0 |
| — analysis | 10 | 1 | 4 | 5 | 0 | 0 |
| — analytische-geometrie | 3 | 0 | 3 | 0 | 0 | 0 |
| — stochastik | 7 | 0 | 0 | 5 | 2 | 0 |
| **Chemie** | 5 | 1 | 3 | 0 | 1 | 0 |
| **Biologie** | 5 | 0 | 1 | 0 | 0 | 4 |
| **Sprachzertifikat** | 5 | 0 | 0 | 0 | 5 | 0 |
| **Toplam** | **78** | **16** | **38** | **12** | **8** | **4** |

**Bir bakışta:**
- **Physik neredeyse tamamen çizilecek** — 43 sorunun 41'i A ya da A+B.
  Ama 27'si A+B: kurulum serbest, cevap yasak. Yasak listeleri dikkatle
  okunmalı.
- **Stochastik'te tek bir A yok.** Yedi dosyanın hiçbirine `abbildung`
  eklenmemeli.
- **Analysis'te doğal şekil çoğunlukla grafiktir ve grafik cevaptır.**
  A verilen dört soru grafiği değil bir **nesneyi** çiziyor (çatı altındaki
  dikdörtgen, karton, vazo, sarnıç).
- **En temiz iki B:** `quantenphysik/q001` ve `atomphysik/q004` — her ikisinde
  de `operatoren` listesi `skizzieren` ile başlıyor ve şık birebir düzenek
  şeması çizdiriyor. Bu iki dosya `material: []` kalmalı.

## Karar kodları

| Kod | Anlam |
|---|---|
| **A** | Çizilmeli. Şekil sorunun kurulumu; öğrenci onu okumadan başlayamaz ya da zorlanır. |
| **A+B** | Kurulum çizilmeli, ama sorunun cevabı olan grafik çizilmemeli. İkisi ayrı ayrı belirtilir. |
| **B** | Çizilmemeli. Şekil sorulan şeyin cevabıdır; çizersek soruyu yok ederiz. |
| **C** | Gerekmez. Saf hesap; şekil süs olur. |
| **YAPILDI** | Şekil zaten mevcut (`typ: "abbildung"`). |

## Çizim standardı (çizim ajanları buna uyacak)

- Materyal girdisi: `{"typ": "abbildung", "titel": "...", "inhalt": "<svg …>"}`
- Inline `<svg>`, harici dosya yok, harici kaynak yok.
- İzinli etiketler **yalnızca**: `svg g path line polyline polygon rect circle
  ellipse text tspan defs marker title desc`
- Renkler yalnızca CSS değişkenleriyle: `var(--color-tinte)` (çizgi/metin),
  `var(--color-papier)` (zemin), `var(--color-akzent)` (vurgu),
  `var(--color-warnung)` (uyarı/kritik büyüklük). Sabit hex kullanılmaz.
- `viewBox` + `width="100%"` (sabit `width`/`height` piksel değeri yok).
- İçeride erişilebilirlik için `<title>` ve `<desc>` zorunlu.
- Etiket metinleri Almanca (soru dili), birim gösterimi soru metniyle birebir
  aynı (ondalık virgül, `\ \text{m}` yerine düz `m`).
- Referans örnekler: `content/aufgaben/abitur/biologie/photosynthese/q001.json`
  ve `content/aufgaben/abitur/biologie/vererbung/q001.json`.

**Tablolar şekil değildir.** `typ: "tabelle"` olan materyaller LaTeX
`\begin{array}` ile yazılmıştır ve düzgün render edilir; onlara dokunulmaz.
Tablonun yanında ayrıca bir şema gerekiyorsa o ayrı bir A kararıdır.

---

## Physik

### elektrisches-feld/q001.json — Aschewolke über der Ebene
- **Karar:** A+B
- **Ne çizilmeli:** Erde-Wolke sistemi levhalı kondansatör analojisi olarak,
  *sadece geometri*: üstte bulut alt yüzeyi yatay bir sınır, altta yer düzlemi,
  aralarında ölçü oku `d = 350 m`, levha alanı `A = 4,0 km²` (kenar ≈ 2 km
  ölçü oku ile). Kenarda `d ≪ kenar uzunluğu` vurgusu için ölçek doğru olsun
  (çok yassı dikdörtgen).
- **Şekle girecek sayılar:** d = 350 m, A = 4,0 km², E = 2,4·10⁵ V/m
- **ÇİZİLMEYECEK:** alan çizgileri ve yük işaretleri (+/−). a) şıkkı tam olarak
  "Beschreiben Sie die Ladungsverteilung und den Verlauf der elektrischen
  Feldlinien" diyor (3 P). Çizersek a) hediye edilir.
- **Gerekçe:** b)–e) şıkları `d`, `A` ve homojenlik varsayımına dayanıyor;
  "bulut = levha" analojisi metinde sözle var, görsel olarak yok.

### elektrisches-feld/q002.json — Coulombkraft zwischen zwei Messingkugeln
- **Karar:** A+B
- **Ne çizilmeli:** İki şekil.
  1. **Düzenek:** solda statife sabit `K₁`, sağda kuvvet ölçere asılı `K₂`,
     merkezler arası ölçü oku `r`, küre çapı `3,0 cm` ayrıca işaretli
     (b) şıkkında "küre noktasal mı" tartışması buna dayanıyor).
  2. **d) şıkkının doğru parçası:** yatay ray üzerinde solda `K₁ (+5,0·10⁻⁸ C)`,
     sağda `K₂ (−5,0·10⁻⁸ C)`, aralarında `P` noktası; ölçüler
     `6,0 cm` (K₁→P), `15,0 cm` (P→K₂), toplam `21 cm`.
- **Şekle girecek sayılar:** Q = +65 nC (her iki küre, düzenek şekli),
  çap 3,0 cm, d) için +5,0·10⁻⁸ C / −5,0·10⁻⁸ C, 6,0 / 15,0 / 21 cm
- **ÇİZİLMEYECEK:** `P` noktasındaki iki alan vektörü oku. Üçüncü tipp
  birebir "Zeichne für beide Einzelfelder einen Pfeil ein" diyor — o okları
  öğrenci çizecek.
- **Gerekçe:** d) şıkkının geometrisi tamamen düzyazıyla anlatılmış
  ("6,0 cm rechts von K₁"); sayı doğrusu olmadan yönü karıştırmak çok kolay.

### elektrisches-feld/q003.json — ε₀ und μ₀ (Coulomb, Biot-Savart)
- **Karar:** A
- **Ne çizilmeli:** İki panelli tek şekil.
  1. Levhalı kondansatör kesiti: iki paralel levha, alan `A`, aralık `d`,
     üzerinde `+Q` / `−Q` etiketi (a) şıkkı için — a) türetme istiyor,
     etiketli geometri türetmeyi vermez).
  2. Uzun düz iletken: dikey iletken, akım oku `I`, çevresinde eş merkezli
     alan çemberleri, birine `r` yarıçap oku ve `B(r)` etiketi.
- **Şekle girecek sayılar:** A, d, I, r (semboller; c) tablosundaki sayılar
  şekle girmesin)
- **Gerekçe:** c) tablosu `I` ve `r` sütunlarını veriyor ama "r neyin
  mesafesi" ancak iletken-çember şemasıyla netleşiyor. Bu şekil q003 dışında
  magnetisches-feld sorularında da tekrar kullanılabilir.

### elektrisches-feld/q004.json — Millikan, fünf Öltröpfchen
- **Karar:** A
- **Ne çizilmeli:** Millikan düzeneği kesiti: iki **yatay** levha, aralık
  `d = 6,20 mm`, arada tek bir asılı damla, sağda gerilim kaynağı `U` ve levha
  kutupları. Damlanın yanına `m`, `q` etiketi (ok yok).
- **Şekle girecek sayılar:** d = 6,20 mm, ρ = 950 kg/m³, U (değişken)
- **ÇİZİLMEYECEK:** `F_G` ve `F_el` kuvvet okları. a) şıkkı
  "Zeigen Sie, dass q = m·g·d/U gilt" (3 BE) — kuvvet dengesini kurmak
  cevabın kendisi.
- **Gerekçe:** Levhaların **yatay** olduğu (dikey değil) sadece bir kelimeyle
  geçiyor; bu soruda tüm fizik ona bağlı ve en sık karıştırılan nokta.

### elektrisches-feld/q005.json — Influenz, Kräftegleichgewicht, LED-Standlicht
- **Karar:** A+B
- **Ne çizilmeli:** İki panel.
  1. Kondansatör: kare levhalar `a = 40 cm`, aralık `d = 8 cm`,
     `Q = 2,0·10⁻⁸ C` etiketi. İçine b) şıkkındaki küçük, **nötr** levha çifti
     (yalıtkan saplarıyla, ana levhalara paralel) — yalnızca konum/geometri.
  2. c) sarkacı: tam ortadan asılı `ℓ = 2,00 m` iplik, kürecik `m = 0,80 g`,
     yatay sapma `s = 2,0 cm`, `U = 1,5 kV`.
- **Şekle girecek sayılar:** a = 40 cm, d = 8 cm, Q = 2,0·10⁻⁸ C,
  ℓ = 2,00 m, m = 0,80 g, s = 2,0 cm, U = 1,5 kV
- **ÇİZİLMEYECEK:** (i) küçük levha çiftindeki influenz yük dağılımı —
  `operatoren` içinde `skizzieren` var ve b) birebir "skizzieren Sie die
  Ladungsverteilung" diyor (5 P). (ii) c)'deki kuvvet üçgeni/paralelkenarı —
  c) "Zeigen Sie, dass q = mgds/(Uℓ)" istiyor.
- **Gerekçe:** b) şıkkındaki "küçük levha çifti ana levhalara paralel, yalıtkan
  saplarda" düzeni sadece metinden zor kuruluyor.

### elektrisches-feld/q006.json — Schwebendes Öltröpfchen
- **Karar:** A+B
- **Ne çizilmeli:** Yatay levha çifti, `d = 5,0 mm`, `U = 300 V` kaynağı ve
  levha kutupları, arada duran damla `r = 0,80 µm`, `ρ = 900 kg/m³` etiketi.
- **Şekle girecek sayılar:** d = 5,0 mm, U = 300 V, r = 0,80 µm, ρ = 900 kg/m³
- **ÇİZİLMEYECEK:** kuvvet oku diyagramı. İlk tipp birebir "Zeichne ein
  Kräftebild des schwebenden Tröpfchens" diyor — çizim öğrenciye ödev.
- **Gerekçe:** Şekil kurulumu netleştirir, çözümü vermez.

### elektrisches-feld/q007.json — Millikan + Fadenstrahlrohr
- **Karar:** A+B
- **Ne çizilmeli:** **Fadenstrahlrohr** (asıl kazanç, Teil 2): dairesel cam
  balon, altta elektron tabancası (katot + delikli anot, `U_A = 320 V`),
  içeride yarıçapı `r` olan dairesel elektron demeti, sayfa düzlemine dik
  `B = 1,2 mT` alan (nokta/çarpı işaretleriyle ve `B` etiketiyle), merkeze
  `r = 5,0 cm` yarıçap oku. Ayrıca ikinci panel olarak Teil 1'in kondansatör
  geometrisi (`d = 8,0 mm`, `U = 220 V`, arada damla).
- **Şekle girecek sayılar:** U_A = 320 V, B = 1,2 mT, r = 5,0 cm,
  d = 8,0 mm, U = 220 V, m = 1,35·10⁻¹⁵ kg
- **ÇİZİLMEYECEK:** damlaya etki eden kuvvet okları. a) birebir
  "Skizzieren Sie die wirkenden Kräfte" diyor (`operatoren`: yok ama şık emri
  açık) — o çizim a)'nın puanı.
- **Gerekçe:** Fadenstrahlrohr metinde hiç tarif edilmiyor, sadece adı geçiyor;
  "elektronlar dik girer ve daire çizer" ifadesi şekilsiz soyut kalıyor.

### elektrisches-feld/q008.json — Geladenes Pendel, Messreihe zu F(d)
- **Karar:** A+B
- **Ne çizilmeli:** Kondansatör kesiti: kare levhalar `a = 40 cm`, aralık
  `d = 8,0 cm`, sol/sağ levha kutupları (`+` / `−`), tam ortadan asılı
  `ℓ = 1,5 m` iplik, kürecik `m = 0,60 g` **negatif levhaya doğru**
  `Δx = 2,5 cm` sapmış, `U = 3,0 kV`.
- **Şekle girecek sayılar:** a = 40 cm, d = 8,0 cm, ℓ = 1,5 m, m = 0,60 g,
  Δx = 2,5 cm, U = 3,0 kV
- **ÇİZİLMEYECEK:** (i) kuvvet paralelkenarı — ilk tipp birebir "Zeichne das
  Kräfteparallelogramm" diyor. (ii) Materyaldeki `F(d)` ölçüm serisinin
  grafiği — c) şıkkı ilişkinin doğrulanmasını istiyor (4 P), grafik cevabı
  gösterir.
- **Gerekçe:** `ℓ = 1,5 m` iplik ile `Δx = 2,5 cm` sapmanın oran farkı
  (küçük açı yaklaşımının neden geçerli olduğu) ancak şekille sezilir.
  **Not:** şekilde ölçek bilinçli olarak bozulacak; `ℓ` kırık çizgiyle
  kısaltılıp değeri yazılsın, sapma abartılı gösterilsin.

### elektrisches-feld/q009.json — Kügelchen im Plattenkondensator + Dielektrikum
- **Karar:** A+B — **bu dosyada B riski en yüksek, dikkat**
- **Ne çizilmeli:** *Yalnızca* çıplak geometri: iki paralel levha `d = 12 cm`,
  levha kutupları, ortadan asılı `ℓ = 1,50 m` iplik, kürecik
  `q = 3,0·10⁻⁹ C`, `U = 12 kV` iken `Δx = 2,5 cm` sapma, `U = 0 V` konumu
  kesikli çizgiyle.
- **Şekle girecek sayılar:** d = 12 cm, ℓ = 1,50 m, q = 3,0·10⁻⁹ C,
  U = 12 kV, Δx = 2,5 cm
- **ÇİZİLMEYECEK:** (i) **alan çizgileri** — a) birebir "Skizzieren Sie das
  Feldlinienbild ... und geben Sie an, wie die Richtung der Feldlinien
  festgelegt ist und was der Abstand der Feldlinien aussagt". (ii) **kuvvet
  okları** (`F_G`, `F_el`, `F_Faden`) — b) birebir "Skizzieren Sie ... die
  auf die geladene Kugel wirkenden Kräfte". `operatoren` içinde `skizzieren`
  var. İkisi birlikte 4 P.
- **Gerekçe:** Kurulum çizilebilir ama bu soruda çizim ajanı refleksle alan
  çizgisi/kuvvet oku eklerse a) ve b) tamamen yok olur.

### elektrisches-feld/q010.json — Latexkügelchen, veränderter Plattenabstand
- **Karar:** A
- **Ne çizilmeli:** **İki panelli önce/sonra** şekli — bu sorunun tam merkezi.
  Sol panel: yatay levhalar `d₁ = 3,0 mm`, `A = 150 cm²`, bağlı gerilim
  kaynağı `U₁ = 350 V`, arada duran kürecik `m = 4,20·10⁻¹⁴ kg`.
  Sağ panel: aynı kaynak **hâlâ bağlı**, levhalar `d₂ = 8,0 mm`'ye çekilmiş,
  kürecik aynı konumda. Kaynağın bağlı kaldığı, iki panelde de görünen tel ve
  aynı `U` etiketiyle vurgulansın.
- **Şekle girecek sayılar:** d₁ = 3,0 mm, d₂ = 8,0 mm, A = 150 cm²,
  U₁ = 350 V, m = 4,20·10⁻¹⁴ kg
- **ÇİZİLMEYECEK:** `Q`, `E`, `F_el`'in nasıl değiştiğini gösteren ok/yazı.
  c) şıkkı (4 P) tam olarak bu zinciri istiyor.
- **Gerekçe:** "Spannungsquelle bleibt angeschlossen" bu sorudaki tek kritik
  ayrım (yük sabit değil, gerilim sabit) ve sadece bir kelimeyle geçiyor.
  İki panelde görünen kablo bunu görselleştirir.

### magnetisches-feld/q001.json — Spezifische Ladung im Fadenstrahlrohr
- **Karar:** A
- **Ne çizilmeli:** Fadenstrahlrohr: küresel cam balon, altta elektron
  tabancası (közlü katot + delikli anot, `U_B = 250 V`), balonun iki yanında
  Helmholtz bobin çifti (iki daire, aralarında eksen), içeride kapalı dairesel
  elektron demeti, merkezden dışa `r = 4,6 cm` yarıçap oku, alan etiketi
  `B = 1,15 mT` (sayfa düzlemine dik, nokta/çarpı işaretleri).
- **Şekle girecek sayılar:** U_B = 250 V, B = 1,15 mT, r = 4,6 cm
- **ÇİZİLMEYECEK:** `F_L` (Lorentz kuvveti) oku ve `v` teğet vektörü.
  a) şıkkı (3 P) "Begründen Sie, warum die Elektronen eine Kreisbahn und keine
  Parabelbahn beschreiben" — `F_L ⊥ v` ilişkisini ok olarak çizmek gerekçenin
  kendisidir.
- **Gerekçe:** Helmholtz bobin çifti ve dairesel demet metinde adıyla geçiyor
  ama tarif edilmiyor; deneyin yarıçapı nereden ölçtüğü şekilsiz belirsiz.

### magnetisches-feld/q002.json — Heliumkerne im Geschwindigkeitsfilter
- **Karar:** A+B
- **Ne çizilmeli:** **Üç sektörlü yatay şema** (bu sorunun ana ihtiyacı).
  - Sektor A: iki elektrot, `U_A`, ivmelenen demet, çıkışta `v`.
  - Sektor B: hız filtresi — üstte ve altta kondansatör levhaları
    `d = 4,0 cm`, aynı bölgede sayfa düzlemine dik `B_B = 3,0 mT` (nokta
    işaretleri), demet düz geçiyor.
  - Sektor C: `B_C` alanında `r = 3,5 m` yarıçaplı çeyrek/yarım daire,
    ucunda "Prüfkammer / Werkstück".
- **Şekle girecek sayılar:** U_A (sembol), d = 4,0 cm, B_B = 3,0 mT,
  r = 3,5 m, B_C (sembol), v = 2,5·10⁶ m/s
- **ÇİZİLMEYECEK:** Sektor B'deki kondansatör levhalarının **kutupları**
  (`+`/`−`) ve `F_el` / `F_L` okları. d) şıkkı (5 P) birebir "Geben Sie an,
  ... wie der Plattenkondensator gepolt sein muss" diyor. Levhalar çizilecek,
  kutup işareti konmayacak (yerine `?` bile yazılmasın).
- **Gerekçe:** "üç sektör arka arkaya, ikincisinde iki alan üst üste" düzeni
  yalnız metinden kurmak zor; öğrenci filtreyi ivmelendiriciyle karıştırıyor.

### magnetisches-feld/q003.json — Geschwindigkeitsfilter und Massenbestimmung
- **Karar:** A
- **Ne çizilmeli:** Üç bölümlü şema.
  - Abschnitt A: `U = 4,0 kV` ivmelendirme.
  - Abschnitt B: üst üste binmiş alanlar; `E₀ = 2,0·10³ V/m` (elektrik kuvveti
    **aşağı**, metinde verilmiş), `B₀ = 10 mT`, çıkışta dar yarık `S₂`.
  - Abschnitt C: `B₁ = 0,40 T`, **yarım daire**, `S₂`'den iş parçasına olan
    mesafe `d = 0,20 m` ölçü okuyla ve altında açıkça
    `d = 2r (Bahndurchmesser)` notuyla.
- **Şekle girecek sayılar:** U = 4,0 kV, E₀ = 2,0·10³ V/m, B₀ = 10 mT,
  B₁ = 0,40 T, d = 0,20 m, m = 3,2·10⁻²⁶ kg
- **Gerekçe:** Üçüncü tipp doğrudan uyarıyor: "Bahndurchmesser gegeben, nicht
  der Radius". `d`'nin çap olduğunu gösteren yarım daire şekli bu sorunun en
  sık yapılan hatasını doğrudan hedefler. Kuvvet yönleri metinde zaten
  verildiği için burada B riski yok — yine de kuvvet oku çizilmesin,
  b) şıkkı dengeyi gerekçelendiriyor.

### magnetisches-feld/q004.json — Kathodenstrahl + Messreihe am Fadenstrahlrohr
- **Karar:** A
- **Ne çizilmeli:** İki panel.
  1. **Teil 1 — Kathodenstrahlröhre:** vakumlu cam tüp, solda közlü katot
     (Glühkathode), sonra delikli anot (Lochanode), aralarında `U_A = 900 V`,
     anottan sonra uçuş yönüne dik `B = 0,80 mT` alan bölgesi (elektromıknatıs
     kutupları N/S ile), sapan görünür demet.
  2. **Teil 2 — Fadenstrahlrohr:** Helmholtz bobin çifti, `B = 1,10 mT`,
     kapalı daire, `r` yarıçap oku.
- **Şekle girecek sayılar:** U_A = 900 V, B = 0,80 mT (Teil 1),
  B = 1,10 mT (Teil 2), r (sembol — tablodaki sayılar şekle girmesin)
- **ÇİZİLMEYECEK:** Lorentz kuvveti okları (c) şıkkı daire/parabol
  gerekçesini istiyor) ve Material 1 tablosunun `U_A(r²)` grafiği
  (d) şıkkı 5 P, doğrusallığı öğrenci gösterecek).
- **Gerekçe:** İki farklı düzenek (açık sapma vs. kapalı daire) aynı soruda
  yan yana geçiyor; hangi `B`'nin hangi düzeneğe ait olduğu şekilsiz karışıyor.

### magnetisches-feld/q005.json — Protonen in gefalteter Beschleunigerstrecke
- **Karar:** A+B — **A önceliği yüksek**
- **Ne çizilmeli:** **Kare biçiminde katlanmış hızlandırıcı planı** (kuşbakışı):
  dört düz hızlandırma parçası kare kenarlarında, her köşede `r = 60 m`
  yarıçaplı **çeyrek daire** saptırıcı mıknatıs, her düz parçanın üzerinde
  aynı `U` etiketi, dolaşım yönü oku. Mıknatıslar sırayla `1, 2, 3, …`
  numaralı; kenarda "…12." mıknatısa kadar devam ettiği kesikli çizgi ve
  notla gösterilsin (e2 şıkkı 12. mıknatıstan söz ediyor).
- **Şekle girecek sayılar:** r = 60 m, U (sembol; a)'nın kontrol değeri
  ≈ 131 kV şekle **girmesin**), v₁ = 5,0·10⁶ m/s
- **ÇİZİLMEYECEK:** saptırıcı mıknatıstaki `B` alan çizgilerinin **yönü**
  (sayfa içine mi dışına mı). b) şıkkı birebir "Beschreiben Sie, wie die
  Feldlinien gerichtet sein müssen" diyor (4 P'nin bir kısmı).
- **Gerekçe:** "platzsparend quadratisch gefaltet" tek kelimeyle geçiyor ama
  sorunun tüm mantığı (her düz parçada aynı `U`, her köşede aynı `r`, artan
  `v` yüzünden artan `B`) bu geometriye bağlı. Şekilsiz e2 şıkkı neredeyse
  anlaşılmaz.

### induktion/q001.json — Leiterschleife im freien Fall
- **Karar:** A+B
- **Ne çizilmeli:** *Tek* anlık görüntü (metinde tarif edilen an): yatay
  çizgiyle sınırlanmış alan bölgesi, içinde `B = 0,45 T` sayfa düzlemine dik
  (çarpı işaretleri); dikdörtgen ilmek `b = 12 cm` genişliğinde sınırı
  **kesecek** biçimde — üst kenar alanın dışında, alt kenar tamamen içeride.
  Solda kesikli çizgiyle başlangıç konumu ve arada `h = 0,80 m` ölçü oku.
- **Şekle girecek sayılar:** b = 12 cm, B = 0,45 T, h = 0,80 m
- **ÇİZİLMEYECEK:** (i) **üç anlık görüntü dizisi** — ilk tipp birebir
  "Zeichne die Schleife in drei Momentaufnahmen: vor dem Eintauchen, halb im
  Feld, ganz im Feld" diyor; o diziyi çizmek a) ve c)'nin akıl yürütmesini
  hediye eder. (ii) İndüksiyon akımının yönü ve fren kuvveti oku — c) şıkkı
  Lenz kuralını istiyor.
- **Gerekçe:** "Oberkante noch außerhalb, Unterkante bereits vollständig
  darin" cümlesi tam olarak bu sorunun anahtarı (yalnız bu durumda alan
  değişiyor) ve düzyazıyla okuması zor.

### induktion/q002.json — Geschwindigkeitsmessung mit einer Leiterschleife
- **Karar:** A+B
- **Ne çizilmeli:** Yandan görünüş: yatay ray, üzerinde kızak
  (Messschlitten), kızağa **dik** bağlı dikdörtgen ilmek `a = 4,0 cm`
  yükseklik × `b = 10 cm` uzunluk, iki sürtünme kontağıyla yüksek dirençli
  voltmetreye bağlı. Ray boyunca keskin sınırlı alan bölgesi `L = 15 cm`,
  içinde `B = 0,35 T` (sayfa düzlemine dik, ilmek düzlemine dik). İlmek
  bölgeye **girmeden önceki** konumda çizilsin. `b = 10 cm < L = 15 cm`
  oranı ölçekli olsun.
- **Şekle girecek sayılar:** a = 4,0 cm, b = 10 cm, L = 15 cm, B = 0,35 T,
  v = 45 cm/s
- **ÇİZİLMEYECEK:** (i) üç faz (dışarıda / yarı içeride / tamamen içeride)
  dizisi — üçüncü tipp bunu öğrenciye ödev veriyor, d) şıkkının cevabı (3 BE).
  (ii) `U(t)` sinyal grafiği. (iii) e) şıkkının `B(t)` grafiği — eğimler
  cevabı okutur, tablo yeterli.
- **Gerekçe:** `b` (ilmek boyu) ile `L` (alan bölgesi boyu) ilişkisi d)
  şıkkının bütün mantığı; iki uzunluğun aynı eksende ölçekli görünmesi
  soruyu anlaşılır kılar.

### induktion/q003.json — Handkurbel-Ladegerät eines Notfallradios
- **Karar:** A
- **Ne çizilmeli:** Yandan şema: el kolu (Handkurbel) → dişli çifti, üzerinde
  açıkça `1 : 16` etiketi (küçük dişli/büyük dişli oranı görsel olarak da
  doğru) → mil → N/S kutupları arasında dönen dikdörtgen bobin
  (`N = 250`, `A = 12 cm²`), alan `B = 0,18 T`, dönme ekseni alan çizgilerine
  **dik**. Bobinden çıkan iki uç → doğrultucu/akü → radyo kutusu.
- **Şekle girecek sayılar:** 1:16, N = 250, A = 12 cm², B = 0,18 T,
  2,5 U/s (kol)
- **ÇİZİLMEYECEK:** kaçınılacak özel bir şey yok; sadece Lenz kuralı
  açıklaması (c) için fren/karşı moment oku konmasın.
- **Gerekçe:** Bu sorudaki tek tuzak dişli oranı — birinci tipp de birebir
  bunu uyarıyor ("Achte darauf, ob die Drehzahl der Kurbel oder die der
  Spule gemeint ist — das Getriebe steht dazwischen"). Dişliyi görsel olarak
  araya koymak tuzağı görünür kılar ama çözmez.

### induktion/q004.json — Zwei ineinander gewickelte Spulen
- **Karar:** A+B
- **Ne çizilmeli:** Boru boyunca kesit/yandan görünüş: düz plastik boru
  `ℓ = 45 cm`, kesit alanı `A = 0,018 m²`; üzerine **aynı yönde üst üste**
  sarılmış iki yalıtılmış sargı — içteki `Erregerspule N_err = 600` ayarlı
  doğru akım kaynağına, dıştaki `Induktionsspule N_ind = 1200` sıfırı skala
  ortasında olan yüksek dirençli voltmetreye bağlı. Boru içinde homojen alan
  (paralel yatay çizgiler, `μ_r = 1` notu).
- **Şekle girecek sayılar:** ℓ = 45 cm, A = 0,018 m², N_err = 600,
  N_ind = 1200, I_max = 350 mA
- **ÇİZİLMEYECEK:** (i) `U_ind(t)` grafiği — c) şıkkı birebir "skizzieren Sie
  den Verlauf von U_ind(t)" diyor (5 P) ve `operatoren` içinde `skizzieren`
  var. (ii) Materyaldeki `I(t)` seyrinin **grafiği** de çizilmesin: eğimleri
  görsel okutmak c)'nin cevabını fiilen verir; tablo hâliyle kalsın.
- **Gerekçe:** "gegeneinander isoliert, gleichsinnig übereinander gewickelt"
  düzeni (iki ayrı bobin değil, iç içe iki sargı) sorunun tüm ön kabulü —
  "das gesamte Feld der Erregerspule durchsetzt auch die Induktionsspule"
  ancak bu geometriyle anlaşılır.

### induktion/q005.json — Wasserturbine als Generator
- **Karar:** A+B
- **Ne çizilmeli:** Şema: dere/su türbini → mil → N/S kutupları arasında
  dönen dikdörtgen bobin (`N = 400`, `A = 250 cm²`, `B = 0,12 T`), dönme
  ekseni alan çizgilerine dik olduğu açıkça görünsün. Bobin **t = 0
  konumunda** çizilsin: alan çizgileri bobin yüzeyini dik kesiyor (metinde
  birebir böyle veriliyor, bu yüzden B değil A). Devamında kablo → kulübe →
  ısıtıcı fanlar (e şıkkının bağlamı).
- **Şekle girecek sayılar:** N = 400, A = 250 cm², B = 0,12 T,
  600 U/min
- **ÇİZİLMEYECEK:** `Φ(t)` ve `U(t)` diyagramları. b) şıkkı birebir
  "Skizzieren Sie Φ(t) und U(t) ... in zwei Diagrammen mit gemeinsamer
  Zeitachse" diyor (4 BE) ve `operatoren` içinde `skizzieren` var. c) şıkkı
  da aynı diyagramdaki faz kaymasını gerekçelendirmeyi istiyor — grafiği
  çizersek iki şık birden gider.
- **Gerekçe:** `t = 0` yönelimi sinüs mü kosinüs mü sorusunu belirliyor;
  metinde yazılı ama uzamsal olarak canlandırması zor.

### schwingungen/q001.json — Zwei Schwingkreise am Oszilloskop
- **Karar:** A+B
- **Ne çizilmeli:** Yan yana **iki devre şeması**.
  - Schwingkreis A: gerilim kaynağı `U₀` + değiştirme anahtarı, `C`, `L`;
    "kalın kısa bakır bağlantı, R ≈ 0" notu.
  - Schwingkreis B: birebir aynı, artı seri `R = 12 Ω` direnç.
  Her iki devrede kondansatöre bağlı osiloskop **kutusu** çizilebilir ama
  ekranı boş kalsın.
- **Şekle girecek sayılar:** R = 12 Ω, U₀ (sembol), L, C (aynı elemanlar
  olduğu vurgulanacak)
- **ÇİZİLMEYECEK:** Osiloskop ekranındaki `t`-`U` eğrileri (sönümsüz sinüs
  vs. sönümlü sinüs). c) şıkkı (4 P) tam olarak bu iki eğrinin
  karşılaştırılmasını istiyor.
- **Gerekçe:** Soru "ohne Rechnung" işlenecek; iki devrenin **tek farkının**
  seri direnç olduğu görsel olarak anında anlaşılır, metinde ise iki paragraf.

### schwingungen/q002.json — Energiependeln im ungedämpften Schwingkreis
- **Karar:** A+B
- **Ne çizilmeli:** Devre şeması: solda doğru gerilim kaynağı `U₀ = 60 V`,
  ortada **iki konumlu değiştirme anahtarı** (Umschalter) — 1. konum
  kondansatörü kaynağa, 2. konum bobine bağlıyor; `C = 40 nF`,
  `L = 2,5 mH`. `t = 0`'da anahtarın 2. konuma geçtiği ok/etiketle
  belirtilsin.
- **Şekle girecek sayılar:** U₀ = 60 V, C = 40 nF, L = 2,5 mH
- **ÇİZİLMEYECEK:** `t`-`E` diyagramı (elektrik ve manyetik alan enerjisinin
  zaman seyri). c) şıkkı birebir "Skizzieren Sie in einem gemeinsamen
  t-E-Diagramm" diyor ve `operatoren` içinde `skizzieren` var.
- **Gerekçe:** "Umschalter legt den geladenen Kondensator an die Spule"
  iki konumlu anahtar olmadan anlaşılmıyor; öğrenci kaynağın devrede kalıp
  kalmadığını sık karıştırıyor.

### schwingungen/q003.json — Fallbeschleunigung aus Fadenpendel-Messreihe
- **Karar:** A+B — **B tarafı bu sorunun ana puanı, çok dikkat**
- **Ne çizilmeli:** Basit Fadenpendel düzeneği: tavan/statif askı noktası,
  ip uzunluğu `ℓ` ölçü oku, ucunda sarkaç kütlesi, denge konumu kesikli
  dikey çizgi, sapma açısı `< 5°` yay ile işaretli. Ayrı ve küçük bir
  detayda d) şıkkı için: en yüksek nokta ile en alçak nokta arasındaki
  yükseklik farkı `h = 0,080 m` ölçü oku.
- **Şekle girecek sayılar:** ℓ (sembol; tablodaki 0,30…1,50 m değerleri
  şekle **girmesin**), açı sınırı 5°, h = 0,080 m
- **ÇİZİLMEYECEK:** **`T²`–`ℓ` diyagramı ve içine çizilen orijinden geçen
  doğru.** a) şıkkı diyagramı ölçekleriyle birlikte çizmeyi
  (`1 cm ≙ 0,20 m`, `1 cm ≙ 1,0 s²`), c) şıkkı ise doğruyu çizip eğimini
  okumayı istiyor — birlikte 7 P. Boş, ölçeklendirilmiş bir koordinat
  sistemi bile çizilmesin; öğrenci kendi kâğıdına çizecek.
- **Gerekçe:** Kurulum şekli d) ve e) için yararlı, ama bu dosyada asıl
  mesaj B tarafıdır.

### schwingungen/q004.json — Langsamer Schwingkreis und Federpendel-Analogie
- **Karar:** A+B — **çizim ajanı için tuzak var, aşağıyı oku**
- **Ne çizilmeli:** Devre şeması: `U₀ = 50 V` doğru gerilim kaynağı, seri
  ön direnç (Vorwiderstand), iki konumlu şalter, `C = 160 µF`, `L = 250 H`.
  `t = 0`'da şalterin bobin koluna geçtiği belirtilsin. Bobinin
  olağandışı büyüklüğü (`250 H`) etiketle vurgulansın.
- **Şekle girecek sayılar:** U₀ = 50 V, C = 160 µF, L = 250 H
- **ÇİZİLMEYECEK:** (i) `t`-`I` diyagramı — c) şıkkı birebir "skizzieren Sie
  den zugehörigen Verlauf ... in ein beschriftetes t-I-Diagramm" diyor
  (4 P), `operatoren` içinde `skizzieren` var. (ii) **Schwingkreis ↔
  Federpendel yan yana karşılaştırma şekli.** Bu, çizilmesi en cazip şekil
  ama d) şıkkının (4 P) tam cevabıdır: `Q↔s`, `I↔v`, `L↔m`, `1/C↔D`,
  `E_el↔E_spann`, `E_magn↔E_kin` eşleştirmesini görsel olarak hediye eder.
  **Kesinlikle çizilmeyecek.**
- **Gerekçe:** Devre şeması güvenli ve yararlı; analoji şekli yasak.

### schwingungen/q005.json — Pendelnde Last an einer Elektrohängebahn
- **Karar:** A+B
- **Ne çizilmeli:** Yandan görünüş, **yalnızca `t₀ = 0` öncesi durum**:
  fabrika tavanı, tavana asılı ray, ray üzerinde Laufwagen, sabit hızla
  ilerlediğini gösteren ok `v = 0,80 m/s`, arabadan aşağı **dik** çelik
  halat (uzunluğu `ℓ = ?` olarak işaretli, sayı yazılmayacak), ucunda yük
  `m = 320 kg`.
- **Şekle girecek sayılar:** v = 0,80 m/s, m = 320 kg, ℓ = ? (b) şıkkı
  `ℓ ≈ 2,2 m` değerini **kanıtlatıyor**, şekle yazılırsa b) gider)
- **ÇİZİLMEYECEK:** Sapmış konum, `α_max` açısı, `h_max` yüksekliği ve bu
  üçünü birleştiren **dik üçgen**. Üçüncü tipp birebir "In d) steckt α_max
  in einem rechtwinkligen Dreieck mit der Hypotenuse ℓ und der Ankathete
  ℓ − h_max" diyor — üçgeni çizmek c) + d)'yi (7 P) verir.
- **Gerekçe:** "Laufwagen unter der Hallendecke, Last am senkrechten Seil"
  düzeni ve arabanın **ani durması** ile yükün hareketine devam etmesi
  arasındaki ilişki (a şıkkı) mekân şeklini gerektiriyor.

### schwingungen/q006.json — Rieselndes Pendel, lineares Kraftgesetz
- **Karar:** A+B — **A önceliği çok yüksek; şekilsiz kurulum anlaşılmıyor**
- **Ne çizilmeli:** Önden görünüş, denge konumu:
  - Tavandan **iki iple (bifilar)** asılmış silindirik serpme kabı; iki ipin
    yukarıda ayrık, aşağıda kaba bağlandığı açıkça görünsün (bifilar askının
    tüm amacı: yalnız tek bir düşey düzlemde salınım).
  - Askı noktasından kabın ağırlık merkezine `ℓ = 1,50 m` ölçü oku.
  - Kabın altında yassı toplama oluğu: toplam uzunluk `24 cm`, ince ara
    duvarlarla **8 eşit gözeye** bölünmüş (her göze `3 cm`), gözeler
    kenardan ortaya doğru numaralı ya da en azından sayılabilir çizilsin.
  - Kabın çıkış deliği denge konumunda oluğun **tam ortasında**, oluğa
    uzaklığı ≈ 0.
  - Kütle etiketleri: boş kap `250 g`, tuz `80 cm³`, `ρ = 2,2 g/cm³`.
- **Şekle girecek sayılar:** ℓ = 1,50 m, oluk 24 cm / 8 göze, 250 g,
  80 cm³, ρ = 2,2 g/cm³
- **ÇİZİLMEYECEK:** (i) `ℓ` hipotenüs, oluğun **yarısı** (12 cm) dik kenar
  olan **dik üçgen** ve `φ₀` açısı — a) şıkkının (3 P) tam çözümü, üstelik
  ilk tipp birebir "ergänze die Skizze zu einem rechtwinkligen Dreieck"
  diyerek bunu öğrenciye bırakıyor. Kabı sapmış konumda **çizme**;
  yalnız denge konumu çizilecek. (ii) Gözelerdeki tuz **doluluk seviyeleri**
  (ne sönümsüz ne sönümlü durum) — e) şıkkı (3 P) birebir "Skizzieren Sie
  ... den Füllstand" diyor, `operatoren` içinde `skizzieren` var.
  (iii) Ağırlık kuvvetinin bileşenlere ayrılması — b) şıkkı (5 P).
- **Gerekçe:** Bu, tüm fizik setindeki en zor hayal edilen kurulum: bifilar
  askı + 8 gözeli oluk + çıkış deliğinin konumu. Şekilsiz öğrenci soruya
  başlayamaz. Ayrıca ilk tipp *zaten var olan bir çizimi* varsayıyor
  ("ergänze die Skizze") — dosyada böyle bir çizim yok (bkz. `## Dikkat`).

### wellen/q001.json — Wellenlängenbestimmung am Doppelspalt
- **Karar:** A+B
- **Ne çizilmeli:** Klasik Doppelspalt düzeneği, üstten görünüş: solda lazer,
  ortada çift yarık (iki yarık, aralarında `d = 0,25 mm` ölçü oku), sağda
  perde, aradaki mesafe `e = 3,20 m`. Perde üzerinde ana maksimum ortada,
  yanlarda maksimum noktaları; **5. mertebe** maksimumu işaretli ve ana
  maksimumdan uzaklığı `a = 4,05 cm` ölçü okuyla.
- **Şekle girecek sayılar:** d = 0,25 mm, e = 3,20 m, a = 4,05 cm, n = 5
- **ÇİZİLMEYECEK:** İki yarıktan aynı perde noktasına giden **iki ışın**,
  yol farkı `Δs` küçük dik üçgeni ve açı `α` üçgeni. İlk iki tipp birebir
  bunları çizdiriyor ("Zeichne die beiden Strahlen…", "Es gibt zwei
  rechtwinklige Dreiecke…") ve Schritt 1 + 2 (5 P) tam olarak bu geometri.
- **Gerekçe:** `d` (yarık merkezleri arası) ile `a` (perdedeki uzaklık) ve
  `e` arasındaki büyüklük farkı (mm vs. m vs. cm) şekilsiz kavranmıyor.
  **Not:** şekil ölçekli olamaz; `d`'nin abartıldığı bir uyarı notu konsun.

### wellen/q002.json — Messreihe am Doppelspalt + Vergleich mit dem Gitter
- **Karar:** A+B
- **Ne çizilmeli:** q001 ile aynı Doppelspalt şeması, farklı sayılarla:
  lazer → çift yarık `d = 0,20 mm` → perde `e = 5,00 m`. Perdede ortadaki
  ana maksimumdan itibaren `n = 1…4` maksimumları ve uzaklıkları
  `a₁ = 1,6 cm`, `a₂ = 3,1 cm`, `a₃ = 4,6 cm`, `a₄ = 6,2 cm` (Material 1
  verilmiş veri olduğu için şekle girebilir).
- **Şekle girecek sayılar:** d = 0,20 mm, e = 5,00 m, a₁…a₄
- **ÇİZİLMEYECEK:** (i) Yol farkı / açı üçgenleri (Schritt 1, 3 P).
  (ii) **"Doppelspalt perdesi vs. Gitter perdesi" karşılaştırma görseli**
  (dar-keskin çizgiler ↔ geniş-yayvan lekeler). c) şıkkı (3 P) birebir bunu
  tarif ettirmek istiyor; çizilirse cevap resimde durur.
- **Gerekçe:** Ölçüm serisi tabloda; hangi uzunluğun nereden nereye
  ölçüldüğü ancak şemayla netleşiyor.

### wellen/q003.json — Grüner Laser am Gitter, Maxima 3. Ordnung
- **Karar:** A+B
- **Ne çizilmeli:** **Üstten görünüş** (bu soruda kritik): lazer demeti dik
  olarak kırınım ağına düşüyor; ağ `d = 4,0 µm` etiketli, yarıkların
  **dik/lotrecht** olduğu ayrı bir küçük önden-görünüş kutusunda gösterilsin.
  Perde ağa paralel, `e = 1,20 m`. Perdede yatay parlak nokta dizisi; sol ve
  sağ **3. mertebe** maksimumları işaretli, aralarındaki uzaklık `?` çift
  yönlü okla (a) şıkkının aradığı büyüklük — sayı yazılmayacak).
  Ağın **düşey dönme ekseni** kesikli çizgiyle gösterilsin (b) şıkkının
  ekseni), ama ağ **döndürülmemiş** konumda çizilsin.
- **Şekle girecek sayılar:** λ = 532 nm, d = 4,0 µm, e = 1,20 m, n = 3
- **ÇİZİLMEYECEK:** Döndürülmüş ağ konumu ve gelen ışına göre **küçülen
  etkin yarık aralığı** (`d·cos φ`). b) şıkkının (3 P) tam cevabı; üçüncü
  tipp de birebir bunu düşündürüyor.
- **Gerekçe:** "um seine senkrechte Mittelachse, also um eine Achse parallel
  zu den Spalten" ifadesi üç boyutlu ve düzyazıyla neredeyse okunmaz;
  ekseni gösteren üstten görünüş b)'yi anlaşılır kılar, cevaplamaz.

### wellen/q004.json — Grünes Licht am Gitter, Zahl der Maxima
- **Karar:** A+B
- **Ne çizilmeli:** **Ölçekli** üstten görünüş — bu sorunun bütün mesajı
  ölçekte: ağ solda (`d = 3,0 µm`), perde sağda ve **yalnızca
  `e = 12 cm`** uzakta ama `40 cm` **geniş**, optik eksene simetrik
  (yukarı 20 cm, aşağı 20 cm). Bu 40 : 12 oranı şekilde gerçekten görünsün;
  o zaman büyük kırınım açılarının kaçınılmaz olduğu bakışta anlaşılır.
- **Şekle girecek sayılar:** d = 3,0 µm, λ = 546 nm, e = 12 cm,
  perde genişliği 40 cm (± 20 cm)
- **ÇİZİLMEYECEK:** (i) Perdenin **kenarına** giden uç ışın ve ona ait açı —
  Schritt 3 (2 P) tam olarak bu. (ii) Maksimumların perdedeki konumları /
  sayısı — a) ve b) (7 P). (iii) `sin α` ile `tan α` farkını gösteren
  herhangi bir yardımcı üçgen — c) (4 P).
- **Gerekçe:** Öğrenci `e = 12 cm` ile `40 cm` perdeyi kafasında ölçekli
  kurmadığı için c) şıkkındaki "neden yaklaşım burada çöküyor" sorusunu
  soyut buluyor. Ölçekli şekil cevabı vermeden sezgiyi kuruyor.

### wellen/q005.json — Ein Hammerschlag, zwei Signale
- **Karar:** A+B
- **Ne çizilmeli:** Yandan/üstten sahne: düz, kaynaklı çelik ray, uzunluk
  `s = 840 m` ölçü okuyla (ray kırık çizgiyle kısaltılmış, uzunluk yazılı);
  solda çekiçle vuran işçi, sağda kulağını raya dayamış gözlemci.
  Malzeme etiketleri: `Stahl` (ray), `Luft` (üst boşluk) ve kenarda
  `c_Luft = 340 m/s`, `c_Stahl = 5100 m/s` künyesi.
- **Şekle girecek sayılar:** s = 840 m, c_Luft = 340 m/s, c_Stahl = 5100 m/s
- **ÇİZİLMEYECEK:** (i) **İki ayrı yayılma yolu oku** (biri ray içinden,
  biri havadan) — a) şıkkı (4 P) tam olarak iki yol + iki koşu süresi
  açıklamasını istiyor; iki etiketli ok cevabın kendisidir. Yalnızca ortam
  adları yazılsın, ok çizilmesin. (ii) b) şıkkının `y(t)` diyagramı —
  1. ve 9. maksimum arasında **8** periyot olduğu tuzağı (ikinci tipp bunu
  uyarıyor) grafikte sayılabilir hâle gelir. (iii) **`y(t)` ve `y(x)`
  diyagramlarının yan yana karşılaştırması** — d) şıkkının (6 P, bu sorunun
  en büyük şıkkı) tam cevabı. Çizim ajanı için en cazip şekil budur;
  **kesinlikle çizilmeyecek.**
- **Gerekçe:** Sahne (tek darbe, iki ortam, 840 m) görselle bir bakışta
  kuruluyor; ama bu dosyada yasak listesi izin listesinden uzun, dikkatli
  okunmalı.

### wellen/q006.json — Stehende Schallwelle vor einer Wand
- **Karar:** A+B — **B yükü çok ağır (toplam 12 P risk altında)**
- **Ne çizilmeli:** Spor salonu kesiti: sağda kalın, düz beton duvar
  (taralı), soldan `2,60 m` uzakta hoparlör, duvara **dik** yayılan ses;
  ikisi arasındaki bağlantı çizgisi üzerinde küçük mikrofon ve mikrofonun
  bu çizgi boyunca kaydırılabildiğini gösteren çift yönlü ok.
  Kenarda `c_Schall = 340 m/s`.
- **Şekle girecek sayılar:** 2,60 m, c = 340 m/s
- **ÇİZİLMEYECEK:**
  - **Duran dalganın kendisi** (düğüm/karın deseni, zarf eğrisi) — a) (3 P),
    b) (3 P), c) (3 P) ve d) (3 P) hep bu desene dayanıyor. İkinci tipp
    birebir "Zeichne eine stehende Welle auf und miss nach" diyor: çizim
    öğrencinin işi.
  - Gelen ve yansıyan iki dalganın üst üste binmesini gösteren herhangi bir
    çizim — a)'nın cevabı.
  - Duvarda düğüm olduğunu gösteren işaret — b)'nin cevabı.
  - `25,0 cm` komşu minimum aralığının şekle işlenmesi — c)'nin girdisi
    olsa da desenle birlikte çizilirse λ doğrudan okunur.
  - **Gedackte Pfeife** için hiçbir şey çizilmesin (ne boş boru ne mod
    şekli) — e) şıkkı (5 P) sınır koşullarından çeyrek dalga sayısını
    türetmeyi istiyor; boruyu çizmek çizim ajanını içine dalga koymaya
    davet eder, kazanç ise sıfıra yakın.
- **Gerekçe:** Mekân kurulumu (duvar–mikrofon–hoparlör hattı) yararlı ve
  güvenli; onun ötesindeki her şey cevap.

### quantenphysik/q001.json — Vom Versuchsaufbau zur Einstein-Geraden
- **Karar:** **B — hiçbir şey çizilmeyecek**
- **Neden çizilmemeli:** Bu dosyada çizilebilecek her şey bir şıkkın cevabı:
  - a) (5 BE) birebir "**Skizzieren Sie eine Versuchsanordnung**, mit der sich
    die maximale kinetische Energie ... messen lässt" — düzenek şeması
    a)'nın *tam* cevabı. Üstelik ilk tipp hangi parçaların gerekli olduğunu
    zaten sayıyor.
  - b) (5 BE) birebir "**Skizzieren Sie qualitativ den Graphen**" —
    `E_kin`–`f` doğrusu.
  - c) (3 BE) ikinci fotoselin doğrusunun **paralel** olduğunu
    gerekçelendirmek — iki doğruyu çizmek cevabı verir.
  - `operatoren` listesi zaten `skizzieren` ile **başlıyor**.
  Toplam 13 BE çizime bağlı. Bu dosya `material: []` olarak kalmalı.
- **Gerekçe:** Envanterdeki en net B. Diğer fotosel sorularında düzenek şeması
  serbest (aşağıya bak) — çizim ajanı şablonu buraya da uygulamasın.

### quantenphysik/q002.json — Grenzwellenlänge an einer Bariumkathode
- **Karar:** A
- **Ne çizilmeli:** **Vakuum-Photozelle mit Gegenfeld** şeması (tekrar eden
  şablon, bkz. `## Tekrar eden şablonlar`): boşaltılmış cam balon, içinde
  baryum kaplı geniş katot ve karşısında halka/çubuk anot; soldan gelen
  monokromatik ışık oku `λ = 320 nm` katoda düşüyor; dışarıda ayarlanabilir
  gerilim kaynağı **ters kutuplu** (Gegenspannung `U_G`) ve seri hassas
  ampermetre. Katodun yanında `W_A = 2,48 eV (Barium)` etiketi.
- **Şekle girecek sayılar:** W_A = 2,48 eV, λ = 320 nm
- **ÇİZİLMEYECEK:** Enerji seviyesi/çubuk diyagramı (`hf` ile `W_A`
  karşılaştırması) — a), b) ve e)'nin akıl yürütmesi.
- **Gerekçe:** d) şıkkındaki "Gegenspannung, bei der der Photostrom gerade
  verschwindet" kavramı devre şeması olmadan sözel kalıyor; öğrenci karşı
  gerilimin hangi kutupta bağlandığını göremiyor.

### quantenphysik/q003.json — Hallwachs-Versuch an der Zinkplatte
- **Karar:** A — **öncelik yüksek, dört panelli karşılaştırma**
- **Ne çizilmeli:** **Dört panel**, hepsi aynı ölçekte:
  1. **Grundversuch:** parlak zımparalanmış çinko levha, iletken telle
     elektroskoba bağlı, levha **negatif** yüklü, elektroskop ibresi sapmış;
     solda cıva buharlı lamba, ışın oku `UV`, lamba–levha mesafesi `r`.
  2. **(A):** aynı düzen, lamba ile levha arasında **kırmızı filtre**
     kutusu, üzerinde `λ > 600 nm`.
  3. **(B):** filtre yok, lamba **`2r`** mesafede (mesafe farkı görsel
     olarak net); ölçü okuyla `2r`.
  4. **(C):** filtre yok, `r` mesafede, levha bu kez **pozitif** yüklü.
  Her panelin altına metinde **zaten verilen** gözlem tek satırla yazılabilir
  ("Ausschlag fällt zurück" / "bleibt erhalten" / "fällt langsamer" /
  "ändert sich nicht") — bunlar soru metninde açıkça duruyor, cevap değil.
- **Şekle girecek sayılar:** λ > 600 nm, r ve 2r, W_A = 4,28 eV (Zink),
  levha yükü işaretleri
- **ÇİZİLMEYECEK:** Levhadan çıkan **elektronlar** (ok, nokta, `e⁻` etiketi)
  ve foton–elektron etkileşimini gösteren herhangi bir şey. a) (4 BE)
  "Beschreiben Sie, welcher Vorgang an der Zinkplatte abläuft" ve d) (3 BE)
  tam olarak bunu sordurtuyor.
- **Gerekçe:** Üç varyantın **neyin değiştiği** (renk / uzaklık / yük işareti)
  ancak yan yana panellerle bir bakışta ayrışıyor; düzyazıda üç paragraf
  ve öğrenci hangi değişkenin sabit kaldığını kaybediyor. c) şıkkının
  ("A ile B'nin farkı dalga modelini niye çürütür") tüm mantığı bu ayrımda.

### quantenphysik/q004.json — Kalzium und Silber im Vergleich
- **Karar:** A+B
- **Ne çizilmeli:** Yan yana **iki özdeş vakum fotoseli**: sol katot
  `Kalzium`, sağ katot `Silber`; **aynı** LED (`λ = 405 nm`) her ikisini de
  aydınlatıyor (ışın çatallanarak ya da iki özdeş LED olarak). Her hücrede
  ayarlanabilir karşı gerilim kaynağı ve ampermetre. "sonst baugleich"
  vurgusu için iki hücre birebir aynı çizilsin.
- **Şekle girecek sayılar:** λ = 405 nm; katot adları (W_A değerleri tabloda
  duruyor, şekle **girmesin**)
- **ÇİZİLMEYECEK:** `hf` foton enerjisi ile `W_A(Ca)` / `W_A(Ag)` çubuklarını
  karşılaştıran **enerji diyagramı**. a) şıkkı (5 BE) birebir bu
  karşılaştırmayı hesapla yaptırıyor; çubuk diyagram cevabı görselleştirir.
  Ayrıca ampermetrelerin hangisinin **saptığını** gösterme (a)'nın sonucu).
- **Gerekçe:** "iki hücre sonst baugleich, tek fark katot malzemesi" fikri
  görselle anında kuruluyor; a)'nın "hangi büyüklüğü yalnız bir kez
  hesaplamak yeter" tipp'i de bu simetriye dayanıyor.

### quantenphysik/q005.json — Messreihe zur Gegenspannung, h aus der Steigung
- **Karar:** A+B — **B tarafı ağır (15 BE)**
- **Ne çizilmeli:** Gegenfeldmethode devre şeması: fotosel (katot + anot),
  önünde değiştirilebilir LED (yanında `λ = 375 / 430 / 470 / 525 / 590 nm`
  listesi), ayarlanabilir karşı gerilim kaynağı `U_G` ve **sıfırı gösteren**
  hassas ampermetre; "U_G, Photostrom gerade null olana kadar artırılır"
  akışı ok/etiketle.
- **Şekle girecek sayılar:** λ listesi (5 değer); `U_G` değerleri şekle
  **girmesin** (tabloda var, şekilde grafiğe dönüşme riski)
- **ÇİZİLMEYECEK:** **`f`–`E_kin` diyagramı**, denkleştirme doğrusu, eğimi ve
  eksen kesim noktaları. b) (5 BE) "Stellen Sie die Messwerte in einem
  f-E_kin-Diagramm dar", c) (5 BE) eğimden `h`, d) (5 BE) eksen kesiminden
  `W_A` — toplam 15 BE, sorunun büyük kısmı. Boş, ölçeklendirilmiş bir
  koordinat sistemi bile konmasın.
- **Gerekçe:** Devre şeması ölçüm yönteminin ne olduğunu anlatır; değerlendirme
  bütünüyle öğrenciye ait.

### quantenphysik/q006.json — Plancksches Wirkungsquantum, Gegenfeldmethode
- **Karar:** A
- **Ne çizilmeli:** Aynı Gegenfeldmethode şablonu, Caesium katotlu: fotosel,
  iki ayrı monokromatik kaynak (`λ₁ = 405 nm`, `λ₂ = 546 nm`),
  ayarlanabilir karşı gerilim `U_G`, hassas ampermetre. İki ölçümün ayrı ayrı
  yapıldığı iki küçük panelle ya da tek şemada iki etiketli kaynakla.
- **Şekle girecek sayılar:** λ₁ = 405 nm, λ₂ = 546 nm,
  U_G,1 = 0,98 V, U_G,2 = 0,20 V (ikisi de verilmiş ölçüm değeri)
- **ÇİZİLMEYECEK:** İki denklemin farkını gösteren herhangi bir grafik/enerji
  şeması — a) ve b) (toplam 8 P) tam olarak o eliminasyon.
- **Gerekçe:** "Gegenspannung, bei der der Photostrom gerade auf null
  zurückgeht" tanımı bu setteki dört ayrı soruda tekrar ediyor ve hiçbirinde
  görselleştirilmemiş.

### atomphysik/q001.json — Anodenwechsel von Kupfer auf Wolfram
- **Karar:** A — **envanterin en yüksek öncelikli A'larından biri**
- **Ne çizilmeli:** Materyal 1'de **düzyazıyla tarif edilen iki spektrum**,
  `typ: "text"` materyalinin **yanına** eklenecek bir `abbildung` olarak
  (metin silinmesin, sayılar orada duruyor). İki panel, **üst üste ve birebir
  aynı ölçekte**, ortak `λ / pm` yatay ekseni ve `I` düşey ekseni:
  - **Üst panel — Kupfer-Anode:** eğri `15,5 pm`'de sıfırdan **dik olarak**
    başlıyor, `≈ 25 pm`'de tepe yapıyor, sonra yavaşça alçalıyor; sağda
    `154 pm`'de çok dar ve yüksek bir çizgi, hemen yanında daha alçak ikinci
    bir çizgi.
  - **Alt panel — Wolfram-Anode:** sürekli kısım **aynı `15,5 pm`'de**
    başlıyor, aynı biçimde ama **belirgin olarak daha yüksek**;
    `154 pm`'deki çizgi **yok**; buna karşılık `21,0 pm`'de yeni bir dar
    yüksek çizgi ve ondan biraz daha küçük dalga boyunda daha alçak bir
    ikinci çizgi.
  - Her iki panelde `U = 80 kV` etiketi.
- **Şekle girecek sayılar:** 15,5 pm (her ikisinde), 25 pm, 154 pm,
  21,0 pm, U = 80 kV
- **Uyarı (B değil ama dikkat):** İki spektrum **üst üste bindirilmiş tek
  grafik olarak değil, iki ayrı panel** olarak çizilsin. b) şıkkı (4 BE)
  "was ändert sich, was bleibt unverändert" karşılaştırmasını istiyor;
  ayrı paneller veriyi sunar, karşılaştırmayı öğrenciye bırakır.
  Panellere "Bremsstrahlung" / "charakteristische Strahlung" **etiketi
  konmasın** — c) şıkkı bu ayrımı gerekçelendiriyor.
- **Gerekçe:** Materyal bir **ölçüm eğrisi**; şu anda yalnızca düzyazı olarak
  var. Görev tanımındaki "verilen ölçüm eğrisi" kategorisinin tam örneği.
  Öğrencinin iki spektrumu kafasında çizmesi beklenemez.

### atomphysik/q002.json — Elektronengeschwindigkeit am Schulröntgengerät
- **Karar:** A (düşük öncelik)
- **Ne çizilmeli:** Basit Röntgenröhre kesiti: boşaltılmış cam kolon, solda
  közlü katot (Glühkathode) ve ısıtma devresi, sağda anot, aralarında
  hızlandırma gerilimi `U₁ = 12 kV` doğru kutuplamayla, anottan çıkan
  X ışını demeti. Elektron yolu ok ile.
- **Şekle girecek sayılar:** U₁ = 12 kV, U₂ = 24 kV (d şıkkı için ikinci
  etiket olarak)
- **ÇİZİLMEYECEK:** Spektrum grafiği (b) şıkkı grenzwellenlänge'yi
  hesaplatıyor).
- **Gerekçe:** Kurulum tanıdık ama bu dosyada hiç görsel yok; şekil
  "Elektron katottan anota gider, orada foton olur" zincirini somutlaştırır.
  **Not:** Bu şekil q004 a) şıkkında **yasak** (aşağı bak) — çizim ajanı
  aynı şablonu q004'e taşımasın.

### atomphysik/q003.json — Zwei Betriebsspannungen einer Röntgenanlage (Silber)
- **Karar:** A — **yüksek öncelik**
- **Ne çizilmeli:** Materyal 1'in iki spektrumu, ortak ölçekli iki panel
  (`λ / pm` – `I`):
  - **Stufe I:** `62,0 pm`'nin altında **hiçbir şey yok** (eğri kesin sıfır),
    tam `62,0 pm`'de dik başlangıç, `≈ 95 pm`'de geniş bir maksimum, sonra
    büyük dalga boylarına doğru yassı ve **sonu belirsiz** iniş.
    **Keskin çizgi yok.**
  - **Stufe II:** aynı biçim ama `31,0 pm`'de başlıyor ve genel olarak
    belirgin daha yüksek; sürekli zeminden `≈ 56 pm` ve `≈ 50 pm`'de iki dar
    ve çok yüksek çizgi çıkıyor.
  - Kenarda tablo bilgisi kutusu: "Ag iç kabuk ≈ 25 keV" (metinde var).
- **Şekle girecek sayılar:** 62,0 pm, 95 pm, 31,0 pm, 56 pm, 50 pm
- **ÇİZİLMEYECEK:** Hesaplanan hızlandırma gerilimleri (`20 kV` / `40 kV`)
  panellere **yazılmasın** — a) şıkkı (6 BE) tam olarak onları
  hesaplatıyor. Paneller yalnızca `Stufe I` / `Stufe II` diye adlandırılsın.
- **Gerekçe:** Sorunun kurgusu "gerilimler cihazdan okunamıyor, spektrumdan
  çıkarılacak" — yani spektrum **verinin kendisi**. Düzyazı bir grafiğin
  yerini tutamaz. Ayrıca c) şıkkı ("kısa dalga boyunda ani kesilme, uzun
  dalga boyunda yumuşak iniş") tam olarak eğrinin iki ucunun biçimini
  konu ediyor; o asimetri görsel olmadan anlaşılmıyor.

### atomphysik/q004.json — Aufbau und Energiebilanz einer Röntgenröhre
- **Karar:** **B — hiçbir şey çizilmeyecek**
- **Neden çizilmemeli:** a) şıkkı (4 BE) birebir "**Skizzieren Sie den
  prinzipiellen Aufbau einer Röntgenröhre.** Beschriften Sie darin den
  evakuierten Kolben, die Glühkathode, die Anode, die Heizspannung `U_H`
  und die Beschleunigungsspannung `U_B` und achten Sie auf deren richtige
  Polung." — yani şekil **ve** etiketleri **ve** kutuplama, hepsi cevabın
  parçası. `operatoren` listesi `skizzieren` ile **başlıyor**. İlk tipp de
  ("welche zwei Stromkreise die Röhre braucht") çizimi öğrenciye yönlendiriyor.
  Geri kalan şıklar (b–e) saf enerji/güç hesabı; onlar için şekil gerekmez.
  Bu dosya `material: []` olarak kalmalı.
- **Gerekçe:** q002'de aynı düzenek serbestçe çizilebiliyor; buradaki fark
  şıkkın emri. Çizim ajanı "Röntgenröhre şablonu" diye toplu uygulama
  yapmamalı.

### atomphysik/q005.json — Bremsstrahlung und charakteristische Linien (Molybdän)
- **Karar:** A
- **Ne çizilmeli:** Materyal 1'in tek spektrumu, `λ / pm` – `I` ekseninde:
  `35,4 pm`'nin altında kesin sıfır; tam `35,4 pm`'de **ani, dik** başlangıç;
  hızlı yükseliş, `≈ 60 pm`'de yassı bir maksimum; sonra uzun dalga boylarına
  doğru yavaş iniş. Bu geniş sürekli zeminin üstünde **iki çok dar ve çok
  yüksek** çizgi: `71 pm` ve `63 pm` (yükseklikleri zemini kat kat aşsın,
  genişlikleri birkaç pm). Kenarda `U_B = 35 kV`, `Anode: Molybdän`.
- **Şekle girecek sayılar:** 35,4 pm, 60 pm, 71 pm, 63 pm, U_B = 35 kV
- **ÇİZİLMEYECEK:** Eğrinin iki bileşenine **"Bremsstrahlung"** ve
  **"charakteristische Strahlung"** etiketlerini koyma. a) şıkkı (3 P)
  birebir "benennen Sie die beiden Anteile" diyor — adlandırma cevabın
  kendisi. Ayrıca hesaplanan `λ_min` bir ok/etiketle "= hc/(eU_B)" diye
  gösterilmesin (c şıkkı, 3 P).
- **Gerekçe:** Sorunun tamamı bir spektrumun biçimi üzerine; o biçim şu anda
  yalnızca üç paragraf düzyazı. "Ani kesilme vs. yumuşak iniş" ile "dar
  yüksek çizgiler vs. geniş zemin" karşıtlıkları görsel kavramlar.

---

## Mathematik

> **Analysis için genel bulgu:** Bu on soruda çizilebilecek "doğal" şekil
> neredeyse her zaman **grafiğin kendisi**, grafik ise sorulan şeyin cevabı
> (ekstremum, dönüm noktası, hangi eğri üstte, asimptot, işaret değişimi).
> Bu yüzden Analysis'te B oranı yüksek. A verilen dört soru, **grafiği değil
> bir gerçek nesneyi** (çatı altındaki dikdörtgen, karton kutu, vazo, sarnıç)
> çizdiği için A. Çizim ajanı bu ayrımı kaçırmasın: *nesne serbest, eğri yasak.*

### analysis/q001.json — Untersuchung von f(x) = x·e⁻ˣ
- **Karar:** B
- **Neden çizilmemeli:** Bağlam yok, çizilecek nesne yok; tek olası şekil
  `f`'in grafiği. Grafik b) (ekstremum noktası ve türü), c) (dönüm noktası)
  ve d) (`x → ±∞` davranışı) şıklarının sonucunu doğrudan gösterir —
  toplam 10 P. Bu dosya `material: []` kalmalı.

### analysis/q002.json — Größte rechteckige Standfläche unter einem Hallendach
- **Karar:** A — **Analysis'teki en güçlü A**
- **Ne çizilmeli:** Koordinat sistemi: `x` yatay (metre), `y` düşey (metre).
  Çatı kesiti olarak `f(x) = 4·e^{-0,5x}` eğrisi `x ∈ [0; 8]` aralığında,
  `(0|4)` noktasından başlayıp sağa doğru alçalarak. Eğrinin altına
  **genel** bir `u` değeri için dikdörtgen: köşeler `(0|0)`, `(u|0)`,
  `(u|f(u))`, `(0|f(u))` — dördü de etiketli. Genişlik `u` ve yükseklik
  `f(u)` ölçü oklarıyla. Dikdörtgenin sağ üst köşesinin eğriye **değdiği**
  görünsün. Kenarda "Hallendach" / "Messestand" açıklaması.
- **Şekle girecek sayılar:** f(x) = 4·e^{−0,5x}, tepe yüksekliği 4 m,
  aralık [0; 8]
- **ÇİZİLMEYECEK:** (i) Dikdörtgen **optimum** `u = 2` konumunda çizilmesin;
  b) ve c) (9 P) tam olarak o değeri arıyor — belirgin biçimde farklı,
  keyfî bir `u` seçilsin. (ii) d) şıkkındaki `[0; 8]` alanı **taranmasın**
  ve alan değeri yazılmasın.
- **Gerekçe:** Dört köşe koordinatı düzyazıyla veriliyor; "dikdörtgenin
  yüksekliği serbest değil, `f(u)` ile belirli" fikri (a şıkkının anahtarı)
  ancak şekille kavranıyor. Ekstremum problemlerinde en sık hata hedef
  fonksiyonu yanlış kurmaktır ve bunun tek nedeni geometriyi görmemektir.

### analysis/q003.json — Schachtel mit maximalem Volumen
- **Karar:** A+B
- **Ne çizilmeli:** *Yalnızca açık karton* (üstten görünüş): `30 cm × 30 cm`
  kare, iki kenarında `30 cm` ölçü oku; dört köşesinin her birinde kenar
  uzunluğu `x` olan küçük bir kare taralı olarak çıkarılmış (yalnız **bir**
  köşede `x` etiketi, diğerleri simetriden anlaşılır); kesme çizgileri düz,
  katlama çizgileri **kesikli**.
- **Şekle girecek sayılar:** 30 cm, x
- **ÇİZİLMEYECEK:** (i) Taban kenarının `30 − 2x` olarak **etiketlenmesi** —
  Schritt 1 (2 P) tam olarak "Zielgröße und Maße durch x ausdrücken".
  (ii) Katlanmış kutunun üç boyutlu görüntüsü ve üzerinde `Höhe = x`
  etiketi — aynı gerekçe. (iii) `V(x)` grafiği ve maksimumu (b, 5 P).
  Ayrıca ilk tipp birebir "Zeichne dir den Karton auf und trage x an allen
  vier Ecken ein" diyor; **etiketsiz** açık karton bu tipp'in bir adım
  öncesi, `30 − 2x` ise tam kendisi.
- **Gerekçe:** "Köşelerden kare kesip şeritleri yukarı katlamak" işlemi
  klasik ama sözle okunması hâlâ zor; kesme/katlama çizgileri şekilde
  ayrıştığında öğrenci hangi kenarın taban hangisinin yükseklik olduğunu
  görür — sayıya dökmesi yine kendi işi.

### analysis/q004.json — Fläche zwischen Parabel und Gerade
- **Karar:** B
- **Neden çizilmemeli:** Çizilecek nesne yok; tek olası şekil iki grafiğin
  ortak koordinat sistemindeki çizimi. Bu, a) kesişim noktalarını (3 P),
  b) "hangi grafik üstte" gerekçesini (3 P) ve c) taranacak alanı (4 P)
  görsel olarak verir. Üstelik üçüncü tipp ("Ein einzelner Zwischenwert,
  etwa bei x = 0, verrät dir sofort, welcher Graph oben liegt") b)'yi
  **hesapla** çözdürmek istiyor, bakışla değil.

### analysis/q005.json — Vollständige Kurvendiskussion
- **Karar:** B
- **Neden çizilmemeli:** d) şıkkı birebir "**Skizzieren Sie den Graphen von
  f** im Intervall [−1; 5] unter Verwendung Ihrer Ergebnisse" (2 P) ve
  `operatoren` listesinde `skizzieren` var. Grafik ayrıca a) sıfır yerlerini,
  b) ekstremumları ve c) dönüm noktasını da gösterir (toplam 13 P).
  Boş, ölçeklendirilmiş koordinat sistemi de konmasın.

### analysis/q006.json — Fassungsvermögen einer Glasvase (Rotationskörper)
- **Karar:** A+B
- **Ne çizilmeli:** Yatay `x` ekseni **dönme ekseni** olacak biçimde:
  `f(x) = 3 + 2·e^{−0,2x}` eğrisi `x ∈ [0; 20]` aralığında, eksenin altında
  aynanın simetriği, ikisi arasında dönme cismi (vazo) hafif perspektifle
  taranmış. Eksen etiketleri **birebir soru diliyle**:
  `x = Höhe über dem Vasenboden (cm)`, `f(x) = Innenradius (cm)`.
  Solda "Vasenboden" (`x = 0`), sağda "oberer Rand" (`x = 20`) yazsın.
  Yanına küçük bir yardımcı görsel: vazanın gerçekte **dik** durduğu hâli,
  matematiksel modelde ise **yan yatırıldığı** oklarla belirtilsin.
- **Şekle girecek sayılar:** f(x) = 3 + 2·e^{−0,2x}, aralık [0; 20]
- **ÇİZİLMEYECEK:** (i) `f(0)` ve `f(20)` **sayısal** yarıçapları —
  a) şıkkı (2 P) onları hesaplatıyor; yalnız `f(0) = ?` / `f(20) = ?`
  yazılabilir. (ii) `Δx` kalınlığında, yarıçapı `f(x)` olan **disk dilimi**
  ve `π·f(x)²·Δx` gösterimi — b) şıkkı (2 P) tam olarak hacim formülünün
  gerekçesi.
- **Gerekçe:** Bu sorudaki asıl kavram karışıklığı `x`'in "yükseklik" olarak
  tanımlanıp **yatay eksen** olarak çizilmesi. Şekil bunu çözüyor; şekilsiz
  öğrenci vazoyu dik sanıp integrali yanlış kuruyor.

### analysis/q007.json — Funktionenschar, Schablonen für Drachensegel
- **Karar:** A+B
- **Ne çizilmeli:** **Şematik** (ölçekli değil, "nicht maßstäblich" notuyla):
  yatay `x` ekseni; üstte "Graph von `f_k`" diye adlandırılmış bir eğri
  parçası, altta onun `x` eksenindeki **ayna simetriği**; ikisinin
  kapattığı mercek/uçurtma biçimli bölge taralı — bu bölge "Schablone
  (Drachensegel)" diye etiketli. İki sıfır yeri eksende iki nokta olarak
  işaretli ama **isimsiz/değersiz** (`N₁`, `N₂` bile yazılmayabilir).
- **Şekle girecek sayılar:** hiçbiri — bu şekil tamamen niteldir.
  `f_k(x) = (x/3 − k)·ln(x+3)` formülü kenarda künye olarak durabilir.
- **ÇİZİLMEYECEK:** (i) `f_k`'nın **gerçek** grafiği; a) sıfır yerlerini
  (`x = −2` ve `x = 3k`), c) `y` eksenindeki ekstremumu ve d) dönüm noktası
  incelemesini verir (11 P). (ii) Ortak nokta `P(−2 | 0)`'ın işaretlenmesi —
  e) şıkkı (7 P) onun **tüm** eğriler için ortak olduğunu kanıtlatıyor.
  (iii) Teğet `t_k` ve eksenlerle oluşturduğu ikizkenar üçgen — e)'nin son
  kısmı.
- **Gerekçe:** "Üst kenar `f_k`'nın grafiği, alt kenar onun `x` eksenindeki
  aynası, yalnız iki sıfır arasındaki bölge önemli" cümlesi bir **şekil
  tarifi**; şu anda hiç görselleştirilmemiş ve bağlamın (Drachensegel) neden
  simetrik olduğu anlaşılmıyor. Nitel şema bağlamı kurar, hiçbir şıkkı
  çözmez.

### analysis/q008.json — Funktionsterm aus gegebenen Eigenschaften
- **Karar:** B
- **Neden çizilmemeli:** Çizilecek nesne yok. Tek olası şekil — orijine göre
  nokta simetrik, `W(0|0)`'da eğimi `−3` olan, `x = 1`'de alçak noktası
  bulunan bir kübik parabolün taslağı — a) ve b) şıklarının (14 P, sorunun
  tamamı) sonucunu doğrudan gösterir. Verilen üç özellik zaten şeklin sözel
  tarifi; onu çizmek denklem sistemini kurma adımını atlatır.

### analysis/q009.json — Füllstand einer Regenwasserzisterne
- **Karar:** A+B (düşük öncelik ama zararsız)
- **Ne çizilmeli:** Sarnıç kesiti: toprak altına gömülü dikdörtgen/silindirik
  hazne, üstte çatıdan gelen boru ve üzerinde "Filter" kutusu, hazneye
  giren su oku. Haznenin üst kenarında kesikli çizgi ve
  `Fassungsvermögen 2400 L` etiketi (taşma seviyesi). İçinde `t = 0`
  anındaki su seviyesi çizgisi — **değeri yazılmadan**, yalnız
  `Füllmenge bei t = 0` etiketiyle.
- **Şekle girecek sayılar:** 2400 L
- **ÇİZİLMEYECEK:** (i) `f(0) = 1500 L` başlangıç değeri — a) şıkkı (4 P)
  onu hesaplatıyor; ilk tipp de "die Zisterne startet nicht leer" diye
  uyarıyor, sayı şekle yazılırsa uyarı anlamsızlaşır. (ii) `f(t)` grafiği
  ve `2400 L` asimptotu — c) şıkkı (4 P) hem monotonluğu hem taşıp
  taşmayacağını sorduruyor; asimptotlu grafik ikisini birden verir.
- **Gerekçe:** "Fassungsvermögen 2400 L" ile "Füllmenge f(t)" ayrımı ve
  `%80 doluluk`'un neye göre olduğu (ikinci tipp'in uyardığı hata) kesit
  şekliyle netleşiyor.

### analysis/q010.json — Warteschlange an einem Fähranleger
- **Karar:** B
- **Neden çizilmemeli:** Çizilecek fiziksel kurulum yok (iskele/kuyruk resmi
  saf süs olur). Tek anlamlı şekil `f`'in grafiği; o ise b) şıkkındaki
  "kuyruğun anlık değişmediği zaman" (sıfır yeri, 3 P) ve d) şıkkındaki
  ekstremum noktası ile türünü (5 P) doğrudan okutur. `f` bir **değişim
  oranı** olduğu için grafiğin sıfır geçişi tam olarak sorunun kavramsal
  düğümü — çizilirse düğüm çözülür.

### analytische-geometrie/q001.json — Ebene aus drei Punkten, Durchstoßpunkt
- **Karar:** A+B — **yüksek öncelik**
- **Ne çizilmeli:** Aksonometrik (eğik) üç boyutlu koordinat sistemi:
  - Üç eksen `x`, `y`, `z` etiketli, ölçek işaretleriyle.
  - `A(4|0|0)`, `B(0|4|0)`, `C(0|0|2)` noktaları **her biri kendi ekseninde**
    açıkça işaretli (ilk tipp'in vurguladığı özellik).
  - Bu üç noktanın gerdiği üçgen, düzlem `E`'nin bir parçası olarak yarı
    saydam taranmış; kenarında `E` etiketi.
  - Doğru `g`, orijinden `(1|1|1)` yönünde çıkan bir ışın olarak, düzlemi
    delip öteye geçecek şekilde (arkada kalan kısım kesikli).
  - `D(4|4|4)` ayrı bir nokta olarak işaretli.
- **Şekle girecek sayılar:** A, B, C, D koordinatları; g'nin yön vektörü
- **ÇİZİLMEYECEK:** (i) Delme noktası `S`'nin nokta/etiketi — b) (3 P).
  (ii) `g` ile `E` arasındaki kesişim açısı yayı ya da normal vektör —
  c) (4 P). (iii) `D`'den `E`'ye dik ayak ve uzunluğu — d) (3 P).
- **Gerekçe:** Görev tanımının "vektör/doğru/düzlem konumu" başlığının tam
  örneği. Üç noktanın **eksenler üzerinde** olması (a şıkkının kısayolu) ve
  `g`'nin uzay köşegeni olması yazıyla soyut; şekille bir bakışta görülür.

### analytische-geometrie/q002.json — Zwei Ebenen: Schnittwinkel, Schnittgerade
- **Karar:** A+B
- **Ne çizilmeli:** **Şematik** (koordinatlara birebir sadık olmayan,
  "schematisch, nicht maßstäblich" notlu) iki düzlem: `E₁` ve `E₂` birer
  paralelkenar olarak birbirini kesecek biçimde, kesişimlerinde kalın bir
  doğru `s` etiketli. Orijin `O` her iki düzlemin de **dışında** bir nokta
  olarak işaretli. Kenarda iki düzlemin koordinat denklemi künye olarak.
- **Şekle girecek sayılar:** yalnızca `E₁: x + 2y + 2z = 6` ve
  `E₂: 2x + 2y + z = 6` künyesi
- **ÇİZİLMEYECEK:** (i) `O`'dan düzlemlere inen dik doğru parçaları ve
  uzunlukları. **Kritik:** d) şıkkının (4 P) cevabı iki uzaklığın
  **birbirine eşit** (her ikisi de 2) olması ve bunun geometrik yorumu;
  şemada dikmeleri eşit uzunlukta çizmek cevabı gösterir. Dikme hiç
  çizilmesin. (ii) Kesişim açısının değeri (a, 4 P) — açı yayı çizilecekse
  **etiketsiz** olsun. (iii) `Q(4|−3|4)` noktası `s` üzerinde işaretlenmesin
  — c) (2 P) tam olarak bunu kanıtlatıyor.
- **Gerekçe:** "İki düzlem bir doğruda kesişir" ifadesi öğrencilerin uzamsal
  olarak en zor kurduğu şeylerden biri; şematik çizim b) şıkkının **neyi**
  aradığını netleştirir, nasıl bulunacağını söylemez.

### analytische-geometrie/q003.json — Windschiefe Geraden
- **Karar:** A+B — **dikkatli çizilmeli**
- **Ne çizilmeli:** Aksonometrik bir yardımcı kutu (şeffaf dikdörtgen prizma
  kenar çizgileriyle, derinlik hissi için) içinde iki doğru:
  `g` (dayanak noktası `(1|0|2)`, yön `(1|2|0)`) ve `h` (dayanak `(0|3|−1)`,
  yön `(2|−1|1)`). Biri diğerinin **önünden** geçsin; arkada kalan doğrunun
  kesişme bölgesindeki parçası **kesikli** çizilerek kesişmedikleri uzamsal
  olarak görünsün. Dayanak noktaları işaretli, yön vektörleri kısa oklarla.
  Şeklin başlığı nötr olsun: `g und h im Raum` — **"windschief" kelimesi
  şekle yazılmasın.**
- **Şekle girecek sayılar:** iki doğrunun dayanak noktaları ve yön
  vektörleri (zaten soruda verili)
- **ÇİZİLMEYECEK:** (i) Yardımcı düzlem `E` (`g`'yi içeren, `h`'ye paralel)
  — c) şıkkı (4 P) tam olarak onu kurdurtuyor; çizilirse yöntem hediye
  edilir. (ii) İki doğrunun ortak dikmesi / uzaklık doğru parçası — d)
  (5 P). (iii) Aradaki açı yayı — b) (2 P).
- **Risk notu:** a) şıkkı (4 P) `g` ile `h`'nin windschief olduğunu
  **kanıtlatıyor**; şekil bu iddiayı görsel olarak inandırıcı kılar.
  Kanıt cebirsel olduğu için (yön vektörleri katı değil + denklem sistemi
  çözümsüz) A verildi, ama şekilde hiçbir yerde "kesişmiyorlar" ya da
  "windschief" yazmamalı — yalnızca konumu göstermeli.
- **Gerekçe:** Windschieflik lise geometrisinde uzamsal olarak en zor
  kavranan durumdur; şekilsiz öğrenci a) ile b)'nin neden ayrı sorular
  olduğunu bile anlamıyor (paralel olmayan iki doğru arasında açı
  hesaplanabilir ama kesişmezler).

### Stochastik — genel bulgu: **A yok, tek bir tane bile**
Yedi sorunun hiçbirinde çizilecek bir fiziksel/geometrik kurulum yok.
Çizilebilecek her görsel (ağaç diyagramı, dörtlü tablo, çan eğrisi + ret
bölgesi, binom çubuk grafiği) ya doğrudan bir şıkkın emri ya da sayısal
cevabın görsel hâli. **Bu bölümde hiçbir dosyaya `abbildung` eklenmemeli.**

B ile C ayrımı burada şöyle yapıldı: **B**, çizim ajanının refleksle
çizmeye kalkışacağı *standart ders kitabı şekli* puanı sızdırıyorsa;
**C**, hiç kimsenin kendiliğinden çizmeyeceği bir görsel söz konusuysa.

### stochastik/q001.json — Bayes bei einem Screening-Test
- **Karar:** B
- **Neden çizilmemeli:** a) şıkkı (3 P) birebir "**Beschreiben Sie den
  Sachverhalt durch ein Baumdiagramm** mit den vier Pfadwahrscheinlichkeiten"
  diyor. Ağaç diyagramı a)'nın tam cevabı; üstelik ikinci tipp ağacın hangi
  sırayla dallanacağını da ("erste Stufe Träger/Nicht-Träger, zweite Stufe
  Testergebnis") öğrenciye bırakıyor. Ağaç çizilirse b), c), d) de büyük
  ölçüde okunur hâle gelir (toplam 15 P).

### stochastik/q002.json — Binomialverteilung in der Qualitätskontrolle
- **Karar:** C
- **Gerekçe:** Çizilecek kurulum yok; soru baştan sona binom hesabı.
  *Küçük not:* `B(20; 0,15)` dağılımının çubuk grafiği de çizilmesin —
  b), c), d) şıklarının değerleri grafikten okunabilir hâle gelir.

### stochastik/q003.json — Einseitiger Hypothesentest (Gießerei)
- **Karar:** B
- **Neden çizilmemeli:** Buradaki standart şekil — çan eğrisi, üzerinde
  `μ = 48`, `σ`, ve **sol kuyrukta taranmış ret bölgesi** — c) şıkkının
  (4 P) tam cevabıdır. Üstelik üçüncü tipp birebir "Überlege daher, **an
  welchem Ende der Verteilung** der Ablehnungsbereich liegen muss, bevor du
  rechnest" diyor: hangi uçta olduğu öğrencinin bulacağı şey, şekil ise
  bunu ilk bakışta söyler. d) şıkkındaki `X = 34` kararı da grafikte
  işaretlenirse (2 P) doğrudan görülür. Sigma katsayıları tablosu
  (`typ: "tabelle"`) yeterli ve dokunulmayacak.

### stochastik/q004.json — Normalverteilte Abfüllmenge (Olivenöl)
- **Karar:** B
- **Neden çizilmemeli:** Klasik şekil — `μ = 500`, `σ = 4` çan eğrisi ve
  `492 … 508` arasının taranması — a) şıkkının (4 P) cevabının resmidir.
  Dahası ilk tipp'in tarif ettiği asıl adım ("Wie viele Standardabweichungen
  ist die Grenze vom Erwartungswert entfernt? Diese Zahl ist `z`") tam olarak
  şekilde okunacak şey olurdu: `492` ve `508` sınırlarının `μ ± 2σ`'da
  durduğu çizimde bedava görülür, `z = 2` hesabı ortadan kalkar.
  b) (kaymış `μ = 502`) ve d) (`%90` kuantili) de aynı grafikte okunur.
  Toplam 15 P risk altında. `Φ` tablosu (`typ: "tabelle"`) yeterli.
  **Boş bir çan eğrisi bile konmasın** — sınırlar ona işlenmeden anlamsız,
  işlenirse cevap.

### stochastik/q005.json — Sigma-Umgebung und Entschädigung im Bahnverkehr
- **Karar:** C
- **Gerekçe:** Çizilecek kurulum yok. e) şıkkının istediği `Y`'nin olasılık
  dağılımı bir **tablo**, şekil değil — ve o tablo cevabın kendisi olduğu
  için `typ: "tabelle"` materyali olarak da eklenmemeli.
  *Küçük not:* `B(25; 0,22)` çubuk grafiği ve üzerine işaretlenmiş
  `2σ`-çevresi çizilmesin — d) (4 P).

### stochastik/q006.json — Zweiseitiger Signifikanztest (Retouren)
- **Karar:** B
- **Neden çizilmemeli:** q003 ile aynı gerekçe, iki taraflı hâli: çan eğrisi
  ve **iki uçta** taranmış ret bölgeleri c) şıkkının (4 P) tam cevabı.
  a) şıkkı (3 P) testin **neden** iki taraflı olduğunu gerekçelendirmeyi
  istiyor — iki kuyruklu bir şekil bu gerekçeyi görsel olarak hediye eder.
  d) şıkkındaki `X = 176` kararı da grafikten okunur (2 P).

### stochastik/q007.json — Vierfeldertafel: Wärmepumpen und Photovoltaik
- **Karar:** B
- **Neden çizilmemeli:** a) şıkkı (4 P) birebir "**Stellen Sie den Sachverhalt
  in einer Vierfeldertafel dar**" diyor — dörtlü tablo a)'nın tam cevabı.
  Dörtlü tablo teknik olarak `typ: "tabelle"` sayılsa da **materyal olarak
  eklenmemeli**: bu dosyada tablo veri değil, cevaptır. Doldurulmuş tablo
  b), c), d) şıklarını da (9 P) neredeyse doğrudan okutur. Ağaç diyagramı
  da aynı nedenle yasak.

---

## Chemie

### chemisches-gleichgewicht/q001.json — Ammoniaksynthese nach Haber-Bosch
- **Karar:** A — **çok yüksek öncelik**
- **Ne çizilmeli:** Material 1'de **düzyazıyla saçılmış dokuz ölçüm değeri**
  bir eğri ailesine dönüşecek. `typ: "text"` materyalinin **yanına**
  `abbildung` olarak eklensin (metin silinmesin; katalizör/aktivasyon
  enerjisi paragrafı orada duruyor ve c) şıkkı ona dayanıyor).
  - Yatay eksen: `Druck / bar` (10, 100, 250 — logaritmik ya da eşit aralıklı
    kategorik, ikisi de olur; kategorik daha okunaklı).
  - Düşey eksen: `NH₃-Ausbeute / Vol-%` (0–100).
  - **Üç eğri**, her biri veri noktalarıyla ve doğrudan uç etiketiyle
    (efsane kutusu yerine):
    - `200 °C`: 15 % / 67 % / 80 %
    - `400 °C`: 4 % / 25 % / 39 %
    - `600 °C`: 0,5 % / 4 % / 10 %
  - Reaksiyon denklemi ve `ΔH = −92 kJ/mol` künye olarak kenarda.
- **Şekle girecek sayılar:** dokuz ölçüm değeri, 10/100/250 bar,
  200/400/600 °C
- **ÇİZİLMEYECEK:** (i) "Druck ↑ ⇒ Ausbeute ↑" / "Temperatur ↑ ⇒ Ausbeute ↓"
  gibi **eğilim okları veya açıklama kutuları** — b) şıkkı (6 P) tam olarak
  bu iki eğilimi Le Chatelier ile açıklattırıyor. Yalnız ham veri çizilsin.
  (ii) `450 °C / 250 bar` işletme noktası işaretlenmesin — c) şıkkı (5 P)
  o seçimi değerlendirtiyor, üstelik 450 °C eğrisi verilerde zaten yok.
- **Gerekçe:** Dokuz sayının üç paragraf düzyazıya dağıtılmış olması bu
  materyali fiilen okunamaz kılıyor; öğrenci "basınç sabitken sıcaklığın
  etkisi" ile "sıcaklık sabitken basıncın etkisi" karşılaştırmasını
  yapabilmek için önce kendi tablosunu kurmak zorunda. Eğri ailesi Haber-Bosch
  konusunun standart görselidir ve burada **veridir, cevap değildir.**

### elektrochemie/q001.json — Daniell-Element unter Nichtstandardbedingungen
- **Karar:** A+B — **yüksek öncelik**
- **Ne çizilmeli:** Klasik Daniell elemanı kesiti:
  - Solda beher: `ZnSO₄`-Lösung, `c(Zn²⁺) = 0,010 mol/L`, içinde çinko çubuk
    elektrot (`Zn` etiketli).
  - Sağda beher: `CuSO₄`-Lösung, `c(Cu²⁺) = 1,0 mol/L`, içinde bakır çubuk
    elektrot (`Cu` etiketli).
  - İki beheri birleştiren ters-U biçimli **tuz köprüsü** (Salzbrücke),
    etiketli.
  - Elektrotları birleştiren dış devre teli ve üzerinde **voltmetre** (`V`).
  - Kenarda `ϑ = 25 °C` ve standart potansiyeller künyesi.
- **Şekle girecek sayılar:** c(Zn²⁺) = 0,010 mol/L, c(Cu²⁺) = 1,0 mol/L,
  25 °C, E⁰(Zn/Zn²⁺) = −0,76 V, E⁰(Cu/Cu²⁺) = +0,34 V
- **ÇİZİLMEYECEK:** (i) **`Anode` / `Kathode` etiketleri**, (ii) **`+` / `−`
  kutup işaretleri**, (iii) elektron akış yönü oku, (iv) tuz köprüsündeki
  iyon göç yönü okları. a) şıkkı (3 P) birebir "Ordnen Sie den Halbzellen
  jeweils **Anode und Kathode sowie Minus- und Pluspol** zu" diyor.
  Ayrıca (v) elektrottaki **elektrokimyasal çift tabaka** çizimi — c) şıkkı
  (3 P). Voltmetrede bir **değer** de gösterilmesin (b, 5 P).
- **Gerekçe:** "İki yarı hücre, tuz köprüsüyle bağlı" düzeni bu konunun
  temel görselidir ve dosyada hiç yok. Elektrot ve çözelti derişimlerinin
  hangi tarafa ait olduğu (Nernst hesabında en sık karıştırılan şey)
  şekille kesinleşiyor.

### kohlenhydrate/q001.json — Warum Saccharose die Fehling-Probe nicht besteht
- **Karar:** A+B
- **Ne çizilmeli:** Material 1'in gözlemleri: **üç deney tüpü yan yana**, bir
  su banyosu (Wasserbad) içinde, altında ısıtma göstergesi.
  - Tüp 1 — `Glucose-Lösung`: yanında renk sırası şeması
    `tiefblau → grün → gelb → orangerot`, dipte **ziegelroter Niederschlag**.
  - Tüp 2 — `Maltose-Lösung`: aynı sonuç, dipte çökelti, yanında
    `etwas langsamer` notu.
  - Tüp 3 — `Saccharose-Lösung`: sıvı **tiefblau** kalıyor, dipte çökelti yok.
- **Şekle girecek sayılar:** yok; şekil niteldir.
- **Renk kısıtı (önemli):** Kullanılabilir tokenler yalnızca
  `--color-tinte / papier / akzent / warnung`; **mavi yok**. Bu yüzden
  renkler literal boya olarak değil, **tarama/doku deseni + Almanca renk
  adı yazısı** ile gösterilsin (ör. tüpün yanında `tiefblau` yazısı,
  çökelti için `warnung` tonu + `ziegelrot` yazısı). Şekil renk körü ve
  koyu tema altında da okunabilir kalır.
- **ÇİZİLMEYECEK:** (i) Glukozun **Haworth** ve **Fischer** gösterimleri ve
  halka açılması — b) şıkkı (4 P) birebir "Gehen Sie dabei auf den Übergang
  zwischen Haworth- und Fischer-Darstellung ein" diyor. (ii) Maltoz ve
  sakkarozun yapı formülleri, `α-1,4-` ve `1,2-glykosidische Bindung`
  vurguları, anomerik C atomunun işaretlenmesi — c) şıkkı (4 P).
  **Yani: hiçbir yapı formülü çizilmeyecek.** Bu dosyada en cazip şekil
  şeker yapıları olduğu için çizim ajanı özellikle uyarılmalı.
- **Gerekçe:** Üç tüpün **farklı** sonucu bu sorunun kalkış noktası; şu anda
  düzyazıda ve okuyan öğrenci üç sonucu yan yana tutamıyor. Deney görseli
  gözlemi verir, açıklamayı vermez.

### kunststoffe/q001.json — Drei Werkstoffproben im Wärmetest
- **Karar:** A+B
- **Ne çizilmeli:** **3 × 3 gözlem tablosu-şeması** (satır: Probe A / B / C,
  sütun: `Raumtemperatur` → `erwärmt bis 300 °C` → `abgekühlt, von Hand
  gezogen`). Her gözede küçük bir çizim + metinde **verilen** gözlem:
  - **Probe A:** `2 mm` kalınlığında sütlü-beyaz şerit → `> 110 °C`'de
    yumuşuyor, cımbızla bükülüyor, biçim soğuyunca kalıyor (tekrarlanabilir
    olduğu döngü oku ile) → çekilince uzuyor ve **uzamış kalıyor**.
  - **Probe B:** koyu kahve, sert kırık parça (eski ışık anahtarı gövdesi) →
    `250 °C`'ye kadar değişmiyor, üstünde kararıyor/kokuyor ve **yumuşamadan**
    kömürleşiyor → çekilince **uzamadan kırılıyor**.
  - **Probe C:** siyah halka (bisiklet iç lastiği) → `200 °C`'de bile kalıcı
    biçim almıyor, daha yüksekte bozunuyor → çekilince kat kat uzuyor ve
    bırakınca **tamamen eski boyuna dönüyor** (geri dönüş oku).
- **Şekle girecek sayılar:** 2 mm, 110 °C, 250 °C, 200 °C, 300 °C
- **ÇİZİLMEYECEK:** (i) `Thermoplast` / `Duroplast` / `Elastomer`
  **sınıf adları** — a) şıkkı (3 P) tam olarak bu atamayı istiyor;
  panellerde yalnız `Probe A/B/C` yazsın. (ii) Zincir ağı /
  **çapraz bağlanma derecesi** şemaları (bağsız / seyrek bağlı / sık bağlı) —
  b) (3 P) ve d) (3 P) tam olarak bunlar. (iii) **Yapı formülleri:**
  Ethen → Polyethylen ve Vinylchlorid → PVC polimerizasyonu — c) şıkkı
  (Schritt 3 + 4, 5 P). Kısaltmalar (`PE`, `PVC`) da şekle yazılmasın.
- **Gerekçe:** Üç numunenin üç aşamalı davranışı = dokuz bilgi, şu anda üç
  uzun paragrafta. Öğrencinin a) şıkkında yapması gereken tam olarak bu üç
  davranışı **karşılaştırmak**; ızgara karşılaştırmayı mümkün kılar,
  sınıflandırmayı yapmaz.

### saeure-base/q001.json — pH-Wert und Pufferwirkung einer Milchsäure-Lösung
- **Karar:** C
- **Gerekçe:** Çizilecek anlamlı bir kurulum yok; büret + beher resmi saf süs
  olur, tüm iş protoliz denklemi ve logaritma hesabıdır.
- **Önemli uyarı (C ama dikkat):** **Titrasyon eğrisi çizilmesin.** Görev
  tanımı titrasyon eğrisini A örneği olarak sayıyor — ama o, eğrinin
  *verildiği* sorular için geçerli. Burada eğri verilmiyor: çizilirse
  **yarı eşdeğerlik noktasındaki düzlük** b) şıkkının (3 P) cevabını,
  **tampon bölgesi** ise c) şıkkının (3 P) cevabını doğrudan gösterir.
  Ayrıca üçüncü tipp yarı-nötralizasyon fikrini zaten veriyor; grafik
  eklenirse b) tamamen boşa düşer.

---

## Biologie

### biologie/vererbung/q001.json — Stammbaumanalyse
- **Karar:** **YAPILDI** — `typ: "abbildung"` mevcut. Yeniden değerlendirilmedi.
  Çizim standardı için **referans dosya**.

### biologie/photosynthese/q001.json
- **Karar:** **YAPILDI** — `typ: "abbildung"` mevcut. Çizim standardı için
  **referans dosya**. (Görev tanımında "şekilsiz çözülemeyen soru" örneği
  olarak anılıyor.)

### biologie/neurobiologie/q001.json
- **Karar:** **YAPILDI** — `text` + `abbildung` mevcut.

### biologie/molekulargenetik/q001.json
- **Karar:** **YAPILDI** — `text` + `abbildung` mevcut.

### biologie/evolution/q001.json — Adaptive Radiation der Darwinfinken
- **Karar:** A+B — **Biologie'de kalan tek dosya, yüksek öncelik**
- **Ne çizilmeli:** İki ayrı şekil (ya da iki panelli tek şekil):
  1. **Takımada haritası (şematik):** solda Güney Amerika kıyısının bir
     parçası, sağda Galapagos adaları; aralarında `≈ 1000 km` ölçü oku ve
     "offenes Meer" taraması. Adalar birbirinden de açık denizle ayrılmış
     olarak, `Daphne Major` küçük bir ada olarak ayrıca etiketli. Kenarda
     "vulkanischen Ursprungs, nie mit dem Festland verbunden,
     älteste ≈ 3–5 Mio. Jahre" künyesi. Adalar arası geçişi gösteren
     **ince, kesikli** ok ("möglich, aber selten").
  2. **Gaga biçimleri ve besin nişleri:** beş tür yan yana, her biri için
     yalnızca **gaga profili** (kuşun tamamı gerekmez) ve karşısında besini:
     - `Großer Grundfink` — çok yüksek, kalın gaga → büyük, sert tohum
     - `Kleiner Grundfink` — kısa, ince gaga → küçük, yumuşak tohum
     - `Kaktusfink` — uzun, hafif kavisli gaga → Opuntia çiçeği/meyvesi
     - `Waldsängerfink` — ince, sivri, cımbız gibi gaga → yapraktaki böcek
     - `Spechtfink` — gagasında **alet olarak kaktüs dikeni** → kabuk
       çatlağındaki böcek larvası
- **Şekle girecek sayılar:** ≈ 1000 km, 3–5 Mio. Jahre, 13–15 Finkenarten
- **ÇİZİLMEYECEK:** **Kuraklık öncesi ve sonrası gaga yüksekliği sıklık
  dağılımı eğrileri.** Üçüncü tipp birebir şunu diyor: "Für Teilaufgabe c)
  hilft eine Skizze: **Zeichne die Häufigkeitsverteilung der Schnabelhöhen
  vor und nach der Dürre als zwei Kurven übereinander.** Achte darauf, ob
  sich der Gipfel verschiebt, ob die Kurve schmaler wird oder ob zwei Gipfel
  entstehen." — Yani iki eğri c) şıkkının (3 P) hem yöntemi hem cevabı
  (tepe kayıyor, genişlik aynı kalıyor ⇒ yönlü seçilim). Ayrıca `9,4 mm` →
  `10,1 mm` kayması herhangi bir grafik/ok ile gösterilmesin;
  `1400 → 180 Vogel` popülasyon düşüşü de grafiklenmesin.
  Ek olarak: Lamarck/Darwin karşılaştırma şeması çizilmesin — b) (3 P).
- **Gerekçe:** Material 1 üç ayrı bilgi katmanını (coğrafya, beş türün nişi,
  kuraklık verileri) tek bir uzun düzyazıda topluyor. İlk iki katman
  **görsel bilgidir**: "adalar açık denizle ayrılmış" izolasyon argümanının
  (a şıkkı, Schritt 2) dayanağı, "beş farklı gaga, beş farklı besin" ise
  adaptive Radiation'ın (Schritt 3) tüm kanıtı. Üçüncü katman ise cevap;
  bu yüzden A+B.

---

## Sprachzertifikat (Goethe-C1, Schreiben)

### schreiben/q001 – q005 — hepsi
- **Karar:** **C (beş dosyanın tamamı)**
- **Dosyalar:** q001 Ehrenamt · q002 Homeoffice · q003 Reparieren statt
  wegwerfen · q004 Soziale Medien / Mindestalter · q005 Übersetzungs-Apps
- **Gerekçe:** Beşi de aynı yapıda: bir tartışma bağlamı, `typ: "text"`
  olarak iki karşıt görüş alıntısı ve beş Leitpunkt'lu ~230 kelimelik
  yazılı üretim (Forumsbeitrag / Stellungnahme / Leserbrief). Değerlendirilen
  şey dil üretimi; hiçbir görsel bilgi taşınmıyor ve hiçbir şıkkın girdisi
  görsel değil. Şekil eklemek yalnızca dikkat dağıtır.
- **Not:** Bu dosyalardaki `typ: "text"` materyalleri (forum
  alıntıları) olduğu gibi kalmalı — onlar okuma girdisidir, şekle
  çevrilecek bir şey değil.

---

## Öncelik

A ve A+B kararlarının etki sırası. **Kuşak 1**'deki soruları şu anda şekilsiz
çözmek ya imkânsız ya da ciddi biçimde haksız; aşağı indikçe kazanç "daha
iyi olurdu"ya doğru azalıyor.

### Kuşak 1 — şekilsiz çözülemez (12 soru)
Bunlar önce çizilmeli. Ortak özellik: **verinin ya da kurulumun kendisi
görseldir ve şu anda yalnızca düzyazı olarak var.**

| # | Dosya | Neden |
|---|---|---|
| 1 | `chemie/chemisches-gleichgewicht/q001` | Dokuz ölçüm değeri üç paragrafa dağılmış; eğri ailesi olmadan b) karşılaştırması yapılamaz |
| 2 | `physik/atomphysik/q003` | İki spektrum **veri**; gerilimler onlardan çıkarılacak, düzyazı bunu taşıyamıyor |
| 3 | `physik/atomphysik/q001` | İki spektrumun karşılaştırması sorunun tamamı |
| 4 | `physik/schwingungen/q006` | Bifilar askı + 24 cm'lik 8 gözeli oluk + çıkış deliği: setteki en zor hayal edilen kurulum |
| 5 | `physik/atomphysik/q005` | Tek spektrum; "ani kesilme vs. yumuşak iniş" görsel kavram |
| 6 | `biologie/evolution/q001` | Ada izolasyonu + beş gaga/niş: a) ve Schritt 2–3'ün tüm kanıtı |
| 7 | `chemie/elektrochemie/q001` | Daniell elemanı; iki yarı hücre + tuz köprüsü hiç görselleştirilmemiş |
| 8 | `physik/magnetisches-feld/q005` | Kare katlanmış hızlandırıcı; e2 şıkkı şekilsiz neredeyse okunamaz |
| 9 | `physik/magnetisches-feld/q002` | Üç sektör arka arkaya, ikincisinde iki alan üst üste |
| 10 | `mathematik/analytische-geometrie/q003` | Windschieflik: lise geometrisinin en zor uzamsal kavramı |
| 11 | `chemie/kunststoffe/q001` | Üç numune × üç aşama = dokuz gözlem, üç paragrafta |
| 12 | `mathematik/analysis/q002` | Çatı altındaki dikdörtgenin geometrisi hedef fonksiyonun ön koşulu |

### Kuşak 2 — şekil hatayı önler (14 soru)
Soru şekilsiz çözülebilir ama en sık yapılan hata doğrudan görselleştirmenin
eksikliğinden doğuyor.

`physik/elektrisches-feld/q010` (kaynak bağlı kalıyor: iki panel) ·
`physik/elektrisches-feld/q007` (Fadenstrahlrohr hiç tarif edilmiyor) ·
`physik/wellen/q004` (40 cm perde / 12 cm mesafe ölçeği) ·
`physik/wellen/q003` (ağın düşey dönme ekseni) ·
`physik/magnetisches-feld/q003` (`d` yarıçap değil **çap**) ·
`physik/induktion/q004` (iç içe iki sargı) ·
`physik/induktion/q002` (`b` ilmek boyu < `L` alan boyu) ·
`mathematik/analytische-geometrie/q001` (üç nokta eksenlerde, `g` uzay köşegeni) ·
`mathematik/analytische-geometrie/q002` (iki düzlem bir doğruda kesişir) ·
`mathematik/analysis/q006` (`x` "yükseklik" ama **yatay** eksen) ·
`physik/elektrisches-feld/q004` (levhalar **yatay**) ·
`physik/induktion/q003` (1:16 dişli arada) ·
`physik/quantenphysik/q003` (dört panel: renk / uzaklık / yük işareti) ·
`chemie/kohlenhydrate/q001` (üç tüpün farklı sonucu)

### Kuşak 3 — daha iyi olurdu (28 soru)
Kurulum metinden anlaşılıyor; şekil okuma yükünü azaltıyor ve tutarlılık
sağlıyor. Şablon şekilleri (aşağıya bak) tek elden çizilirse bu kuşak çok
hızlı kapanır.

`elektrisches-feld` q001, q002, q003, q005, q006, q008, q009 ·
`magnetisches-feld` q001, q004 · `induktion` q001, q005 ·
`schwingungen` q001, q002, q003, q004, q005 ·
`wellen` q001, q002, q005, q006 ·
`quantenphysik` q002, q004, q005, q006 · `atomphysik` q002 ·
`analysis` q003, q007, q009

---

## Tekrar eden şablonlar

Bu bölüm çizim ajanları için yol haritasıdır. Aşağıdaki şekiller **tek elden,
tek bir temel SVG'den türetilerek** çizilmeli: hem görsel tutarlılık sağlar
hem de her soruda sıfırdan başlamayı önler. Her şablon için önce **bir
temel dosya** üretilsin, sonra soru başına yalnızca **etiketler ve sayılar**
değiştirilsin.

### Ş1 · Plattenkondensator (kesit) — **9 soruda**
`elektrisches-feld` q001, q003, q004, q005, q006, q008, q009, q010 ·
`magnetisches-feld` q002 (Sektor B)

**Temel:** İki paralel levha, aralarında ölçü oku `d`, levha alanı/kenarı
`A` ya da `a`, dışarıda gerilim kaynağı ve bağlantı telleri.
**Varyantlar:**
- *yatay levhalar* (Millikan tipi: q004, q006, q010) — arada asılı damla
- *düşey levhalar* (sarkaç tipi: q005, q008, q009) — ortadan asılı iplik + kürecik
- *iki panelli önce/sonra* (q010: `d₁` → `d₂`, kaynak bağlı)
- *analoji* (q001: bulut/yer)

**Şablon düzeyinde yasak:** alan çizgileri, `+`/`−` yük işaretleri ve kuvvet
okları **hiçbir varyanta gömülmemeli** — bunlar dosyaya göre serbest/yasak
değişiyor (q001, q005, q009'da yasak). Temel SVG bunları içermesin;
gerekirse soru bazında eklensin. **Şu an hiçbir dosyada gerekmiyor.**

### Ş2 · Fadenstrahlrohr / Kreisbahn im Magnetfeld — **3 soruda**
`magnetisches-feld` q001, q004 (Teil 2) · `elektrisches-feld` q007 (Teil 2)

**Temel:** Küresel cam balon, altta elektron tabancası (közlü katot + delikli
anot, `U_A`), iki yanda Helmholtz bobin çifti, içeride kapalı dairesel demet,
merkezden `r` yarıçap oku, sayfa düzlemine dik `B` (nokta/çarpı işaretleri).
**Şablon düzeyinde yasak:** `F_L` ve `v` vektör okları — üç dosyanın
**hepsinde** "neden daire, neden parabol değil" şıkkı var.

### Ş3 · Vakuum-Photozelle mit Gegenfeld — **4 soruda**
`quantenphysik` q002, q004, q005, q006
**q001'de KESİNLİKLE KULLANILMAYACAK** (a şıkkı bu şemayı çizdiriyor, 5 BE).

**Temel:** Boşaltılmış cam balon, geniş katot + karşısında halka/çubuk anot,
soldan gelen monokromatik ışık oku (`λ` etiketli), dışarıda ayarlanabilir
ters kutuplu gerilim kaynağı (`U_G`) ve seri hassas ampermetre.
**Varyantlar:** tek hücre (q002, q006) · yan yana iki hücre, aynı ışık
kaynağı (q004) · beş LED'li kaynak seçimi (q005).
**Şablon düzeyinde yasak:** `hf` ile `W_A` karşılaştıran enerji çubuk
diyagramı, `E_kin`–`f` doğrusu, ampermetrede okunan bir **değer**.

### Ş4 · Röntgenspektrum I(λ) — **3 soruda**
`atomphysik` q001 (iki panel), q003 (iki panel), q005 (tek panel)

**Temel:** `λ / pm` yatay, `I` düşey eksen. Sürekli Bremsberg: `λ_min`'de
**sıfırdan dik başlangıç**, hızlı yükseliş, yassı maksimum, uzun kuyruk.
Üstüne bindirilmiş çok dar/çok yüksek karakteristik çizgiler.
**Soru başına değişen:** `λ_min`, maksimum konumu, çizgi konumları/sayısı,
eğrinin genel yüksekliği.
- q001: Cu (15,5 / 25 / 154 pm) ve W (15,5 / 25 / 21,0 pm) — iki panel
- q003: Stufe I (62,0 / 95 pm, **çizgi yok**) ve Stufe II (31,0 / 56 / 50 pm)
- q005: Mo (35,4 / 60 / 71 / 63 pm)

**Şablon düzeyinde yasak:** `Bremsstrahlung` / `charakteristische Strahlung`
etiketleri (üç dosyada da bir şık bunları adlandırtıyor), hesaplanan
gerilim değerleri, `λ_min = hc/(eU)` gösterimi.

### Ş5 · Röntgenröhre (Aufbau) — **1 soruda serbest, 1 soruda yasak**
`atomphysik` q002'de **serbest** · `atomphysik` q004'te **YASAK**
(a şıkkı, 4 BE). Şablon yapılacaksa bu ayrım koda not düşülsün.

### Ş6 · Doppelspalt / Gitter + Schirm — **4 soruda**
`wellen` q001, q002 (Doppelspalt) · q003, q004 (Gitter)

**Temel:** Solda lazer, ortada yarık düzlemi, sağda perde; `d` (yarık
merkezleri arası) ve `e` (yarık–perde) ölçü okları; perdede ana maksimum ve
mertebe işaretleri.
**Ölçek notu:** `d` (mm ya da µm) ile `e` (m) aynı ölçeğe sığmaz;
`d` abartılacak ve şekle "nicht maßstäblich" notu konacak. **İstisna:**
q004'te ölçek **kasten doğru** olmalı (40 cm perde / 12 cm mesafe) — sorunun
tüm mesajı o orandır.
**Şablon düzeyinde yasak:** yarıklardan perdeye giden iki ışın, yol farkı
`Δs` üçgeni, açı `α` üçgeni — dört dosyanın hepsinde bir şık bu geometriyi
kurdurtuyor.

### Ş7 · Schwingkreis (Schaltbild) — **4 soruda**
`schwingungen` q001 (iki devre), q002, q004 · `induktion` q004 (bobin çifti)

**Temel:** Doğru gerilim kaynağı `U₀`, iki konumlu değiştirme anahtarı,
kondansatör `C`, bobin `L`; `t = 0`'da anahtarın bobin koluna geçtiği ok.
**Varyantlar:** ek seri direnç `R` (q001-B) · ön direnç (q004).
**Şablon düzeyinde yasak:** `t`-`U`, `t`-`I`, `t`-`E` diyagramlarının
**hiçbiri** — dört dosyanın hepsinde grafik bir şıkkın cevabı. Ayrıca
q004'te Schwingkreis ↔ Federpendel analoji şekli (d şıkkı, 4 P).

### Ş8 · Pendel im Feld (iplik + kürecik) — **4 soruda**
`elektrisches-feld` q005, q008, q009 · `schwingungen` q005 (Elektrohängebahn)

**Temel:** Askı noktası, uzunluk `ℓ` (kırık çizgiyle kısaltılmış, değeri
yazılı), ucunda kütle, denge konumu kesikli dikey çizgi, yatay sapma `Δx`.
**Ölçek notu:** `ℓ` metre, `Δx` santimetre — sapma bilinçli olarak
abartılacak, kenara not düşülecek.
**Şablon düzeyinde yasak:** kuvvet üçgeni / paralelkenarı ve açı `α` —
dört dosyanın hepsinde bir tipp ya da şık bunu öğrenciye bırakıyor
(q008 tipp'i birebir "Zeichne das Kräfteparallelogramm").

### Ş9 · Rotierende Spule im Magnetfeld (Generator) — **2 soruda**
`induktion` q003 (Handkurbel), q005 (Wasserturbine)

**Temel:** N/S kutupları arasında dönen dikdörtgen bobin (`N`, `A`, `B`),
dönme ekseni alan çizgilerine dik, mil ve tahrik.
**Varyantlar:** el kolu + `1:16` dişli (q003) · su türbini (q005, bobin
`t = 0` konumunda).
**Şablon düzeyinde yasak:** `Φ(t)` ve `U(t)` diyagramları (q005 b, 4 BE).

### Ş10 · Leiterschleife im begrenzten Feldbereich — **2 soruda**
`induktion` q001 (serbest düşüş), q002 (raylı kızak)

**Temel:** Keskin sınırlı alan bölgesi (çarpı/nokta işaretleriyle `B`),
dikdörtgen ilmek sınırı kesecek ya da kesmeye hazır konumda, kenar
uzunlukları ölçülü.
**Şablon düzeyinde yasak:** **üç anlık görüntü dizisi** (dışarıda / yarı
içeride / tamamen içeride) — iki dosyada da bir tipp bunu öğrenciye
bırakıyor; ayrıca indüksiyon akımı yönü ve `U(t)` sinyali.

### Ş11 · Kurvenschar / Graph — **hiçbir soruda çizilmeyecek**
`analysis` q001, q004, q005, q008, q010 · `stochastik` q003, q004, q006
Bu sekiz dosyada "doğal" şekil grafiğin kendisi ve grafik cevaptır.
Şablon üretilmesin; boş koordinat sistemi bile eklenmesin.

---

## Dikkat

İncelerken fark edilen sorunlar. **Hiçbiri düzeltilmedi**, yalnız bildiriliyor.

### 1. `schwingungen/q006` — var olmayan bir çizime atıf
İlk tipp birebir şöyle: *"Für a) **ergänze die Skizze** zu einem
rechtwinkligen Dreieck: eine Kathete ist die halbe Rinnenlänge, die
Hypotenuse die Pendellänge."* — "**die** Skizze"yi tamamla diyor, yani
öğrencide zaten bir çizim olduğunu varsayıyor. Dosyada `material: []`.
Öğrenci hangi çizimi tamamlayacağını bilemez. Bu envanterin bu soruya A
vermesinin ek bir gerekçesi; ama tipp'in metni de gözden geçirilmeli
("ergänze die Skizze" → "fertige eine Skizze an" gibi).

### 2. `elektrisches-feld/q003` — konu sınıflandırması şüpheli
Dosya `themenbereich_slug: "elektrisches-feld"` altında, ama c) ve d)
şıkları tamamen **manyetik** alan konusu (`B(r) = μ₀I/(2πr)`, düz iletken,
`1/√(ε₀μ₀)`). Soru fiilen iki konuyu birleştiriyor. Aynı biçimde
`elektrisches-feld/q007` Teil 2 tamamen **Fadenstrahlrohr**, yani
`magnetisches-feld` konusu. Kasıtlıysa sorun yok; değilse dizin yeri
gözden geçirilmeli.

### 3. `elektrisches-feld/q002` — d) şıkkı a)–c) ile kopuk
a)–c) `K₁` ve `K₂`'nin **her ikisi de** `+65 nC` iken ölçülen kuvvet
serisini işliyor; d) şıkkı ise küreleri boşaltıp `+5,0·10⁻⁸ C` ve
`−5,0·10⁻⁸ C` ile yeniden yüklüyor ve kuvvet ölçeri kaldırıyor. Fizik
olarak tutarlı ama tek soruda iki ayrı düzenek var — bu yüzden envanter
iki ayrı şekil öneriyor. Bilinçli bir tasarımsa sorun değil.

### 4. `quantenphysik/q004` — tablo iki kez veriliyor
`aufgabenstellung` içinde `Kalzium 2,70 / Silber 4,70` tablosu LaTeX
`array` olarak gömülü **ve** aynı tablo ayrıca `material[0]` (`typ:
"tabelle"`) olarak da duruyor. Aynı bilgi sayfada iki kez render ediliyor.
Aynı durum `stochastik/q004` (Φ tablosu), `stochastik/q005`,
`analysis/…` gibi dosyalarda **yok** — yalnız q004'e özgü görünüyor.
Ayrıca `stochastik/q003` ve `q006` aynı sigma katsayıları tablosunu
kullanıyor; o tekrar normal (iki ayrı soru).

### 5. Renk paleti kimya için dar
`kohlenhydrate/q001` (Fehling-Probe) gözlemleri **renk** üzerine kurulu:
`tiefblau → grün → gelb → orangerot` + `ziegelroter Niederschlag`.
İzinli tokenlerde (`tinte / papier / akzent / warnung`) **mavi ve yeşil
yok**. Bu şekil literal renklerle çizilemez; envanter tarama deseni +
Almanca renk adı yazısı öneriyor. Aynı sınır ileride başka kimya/biyoloji
sorularında da çıkacak — palete bir `--color-kalt` (mavi) eklenip
eklenmeyeceği ürün kararı olarak gündeme alınmalı.

### 6. `atomphysik` — sayılar doğru, teyit edildi
Şüpheli görünmesin diye not: üç spektrumun tüm sayıları kontrol edildi ve
**tutarlı**. `λ_min = hc/(eU)`: 80 kV → 15,5 pm ✓ · 20 kV → 62,0 pm ✓ ·
40 kV → 31,0 pm ✓ · 35 kV → 35,4 pm ✓. Karakteristik çizgiler gerçek
değerlerle uyumlu: Cu Kα ≈ 154 pm ✓ · W Kα ≈ 21 pm ✓ · Ag Kα/Kβ ≈ 56/50 pm ✓ ·
Mo Kα/Kβ ≈ 71/63 pm ✓. `q003`'ün kurgusu da tutarlı: Stufe I'in 20 kV'si
gümüşün ≈ 25 keV iç kabuk eşiğinin altında, bu yüzden çizgi yok ✓.

### 7. `stochastik/q002` — "näherungsweise binomialverteilt" gerekçesi eksik veri
a) şıkkı `X`'in yaklaşık binom dağıldığını gerekçelendirmeyi istiyor
(çekilişin geri koymasız olması nedeniyle "näherungsweise"). Ama üretim
partisinin büyüklüğü verilmiyor, yalnız `n = 20` örneklem var. Öğrenci
"çok büyük parti" varsayımını metinden çıkaramıyor. Küçük bir eksik;
`Erfahrungsgemäß` ifadesi bunu üstü kapalı taşıyor sayılabilir.

### 8. `wellen/q002` — ölçüm serisi tam doğrusal değil
`a_n = 1,6 / 3,1 / 4,6 / 6,2 cm`. `a_n/n` oranları: 1,60 / 1,55 / 1,533 /
1,55 → λ değerleri ≈ 640 / 620 / 613 / 620 nm, ortalama ≈ 623 nm → "Rot"
(585–650 aralığı) ✓. Kasıtlı ölçüm saçılması gibi duruyor ve b) şıkkının
cevabı değişmiyor; sorun yok, yalnız üçüncü tipp'in ("ob ein Wert aus der
Reihe fällt") ilk değeri kastettiği not edilsin.
