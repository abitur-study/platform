# LK etiketli 20 sorunun müfredat denetimi

> ⚠️ **BRIEF.md ❌ listesi güncel değil.** Kullanıcı **Bohr atom modeli, Compton
> olayı ve de-Broglie'nin işlendiğini** teyit etti (Bohr/Compton normal düzeyde,
> de-Broglie "çok az"). `docs/soru-yazimi/BRIEF.md` L142–152'deki
> "❌ KESİNLİKLE YASAK" listesi bu üç madde için yanlış; listeye dayanan
> geçmiş kararlar yeniden gözden geçirilmeli. Bu denetimde **BRIEF'in ❌ listesi
> tek başına gerekçe olarak kullanılmadı** — yalnızca `mufredat.md`'de açıkça
> **"Yok:"** / **"hiç işlenmedi"** yazan maddeler ve `kaynaklar/` altındaki
> okul ders defterleri kanıt sayıldı.

**Özet: GK=19 · LK=0 · KISMİ=1 · ?=0**

Kısa hüküm: **`niveau: "LK"` etiketinin içerikle hiçbir ilgisi yok.** 20 sorunun
19'u tamamen müfredat içinde; biri tek bir şıkta dışarı taşıyor. Etiket üretim
sırasında rastgele/varsayılan olarak düşmüş görünüyor — konularla veya
zorlukla korelasyonu yok (aynı klasördeki `q002`…`q010` GK, `q001` LK gibi
dağılımlar var).

**İkinci bulgu (denetim dışı ama önemli):** `kaynaklar/bio-*.md` dosyalarındaki
"⚠️ Müfredat dışı görünenler" başlıkları **okulun kendi ders defterinde geçip
`mufredat.md`'de yazmayan** konuları listeliyor. Bunlar müfredat dışı değil —
`mufredat.md`'nin eksik olduğunun kanıtı. (Örn. `kompetitive Hemmung`
neurobiologie defterinde s. 10'da var.) Aşağıda bu yönde kullanıldı.

---

## physik/quantenphysik/q006.json — Bestimmung des Planckschen Wirkungsquantums mit der Gegenfeldmethode
- **Karar:** GK
- **Müfredat dayanağı:** `mufredat.md` L116–120 — "**5. Quantenphysik —
  Photoeffekt** ← önemli · Hallwachs-Versuch · Äußerer Photoeffekt,
  Austrittsarbeit · **Gegenfeldmethode** (karşı gerilim) — Bestimmung des
  **Planckschen Wirkungsquantums h** · E = h · f (Planck) — kısa geçildi"
- **İçerik:** Soru bu dört maddeyi birebir kullanıyor: $eU_G = E_{kin,max}$,
  $eU_G = hf - W_A$, iki dalga boyundan fark alarak $h$, $W_A$ hesabı ve eV'ye
  çevirme, c) şıkkında dalga modeli ↔ gözlem çelişkisi (Grenzfrequenz,
  yoğunluk-hız bağımsızlığı, gecikmesizlik).
- **de-Broglie / Bohr / Compton hiç geçmiyor.** Şüphe yersiz çıktı — soru
  müfredatın en açık şekilde onaylanmış fizik konusunun tam merkezinde.
- Not: eV'ye çevirmede $W_A \approx 2{,}0$ eV verilip "Tabellenwert etwa 2,1 eV"
  denmesi kapsam değil, doğruluk meselesi; sorun yok.

## physik/atomphysik/q005.json — Bremsstrahlung und charakteristische Linien im Röntgenspektrum
- **Karar:** GK
- **Müfredat dayanağı:** `mufredat.md` L122–125 — "**6. Atomphysik** ✅ ·
  **Erzeugung von Röntgenstrahlung** (Röntgenröhre) · **Bremsstrahlung** ·
  **Charakteristische Röntgenstrahlung**" — üçü de ✅ ve soru tam bu üçü.
- **Sınırda olan tek nokta:** c/d şıkları "die Energieniveaus der Atomhülle sind
  diskret", "K-Schale", $E_{Photon} = E_{hoch} - E_{tief}$ diyor. Bu, kabuk
  modeline kavramsal bir dokunuş. Ancak (i) *karakteristik ışıma* zaten kabuk
  geçişi olmadan açıklanamaz, müfredat onu ✅ işaretlemiş; (ii) Bohr modeli
  kullanıcı tarafından işlendiği teyit edildi. **Terim şeması çizilmiyor,
  Balmer/Rydberg formülü kullanılmıyor, seri adı geçmiyor.** Kapsam içi.
- Grenzwellenlänge $\lambda_{min} = hc/(eU_B)$ — $h$ ve $E=hf$ L120'de ✅.

## physik/elektrisches-feld/q006.json — Schwebendes Öltröpfchen im Plattenkondensator
- **Karar:** GK
- **Müfredat dayanağı:** `mufredat.md` L53–56 — "**Homogenes elektrisches Feld**
  (Plattenkondensator) · **Millikan-Versuch** (Öltröpfchenversuch) — Bestimmung
  der **Elementarladung**"
- Kullanılan her şey listede: $E = U/d$, $qE = mg$, küre hacmi, $q/e \approx 2$
  → yükün kuantumlanması. Sürtünme/Stokes yok, düşme hızı ölçümü yok — sadece
  Schwebemethode, yani en sade hâli.

## physik/induktion/q001.json — Leiterschleife im freien Fall durch ein Magnetfeld
- **Karar:** GK
- **Müfredat dayanağı:** `mufredat.md` L75–82 — "**Induktionsgesetz**
  U_ind = −N · dΦ/dt — **formüllerin türetilmesi / açıklanması** · Induktion
  beim **freien Fall** (fallende Leiterschleife) · **Lenzsche Regel** ✅"
- Soru bu maddenin **birebir örneği**. a) şıkkı $U_{ind} = Bbv$ türetiyor —
  müfredat türetmeyi açıkça istiyor. Selbstinduktion'un e-fonksiyonlu hesabına
  hiç girilmiyor (o zaten L79–80'de "burada hesap yapılmadı, sadece kavramsal").

## physik/magnetisches-feld/q001.json — Spezifische Ladung des Elektrons im Fadenstrahlrohr
- **Karar:** GK
- **Müfredat dayanağı:** `mufredat.md` L69–73 — "**Lorentzkraft** auf bewegte
  Ladungen · Kreisbahn im Magnetfeld (Lorentzkraft als Zentripetalkraft) ·
  Zugehöriger Versuch: **Fadenstrahlrohr** ✅ — Bestimmung der Elektronenmasse /
  spezifischen Ladung e/m"
- Soru = maddenin adı. $evB = mv^2/r$, $eU_B = \frac12 mv^2$, $e/m = 2U_B/(B^2r^2)$.
  Helmholtz bobini yalnızca "nahezu homogenes Feld" olarak anılıyor, bobin
  formülü ($B = \mu_0 \cdot …$) istenmiyor — iyi.
- Bonus: c) şıkkındaki hata tartışması Erdmagnetfeld'e değiniyor; müfredat L67
  "Bestimmung des Erdmagnetfelds — hoca ekstra işledi" diyor, yani tanıdık.

## physik/wellen/q001.json — Wellenlängenbestimmung am Doppelspalt
- **Karar:** GK
- **Müfredat dayanağı:** `mufredat.md` L102–107 — "**2. Doppelspaltversuch** ·
  **Gangunterschied** Δs = d₂ − d₁ · **Maxima und Minima** ·
  **Näherungsformel** (Kleinwinkelnäherung, sin α ≈ tan α) · **Exakte Formel
  mit Tangens** · Größen: λ, Spaltabstand d, Schirmabstand"
- Soru bu altı maddeyi **eksiksiz ve sırasıyla** işliyor; b) şıkkı doğrudan
  "Näherungsformel vs. exakte Tangensformel" karşılaştırması. Tek yarık kırınımı,
  Gitter, polarizasyon yok. Müfredata en iyi oturan sorulardan biri.

---

## chemie/saeure-base/q001.json — pH-Wert und Pufferwirkung einer Milchsäure-Lösung
- **Karar:** GK
- **Müfredat dayanağı:** `mufredat.md` L171–185 — "**pKs-Wert** … kurze
  Rechnungen · **Neutralisation** · Halbäquivalenzpunkt (dort gilt pH = pKs) ·
  **Pufferlösungen** · **Henderson-Hasselbalch-Gleichung** ✅ — biraz kullanıldı,
  hesaplamalar yapıldı · **pH-Berechnung schwacher Säuren**, z. B. **Milchsäure**"
- Müfredat **örneği bile aynı**: Milchsäure. $pH = \frac12(pK_S - \lg c_0)$,
  Halbäquivalenzpunkt, Henderson-Hasselbalch, tampon denklemleri — hepsi listede.

## chemie/chemisches-gleichgewicht/q001.json — Ammoniaksynthese nach Haber-Bosch
- **Karar:** GK
- **Müfredat dayanağı:** `mufredat.md` L154–169 — "**Massenwirkungsgesetz (MWG)**,
  Gleichgewichtskonstante K … **4. Prinzip von Le Chatelier** ← çok önemli ·
  Störung durch: **Konzentrationsänderung**, **Druckänderung**,
  **Temperaturänderung** · **Haber-Bosch-Verfahren** (Ammoniaksynthese) — kısa
  işlendi: Ausbeute bei verschiedenen Drücken und Temperaturen, Optimierung"
- ΔH veriliyor ama **yalnızca nitel** kullanılıyor ("exotherm → Wärme als
  Produkt"). Bu, L152'deki "**Enthalpie (ΔH)** — nur qualitativ, **keine
  Rechnungen**" kuralına uyuyor. Katalizör/Aktivierungsenergie L148–150 ✅.
  ΔG/Entropie (L241 "Yok") hiç geçmiyor.

## chemie/elektrochemie/q001.json — Daniell-Element unter Nichtstandardbedingungen
- **Karar:** GK
- **Müfredat dayanağı:** `mufredat.md` L214–224 — "**Galvanische Zelle** und das
  **Daniell-Element** … · **Elektrochemische Doppelschicht** — Entstehung des
  Elektrodenpotentials · **Elektrochemische Spannungsreihe**, Standardpotentiale
  ✅ · **Nernst-Gleichung** — logaritmalı, **hesaplamalar yapıldı**"
- Sorunun her adımı bu maddelerde: Teilgleichungen + Anode/Kathode/Pol atama
  (L218–219), $E = E^0 + \frac{0{,}059}{z}\lg c$ (L224), Doppelschicht (L222).
  **Elektrolyse** (L226/L244 "Yok") hiç geçmiyor.

## chemie/kohlenhydrate/q001.json — Warum Saccharose die Fehling-Probe nicht besteht
- **Karar:** **KISMİ**
- **Müfredat dayanağı (a–c için, sağlam):** `mufredat.md` L194–204 —
  "Darstellung der Zucker: **Fischer-Projektion** ↔ **Haworth-Projektion** ·
  **Glucose** und **Fructose** (D-/L-Form, α-/β-Form, **Ringschluss**) ·
  **Fehling-Probe** … Fehling I (CuSO₄) + Fehling II (alkalische
  Seignettesalz-Lösung); Farbumschlag blau → orangerot · **Disaccharide** und ihr
  Nachweis: **reduzierende** (Maltose, Lactose) vs. **nicht reduzierende**
  (Saccharose)" — a), b) ve c) şıkları bu satırların tam karşılığı.
- **Sorun — d) şıkkı:** "Vergleichen Sie das Verhalten von Fructose mit dem von
  Glucose und erklären Sie den überraschenden Befund." Çözüm adımı 4 bunu
  **Keto-Enol-Tautomerie** ve **Endiol** ara ürünü üzerinden açıklıyor
  (Fructose ⇌ Endiol ⇌ Glucose/Mannose). Bu iki kavram `mufredat.md`'de **hiçbir
  yerde geçmiyor**; L236–238 organik kimya için "10. sınıfta temelleri atıldı"
  diyor ama tautomeri temel seviye değil, klasik LK/üniversite konusu.
  `kaynaklar/` altında kimya ders materyali **yok**, yani teyit edecek kaynak da yok.
- **Kurtarılabilir mi:** **Evet, kolayca.** İki seçenek:
  1. d) tamamen çıkarılır, puanı (adım 4) a)–c)'ye dağıtılır → soru saf GK olur.
  2. d) korunur ama Endiol/tautomeri mekanizması **materyale verili bilgi olarak**
     konur ("Im alkalischen Milieu lagert sich Fructose teilweise zu Glucose um")
     ve şıkkın emri "erklären" yerine "erläutern Sie mithilfe von Material 1"
     olur. O zaman öğrenciden mekanizmayı bilmesi değil, veriyi kullanması istenir.
- **İkinci, daha hafif nokta:** b) ve c) adımları **Halbacetal / Vollacetal /
  anomeres C-Atom** terimlerini kullanıyor. `mufredat.md` L188–190 yalnızca
  "Fischer/Haworth, D-/L-, α-/β-, Pyranose/Furanose — ezberletilmedi, ama derste
  kullanıldı" diyor; "Halbacetal" adı geçmiyor. Ringschluss ✅ olduğu için
  kavram tanıdık olmalı ama **terimin adı** garanti değil → aşağıda soru olarak
  sorulmuş. Bu tek başına KISMİ hükmünü değiştirmiyor.

---

## mathematik/analysis/q001.json — Untersuchung der Funktion f(x) = x·e⁻ˣ
- **Karar:** GK
- **Müfredat dayanağı:** `mufredat.md` L18–19 — "Ableitungsregeln,
  Kurvendiskussion · **e-Funktion und ln**"
- Produktregel, Extrempunkt + hinreichende Bedingung, Wendepunkt, Grenzverhalten.
  L'Hospital kullanılmıyor (adım 5 "Exponentialfunktion wächst schneller als jede
  Potenzfunktion" diyerek okul argümanıyla geçiyor — doğru seviye).

## mathematik/analysis/q003.json — Schachtel mit maximalem Volumen
- **Karar:** GK
- **Müfredat dayanağı:** `mufredat.md` L21 — "**Extremwertprobleme**"
- Ders kitabı klasiği. Zielfunktion + Definitionsbereich + $V''$ ile tür kanıtı +
  Sachzusammenhang yorumu. Randwerte tartışması bile yapılmamış, yani sade.

## mathematik/analysis/q008.json — Funktionsterm aus gegebenen Eigenschaften (Steckbriefaufgabe)
- **Karar:** GK
- **Müfredat dayanağı:** `mufredat.md` L18 — "Ableitungsregeln,
  **Kurvendiskussion**"; ayrıca L38–41 — "ders **bol soru çözümü** üzerine
  kuruluydu ve konular birbirine bağlıydı — bir soru birden fazla başlığa
  dokunabiliyor"
- "Steckbriefaufgabe" adı müfredatta geçmiyor ama içerik **ters yönde
  Kurvendiskussion**: simetri → $b=d=0$, $f'(0)=-3$, $f'(1)=0$, iki bilinmeyenli
  küçük denklem sistemi. Ayrı bir yöntem değil.
- **Matris kullanılmıyor** — L36 "**Yok:** Matrizen (ayrı konu olarak)" ihlal
  edilmiyor; denklem sistemi elle çözülüyor (3 satır). Doğru tercih.

## mathematik/analytische-geometrie/q003.json — Windschiefe Geraden: Lagebeziehung, Winkel und Abstand
- **Karar:** GK
- **Müfredat dayanağı:** `mufredat.md` L24–28 — "Vektoren, Skalarprodukt,
  **Kreuzprodukt** · Geraden und Ebenen: Parameter-, Normalen-, **Koordinatenform**
  · **Lagebeziehungen, Abstände, Winkel**"
- Dört şık dört maddeye birebir oturuyor. Hilfsebene + Hesse-Normalform yöntemi
  müfredatta ad olarak yazmıyor ama "Abstände" maddesinin standart okul aracı ve
  Kreuzprodukt ✅ olduğu için erişilebilir. Determinant/matris yok.

## mathematik/stochastik/q001.json — Bedingte Wahrscheinlichkeit und Satz von Bayes bei einem Screening-Test
- **Karar:** GK
- **Müfredat dayanağı:** `mufredat.md` L31 — "**Bedingte Wahrscheinlichkeit**"
- **Bayes sorusu kontrol edildi: evet, kapsamda.** Sorunun adında "Satz von
  Bayes" geçiyor ama çözümde ayrı bir Bayes formülü kullanılmıyor —
  adım 3 doğrudan $P_T(K) = \frac{P(K\cap T)}{P(T)}$ yazıyor, yani **koşullu
  olasılığın tanımının kendisi**. $P(T)$ ise Baumdiagramm'daki iki yolun
  toplamı (totale Wahrscheinlichkeit). İkisi de "bedingte Wahrscheinlichkeit"
  başlığının ayrılmaz parçası; Almanya'da GK Stochastik'in çekirdeği.
- d) şıkkındaki **stochastische Unabhängigkeit** ($P(K\cap T) = P(K)\cdot P(T)$)
  müfredatta ad olarak yazmıyor ama koşullu olasılığın ikiz kavramı ve
  Vierfeldertafel/Baum ile aynı derste gelir. Risk düşük.
- Binomialverteilung / Hypothesentest / Normalverteilung (L32–34) hiç
  kullanılmıyor — soru tek konuda kalıyor.

---

## biologie/vererbung/q001.json — Stammbaumanalyse einer seltenen Erbkrankheit über drei Generationen
- **Karar:** GK
- **Müfredat dayanağı:** `mufredat.md` L377–394 — "**Konduktor / Konduktorin** ·
  **autosomal-dominant** · **autosomal-rezessiv** · **gonosomal
  (X-chromosomal) dominant / rezessiv** · *Aufgabentyp — sınavın ağırlığı
  burada*: **Stammbaumanalyse** … **Wahrscheinlichkeitsrechnung** für
  Nachkommen, **Kreuzungsschema (Punnett-Quadrat)** · **Mendelsche Regeln** ✅"
- Müfredat bu soru tipini "**sınavın ağırlığı burada**" diye işaretlemiş.
  Beş şık da o çerçevede: Erbgang belirleme, diğerlerini eleme, Genotyp atama,
  Punnett ile %25, güvenilirlik değerlendirmesi.
- **Küçük not (karar değiştirmiyor):** Adım 2, müfredatın Erbgang listesinde
  olmayan **Y-chromosomale Vererbung**'u da eliyor. Ama (i) eleme gerekçesi
  adımın kendi içinde tam olarak açıklanıyor, öğrenci ön bilgi olmadan takip
  edebilir; (ii) "gonosomal" başlığı Y'yi de kapsayacak şekilde okunabilir.
  Yine adım 5 **unvollständige Penetranz** ve **Neumutation** terimlerini
  geçiyor — bunlar `beurteilen` şıkkında çekince olarak, tanımlarıyla birlikte
  veriliyor; ezberden bilinmesi gerekmiyor.

## biologie/evolution/q001.json — Adaptive Radiation der Darwinfinken und Selektion in einer Dürreperiode
- **Karar:** GK
- **Müfredat dayanağı:** `mufredat.md` L396–420 — "**Jean-Baptiste de Lamarck**
  … · **Charles Darwin** — Variabilität, Überproduktion, Selektion,
  Angepasstheit ← **ana konu** · **Variabilität** (Mutation und Rekombination) ·
  Selektionstypen: stabilisierend, transformierend (gerichtet), disruptiv ✅ ·
  **Gendrift** — **Flaschenhalseffekt**, **Gründereffekt** ✅ · **Isolation** —
  **geografische (allopatrische) Isolation**, reproduktive … · **Artbildung**:
  allopatrisch und sympatrisch ✅ · **Adaptive Radiation** — Einnischung,
  ökologische Nischen"; ayrıca L406 "**Homologie** und **Analogie** ✅" ve
  L444 "**Konkurrenz** — intraspezifisch und interspezifisch ✅"
- Sorunun beş çözüm adımında geçen **her** teknik terim yukarıdaki listede var —
  bu, denetimdeki en yüksek örtüşme oranına sahip soru. Hardy-Weinberg,
  moleküler saat, kladogram gibi LK araçları hiç kullanılmıyor.

## biologie/molekulargenetik/q001.json — Vom codogenen Strang zum Protein: zwei Punktmutationen
- **Karar:** GK
- **Müfredat dayanağı:** `mufredat.md` L324–333 — "**Transkription**: DNA → mRNA
  · **Translation**: mRNA → Protein (Ribosom, tRNA, Codon/Anticodon,
  **genetischer Code**) · **Punktmutation** — Substitution (**Transition /
  Transversion**); **stumm, missense, nonsense** · **Rasterschubmutation**"
- Sorunun kullandığı her kavram bu iki satırda: Transition (Stamm I),
  Transversion (Stamm II), stumme Mutation, Nonsense-Mutation, Rasterschub'un
  **olmadığının** açıkça belirtilmesi.
- Prokaryot seçilmiş olması akıllıca: RNA-Prozessierung/Spleißen (L326–327'de ✅
  ama bu soruya gereksiz) böylece devre dışı bırakılmış. Codesonne Material 1'de
  verili — ezber gerektirmiyor.

## biologie/neurobiologie/q001.json — Wirkort des Pfeilgifts Curare an der motorischen Endplatte
- **Karar:** GK
- **Müfredat dayanağı:** `mufredat.md` L359–368 — "**chemische Synapse**:
  Präsynapse, synaptischer Spalt, Postsynapse · Ablauf: Ca²⁺-Einstrom → Vesikel
  → Exocytose → **Neurotransmitter** (z. B. Acetylcholin) → Rezeptoren an der
  Postsynapse → Abbau (Acetylcholinesterase) / Wiederaufnahme · **EPSP** …
  **IPSP** · **Summation** — räumliche und zeitliche"; L352
  "**Alles-oder-Nichts-Prinzip**"; L368 "**Curare** — blockiert
  Acetylcholin-Rezeptoren → Muskelerschlaffung → Atemstillstand"
- **Kaynak dosyası okundu — şüpheyi çözüyor, doğruluyor.**
  `kaynaklar/bio-neurobiologie.md`:
  - L340: "**Antagonist:** Stoffe, die eine ähnliche räumliche Struktur
    aufweisen und **kompetitiv** an die entsprechenden Rezeptoren binden … →
    **kompetitive Hemmung**"
  - L369: "bindet es anstelle ACh **kompetitiv** an die postsynaptischen
    ACh-Rezeptoren an den motorischen Endplatten"
  → Sorunun adım 4'ündeki **kompetitive Hemmung** okulun ders defterinde,
  hem de doğrudan Curare bağlamında var. `mufredat.md` bunu listelememiş
  (defterin kendi notu da L464'te "müfredatta yok" diyor) — ama defter okulun
  kendi materyali, yani **müfredat eksik, soru değil**.
  - Adım 1'deki "Acetylcholinesterase spaltet ACh in **Acetyl-CoA und Cholin**"
    ifadesi kimyasal olarak yanlış (asetat olmalı) — **ama okulun öğrettiği hâli
    tam olarak bu**: defter L331 ve L12 aynı şeyi yazıyor, L12 hatayı açıkça
    not ediyor. Sınav cevabıyla tutarlı olması için **değiştirilmemeli**;
    denetim açısından da kapsam ihlali değil.
  - "motorische Endplatte" (defter L463'e göre müfredatta ayrı başlık değil) ve
    "ligandengesteuerte Kanäle" defterin s. 9–10'unda işlenmiş.

## biologie/photosynthese/q001.json — Sonnenblatt und Schattenblatt: Auswertung von Lichtkurven
- **Karar:** GK
- **Müfredat dayanağı:** `mufredat.md` L291–303 — "*Diagramme — **sınavda ağırlık
  burada***: **Diagrammbeschreibung und -auswertung** (Abitur formatında) ·
  **Lichtkompensationspunkt** und **CO₂-Kompensationspunkt** · O₂-Abgabe in
  Abhängigkeit von der CO₂-Konzentration · **Sonnen- und Schattenblätter** /
  Starklicht- und Schwachlichtpflanzen · **Gesetz des begrenzenden Faktors
  (Blackman)** · *Einflussfaktoren*: Lichtintensität, Temperatur,
  CO₂-Konzentration, **Wellenlänge des Lichts**, **pH-Wert**"
- **Kaynak dosyası okundu — şüphe doğrulanmadı, soru temiz.**
  `kaynaklar/bio-photosynthese.md` L841–846 gerçekten "Lichtabhängige Reaktion
  im Detail" (Photosystem I/II, P₆₈₀/P₇₀₀, Z-Schema, Plastochinon,
  Cytochrom-b/f, Plastocyanin, Ferredoxin, Photophosphorylierung) ve L859–862
  bunu "tipik olarak LK derinliğinde" diye işaretliyor.
  **Ama bu soru o zincire hiç girmiyor.** Elektron taşıma zincirine tek dokunuş
  adım 3'teki şu yan cümle: "*weil die Lichtreaktion mehr angeregte Elektronen
  und damit mehr ATP und NADPH+H⁺ für den Calvin-Zyklus liefert*" — tek cümle,
  hiçbir kompleks/taşıyıcı adı yok, hiçbir şıkta sorulmuyor, puanlanan bir adım
  değil. Photosystem, Z-Schema, Ferredoxin vb. **hiçbiri geçmiyor**.
  Ayrıca ATP/NADPH kavram çifti defterin s. 17–21'inde ders konusu olarak
  işlenmiş (defter L572, L616–651) — yani öğrenci için tanıdık.
- Sorunun asıl gövdesi (diyagram okuma, Kompensationspunkt, Blackman, Kurve 3 ile
  faktör değişiminin kanıtlanması, Sonnen-/Schattenblatt karşılaştırması)
  müfredatın "**sınavda ağırlık burada**" dediği kısmın tam kendisi.
- Adım 2'de geçen Palisadengewebe ve Epidermis L276–283 ✅; adım 5'teki
  "Modifikation" terimi çekirdek kavram değil, yorum cümlesi.

---

## Toplu tablo

| Dosya | Mevcut | Önerilen | Gerekçe (tek cümle) |
|---|---|---|---|
| `biologie/evolution/q001.json` | LK | **GK** | Darwin/Lamarck, Selektionstypen, Gendrift+Gründereffekt, allopatrische Artbildung, adaptive Radiation — hepsi mufredat L396–420'de ✅. |
| `biologie/molekulargenetik/q001.json` | LK | **GK** | Transkription/Translation + Transition/Transversion + stumm/nonsense, mufredat L324–333'ün birebir karşılığı; Codesonne verili. |
| `biologie/neurobiologie/q001.json` | LK | **GK** | Curare + cholinerge Synapse + EPSP/Summation mufredat L352–368'de; `kompetitive Hemmung` da okul defterinde var (`bio-neurobiologie.md` L340, L369). |
| `biologie/photosynthese/q001.json` | LK | **GK** | Lichtkurven/Kompensationspunkt/Blackman mufredat L291–303'ün merkezi; LK derinliğindeki elektron taşıma zinciri sorunun hiçbir yerinde sorulmuyor. |
| `biologie/vererbung/q001.json` | LK | **GK** | Stammbaumanalyse + Punnett + Konduktorin, mufredat L390–394'ün "sınavın ağırlığı burada" dediği tip. |
| `chemie/chemisches-gleichgewicht/q001.json` | LK | **GK** | MWG + Le Chatelier + Haber-Bosch mufredat L154–169'da; ΔH yalnızca nitel, hesap yok. |
| `chemie/elektrochemie/q001.json` | LK | **GK** | Daniell + Doppelschicht + logaritmalı Nernst mufredat L214–224'te açıkça ✅. |
| `chemie/kohlenhydrate/q001.json` | LK | **KISMİ → düzeltilirse GK** | a–c tamamen kapsamda; **d) şıkkı Keto-Enol-Tautomerie / Endiol** istiyor, bu mufredat'ta hiç geçmiyor. |
| `chemie/saeure-base/q001.json` | LK | **GK** | Milchsäure pH + Halbäquivalenzpunkt + Henderson-Hasselbalch, mufredat L176–185'te örneği dahil yazıyor. |
| `mathematik/analysis/q001.json` | LK | **GK** | e-Funktion + Kurvendiskussion, mufredat L18–19. |
| `mathematik/analysis/q003.json` | LK | **GK** | Extremwertproblem, mufredat L21. |
| `mathematik/analysis/q008.json` | LK | **GK** | Steckbriefaufgabe = ters Kurvendiskussion (L18); matris kullanılmıyor, L36 ihlal edilmiyor. |
| `mathematik/analytische-geometrie/q003.json` | LK | **GK** | Windschief + Kreuzprodukt + Koordinatenform + Abstand, mufredat L24–28'in dört maddesi. |
| `mathematik/stochastik/q001.json` | LK | **GK** | Bayes burada koşullu olasılığın tanımından ibaret; "Bedingte Wahrscheinlichkeit" mufredat L31'de ✅. |
| `physik/atomphysik/q005.json` | LK | **GK** | Röntgenröhre + Bremsstrahlung + charakteristische Strahlung, mufredat L122–125'in üçü de ✅; terim şeması/Balmer yok. |
| `physik/elektrisches-feld/q006.json` | LK | **GK** | Millikan + Plattenkondensator + Elementarladung, mufredat L53–56. |
| `physik/induktion/q001.json` | LK | **GK** | "Induktion beim freien Fall (fallende Leiterschleife)" mufredat L77'de kelimesi kelimesine var. |
| `physik/magnetisches-feld/q001.json` | LK | **GK** | Fadenstrahlrohr + e/m, mufredat L72–73'ün başlığı. |
| `physik/quantenphysik/q006.json` | LK | **GK** | Gegenfeldmethode ile h tayini mufredat L119'da açıkça ✅; de-Broglie/Compton/Bohr soruda hiç geçmiyor. |
| `physik/wellen/q001.json` | LK | **GK** | Doppelspalt + Näherungsformel + exakte Tangensformel, mufredat L102–107'nin altı maddesi. |

---

## Kullanıcıya sorular

Bunlar benim `mufredat.md` ve `kaynaklar/` ile çözemediğim, sadece öğrencinin
bilebileceği şeyler. **Hiçbiri tek başına bir soruyu iptal etmiyor** — cevaba
göre ya hiç dokunulmaz ya küçük bir düzeltme yapılır.

1. **Kimya / Kohlenhydrate — Keto-Enol-Tautomerie (Endiol).** *En önemli soru.*
   Fructose'un neden Fehling pozitif verdiği derste **açıklandı mı**, yoksa
   sadece "Fructose de pozitif verir" diye mi geçildi? Açıklandıysa
   `kohlenhydrate/q001` doğrudan GK. Açıklanmadıysa d) şıkkı çıkarılmalı veya
   mekanizma materyale verili bilgi olarak konmalı.

2. **Kimya / Kohlenhydrate — `Halbacetal` / `Vollacetal` / `anomeres C-Atom`.**
   Bu üç terim derste **adıyla** kullanıldı mı? `mufredat.md` L188–190 sadece
   "Ringschluss, α-/β-Form, Pyranose/Furanose" diyor. Kullanılmadıysa b) ve c)
   adımlarında terimler kısa bir parantezle tanımlanmalı (soru yapısı değişmez).

3. **Fizik / Atomphysik — Röntgen'de kabuk geçişi ne kadar derin işlendi?**
   Karakteristik ışıma anlatılırken "K-Schale'den boşalan yeri L'den bir elektron
   doldurur, enerji farkı foton olarak çıkar" düzeyinde mi kalındı, yoksa
   **Energieniveauschema / terim şeması çizildi** mi? `atomphysik/q005`
   birincisiyle yetiniyor; ikincisi işlendiyse ileride daha derin sorular da
   yazılabilir demektir.

4. **Fizik / Quantenphysik — Photoeffekt'te Grenzfrequenz.** $f_{grenz} = W_A/h$
   ve $U_G(f)$ doğrusunun eğim/eksen kesimi yorumu derste yapıldı mı?
   `quantenphysik/q006`'nın c) şıkkı ve "warum" açıklamaları buna dayanıyor.
   Yapılmadıysa c) hâlâ cevaplanabilir ama grafik yorumu cümleleri
   sadeleştirilebilir.

5. **Biyoloji / Vererbung — Y-chromosomaler Erbgang.** Derste eleme
   seçeneklerinden biri olarak geçti mi? `mufredat.md` L385–388 sadece
   autosomal ve X-chromosomal sayıyor. Geçmediyse `vererbung/q001` b) şıkkındaki
   Y elemesi çıkarılabilir (adım 2 zaten kendi içinde açıklıyor, zorunlu değil).

6. **Matematik / Stochastik — `stochastische Unabhängigkeit`.** Ürün koşulu
   $P(A\cap B) = P(A)\cdot P(B)$ derste ayrıca gösterildi mi?
   `stochastik/q001` d) şıkkı bunu istiyor.

7. **Matematik / Analysis — "Steckbriefaufgabe" tipi.** Verilen özelliklerden
   fonksiyon terimi bulma soruları derste çözüldü mü? (`mufredat.md` L38–41 dersin
   "bol soru çözümü" üzerine kurulu olduğunu söylüyor, muhtemelen evet.)

8. **Genel — `mufredat.md`'nin biyoloji bölümü eksik görünüyor.**
   `kaynaklar/bio-neurobiologie.md` L450–467 ve `bio-photosynthese.md` L830–854,
   okulun kendi ders defterinde işlenip `mufredat.md`'de yazmayan **onlarca**
   konu listeliyor (Reflexe, Kaliumgleichgewichtspotential, Rezeptorpotential,
   Frequenzkodierung, elektrische Synapse, präsynaptische Hemmung,
   Chloroplastenaufbau, Endosymbiontentheorie, Xerophyten…).
   Bunlar müfredat dışı değil — `mufredat.md` eksik. Müfredat dosyası
   güncellenirken bu iki liste kaynak olarak kullanılabilir.
