import type { CollectionEntry } from "astro:content";

export function postPath(post: CollectionEntry<"blog">): string {
	if (post.data.urlSlug) {
		const category = post.id.split("/")[0];
		return `${category}/${post.data.urlSlug}`;
	}
	return post.id;
}
