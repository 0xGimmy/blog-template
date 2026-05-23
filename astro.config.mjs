// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkPangu from "remark-pangu";

const remarkPlugins = [remarkPangu];

/** @type {import('@astrojs/mdx').MdxOptions['rehypePlugins']} */
const rehypePlugins = [
	rehypeSlug,
	[rehypeAutolinkHeadings, {
		behavior: 'append',
		properties: {
			class: 'heading-link',
			ariaLabel: 'Link to this heading'
		},
		content: {
			type: 'text',
			value: ' #'
		}
	}]
];

// Note: astro.config.mjs runs before TS compilation, so we duplicate the site URL
// here rather than importing from src/config.ts. Keep these in sync.
export default defineConfig({
	site: 'https://example.com/',
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'hover',
	},
	integrations: [
		mdx({
			remarkPlugins: remarkPlugins,
			rehypePlugins: rehypePlugins
		})
	],
	markdown: {
		// @ts-ignore
		remarkPlugins: remarkPlugins,
		// @ts-ignore
		rehypePlugins: rehypePlugins
	},
	vite: {
    plugins: [tailwindcss()],
  },
});
