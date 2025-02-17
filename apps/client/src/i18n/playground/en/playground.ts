import type { TPageMeta } from "#app/i18n/types.ts";

import { keywords } from "#app/i18n/keywords/en/keywords.ts";

export const meta: TPageMeta = {
	keywords: keywords.join(", "),

	description: "Ivan Gerasimov | Software Engineer (JavaScript, Fullstack)",
	title: "Ivan Gerasimov | Experiments",
};
