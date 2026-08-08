import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";

/**
 * Markdown + LaTeX -> HTML, BUILD SIRASINDA.
 * Tarayıcıya matematik kütüphanesi gitmez; yalnızca katex.min.css.
 * Bozuk LaTeX build'i düşürür (aşağıdaki mesaj kontrolü) — sessizce kırık formül yayınlanmaz.
 *
 * Ham HTML geçirilir (`allowDangerousHtml` + rehype-raw) çünkü sorular kendi
 * SVG diyagramlarını taşıyor: soyağacı, ölçüm eğrisi, şema. Bunları kelimeyle
 * tarif etmek okunmaz hale getiriyordu.
 *
 * Bu bir güvenlik kararıdır ve tek başına durmuyor: `scripts/validate.ts`
 * içindeki HTML kapısı yalnızca <svg> ve güvenli çocuklarına izin verir,
 * script/iframe/on*-olay özniteliklerini reddeder. Repo açık kaynak olduğu
 * için dışarıdan gelen bir içerik PR'ı aksi halde build'e HTML enjekte
 * edebilirdi.
 */
const pipeline = unified()
  .use(remarkParse)
  .use(remarkMath)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeKatex, {
    output: "htmlAndMathml", // ekran okuyucular için MathML fallback
    strict: false,
  })
  .use(rehypeStringify);

/**
 * remark-math, tek satıra yazılmış `$$…$$`'ı blok formül saymaz: açılış
 * çitinden sonraki metni "meta" kabul eder, içinde `$` görünce vazgeçer ve
 * satır içi matematiğe düşer. Sonuç: içerikteki 583 blok formülün tamamı
 * paragrafın içinde satır içi basılıyordu — kesirler satır kutusuna sığmayıp
 * komşu satıra biniyor, `.katex-display` (mavi kenar çizgisi, kendi kaydırma
 * kutusu) ise hiç devreye girmiyordu.
 *
 * Çiti kendi satırlarına açmak bunu düzeltir. Yalnızca baştan sona `$$` olan
 * satırlara dokunulur; çok satırlı bloklar zaten doğru çalışıyor.
 */
const bloeckeNormalisieren = (src: string) =>
  src.replace(/^[ \t]*\$\$(.+?)\$\$[ \t]*$/gm, "$$$$\n$1\n$$$$");

export function renderMd(src: string): string {
  const datei = pipeline.processSync(bloeckeNormalisieren(src));
  // rehype-katex hatayı fırlatmaz, vfile mesajı olarak bırakır ve kırmızı bir
  // "katex-error" düğümü basar. Sessizce kırık formül yayınlamamak için burada patlatıyoruz.
  if (datei.messages.length > 0) {
    throw new Error(
      `LaTeX/Markdown hatası: ${datei.messages.map((m) => m.reason).join("; ")}\nKaynak: ${src.slice(0, 120)}`,
    );
  }
  return String(datei);
}
