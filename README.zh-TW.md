# blog-template

[English](README.md) · 繁體中文

使用 Astro 開發的雙語部落格模板。支援 Markdown/MDX 內容、亮暗主題、RSS、sitemap、結構化資料。

實際範例：[gimmy.blog](https://gimmy.blog)

## 功能

- Markdown 與 MDX 內容，依分類路由
- 亮暗主題切換，自動偵測系統偏好
- 單篇可選的雙語切換（EN / 中文）
- RSS feed、sitemap、Open Graph、JSON-LD 結構化資料
- 靜態 HTML 輸出，runtime 不包含前端框架
- TypeScript content collections，frontmatter 帶型別

## 開始使用

至 [repository](https://github.com/0xGimmy/blog-template) 上方點選 **Use this template** 建立自己的版本，然後：

```sh
git clone https://github.com/<你>/<你的blog>.git
cd <你的blog>
npm install
npm run dev
```

開發伺服器運行於 `http://localhost:4321`。

## 設定

站台層級的設定集中於 [`src/config.ts`](src/config.ts)：

- `SITE.url`、`SITE.title`、`SITE.description`
- `SITE.lang` 與 `SITE.ogLocale`
- `SITE.author` — 名字、職稱、Email
- `SITE.social` — Twitter、GitHub、Substack、Mastodon
- `CATEGORIES` — 分類的 key、顯示名稱與描述

關於頁的內容位於 [`src/pages/about.astro`](src/pages/about.astro)。

## 靜態檔案

`public/` 中需替換的檔案：

| 檔案 | 用途 |
| --- | --- |
| `avatar.png` | 關於頁頭像 |
| `og-default.png` | 預設社群分享圖（1200×630） |
| `favicon.ico`、`favicon-*.png`、`apple-touch-icon.png` | Favicons |
| `site.webmanifest` | Web app manifest |
| `fonts/*.woff2` | `src/styles/global.css` 中引用的字型 |

## 撰寫文章

文章放於 `src/content/<分類>/` 下的 `.md` 或 `.mdx` 檔。資料夾名稱對應分類；檔名作為 URL slug（可由 frontmatter 的 `urlSlug` 覆寫）。

```
src/content/
├── article/
├── thought/
└── reading/
```

新增或更名分類時，請編輯 `src/config.ts` 中的 `CATEGORIES`，並對齊資料夾名稱。

Frontmatter 的 schema 定義於 [`src/content.config.ts`](src/content.config.ts)。可參考範例文章：

| 檔案 | 示範 |
| --- | --- |
| `welcome.mdx` | 最簡範例 |
| `example-article.mdx` | 完整 frontmatter 參考 |
| `bilingual-example.mdx` | 雙語切換 |
| `example-reading.mdx` | 短篇閱讀筆記 |

`draft: true` 可將文章排除於列表與路由之外。

## 客製化設計

- **配色** — CSS custom properties 位於 [`src/styles/global.css`](src/styles/global.css) 頂部。`:root` 為亮色主題，`:root.dark` 為暗色主題。
- **字型** — 同一檔案內的 `body { font-family: ... }`。
- **排版** — 首頁位於 [`src/pages/index.astro`](src/pages/index.astro)，單篇文章位於 [`src/layouts/BlogPost.astro`](src/layouts/BlogPost.astro)。

## 編譯與部署

```sh
npm run build
npm run preview
```

靜態輸出可部署至 Vercel、Netlify、Cloudflare Pages、GitHub Pages 或任何靜態主機。

## 致謝

設計參考自：

- [guiltygyoza](https://x.com/guiltygyoza) — 首頁
- [Vitalik Buterin](https://x.com/VitalikButerin) — 單篇排版
- [Arnaud](https://x.com/Arnaudschenk) — 關於頁
- [李自然](https://x.com/nateleex) 的 [Effie](https://www.effie.co/) — 字體與配色

## License

[MIT](LICENSE)
