import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		urlSlug: z.string().optional(),
		subtitle: z.string().optional(),
		description: z.string().optional(),
		// Transform string to Date object
		date: z.coerce.date(),
		written: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		bilingual: z.coerce.boolean().optional().default(false),
		titleZh: z.string().optional(),
		subtitleZh: z.string().optional(),
		draft: z.coerce.boolean().optional().default(false),
	}),
});

export const collections = { blog };
