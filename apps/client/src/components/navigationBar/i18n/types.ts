import type { navigationBarI18nKeys } from "#app/components/navigationBar/i18n/content.ts";

export type TNavigationBarI18nKeys = (typeof navigationBarI18nKeys)[number];

export type TNavigationBarI18n = Record<TNavigationBarI18nKeys, string>;
