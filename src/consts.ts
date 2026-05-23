// Re-exports from src/config.ts. Edit src/config.ts to customize.
// (This file exists for backward compatibility with existing imports.)
import { SITE, CATEGORIES } from "./config";

export const SITE_TITLE = SITE.title;
export const SITE_DESCRIPTION = SITE.description;
export const AUTHOR = SITE.author.name;
export { CATEGORIES };
