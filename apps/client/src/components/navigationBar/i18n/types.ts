import type { navigationBarI18n } from "#app/components/navigationBar/i18n/en.ts";

export type TNavigationBarI18nKeys = keyof typeof navigationBarI18n;

export type TNavigationBarI18n = Record<TNavigationBarI18nKeys, string>;
