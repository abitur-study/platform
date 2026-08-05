<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Orient yourself first

There is a knowledge graph at `graphify-out/`. Use it before grepping:

- `graphify query "<question>"` — scoped subgraph, far smaller than raw search
- `graphify explain "<concept>"` · `graphify path "<A>" "<B>"`
- `graphify-out/wiki/index.md` — 23 crawlable articles, one per community
- `graphify-out/GRAPH_REPORT.md` — only for broad architecture review

After changing code, run `graphify update .` (AST-only, no API cost).

Note: `README.md` is untouched `create-next-app` boilerplate and describes a
structure this repo no longer has. Ignore it.

# What this project is

A non-profit, open-source study site for İstanbul Erkek Lisesi / Alman Lisesi
students: Abitur subjects and Goethe-Zertifikat C1/C2.

**Hard rules — do not violate:**

1. **No multiple choice, ever.** Every task is open-ended written production, in
   Abitur exam format.
2. **No live LLM call at runtime.** Questions are pre-generated into JSON and
   compiled at build time. The UI never calls an API.
3. **No tracking, analytics, ads, or monetization.** The student's own answer
   lives in `localStorage` and never leaves the browser.
4. **Do not invent curriculum topics.** All current content is demo placeholder.
   The real semester / exam / source material comes from the user.
5. Every solution step carries a `warum` with both `de` and `tr` — an
   explanation of *why* that step is taken, not a restatement of it.

# How it fits together

There is no runtime backend and no database — **the build is the backend**.

- `content/schema.ts` — the contract (Zod). Discriminated union on `bereich`:
  `abitur` | `sprachzertifikat`. Serves validation, TS types, and (later) the
  Claude structured-output schema.
- `content/registry.ts` — subjects, topics, certificates, modules, and the
  allowed Abitur `OPERATOREN`. Adding a subject or topic = adding a line here;
  routes generate themselves from it.
- `content/aufgaben/**/*.json` — the questions. Path convention is
  `abitur/<fach>/<themenbereich_slug>/` and
  `sprachzertifikat/<zertifikat>/<modul>/`.
- `src/lib/content.ts` — reads and validates that tree at build time. Not cached
  in dev (HMR can't see the JSON), filtered to `status: "veroeffentlicht"` in
  production.
- `src/lib/markdown.ts` — Markdown + LaTeX → HTML **at build time** via
  remark/rehype + KaTeX. No `remark-gfm`, so **markdown tables do not work**.
  Broken LaTeX throws and fails the build by design.
- `src/i18n.ts` + `src/messages/{tr,de,en}.ts` — hand-rolled i18n (no next-intl;
  `output: "export"` has no middleware). `tr.ts` is the reference dictionary and
  its type forces key parity on the other two.
- `src/app/[locale]/…` — this is the **root layout**; there is no
  `src/app/layout.tsx`. `params` is a Promise, `await` it.

# Verify before claiming done

```
npm run validate   # schema + point sums over every content JSON
npm run test       # validator's own tests
npm run build      # static export to out/ — LaTeX errors surface here
```
