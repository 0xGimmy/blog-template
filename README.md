# blog-template

[English](README.md) · [繁體中文](README.zh-TW.md)

A bilingual blog template built with Astro. Markdown/MDX content, light and dark themes, RSS, sitemap, and structured data.

Live example: [gimmy.blog](https://gimmy.blog)

## Features

- Markdown and MDX content with category-based routing
- Light and dark themes with system preference detection
- Optional per-post bilingual toggle (EN / 中文)
- RSS feed, sitemap, Open Graph tags, JSON-LD structured data
- Static HTML output, no client-side framework runtime
- TypeScript content collections with a typed frontmatter schema

## Getting started

Click **Use this template** at the top of the [repository](https://github.com/0xGimmy/blog-template) to create your own copy, then:

```sh
git clone https://github.com/<you>/<your-blog>.git
cd <your-blog>
npm install
npm run dev
```

The development server runs at `http://localhost:4321`.

## Configuration

Site-level settings are centralized in [`src/config.ts`](src/config.ts):

- `SITE.url`, `SITE.title`, `SITE.description`
- `SITE.lang` and `SITE.ogLocale`
- `SITE.author` — name, role, email
- `SITE.social` — Twitter, GitHub, Substack, Mastodon
- `CATEGORIES` — section keys, display names, and descriptions

The about-page bio is in [`src/pages/about.astro`](src/pages/about.astro).

## Static assets

Replace the following files in `public/`:

| File | Purpose |
| --- | --- |
| `avatar.png` | About-page portrait |
| `og-default.png` | Default social-share image (1200×630) |
| `favicon.ico`, `favicon-*.png`, `apple-touch-icon.png` | Favicons |
| `site.webmanifest` | Web app manifest |
| `fonts/*.woff2` | Web fonts referenced in `src/styles/global.css` |

## Writing posts

Posts live in `src/content/<category>/` as `.md` or `.mdx` files. The folder name maps to the category; the filename becomes the URL slug (override with `urlSlug` in frontmatter).

```
src/content/
├── article/
├── thought/
└── reading/
```

To add or rename a category, edit `CATEGORIES` in `src/config.ts` and rename the matching folder.

The frontmatter schema is defined in [`src/content.config.ts`](src/content.config.ts). Reference posts:

| File | Demonstrates |
| --- | --- |
| `welcome.mdx` | Minimal post |
| `example-article.mdx` | Full frontmatter reference |
| `bilingual-example.mdx` | Bilingual toggle |
| `example-reading.mdx` | Short reading note |

Set `draft: true` to exclude a post from listings and routes.

## Customizing the design

- **Colors** — CSS custom properties at the top of [`src/styles/global.css`](src/styles/global.css). Light theme on `:root`, dark theme on `:root.dark`.
- **Typography** — the `body { font-family: ... }` rule in the same file.
- **Layouts** — home in [`src/pages/index.astro`](src/pages/index.astro), single post in [`src/layouts/BlogPost.astro`](src/layouts/BlogPost.astro).

## Building and deploying

```sh
npm run build
npm run preview
```

The static output deploys to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static host.

## Credits

The design draws from:

- [guiltygyoza](https://x.com/guiltygyoza) — home page
- [Vitalik Buterin](https://x.com/VitalikButerin) — single-post layout
- [Arnaud](https://x.com/Arnaudschenk) — about page
- [Effie](https://www.effie.co/) by [李自然](https://x.com/nateleex) — typography and color palette

## License

[MIT](LICENSE)
