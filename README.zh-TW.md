# blog-template

[English](README.md) · 繁體中文

[gimmy.blog](https://gimmy.blog) 在用的 Astro setup，我寫的東西都拿掉了。要看實際長相，去 [gimmy.blog](https://gimmy.blog)。

## 跑起來

```
git clone https://github.com/<你>/<你的blog>.git
cd <你的blog>
npm install
npm run dev
```

開 `http://localhost:4321`。

想要自己的 GitHub repo，就先按上面那顆綠色的 "Use this template"，再 clone 你自己的版本。

## 改成你的

唯一一個非改不可的檔案是 [`src/config.ts`](src/config.ts)。名字、網址、語言、社群連結、分類，都從這裡讀。

關於頁的自我介紹寫在 [`src/pages/about.astro`](src/pages/about.astro)。就是 Astro + HTML，想寫什麼寫什麼。

`public/` 裡面換掉這幾個：

- `avatar.png`
- `og-default.png`（1200×630，別人在 Twitter 之類的地方分享你 blog 連結時看到的圖）
- favicons
- `site.webmanifest`

要換字型的話，`.woff2` 檔案丟到 `public/fonts/`，然後改 [`src/styles/global.css`](src/styles/global.css) 裡的 `@font-face` 跟 `body { font-family }`。

## 寫文章

`.md` 或 `.mdx` 檔放到 `src/content/<分類>/` 下面。資料夾名就是分類，檔名就是 URL slug。

```
src/content/
├── article/
├── thought/
└── reading/
```

新增或更名分類，改 `src/config.ts` 裡的 `CATEGORIES`，再把資料夾改成一樣的名字。

裡面已經有四篇範例，寫之前先看那四篇。frontmatter 有什麼欄位、雙語切換怎麼用、最基本的文章長什麼樣，都在裡面。

不想公開的草稿，frontmatter 寫 `draft: true` 就藏起來了。

## 改設計

三個檔案搞定大部分，動手前先看一遍。

[`src/styles/global.css`](src/styles/global.css) — 配色是最上面的 CSS 變數，`:root` 亮色、`:root.dark` 暗色。字型在 `body` 規則裡。

[`src/pages/index.astro`](src/pages/index.astro) — 首頁排版。

[`src/layouts/BlogPost.astro`](src/layouts/BlogPost.astro) — 單篇文章的排版。

## 部署

```
npm run build
```

輸出純靜態 HTML，Vercel、Netlify、Cloudflare Pages、GitHub Pages 都行，丟哪都可以。

## 設計從哪來

整個網站的設計，縫合自幾個我日常的資訊源：

- 首頁是抄 [guiltygyoza](https://x.com/guiltygyoza) 的
- 單篇的佈局是抄 [Vitalik](https://x.com/VitalikButerin) 的
- 關於頁面是抄 [Arnaud](https://x.com/Arnaudschenk) 的
- 字體跟配色是抄 [李自然](https://x.com/nateleex) 做的 [Effie](https://www.effie.co/)

## License

[MIT](LICENSE)。
