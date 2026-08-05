import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";

/**
 * Markdown + LaTeX -> HTML, BUILD SIRASINDA.
 * Tarayıcıya matematik kütüphanesi gitmez; yalnızca katex.min.css.
 * Bozuk LaTeX build'i düşürür (aşağıdaki mesaj kontrolü) — sessizce kırık formül yayınlanmaz.
 */
const pipeline = unified()
  .use(remarkParse)
  .use(remarkMath)
  .use(remarkRehype)
  .use(rehypeKatex, {
    output: "htmlAndMathml", // ekran okuyucular için MathML fallback
    strict: false,
  })
  .use(rehypeStringify);

export function renderMd(src: string): string {
  const datei = pipeline.processSync(src);
  // rehype-katex hatayı fırlatmaz, vfile mesajı olarak bırakır ve kırmızı bir
  // "katex-error" düğümü basar. Sessizce kırık formül yayınlamamak için burada patlatıyoruz.
  if (datei.messages.length > 0) {
    throw new Error(
      `LaTeX/Markdown hatası: ${datei.messages.map((m) => m.reason).join("; ")}\nKaynak: ${src.slice(0, 120)}`,
    );
  }
  return String(datei);
}
