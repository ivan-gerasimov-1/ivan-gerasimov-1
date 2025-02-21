import type { TLocale } from "#app/i18n/types.ts";

import { navigationBarI18nDictionary } from "#app/components/navigationBar/i18n/dictionary.ts";
import type { TNavigationBarI18nKeys } from "#app/components/navigationBar/i18n/types.ts";

export function translate(
	key: TNavigationBarI18nKeys,
	locale: TLocale
): string {
	return navigationBarI18nDictionary[locale][key];
}

export function createBoundTranslate(
	locale: TLocale
): (key: TNavigationBarI18nKeys) => string {
	return function (key: TNavigationBarI18nKeys): string {
		return translate(key, locale);
	};
}
