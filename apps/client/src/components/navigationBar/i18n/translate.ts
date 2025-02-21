import type { TLocale } from "#app/i18n/types.ts";

export function translate<TKeys extends string>(
	key: TKeys,
	locale: TLocale,
	dictionary: Record<TLocale, Record<TKeys, string>>
): string {
	return dictionary[locale][key];
}

export function createBoundTranslate<TKeys extends string>(
	locale: TLocale,
	dictionary: Record<TLocale, Record<TKeys, string>>
): (key: TKeys) => string {
	return function (key: TKeys): string {
		return translate(key, locale, dictionary);
	};
}
