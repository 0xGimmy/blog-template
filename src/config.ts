// Edit this file to make the blog yours.
// Everything personal (site title, URLs, social links, categories) lives here.

export const SITE = {
  // Used by canonical URLs, sitemap, OG tags, JSON-LD.
  // No trailing slash style choice — use the same form everywhere.
  url: "https://example.com",

  title: "My Blog",
  description: "A personal blog about ideas, work, and life.",

  // HTML lang attribute + OG locale (e.g. "en", "zh-TW", "ja", "fr").
  lang: "en",
  ogLocale: "en_US",

  author: {
    name: "Your Name",
    // Used on the About page and structured data.
    role: "What you do / who you are",
    email: "you@example.com",
  },

  // Used by JSON-LD `sameAs` and the About page link list.
  // Set any unused entry to undefined or remove it.
  social: {
    twitter: "https://x.com/yourhandle",
    twitterHandle: "@yourhandle", // used for twitter:creator meta
    github: "https://github.com/yourhandle",
    substack: undefined as string | undefined,
    mastodon: undefined as string | undefined,
  },

  // Default Open Graph image, served from /public.
  defaultOgImage: "/og-default.png",
} as const;

// Categories define the top-level sections of the blog.
// Posts live in `src/content/<category>/<slug>.mdx` — the folder name IS the category key.
// Add or remove categories freely; just keep the folder structure in sync.
export const CATEGORIES: Record<string, { display: string; description: string }> = {
  article: {
    display: "article",
    description: "Long-form essays and original research.",
  },
  thought: {
    display: "thought",
    description: "Short notes, reflections, and life observations.",
  },
  reading: {
    display: "reading",
    description: "Book notes and reading reactions.",
  },
  note: {
    display: "note",
    description: "Quick references and learning notes.",
  },
};
