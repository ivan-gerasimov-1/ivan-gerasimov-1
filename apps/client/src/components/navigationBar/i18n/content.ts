import { links } from "#app/components/navigationBar/content.ts";
import type { TNavigationBarI18nKeys } from "#app/components/navigationBar/i18n/types.ts";
import type { TLink } from "#app/components/navigationBar/types.ts";

export const navigationBarI18nKeys = links
	.filter((link) => link.type === "text")
	.map((link) => link.label);

export function getI18nLinks(
	t: (key: TNavigationBarI18nKeys) => string
): TLink[] {
	return links.map((link) => {
		let result: TLink = {
			...link,
		};

		if (link.type === "text") {
			result.label = t(link.label);
		}

		return result;
	});
}
