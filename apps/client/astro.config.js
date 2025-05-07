// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";

import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
	site: "https://gerasimov.dev",
	trailingSlash: "never",
	scopedStyleStrategy: "class",
	i18n: {
		locales: ["en", "ru"],
		defaultLocale: "en",
	},
	integrations: [sitemap(), robotsTxt()],
	build: {
		assets: "assets",
	},
	server: {
		port: 3000,
		host: true,
	},
	devToolbar: {
		enabled: false,
	},
});
