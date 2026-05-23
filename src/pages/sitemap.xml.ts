import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { postPath } from '../utils/postUrl';
import { CATEGORIES } from '../consts';
import { SITE as SITE_CONFIG } from '../config';

const SITE = SITE_CONFIG.url.replace(/\/$/, '');

function xmlEscape(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

function urlEntry(loc: string, lastmod?: Date): string {
	const l = `<loc>${xmlEscape(loc)}</loc>`;
	const m = lastmod ? `<lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>` : '';
	return `<url>${l}${m}</url>`;
}

function slugify(s: string): string {
	return s.toLowerCase().replace(/\s+/g, '-');
}

export const GET: APIRoute = async () => {
	const posts = await getCollection('blog', ({ data }) => !data.draft);

	const latestOverall = posts.reduce<Date | undefined>((acc, p) => {
		const d = p.data.updatedDate ?? p.data.date;
		return !acc || d > acc ? d : acc;
	}, undefined);

	const latestByCategory = new Map<string, Date>();
	for (const p of posts) {
		const cat = p.id.split('/')[0];
		const d = p.data.updatedDate ?? p.data.date;
		const cur = latestByCategory.get(cat);
		if (!cur || d > cur) latestByCategory.set(cat, d);
	}

	const entries: string[] = [];
	entries.push(urlEntry(`${SITE}/`, latestOverall));
	entries.push(urlEntry(`${SITE}/about/`));

	for (const cat of Object.keys(CATEGORIES)) {
		entries.push(urlEntry(`${SITE}/${cat}/`, latestByCategory.get(cat)));
	}

	for (const post of posts) {
		const slug = slugify(postPath(post));
		const url = `${SITE}/${slug}/`;
		const lastmod = post.data.updatedDate ?? post.data.date;
		entries.push(urlEntry(url, lastmod));
	}

	const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.join('')}</urlset>`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
