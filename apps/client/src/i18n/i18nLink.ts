import type { TLocale } from "#app/i18n/types.ts";

export function createI18nLink(baseLink: string, locale: TLocale) {
	if (locale === "en") {
		return baseLink;
	}

	if (baseLink === "/") {
		return `/${locale}`;
	}

	return `/${locale}${baseLink}`;
}
