# blog-template

**English** · [繁體中文](README.zh-TW.md)

The code behind [gimmy.blog](https://gimmy.blog), without the writing. Built with Astro.

Live demo: **[gimmy.blog](https://gimmy.blog)** — what this template renders to once you fill it with your own content.

## What's in it

- Markdown / MDX posts, grouped into categories.
- Light and dark themes.
- An optional EN / 中文 toggle for posts you've written in two languages.
- RSS, sitemap, OG tags, JSON-LD — the SEO basics.
- No frontend framework at runtime. Static HTML, fast.

## Get started

Click the green **"Use this template"** button at the top of [this repo](https://github.com/0xGimmy/blog-template). Then:

```sh
git clone https://github.com/<you>/<your-blog>.git
cd <your-blog>
npm install
npm run dev
```

Open http://localhost:4321.

## Make it yours

Open [`src/config.ts`](src/config.ts). It's the only file you have to edit. Name, URL, language, social links, categories — all there.

The about-page bio lives in [`src/pages/about.astro`](src/pages/about.astro). Write whatever you want; it's just Astro + HTML.

Swap the placeholders in `public/`:

- `avatar.png` — your face
- `og-default.png` — fallback social-share image (1200×630)
- the favicons and `site.webmanifest`

Want different fonts? Drop `.woff2` files into `public/fonts/` and update the `@font-face` rules in [`src/styles/global.css`](src/styles/global.css).

## Writing posts

`.md` or `.mdx` files go under `src/content/<category>/`. The folder name is the category; the filename becomes the URL slug.

```
src/content/
├── article/
├── thought/
└── reading/
```

Rename or add categories by editing `CATEGORIES` in `src/config.ts` and renaming the folders to match.

Four example posts are already there — read them, they're the docs:

- `welcome.mdx` — the simplest case.
- `example-article.mdx` — every frontmatter field explained.
- `bilingual-example.mdx` — how the EN / 中文 toggle works.
- `example-reading.mdx` — short reading note.

Hide a draft with `draft: true` in the frontmatter.

## Changing the design

- **Colors** — CSS variables at the top of [`src/styles/global.css`](src/styles/global.css). `:root` is light, `:root.dark` is dark.
- **Fonts** — the `body { font-family: ... }` rule in the same file.
- **Layout** — the home grid lives in [`src/pages/index.astro`](src/pages/index.astro); single-post layout is [`src/layouts/BlogPost.astro`](src/layouts/BlogPost.astro). Both files are short. Read them before reaching for abstractions.

## Build and deploy

```sh
npm run build
npm run preview
```

Output is plain static files. Deploys to Vercel, Netlify, Cloudflare Pages, GitHub Pages, a $5 VPS, or your friend's old Mac mini.

## Credits

The design is stitched together from a few sources I read every day:

- The home page is copied from [**guiltygyoza**](https://x.com/guiltygyoza)'s personal site.
- The single-post layout is copied from [**Vitalik Buterin**](https://x.com/VitalikButerin)'s blog.
- The about page is copied from [**Arnaud**](https://x.com/Arnaudschenk)'s personal site.
- The typography and color palette are copied from **Effie**, made by [**李自然**](https://x.com/nateleex).

If this template ends up useful to you, go look at their work too.

## License

[MIT](LICENSE). Fork it, change it, no attribution needed.
