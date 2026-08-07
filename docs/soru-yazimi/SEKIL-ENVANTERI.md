# Şekil envanteri

78 soru dosyasının tamamı tek tek okundu. Hiçbiri atlanmadı, hiçbiri değiştirilmedi.
Bu dosya salt karar listesidir — çizim içermez.

## Kategoriler

- **A — ÇİZİLMELİ.** Şekil sorunun kurulumu. Öğrenci onu okumadan başlayamaz veya
  kurulumu kafasında yeniden inşa etmek zorunda kalır.
- **A?** — Kararsız, A'ya yakın. Şekil işi belirgin kolaylaştırır ama soru şekilsiz de
  çözülebilir.
- **B — ÇİZİLMEMELİ.** Şekli çizmek sorulan şeyi hediye eder.
- **B?** — Kararsız, B'ye yakın.
- **C — GEREKMEZ.** Metin kendi kendine yeter.
- **YAPILDI** — SVG zaten mevcut.

## Özet

| | A | A? | B | B? | C | YAPILDI | Toplam |
|---|---|---|---|---|---|---|---|
| Physik | 7 | 6 | 15 | 1 | 14 | – | **43** |
| Mathematik | – | 1 | 5 | – | 14 | – | **20** |
| Chemie | 1 | 1 | 2 | – | 1 | – | **5** |
| Biologie | – | – | 1 | – | – | 4 | **5** |
| Sprachzertifikat | – | – | – | – | 5 | – | **5** |
| **Toplam** | **8** | **8** | **23** | **1** | **34** | **4** | **78** |

Deutsch ve Englisch altında hiç soru dosyası yok (registry'de tanımlı, içerik boş).
Sprachzertifikat'ta yalnızca `goethe-c1/schreiben` dolu.

**Tablolar şekil sayılmadı.** `typ: "tabelle"` olan 15 material LaTeX `\begin{array}` ile
yazılmış ve düzgün render ediliyor; hiçbirine dokunulmayacak. Bunları taşıyan sorular
bu envanterde C olarak geçiyor ve satırlarında ayrıca not düşüldü.

---

# Physik

## elektrisches-feld

### q001.json — Aschewolke über der Ebene
- **Karar:** B
- **Neden çizilmemeli:** a) şıkkı doğrudan "Beschreiben Sie die Ladungsverteilung und den
  Verlauf der elektrischen Feldlinien" diyor. Levhalar arası alan çizgilerini çizmek
  a)'nın tam cevabıdır. Geriye kalan geometri (bulut, yer, aradaki $d$) zaten tek cümlede
  tarif edilmiş; alan çizgisiz bir şekil hiçbir şey eklemez.
- **Not:** b)–e) saf hesap. Tüm sayılar metinde.

### q002.json — Coulombkraft zwischen zwei Messingkugeln
- **Karar:** C
- **Gerekçe:** Material 1 bir ölçüm tablosu (dokunulmayacak). d) şıkkının geometrisi tek
  boyutlu: $K_1$ solda, $K_2$ sağda, aralarında 21 cm, $P$ noktası $K_1$'den 6,0 cm sağda.
  Metin tamamen belirsizlik bırakmıyor.
- **Uyarı:** Tipp 3 "Zeichne für beide Einzelfelder einen Pfeil ein" diyor. Alan
  vektörlerini gösteren bir şekil d)'yi hediye eder. Çizilecekse yalnızca çıplak eksen
  (iki küre + iki mesafe), ok yok.

### q003.json — Feldkonstanten ε₀ und μ₀
- **Karar:** C
- **Gerekçe:** Saf hesap + tablo. Şekil süs olur.

### q004.json — Elementarladung aus fünf Öltröpfchen
- **Karar:** C
- **Gerekçe:** Millikan ölçüm protokolü tablo halinde; hepsi sayısal değerlendirme.

### q005.json — Influenz, Kräftegleichgewicht und LED-Standlicht
- **Karar:** B
- **Neden çizilmemeli:** b) şıkkı açıkça "**skizzieren** Sie die Ladungsverteilung" diyor.
  Influenz yük dağılımını çizmek b)'nin puanını verir. c)'deki sarkaç geometrisi de
  Kräftebild olarak çizilirse aynı sorun.

### q006.json — Schwebendes Öltröpfchen
- **Karar:** C
- **Gerekçe:** Metin (levhalar yatay, $d$, $U$, $r$, $\rho$) tam. Saf hesap.
- **Uyarı:** Tipp 1 "Zeichne ein Kräftebild des schwebenden Tröpfchens" diyor — kuvvet
  okları çizilemez. Kuvvetsiz bir kondansatör kesiti de bir şey eklemiyor.

### q007.json — Millikan-Versuch und Fadenstrahlrohr
- **Karar:** B
- **Neden çizilmemeli:** a) şıkkı "**Skizzieren** Sie die wirkenden Kräfte und berechnen
  Sie $Q$" diyor. Teil 2'deki Fadenstrahlrohr d)'de yalnızca formül türetimi olarak
  kullanılıyor, geometri gerektirmiyor.

### q008.json — Geladenes Pendel im Plattenkondensator, Messreihe
- **Karar:** A?
- **Ne çizilmeli:** Yalnızca düzenek: iki kare levha (kenar $a$, aralık $d$), tam ortada
  asılı küre, $\ell$ uzunluğunda iplik, negatif levhaya doğru $\Delta x$ sapma. Etiketler:
  $a$, $d$, $\ell$, $\Delta x$, $U$, levha işaretleri.
- **Ne çizilmemeli:** Kuvvet oku, Kräfteparallelogramm, açı üçgeni — Tipp 1 bunu öğrenciye
  görev olarak veriyor.
- **Gerekçe:** $\ell = 1{,}5$ m'lik iplik ile $d = 8$ cm'lik levha aralığının orantısı
  metinden kurulamıyor; askı noktasının nerede olduğu hiç söylenmiyor. Kurulumu
  görselleştirmek b) ve c)'yi kolaylaştırır, cevap vermez.
- **Sayılar:** $a = 40$ cm, $d = 8{,}0$ cm, $\ell = 1{,}5$ m, $\Delta x = 2{,}5$ cm,
  $U = 3{,}0$ kV, $m = 0{,}60$ g. Material 1 tablosu (dokunulmayacak).

### q009.json — Feldlinien, Kräfte und Dielektrikum
- **Karar:** B — bu dosyadaki en net B.
- **Neden çizilmemeli:** a) "**Skizzieren** Sie das Feldlinienbild", b) "**Skizzieren** Sie
  ... die auf die geladene Kugel wirkenden Kräfte". İki şıkkın da tamamı çizim. Teil 2
  (Dielektrikum) saf hesap + tablo.

### q010.json — Latexkügelchen, veränderter Plattenabstand
- **Karar:** C
- **Gerekçe:** Saf hesap. Yatay levhalar, tek bir kürecik.

## magnetisches-feld

### q001.json — Spezifische Ladung im Fadenstrahlrohr
- **Karar:** A
- **Ne çizilmeli:** Fadenstrahlrohr kesiti: Helmholtz bobin çifti, ortada küresel tüp,
  ivmelendirme elektrotu, elektron demetinin $r$ yarıçaplı kapalı çemberi, $B$ alanının
  yönü (kâğıt düzlemine dik sembol). Etiketler: $U_B$, $B$, $r$.
- **Ne çizilmemeli:** $\vec{F}_L$ ve $\vec{v}$ vektörleri — a) şıkkı tam olarak bu ikisinin
  ilişkisini sorup dairesel yörüngeyi gerekçelendirmeyi istiyor.
- **Gerekçe:** Material alanı boş; "Helmholtz-Spulenpaar" ve "senkrecht eintreten" ifadeleri
  düzeneği tanımayan öğrenci için soyut kalıyor.
- **Sayılar:** $U_B = 250$ V, $B = 1{,}15$ mT, $r = 4{,}6$ cm.

### q002.json — Heliumkerne im Geschwindigkeitsfilter
- **Karar:** A?
- **Ne çizilmeli:** Üç sektörlü blok şeması, soldan sağa demet yolu: Sektor A (ivmelendirme
  aralığı, $U_A$), Sektor B (üst üste bindirilmiş $\vec{E}$ ve $\vec{B}$, levha aralığı
  $d = 4{,}0$ cm), Sektor C ($r = 3{,}5$ m yarıçaplı çeyrek/yarım daire ile Prüfkammer'e
  dönüş).
- **Ne çizilmemeli:** Sektor B'deki kondansatörün kutupları ve kuvvet okları — d) şıkkı
  tam olarak "wie der Plattenkondensator gepolt sein muss" diye soruyor.
- **Gerekçe:** Üç sektörün ardışıklığı ve hangi alanın nerede olduğu metinden takip
  edilebiliyor ama zahmetli; şema kurulumu görünür kılar, hiçbir şıkkı çözmez.
- **Sayılar:** $B_B = 3{,}0$ mT, $d = 4{,}0$ cm, $r = 3{,}5$ m, $v = 2{,}5\cdot10^6$ m/s.

### q003.json — Geschwindigkeitsfilter und Massenbestimmung
- **Karar:** A?
- **Ne çizilmeli:** q002 ile aynı yapı: Abschnitt A (ivmelendirme, $U = 4{,}0$ kV),
  Abschnitt B (çapraz alanlar, blende $S_2$), Abschnitt C ($B_1$ içinde yarım daire, çap
  $d$ kadar uzağa düşen çarpma noktası, Werkstück).
- **Ne çizilmemeli:** $v > v_0$ ve $v < v_0$ için sapmış yörüngeler — b) şıkkı bunların
  hareketini tarif etmeyi istiyor.
- **Gerekçe:** "Halbkreis, Auftreffpunkt im Abstand eines Bahndurchmessers von der Blende"
  ilişkisi c)'nin dayanağı; şema bunu görünür kılar ama $r = d/2$ adımını yapmaz.
- **Sayılar:** $U = 4{,}0$ kV, $E_0 = 2{,}0\cdot10^3$ V/m, $B_0 = 10$ mT, $B_1 = 0{,}40$ T,
  $d = 0{,}20$ m.

### q004.json — Kathodenstrahl und Fadenstrahlrohr, Messreihe
- **Karar:** C
- **Gerekçe:** Material 1 ölçüm tablosu (dokunulmayacak). Tüm şıklar formül türetimi ve
  tablo değerlendirmesi; q001'in düzeneği zaten orada çizilecekse tekrarına gerek yok.

### q005.json — Protonen in einer gefalteten Beschleunigerstrecke
- **Karar:** A
- **Ne çizilmeli:** Kare şeklinde katlanmış hızlandırıcı: dört düz ivmelendirme parçası ve
  aralarında $r = 60$ m yarıçaplı, $90^\circ$'lik dört çeyrek daire; sapma mıknatısları
  sıralı numaralandırılmış (1, 2, 3, …), her düz parçada aynı $U$ etiketi, kapalı çevrim.
- **Ne çizilmemeli:** Manyetik alan çizgilerinin yönü / kâğıt düzlemine giriş-çıkış
  sembolleri — b) şıkkı "wie die Feldlinien gerichtet sein müssen" diye soruyor.
- **Gerekçe:** e2) şıkkı "zwölfter Umlenkmagnet" diyor; on ikinci mıknatısa kadar kaç kez
  ivmelendiğini saymak ancak düzenin şekli görülünce yapılabilir. Şu haliyle bu sayım
  tamamen metinden kurgulanmak zorunda — envanterdeki en somut "şekilsiz zor" fizik sorusu.
- **Sayılar:** $r = 60$ m, $v_1 = 5{,}0\cdot10^6$ m/s, $U \approx 131$ kV.

## induktion

### q001.json — Leiterschleife im freien Fall
- **Karar:** B?
- **Neden çizilmemeli:** Tipp 1 doğrudan "Zeichne die Schleife in drei Momentaufnahmen:
  vor dem Eintauchen, halb im Feld, ganz im Feld. In welcher Phase ändert sich die vom Feld
  durchsetzte Fläche?" diyor — bu üç kareli çizim a) ve c)'nin düşünce adımının kendisi.
- **A? tarafı:** Tek bir anlık görüntü (alan bölgesinin üst sınırı, ilmek yarı içeride,
  $b$ ve $h$ etiketli) ipucunu vermezdi. Ama üç kareli seriyle sınır çok ince; B'de kalsın.

### q002.json — Geschwindigkeitsmessung mit einer Leiterschleife
- **Karar:** A?
- **Ne çizilmeli:** Tek bir anlık görüntü: yatay ray, üzerinde Messschlitten, ona dik
  bağlı dikdörtgen ilmek ($a$ yüksek, $b$ uzun), keskin sınırlı alan bölgesi (uzunluk $L$,
  alan çizgileri ilmek düzlemine dik), Schleifkontakt üzerinden voltmetre.
- **Ne çizilmemeli:** İlmeğin üç farklı konumdaki hâli — d) şıkkı tam olarak "in welchen
  Abschnitten schlägt das Messgerät aus" diye soruyor, Tipp 3 de üç anlık görüntüyü öneriyor.
- **Gerekçe:** $a$ (yükseklik) ile $b$ (hareket yönündeki uzunluk) ayrımı b)'nin can
  alıcı noktası ($|U_{ind}| = B\,a\,v$, $b$ değil) ve bu ayrım yalnızca metinden zor
  yakalanıyor.
- **Sayılar:** $a = 4{,}0$ cm, $b = 10$ cm, $L = 15$ cm, $B = 0{,}35$ T, $v = 45$ cm/s.
  İkinci deney için Material 1 tablosu (dokunulmayacak).

### q003.json — Handkurbel-Ladegerät
- **Karar:** C
- **Gerekçe:** Saf enerji/güç hesabı. Dişli oranı, sarım sayısı, alan — hepsi skaler.

### q004.json — Zwei ineinander gewickelte Spulen
- **Karar:** B
- **Neden çizilmemeli:** c) "berechnen Sie die Induktionsspannung in den vier
  Zeitabschnitten und **skizzieren** Sie den Verlauf von $U_{ind}(t)$". Grafik doğrudan
  cevap. Tipp 3 ayrıca "Achte darauf, dass der Betrag in Abschnitt 3 kleiner ausfällt als
  in Abschnitt 1" diyerek grafiğin şeklini öğrenciden istiyor.
- **Not:** Erregerstrom tablosu material'de zaten var (dokunulmayacak). Bobin düzeneği
  metinde yeterince tarif edilmiş.

### q005.json — Kleine Wasserturbine als Generator
- **Karar:** B
- **Neden çizilmemeli:** b) "**Skizzieren** Sie $\Phi(t)$ und $U(t)$ für drei volle
  Umdrehungen untereinander in zwei Diagrammen mit gemeinsamer Zeitachse. Beschriften Sie
  beide Achsen." (4 BE) — şekli çizmek bu şıkkın tamamıdır. c) de aynı grafiğin
  yorumundan geliyor.

## atomphysik

### q001.json — Anodenwechsel Kupfer → Wolfram
- **Karar:** A — öncelik listesinin üst sırasında.
- **Ne çizilmeli:** İki röntgen spektrumu, ortak eksenlerde veya üst üste iki panelde:
  yatay eksen $\lambda$ (pm), dikey eksen Intensität. Kupfer eğrisi: $15{,}5$ pm'de dik
  başlangıç, ~$25$ pm'de tepe, $154$ pm'de ince yüksek çizgi + yanında zayıfı. Wolfram
  eğrisi: aynı $15{,}5$ pm başlangıç, aynı biçim ama belirgin daha yüksek sürekli zemin,
  $154$ pm'deki çizgi yok, $21{,}0$ pm'de yeni ince yüksek çizgi + daha kısa dalga boyunda
  zayıfı.
- **Gerekçe:** Material 1 "typ: text" olarak düzyazıyla anlatılmış bir *ölçüm grafiği*.
  Abitur formatında bu bir Abbildung'dur. b) şıkkı iki spektrumu karşılaştırmayı istiyor —
  karşılaştırma işlemi görsel olmadan sözel tarifin tekrarına dönüşüyor. Şekil hiçbir cevabı
  vermiyor: tüm sayısal değerler zaten metinde ve a)–d) hesap/gerekçe istiyor.
- **Sayılar:** $\lambda_{\min} = 15{,}5$ pm (her ikisi), Cu çizgisi $154$ pm, W çizgisi
  $21{,}0$ pm, sürekli tepe ~$25$ pm, $U = 80$ kV.

### q002.json — Elektronengeschwindigkeit und Grenzfrequenz
- **Karar:** C
- **Gerekçe:** Material yok, saf hesap. Röhre'nin yapısı q004'te ayrıca soruluyor.

### q003.json — Zwei Betriebsspannungen einer Röntgenanlage
- **Karar:** A — öncelik listesinin üst sırasında.
- **Ne çizilmeli:** İki spektrum, ortak $\lambda$ ekseni. Stufe I: $62{,}0$ pm'de başlangıç,
  ~$95$ pm'de geniş tepe, uzun kuyruk, keskin çizgi **yok**. Stufe II: $31{,}0$ pm'de
  başlangıç, aynı biçim, belirgin daha yüksek, üzerinde $56$ pm ve $50$ pm'de iki ince
  yüksek çizgi.
- **Gerekçe:** a) şıkkı "aus den beiden **abgelesenen** Grenzwellenlängen" diyor — yani
  soru öğrencinin bir grafikten okuma yaptığını varsayıyor, ama okunacak grafik yok.
  Tablowerk notu ($\approx 25$ keV) metin olarak kalabilir.
- **Sayılar:** Stufe I $\lambda_{\min} = 62{,}0$ pm, tepe ~$95$ pm; Stufe II
  $\lambda_{\min} = 31{,}0$ pm, çizgiler $56$ pm ve $50$ pm. Anot: Silber.

### q004.json — Aufbau und Energiebilanz einer Röntgenröhre
- **Karar:** B
- **Neden çizilmemeli:** a) "**Skizzieren** Sie den prinzipiellen Aufbau einer
  Röntgenröhre. Beschriften Sie darin den evakuierten Kolben, die Glühkathode, die Anode,
  die Heizspannung $U_H$ und die Beschleunigungsspannung $U_B$ und achten Sie auf deren
  richtige Polung." (4 BE) — istenen çizimin tam kendisi. Çözüm adımı 1 de zaten "Die
  Skizze zeigt …" diye başlıyor, yani çizim beklentisi çözümde tarif ediliyor.

### q005.json — Bremsstrahlung und charakteristische Linien
- **Karar:** A — ama önce içerik düzeltmesi gerekiyor (bkz. Dikkat #1).
- **Ne çizilmeli:** Molibden spektrumu: $35{,}4$ pm'de keskin başlangıç, dik yükseliş,
  ~$60$ pm'de yayvan tepe, yavaş düşüş; üzerine bindirilmiş iki ince yüksek çizgi $71$ pm
  ve $63$ pm'de.
- **Gerekçe:** Material 1 yine bir grafiğin düzyazı tarifi. a) şıkkı "Beschreiben Sie den
  Verlauf des Spektrums" diyor — grafik konulduğunda soru doğru biçimine kavuşur.
- **Uyarı:** Şekil eklenirse Material 1'in düzyazı tarifi kısaltılmalı, yoksa a) şıkkı
  hem soruda hem materyalde cevaplanmış olur. Şu anda zaten öyle (Dikkat #1).
- **Sayılar:** $U_B = 35$ kV, $\lambda_{\min} = 35{,}4$ pm, tepe ~$60$ pm, çizgiler
  $71$ pm ve $63$ pm.

## quantenphysik

### q001.json — Vom Versuchsaufbau zur Einstein-Geraden
- **Karar:** B — bu bölümün en net B'si.
- **Neden çizilmemeli:** a) "**Skizzieren** Sie eine Versuchsanordnung …" (5 BE) ve
  b) "**Skizzieren** Sie qualitativ den Graphen …" (5 BE). 20 puanlık sorunun 10 puanı
  doğrudan çizim. Üstelik Tipp 1 hangi parçaların gerektiğini sayarak yardım ediyor,
  çözüm adımları da "Beschreibung der zu zeichnenden Skizze:" diye başlıyor. c) şıkkı da
  b)'deki grafiğin üzerine ikinci bir doğru eklemeyi istiyor.

### q002.json — Grenzwellenlänge an einer Bariumkathode
- **Karar:** C
- **Gerekçe:** Saf hesap, material yok.

### q003.json — Hallwachs-Versuch an der Zinkplatte
- **Karar:** C
- **Gerekçe:** Düzenek iki cümlede tam tarif edilmiş (çinko levha + elektroskop + lamba,
  üç varyant: filtre / mesafe / pozitif yük). Şekil hoş olurdu ama hiçbir şıkkın önkoşulu
  değil; a)–d) tamamı kavramsal açıklama.

### q004.json — Kalzium und Silber im Vergleich
- **Karar:** C
- **Gerekçe:** Tablo + saf hesap. (Tablodaki $W_A$ değeri için bkz. Dikkat #4.)

### q005.json — Messreihe zur Gegenspannung
- **Karar:** B
- **Neden çizilmemeli:** b) "**Stellen Sie die Messwerte in einem $f$-$E_{kin}$-Diagramm
  dar** und erläutern Sie, welche physikalische Bedeutung die Steigung der
  Ausgleichsgeraden sowie ihre beiden Achsenschnittpunkte haben." (5 BE) — grafiği çizmek
  b)'nin kendisi, c) ve d) de o grafiğin eğim/kesişimlerinden çıkıyor. Ölçüm tablosu
  material'de zaten var, o yeterli.

### q006.json — Plancksches Wirkungsquantum, zwei Wellenlängen
- **Karar:** C
- **Gerekçe:** İki ölçüm, iki denklem, çıkarma. Şekil süs olur.

## schwingungen

### q001.json — Zwei Schwingkreise am Oszilloskop
- **Karar:** B
- **Neden çizilmemeli:** c) "**Vergleichen Sie die beiden am Oszilloskop sichtbaren
  $t$-$U$-Verläufe** von A und B" — iki osilogramı çizmek (sönümsüz sinüs vs. üstel zarflı
  sönümlü sinüs) c)'nin cevabıdır. Devre şemasının kendisi zararsız olurdu ama L, C, R ve
  anahtardan ibaret; metin zaten "baugleiche Schwingkreise, zusätzlicher $12\ \Omega$"
  diyor. Şekil eklemenin tek anlamlı yolu osilogramlar ve o yol kapalı.

### q002.json — Energiependeln im ungedämpften Schwingkreis
- **Karar:** B
- **Neden çizilmemeli:** c) "**Skizzieren** Sie in einem gemeinsamen $t$-$E$-Diagramm den
  zeitlichen Verlauf der Energie …". d) şıkkı ("iki eğrinin kesiştiği anlar") tamamen o
  çizimin okunmasıyla çözülüyor — grafiği vermek c) ve d)'yi birlikte hediye eder.

### q003.json — Fallbeschleunigung aus einer Fadenpendel-Messreihe
- **Karar:** B
- **Neden çizilmemeli:** a) "…**stellen Sie die Messreihe in einem Diagramm dar**, in dem
  $T^2$ über $\ell$ aufgetragen ist" — hatta ölçek bile veriliyor (1 cm ≙ 0,20 m /
  1 cm ≙ 1,0 s²). c) "**Zeichnen** Sie in Ihr Diagramm eine Ursprungsgerade ein, ermitteln
  Sie deren Steigung". Bu bir çizim sorusu; grafiği vermek üç şıkkı birden siler.

### q004.json — Langsamer Schwingkreis und Analogie zum Federpendel
- **Karar:** B
- **Neden çizilmemeli:** c) "…**skizzieren** Sie den zugehörigen Verlauf für eine volle
  Periode in ein beschriftetes $t$-$I$-Diagramm". Tipp 3 sinüs mü kosinüs mü sorusunu
  öğrenciye bırakıyor; grafiği çizmek bu kararı verir.

### q005.json — Pendelnde Last an einer Elektrohängebahn
- **Karar:** C
- **Gerekçe:** Metin yeterli: laufwagen + çelik halat + yük, $T$, $\ell$, $\alpha_{\max}$.
  d)'deki dik üçgeni Tipp 3 zaten sözel olarak tarif ediyor; çizmek o adımı verir. Sarkaç
  düzeneğini çizmenin ekstra bir faydası yok.

### q006.json — Rieselndes Pendel
- **Karar:** A
- **Ne çizilmeli:** Yandan görünüş düzenek: tavana bifilar (iki iplikle) asılı silindirik
  Streubehälter, ağırlık merkezine kadar $\ell = 1{,}50$ m, altında $24$ cm uzunluğunda
  ve sekiz eşit bölmeye ayrılmış yassı Auffangrinne; boşaltma deliği durgun konumda tam
  rinne ortasında; sallanma düzlemi rinne uzunluğu boyunca. Bölme sınırları ve toplam
  uzunluk etiketli.
- **Ne çizilmemeli:** (1) Bölmelerdeki tuz seviyeleri — e) şıkkı bunu istiyor
  ("**Skizzieren** Sie außerdem qualitativ den Füllstand"). (2) Sapma açısı üçgeni —
  Tipp 1 bunu öğrenciye görev veriyor.
- **Gerekçe:** a) şıkkının çözümü "rinne uzunluğunun yarısı = yatay sapma" ilişkisine
  dayanıyor ve bu, sekiz bölmeli oluk ile silindirin konumu görülmeden metinden çıkarılması
  zor. Ayrıca Tipp 1 "ergänze **die Skizze** zu einem rechtwinkligen Dreieck" diyor —
  var olmayan bir şekle atıf yapıyor (bkz. Dikkat #2).
- **Sayılar:** $\ell = 1{,}50$ m, rinne $24$ cm / 8 bölme (bölme genişliği 3 cm),
  boş kap $250$ g, tuz $80$ cm³ × $2{,}2$ g/cm³.

## wellen

### q001.json — Wellenlängenbestimmung am Doppelspalt
- **Karar:** A
- **Ne çizilmeli:** Klasik Doppelspalt düzeneği, yandan/üstten: lazer, çift yarık
  (yarık merkez aralığı $d$), $e$ mesafesinde ekran, ekranda merkezi maksimum ve ondan
  $a$ kadar uzakta 5. mertebe maksimum işaretli. Etiketler: $d$, $e$, $a$, sapma açısı
  $\alpha$ (yalnızca ekran tarafındaki büyük üçgen).
- **Ne çizilmemeli:** Yarıklardan çıkan iki ışının Gangunterschied üçgeni ($\Delta s$
  ile $d$'nin oluşturduğu küçük dik üçgen) — Tipp 1 ve Tipp 2 tam olarak bunu öğrenciye
  çizdiriyor ve a)'nın çözüm adımı bu.
- **Gerekçe:** $d = 0{,}25$ mm ile $e = 3{,}20$ m arasındaki ölçek farkı ve "5. Ordnung"un
  ekranda nereye düştüğü metinden kurulması gereken bir görüntü; kurulumun kendisi
  hiçbir şıkkın cevabı değil.
- **Sayılar:** $d = 0{,}25$ mm, $e = 3{,}20$ m, $a = 4{,}05$ cm, $k = 5$.
  (Şekil ölçekli olmamalı, aksi hâlde b)'deki açı tahmini görsel olarak yapılabilir.)

### q002.json — Messreihe am Doppelspalt
- **Karar:** C
- **Gerekçe:** Geometri q001 ile birebir aynı; iki material tablosu da mevcut ve yeterli.
  q001'e bir düzenek şekli konursa bu soruya ayrıca gerek kalmaz.

### q003.json — Grüner Laser am Gitter
- **Karar:** A?
- **Ne çizilmeli:** Gitter düzeneği üstten görünüş: paralel demet, gitter ($d$), $e$
  mesafesinde paralel ekran, ekranda yatay nokta dizisi; **yalnızca** $\pm 3$. mertebenin
  simetrikliği ve aradaki mesafenin ne demek olduğu gösterilmiş.
- **Ne çizilmemeli:** Döndürülmüş gitterin izdüşüm çizimi (etkin yarık aralığının
  $d\cos\varphi$'ye düşmesi) — b) şıkkının tamamı bu.
- **Gerekçe:** a) şıkkı "der Abstand **zwischen** den beiden Maxima 3. Ordnung" diyor ve
  Tipp 1 öğrencilerin bunu merkeze olan mesafeyle karıştırdığını ima ediyor; simetrik
  düzenin şekilde görünmesi bu karışıklığı çözer, hesabı yapmaz.
- **Sayılar:** $\lambda = 532$ nm, $d = 4{,}0\ \mu$m, $e = 1{,}20$ m.

### q004.json — Grünes Licht am optischen Gitter
- **Karar:** A?
- **Ne çizilmeli:** Gitter, $e = 12$ cm mesafede $40$ cm genişliğinde ekran, optik eksene
  göre simetrik yerleşim; ekranın merkezden kenara olan yarım genişliği ($20$ cm)
  vurgulanmış.
- **Ne çizilmemeli:** Ekran üzerindeki maksimum noktaları — b) şıkkı "wie viele
  Helligkeitsmaxima insgesamt zu sehen sind" diye soruyor; ölçekli bir noktalı çizim
  cevabı saydırır.
- **Gerekçe:** Ekranın genişliğinin ($40$ cm) mesafeden ($12$ cm) büyük olması bu sorunun
  can alıcı noktası — kırınım açıları büyük, küçük açı yaklaşımı çöküyor (c) şıkkı).
  Bu tuhaf oran metinde kolayca gözden kaçıyor.
- **Sayılar:** $d = 3{,}0\ \mu$m, $\lambda = 546$ nm, $e = 12$ cm, ekran genişliği $40$ cm.

### q005.json — Ein Hammerschlag, zwei Signale
- **Karar:** B
- **Neden çizilmemeli:** d) "Erklären Sie den Unterschied zwischen einem $y(t)$-Diagramm
  und einem $y(x)$-Diagramm derselben Welle und erklären Sie, welche Größe sich aus
  welchem Diagramm unmittelbar ablesen lässt." İki diyagramı yan yana çizmek d)'nin
  cevabıdır. b) şıkkı da bir $y(t)$ diyagramının okunmasını istiyor — diyagramı vermek
  "birinci ve dokuzuncu maksimum arası 8 periyot" sayımını görsel hale getirir (Tipp 2
  bunu öğrenciye bırakıyor). Ray/çekiç düzeneği zaten tek cümlelik.

### q006.json — Stehende Schallwelle vor einer Wand
- **Karar:** B
- **Neden çizilmemeli:** Tipp 2 doğrudan "Zeichne eine stehende Welle auf und **miss
  nach**" diyor — düğüm aralığının $\lambda/2$ olduğu bulgusu c)'nin kilidi. Duvarda
  düğüm olması ise b)'nin cevabı; duvar önünde düğüm/karın dizilimini çizmek b), c) ve
  d)'yi birlikte verir. e)'deki gedackte Pfeife de aynı çeyrek-dalga akıl yürütmesi.

---

# Mathematik

## analysis

### q001.json — f(x) = x·e⁻ˣ
- **Karar:** C
- **Gerekçe:** Saf türev/limit. Grafiği çizmek b), c), d)'yi görsel olarak okunur kılardı.

### q002.json — Größte rechteckige Standfläche unter einem Hallendach
- **Karar:** A?
- **Ne çizilmeli:** Ölçeksiz şematik: $x \ge 0$ için azalan çatı eğrisi, altında köşeleri
  $(0|0)$, $(u|0)$, $(u|f(u))$, $(0|f(u))$ olan **rastgele** bir dikdörtgen (optimum
  değil), $u$ ve $f(u)$ etiketli.
- **Ne çizilmemeli:** Optimum dikdörtgen ($u = 2$), ölçekli çizim, $[0;8]$ aralığındaki
  taralı alan — b), c) ve d)'nin sonuçları.
- **Gerekçe:** "Der Stand darf das Dach an seiner äußeren, niedrigeren Kante gerade eben
  berühren" cümlesi a)'daki $A(u) = u\cdot f(u)$ kurulumunun tamamı ve sözel olarak
  anlaşılması zor. Şematik bunu görünür kılar, hiçbir sayı vermez.
- **Sayılar:** $f(x) = 4e^{-0{,}5x}$, aralık $[0;8]$.

### q003.json — Schachtel mit maximalem Volumen
- **Karar:** B
- **Neden çizilmemeli:** a) şıkkı zaten modelleme adımı: kartonun kenarları ve kesilen
  köşe kareleri çizildiğinde taban kenarının $30 - 2x$, yüksekliğin $x$ olduğu doğrudan
  okunur — a)'nın tamamı budur. Üstelik Tipp 1 "Zeichne dir den Karton auf und trage $x$
  an allen vier Ecken ein" diyerek bu çizimi öğrenciye görev veriyor.

### q004.json — Fläche zwischen Parabel und Gerade
- **Karar:** B
- **Neden çizilmemeli:** b) "**Begründen** Sie, welcher Graph im eingeschlossenen Bereich
  oberhalb des anderen verläuft." İki grafiği çizmek b)'nin cevabıdır ve c)'deki
  integrandın işaretini de belirler. Tipp 3 "Ein einzelner Zwischenwert … verrät dir
  sofort, welcher Graph oben liegt" diyerek istenen yöntemin hesap olduğunu söylüyor.

### q005.json — Vollständige Kurvendiskussion
- **Karar:** B
- **Neden çizilmemeli:** d) "**Skizzieren** Sie den Graphen von $f$ im Intervall $[-1;5]$
  unter Verwendung Ihrer Ergebnisse." Ders kitabı kadar net: grafik istenen çıktı.

### q006.json — Fassungsvermögen einer Glasvase
- **Karar:** C
- **Gerekçe:** Vazonun silueti çizilebilirdi ama b) şıkkı "**Begründen** Sie, warum sich
  das Fassungsvermögen mit $V = \pi\int f^2$ berechnen lässt" diye soruyor — bunun cevabı
  tam olarak "ince disklere ayır" görselidir. Disksiz siluet de $f(x)$'in $x$'e göre
  yarıçap olduğunu göstermekten öteye gitmez; a) zaten bunu hesaplatıyor. Çizilecek
  güvenli bir şey kalmıyor.

### q007.json — Funktionenschar mit ln (Drachensegel)
- **Karar:** C
- **Gerekçe:** Herhangi bir $f_k$ grafiği a) (davranış, sıfırlar), c) (y ekseninde
  ekstremum) ve d) (dönüm noktası var mı) hakkında bilgi sızdırır. Saf hesap sorusu;
  Drachensegel yalnızca bağlam.

### q008.json — Funktionsterm aus gegebenen Eigenschaften
- **Karar:** C
- **Gerekçe:** Steckbriefaufgabe. Grafiği çizmek sorunun tamamını verir (aranan fonksiyon
  zaten grafiğin kendisi). Verilerin şekle dökülecek geometrisi yok.

### q009.json — Füllstand einer Regenwasserzisterne
- **Karar:** C
- **Gerekçe:** Saf analiz. $f(t)$ grafiği c)'nin monotonluk ve asimptot cevabını verirdi.

### q010.json — Warteschlange an einem Fähranleger
- **Karar:** C
- **Gerekçe:** Aynı: $f(t)$ grafiği a), b) ve d)'yi (işaret, sıfır, ekstremum) görsel
  olarak okunur kılar.

## analytische-geometrie

### q001.json — Ebene aus drei Punkten, Durchstoßpunkt, Schnittwinkel, Abstand
- **Karar:** C
- **Gerekçe:** Tüm şıklar vektörel hesap. Üç noktanın eksenler üzerinde olması ($A$, $B$,
  $C$) hoş bir 3B çizim verirdi ama Tipp 1 bunu Achsenabschnittsform ile zaten sözel
  olarak veriyor.

### q002.json — Zwei Ebenen: Schnittwinkel, Schnittgerade, Abstände
- **Karar:** C
- **Gerekçe:** Koordinat denklemleriyle saf hesap. d)'deki "geometrisch erklären" bile
  sayısal simetriden çıkıyor.

### q003.json — Windschiefe Geraden
- **Karar:** C
- **Gerekçe:** İki windschief doğrunun ve yardımcı düzlemin 3B çizimi hem yapması zor hem
  d)'deki "warum dieses Vorgehen den Abstand liefert" gerekçesini görsel olarak verir.

## stochastik

### q001.json — Bedingte Wahrscheinlichkeit, Satz von Bayes
- **Karar:** B
- **Neden çizilmemeli:** a) "**Beschreiben Sie den Sachverhalt durch ein Baumdiagramm mit
  den vier Pfadwahrscheinlichkeiten** und berechnen Sie …" — ağaç diyagramı istenen
  çıktının kendisi. Tipp 2 hangi seviyenin neyi ayırdığını söylüyor, o kadarı yeterli.

### q002.json — Binomialverteilung in der Qualitätskontrolle
- **Karar:** C
- **Gerekçe:** Saf hesap.

### q003.json — Einseitiger Hypothesentest
- **Karar:** C
- **Gerekçe:** Sigma katsayıları tablosu material'de (dokunulmayacak). Ret bölgesini bir
  dağılım çiziminde göstermek c)'nin ("an welchem Ende liegt der Ablehnungsbereich" —
  Tipp 3'ün öğrenciye bıraktığı karar) cevabını verirdi.

### q004.json — Normalverteilte Abfüllmenge
- **Karar:** C
- **Gerekçe:** $\Phi$ tablosu material'de (dokunulmayacak). Taralı çan eğrisi çizmek
  d)'deki "erläutern Sie, warum $m$ kleiner als $500$ ml sein muss" gerekçesini hediye eder.

### q005.json — Sigma-Umgebung und erwartete Entschädigung
- **Karar:** C
- **Gerekçe:** Saf hesap + olasılık dağılımı tablosu (öğrenci kuracak).

### q006.json — Zweiseitiger Signifikanztest
- **Karar:** C
- **Gerekçe:** q003 ile aynı gerekçe.

### q007.json — Vierfeldertafel: Wärmepumpen und Photovoltaik
- **Karar:** B
- **Neden çizilmemeli:** a) "**Stellen Sie den Sachverhalt in einer Vierfeldertafel dar.**"
  Dörtlü tabloyu doldurmak a)'nın tamamı ve b)–d) o tablodan okunuyor. (Not: buradaki tablo
  bir *material* değil, öğrencinin üreteceği çıktı — mevcut `tabelle` materyalleriyle
  karıştırılmamalı.)

---

# Chemie

### chemisches-gleichgewicht/q001.json — Ammoniaksynthese nach Haber-Bosch
- **Karar:** A?
- **Ne çizilmeli:** Ausbeute-Druck diyagramı: yatay eksen basınç (10 / 100 / 250 bar),
  dikey eksen NH₃ ausbeute (Vol.-%), üç izoterm eğrisi ($200\ ^\circ$C, $400\ ^\circ$C,
  $600\ ^\circ$C) ve dokuz veri noktası.
- **Gerekçe:** Material 1 aslında bir 3×3 veri tablosunun düzyazıya çevrilmiş hâli —
  "etwa 15 % bei 10 bar, etwa 67 % bei 100 bar…" biçiminde dokuz sayı üç paragrafa
  yayılmış. b) şıkkı bu değerleri Le-Chatelier açıklamasına eşlemeyi istiyor; dokuz sayıyı
  düzyazıdan toplamak işin kendisini gölgeliyor. Şekil hiçbir cevabı vermiyor (açıklama
  ilkeden geliyor, veriden değil).
- **Daha ucuz alternatif:** Bu material'i `typ: "tabelle"` olarak $3\times3$ LaTeX
  `array`'e çevirmek görsel yükün tamamını çözer ve mevcut tablo pratiğine uyar. Şekil
  ancak bundan sonra "daha iyi olurdu" seviyesinde bir ekleme. Öncelik listesinde alt sıra.
- **Sayılar:** 200 °C: 15 / 67 / 80 %; 400 °C: 4 / 25 / 39 %; 600 °C: 0,5 / 4 / 10 %.
  Teknik nokta: 450 °C, 250 bar.

### elektrochemie/q001.json — Daniell-Element unter Nichtstandardbedingungen
- **Karar:** A — kimyanın tek net A'sı, öncelik listesinde üst sıra.
- **Ne çizilmeli:** Galvanik hücre şeması: iki behçe, solda çinko elektrot ZnSO₄
  çözeltisinde ($c = 0{,}010$ mol/L), sağda bakır elektrot CuSO₄ çözeltisinde
  ($c = 1{,}0$ mol/L), aralarında tuz köprüsü, elektrotlar arası voltmetre, $T = 25\ ^\circ$C.
- **Ne çizilmemeli:** Anot/katot etiketleri, +/− kutup işaretleri, elektron akış yönü
  okları — a) şıkkı tam olarak bu atamayı istiyor ("Ordnen Sie den Halbzellen jeweils
  Anode und Kathode sowie Minus- und Pluspol zu").
- **Gerekçe:** Daniell elementi bu sorunun tüm kurulumu ve tek bir cümlede geçiyor
  ("besteht aus einer Zink-Halbzelle und einer Kupfer-Halbzelle, die über eine Salzbrücke
  verbunden sind"). Tuz köprüsünün ne işe yaradığını ve iki yarı hücrenin nasıl ayrıldığını
  görmeden c) şıkkındaki elektrokimyasal çift tabaka açıklaması havada kalıyor.
- **Sayılar:** $c(\mathrm{Zn^{2+}}) = 0{,}010$ mol/L, $c(\mathrm{Cu^{2+}}) = 1{,}0$ mol/L,
  $E^0(\mathrm{Zn}) = -0{,}76$ V, $E^0(\mathrm{Cu}) = +0{,}34$ V.

### kohlenhydrate/q001.json — Warum Saccharose die Fehling-Probe nicht besteht
- **Karar:** B
- **Neden çizilmemeli:** b) "Gehen Sie dabei auf den Übergang zwischen Haworth- und
  Fischer-Darstellung ein" — glukozun halka↔açık zincir dönüşümünü çizmek b)'nin tamamı.
  c) "Begründen Sie den unterschiedlichen Befund … anhand ihrer glykosidischen Bindungen"
  — maltoz ve sakarozun yapı formüllerini çizip anomerik C atomlarını işaretlemek c)'nin
  cevabı. Material 1 (gözlemler) metin olarak zaten yeterli, glikozidik bağ bilgisi de
  orada sözel veriliyor.

### kunststoffe/q001.json — Drei Werkstoffproben im Wärmetest
- **Karar:** B
- **Neden çizilmemeli:** c) "**Stellen Sie die Polymerisation von Ethen zu Polyethylen und
  die Polymerisation von Vinylchlorid zu Polyvinylchlorid mit Strukturformeln dar**" —
  yapı formülleri istenen çıktı. Ayrıca b) ve d) çapraz bağlanma derecesini soruyor;
  zincirlerin bağlanma yoğunluğunu gösteren bir şema bu iki şıkkı birlikte verir.
  Material 1 üç numunenin gözlem protokolü, metin olarak doğru biçimde.

### saeure-base/q001.json — pH-Wert und Pufferwirkung einer Milchsäure-Lösung
- **Karar:** C
- **Gerekçe:** Saf hesap. Bir titrasyon eğrisi çizmek b)'deki Halbäquivalenzpunkt
  tanımasını ("pH = pK_S") ve c)'deki tampon bölgesini doğrudan gösterirdi — çizilecek
  güvenli bir şey yok, zaten gerekmiyor da.

---

# Biologie

### vererbung/q001.json — Stammbaumanalyse
- **Karar:** YAPILDI (Material 1, `abbildung`, SVG mevcut).

### photosynthese/q001.json — Sonnenblatt und Schattenblatt, Lichtkurven
- **Karar:** YAPILDI (Material 1, `abbildung`, SVG mevcut).

### neurobiologie/q001.json — Wirkort des Pfeilgifts Curare
- **Karar:** YAPILDI (Material 2, `abbildung`, SVG mevcut; Material 1 ölçüm bulguları
  metin olarak kalıyor).

### molekulargenetik/q001.json — Vom codogenen Strang zum Protein
- **Karar:** YAPILDI (Material 2, `abbildung`, SVG mevcut; Material 1 Codesonne metin
  olarak kalıyor).

### evolution/q001.json — Adaptive Radiation der Darwinfinken
- **Karar:** B — biyolojideki tek çizilmemesi gereken soru, ve gerekçe çok net.
- **Neden çizilmemeli:** Tipp 3 harfiyen şunu diyor: *"Für Teilaufgabe c) hilft eine
  Skizze: Zeichne die Häufigkeitsverteilung der Schnabelhöhen vor und nach der Dürre als
  zwei Kurven übereinander. Achte darauf, ob sich der Gipfel verschiebt, ob die Kurve
  schmaler wird oder ob zwei Gipfel entstehen."* c) şıkkı "welcher Selektionstyp hat
  gewirkt" diye soruyor ve bu üç seçenek (kayan / stabilize edici / bölücü seçilim) tam
  olarak o çizimin üç olası şeklidir. Dağılımları çizmek c)'yi tek bakışta çözer.
- **Not:** Material 1 üç bölümlü uzun bir metin (coğrafya, besin nişleri, 1977 kuraklık
  verileri). Kuraklık verileri (1400 → 180 birey, 9,4 → 10,1 mm, saçılım sabit)
  bir tabloya çevrilebilir; ama tablo şekil değildir ve bu B kararını değiştirmez.

---

# Sprachzertifikat (Goethe-C1, Schreiben)

Beş dosyanın hepsi aynı yapıda: bir Material (`typ: "text"` — forum yorumları, yorum
metni veya okur tartışması) ve beş Leitpunkt'lu yazma görevi.

| Dosya | Textsorte | Karar |
|---|---|---|
| q001.json — Ehrenamt | Forumsbeitrag | **C** |
| q002.json — Homeoffice | Forumsbeitrag | **C** |
| q003.json — Reparieren statt wegwerfen | Stellungnahme | **C** |
| q004.json — Soziale Medien / Mindestalter | Leserbrief | **C** |
| q005.json — Übersetzungs-Apps | Forumsbeitrag | **C** |

**Gerekçe (hepsi için ortak):** Değerlendirilen ürün öğrencinin ~230 kelimelik metni.
Material'ler okunacak kaynak metinler; şekil ne kurulumun parçası ne de değerlendirme
ölçütü. Goethe-C1 Schreiben modülünde görsel uyaran zaten yok.

---

# Öncelik sırası

Yalnızca A ve A? kararları. Sıralama "şekilsiz **çözülemez**" → "şekilsiz **zor**" →
"şekilsiz **çözülür ama daha iyi olurdu**".

## Kademe 1 — şekil olmadan soru eksik

1. **physik/atomphysik/q003.json** — İki röntgen spektrumu.
   a) şıkkı "aus den beiden **abgelesenen** Grenzwellenlängen" diyor: soru okunacak bir
   grafiği varsayıyor, grafik yok. Envanterdeki en açık boşluk.
2. **physik/atomphysik/q001.json** — Cu/W spektrum karşılaştırması.
   b) şıkkının tamamı iki spektrumun karşılaştırılması; düzyazı tarif karşılaştırmayı
   sözel tekrara indiriyor.
3. **physik/atomphysik/q005.json** — Molibden spektrumu.
   Aynı sorun + a) şıkkı materyalde önceden cevaplanmış durumda (Dikkat #1). Şekil
   eklendiğinde soru düzelir; ama materyal metni de kısaltılmalı.
4. **chemie/elektrochemie/q001.json** — Daniell-Element hücre şeması.
   Tüm kurulum tek cümlede; tuz köprüsü / iki yarı hücre ayrımı görülmeden c) şıkkı
   soyut kalıyor. Kutup etiketleri **konulmayacak**.
5. **physik/magnetisches-feld/q005.json** — Katlanmış hızlandırıcı düzeni.
   e2) "zwölfter Umlenkmagnet" — kaçıncı mıknatısa kadar kaç ivmelendirme yapıldığını
   saymak, kare düzenin şekli görülmeden zihinsel kurgu gerektiriyor.

## Kademe 2 — şekilsiz çözülür ama belirgin zorlaştırıyor

6. **physik/schwingungen/q006.json** — Rieselndes Pendel düzeneği.
   Sekiz bölmeli oluk + silindirin konumu a)'nın dayanağı; üstelik Tipp 1 var olmayan bir
   "Skizze"ye atıf yapıyor.
7. **physik/magnetisches-feld/q001.json** — Fadenstrahlrohr.
   Material boş; Helmholtz düzeneği tanınmıyorsa soru soyut. Kuvvet/hız vektörleri yok.
8. **physik/wellen/q001.json** — Doppelspalt düzeneği.
   $d = 0{,}25$ mm ile $e = 3{,}20$ m arasındaki ölçek farkı zihinde kurulması gereken bir
   görüntü. Gangunterschied üçgeni yok.
9. **physik/elektrisches-feld/q008.json** — Kondansatör içindeki sarkaç.
   $\ell = 1{,}5$ m iplik / $d = 8$ cm levha aralığı orantısı ve askı noktası metinden
   çıkmıyor. Kuvvet oku yok.
10. **physik/magnetisches-feld/q002.json** ve **q003.json** — Üç sektörlü ışın hattı.
    İkisi de aynı şablon; tek bir blok şeması iki soruya birden hizmet edebilir.
    Kutup/kuvvet yönleri **konulmayacak**.
11. **physik/induktion/q002.json** — Ray + kızak + ilmek + alan bölgesi.
    $a$ (yükseklik) / $b$ (uzunluk) ayrımı b)'nin can alıcı noktası. Tek anlık görüntü.

## Kademe 3 — "daha iyi olurdu" seviyesi

12. **physik/wellen/q004.json** — Gitter + 40 cm ekran / 12 cm mesafe oranı.
    Maksimum noktaları **çizilmeyecek** (b) sayıyor).
13. **physik/wellen/q003.json** — Gitter, simetrik $\pm3$. mertebe.
    Döndürülmüş gitter izdüşümü **çizilmeyecek** (b) şıkkı).
14. **mathematik/analysis/q002.json** — Çatı eğrisi altına yerleştirilmiş dikdörtgen.
    Ölçeksiz ve optimum olmayan bir $u$ ile.
15. **chemie/chemisches-gleichgewicht/q001.json** — Ausbeute-Druck izotermleri.
    Önce düzyazı material'i `tabelle`'ye çevirmek daha ucuz ve muhtemelen yeterli çözüm.

---

# Dikkat

İncelerken fark edilen içerik sorunları. **Hiçbiri düzeltilmedi**, yalnızca bildiriliyor.

1. **atomphysik/q005 — soru materyalde önceden cevaplanmış.**
   a) şıkkı "Beschreiben Sie den Verlauf des Spektrums" diyor; Material 1 ise zaten
   *"Unterhalb von etwa 35,4 pm wird keinerlei Strahlung registriert … steigt steil an,
   durchläuft bei etwa 60 pm ein flaches Maximum und fällt … langsam wieder ab. Diesem
   breiten, kontinuierlichen Untergrund sind zwei sehr schmale, hohe Spitzen überlagert"*
   diyor. Öğrencinin yapacağı tek şey materyali kopyalamak. Grafik konulup materyal metni
   kısaltılırsa hem şekil sorunu hem bu sorun birlikte çözülür.
   Daha hafif hâli **q001 b)** ve **q003 c)**'de de var.

2. **schwingungen/q006 — var olmayan şekle atıf.**
   Tipp 1: *"Für a) ergänze **die Skizze** zu einem rechtwinkligen Dreieck: eine Kathete
   ist die halbe Rinnenlänge, die Hypotenuse die Pendellänge."* `material` dizisi boş —
   ortada tamamlanacak bir Skizze yok. Ya şekil eklenmeli ya ipucu yeniden yazılmalı.

3. **schwingungen/q006 — çelişkili amplitüd tanımı.**
   Soru metni *"Bei maximaler Auslenkung soll das Salz gerade in die beiden äußersten
   Fächer rieseln"* diyor (bu, en dış bölmenin *içi*, yani ≤ 12 cm'lik bir aralık).
   Çözüm adımı 1 ise kendisi de karar veremiyor: *"über der Mitte des äußersten Feldes
   **bzw.** am Rand der Rinne"* — sonra $12$ cm (oluk kenarı) ile hesaplıyor ve
   $\varphi_0 \approx 4{,}6^\circ$ buluyor. Bölme ortası alınsaydı $10{,}5$ cm ve
   $\varphi_0 \approx 4{,}0^\circ$ çıkardı. Kontrol değeri verildiği için sorun sessiz
   kalıyor ama tanım netleştirilmeli.

4. **quantenphysik q004 ↔ q005 — aynı element, iki farklı Austrittsarbeit.**
   - `q004.json` Material: `\text{Kalzium} & 2{,}70` (ve başlıkta "Kalzium")
   - `q005.json` d) şıkkındaki tablo: `\text{Calcium} & 2{,}87`
   Hem değer (2,70 vs 2,87 eV) hem yazım (Kalzium / Calcium) tutarsız. q005'in cevabı
   "Kalium (2,25)" olduğu için sonuç etkilenmiyor, ama iki soru yan yana açıldığında
   öğrenci için kafa karıştırıcı. Sitede tek bir referans değeri kullanılmalı.

5. **elektrisches-feld/q003 — saçılımsız "ölçüm serisi" ile ölçüm hassasiyeti sorusu.**
   Material'deki dört veri çifti $\mu_0 = 2\pi r B / I$ hesabında **tam olarak** aynı
   sonucu ($1{,}257\cdot10^{-6}$) veriyor — dört kez, sıfır saçılım. c) şıkkı ise
   "bestimmen Sie $\mu_0$ als **Mittelwert** und **beurteilen Sie die Messgenauigkeit**"
   diyor. Özdeş dört değerin ortalamasını almak ve hassasiyetini değerlendirmek anlamsız.
   Verilere gerçekçi bir saçılım eklenmeli.

6. **elektrisches-feld/q009 d) — sayı tablo değerine tam oturmuyor.**
   $0{,}85\ \%$'lik gerilim düşüşünden $\varepsilon_{\text{Gas}} \approx 1{,}00916$
   çıkıyor; tabloda en yakın giriş SO₂ için $1{,}009930$. Fark $\sim 0{,}08\ \%$ ve diğer
   adaylardan ($1{,}000886$, $1{,}000583$) çok uzak olduğu için cevap tartışmasız, ama
   "identifizieren Sie es mithilfe der Tabelle" diyen bir soruda değerin tam oturması
   beklenirdi. Yüzde düşüş $0{,}926\ \%$ yapılırsa tam tutar.

7. **Kondansatör içinde 1,5–2 m'lik sarkaç — üç dosyada tekrarlayan geometrik boşluk.**
   - `elektrisches-feld/q005`: $\ell = 2{,}00$ m, $d = 8$ cm
   - `elektrisches-feld/q008`: $\ell = 1{,}5$ m, $d = 8{,}0$ cm
   - `elektrisches-feld/q009`: $\ell = 1{,}50$ m, $d = 12$ cm
   Üçünde de küre "genau in der Mitte zwischen den Platten" asılı ama ipin nereye
   bağlandığı hiç söylenmiyor — levhaların çok üstünde bir noktaya bağlı olmalı, yoksa
   levha yüksekliği metrelerce olurdu. Standart ders kitabı idealizasyonu, fiziksel bir
   hata değil; ama şekil çizilecekse askı noktasının bir yere konması gerekiyor ve şu an
   o karar tamamen çizene bırakılmış durumda. En azından birinde "der Aufhängepunkt liegt
   oberhalb der Platten" gibi bir cümle iyi olur.

8. **Kapsam boşlukları (soru içeriğiyle ilgili değil, envanter tamlığı için).**
   - `content/aufgaben/abitur/` altında **deutsch** ve **englisch** klasörü yok; registry
     bu iki dersi tanımlıyor ama tek bir soru dosyası bile bulunmuyor.
   - `content/aufgaben/sprachzertifikat/` altında yalnızca `goethe-c1/schreiben` var.
     `goethe-c2` yok; `lesen`, `hoeren`, `sprechen` modülleri boş.
   İncelenmesi istenen "78 dosya"nın tamamı incelendi — atlanan dosya yok; yukarıdakiler
   hiç var olmayan içerikler.
