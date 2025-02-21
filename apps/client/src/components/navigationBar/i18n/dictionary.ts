import type { TNavigationBarI18n } from "#app/components/navigationBar/i18n/types.ts";
import type { TLocale } from "#app/i18n/types.ts";

import { navigationBarI18n as en } from "./en";
import { navigationBarI18n as ru } from "./ru";

export const navigationBarI18nDictionary: Record<TLocale, TNavigationBarI18n> =
	{
		en,
		ru,
	};
