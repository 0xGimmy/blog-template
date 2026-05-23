# blog-template

[English](README.md) · [繁體中文](README.zh-TW.md)

The Astro setup behind [gimmy.blog](https://gimmy.blog), with my writing taken out. To see the design in use, go to [gimmy.blog](https://gimmy.blog).

## Run it

```
git clone https://github.com/<you>/<your-blog>.git
cd <your-blog>
npm install
npm run dev
```

Open `http://localhost:4321`.

If you want your own GitHub repo to start from, hit the green "Use this template" button up top first, then clone your copy.

## Make it yours

One file you actually need to edit: [`src/config.ts`](src/config.ts). Name, URL, language, social links, categories — they all read from there.

The about-page bio is in [`src/pages/about.astro`](src/pages/about.astro). Astro + HTML, write what you want.

In `public/`, replace:

- `avatar.png`
- `og-default.png` (1200×630, the image people see when they share a link to your blog on Twitter and the like)
- the favicons
- `site.webmanifest`

For different fonts, drop `.woff2` files into `public/fonts/`, then update the `@font-face` rules and the `body { font-family }` in [`src/styles/global.css`](src/styles/global.css).

## Writing posts

Drop `.md` or `.mdx` files into `src/content/<category>/`. The folder name is the category. The filename is the URL slug.

```
src/content/
├── article/
├── thought/
└── reading/
```

To add or rename categories, edit `CATEGORIES` in `src/config.ts` and rename the folder to match.

Four example posts are already in there. Read them before writing your own — they cover the frontmatter options, the EN/中文 toggle, and what a basic post looks like.

`draft: true` in the frontmatter hides a post.

## Tweaking the design

Three files cover most of it. Read them first.

[`src/styles/global.css`](src/styles/global.css) — colors are CSS variables at the top (`:root` for light, `:root.dark` for dark). Fonts are in the `body` rule.

[`src/pages/index.astro`](src/pages/index.astro) — the home page.

[`src/layouts/BlogPost.astro`](src/layouts/BlogPost.astro) — single-post layout.

## Deploy

```
npm run build
```

Static HTML output. Drop it on Vercel, Netlify, Cloudflare Pages, GitHub Pages — wherever.

## Where the design came from

The design is stitched together from a few people whose sites I read all the time:

- Home page — [guiltygyoza](https://x.com/guiltygyoza)
- Single-post layout — [Vitalik](https://x.com/VitalikButerin)
- About page — [Arnaud](https://x.com/Arnaudschenk)
- Typography and color — [Effie](https://www.effie.co/), made by [李自然](https://x.com/nateleex)

## License

[MIT](LICENSE).
