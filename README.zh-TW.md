# blog-template

[English](README.md) · **繁體中文**

[gimmy.blog](https://gimmy.blog) 背後的程式碼，不含我寫的文章。用 Astro 寫的。

實際長相直接看 **[gimmy.blog](https://gimmy.blog)** — 你填上自己的內容後，這個模板就是這個樣子。

## 有什麼

- Markdown / MDX 文章，依分類組織。
- 明暗主題切換。
- 雙語切換（EN / 中文），給有翻譯版本的文章用。
- RSS、sitemap、OG tags、JSON-LD，SEO 基本款。
- 沒有前端框架 runtime。輸出靜態 HTML，跑得快。

## 開始

到 [這個 repo](https://github.com/0xGimmy/blog-template) 按上方綠色的 **"Use this template"** 按鈕，然後：

```sh
git clone https://github.com/<你>/<你的blog>.git
cd <你的blog>
npm install
npm run dev
```

開 http://localhost:4321。

## 改成你的

打開 [`src/config.ts`](src/config.ts)，這是唯一一個你需要改的設定檔。名字、網址、語言、社群連結、分類，全在裡面。

關於頁的自我介紹寫在 [`src/pages/about.astro`](src/pages/about.astro)。想寫什麼就寫什麼，就是 Astro + HTML。

`public/` 裡換掉這幾個 placeholder：

- `avatar.png` — 你的大頭照
- `og-default.png` — 預設的社群分享圖（1200×630）
- favicons 和 `site.webmanifest`

想換字型？把 `.woff2` 檔案丟進 `public/fonts/`，再改 [`src/styles/global.css`](src/styles/global.css) 裡的 `@font-face` 規則。

## 寫文章

`.md` 或 `.mdx` 檔放在 `src/content/<分類>/` 底下。資料夾名稱就是分類；檔名變成 URL slug。

```
src/content/
├── article/
├── thought/
└── reading/
```

要新增或更名分類，去改 `src/config.ts` 的 `CATEGORIES`，再把資料夾名稱對齊。

範例文章已經放了四篇，直接看就知道怎麼寫：

- `welcome.mdx` — 最簡單的版本。
- `example-article.mdx` — 所有 frontmatter 欄位的說明。
- `bilingual-example.mdx` — 雙語切換的用法。
- `example-reading.mdx` — 短篇閱讀筆記。

不想公開的草稿，frontmatter 寫 `draft: true` 就會被隱藏。

## 改設計

- **配色** — CSS 變數在 [`src/styles/global.css`](src/styles/global.css) 最上面。`:root` 是亮色，`:root.dark` 是暗色。
- **字型** — 同一個檔案裡的 `body { font-family: ... }`。
- **佈局** — 首頁排版在 [`src/pages/index.astro`](src/pages/index.astro)，單篇排版在 [`src/layouts/BlogPost.astro`](src/layouts/BlogPost.astro)。兩個檔案都很短，動手前先看一遍。

## Build 與部署

```sh
npm run build
npm run preview
```

輸出純靜態檔，哪裡都能放：Vercel、Netlify、Cloudflare Pages、GitHub Pages、$5 的 VPS、朋友家裡那台舊 Mac mini。

## 致謝

整個網站的設計，縫合自幾個我日常的資訊源：

- 首頁是抄 [**guiltygyoza**](https://x.com/guiltygyoza) 的。
- 單篇文章的佈局是抄 [**Vitalik Buterin**](https://x.com/VitalikButerin) 的。
- 關於頁面是抄 [**Arnaud**](https://x.com/Arnaudschenk) 的。
- 字體與配色是抄 [**李自然**](https://x.com/nateleex) 做的 **Effie**。

如果這個模板對你有用，順便去看看他們的東西。

## License

[MIT](LICENSE)。隨便 fork、改，不用標示出處。
