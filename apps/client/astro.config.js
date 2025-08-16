// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
	site: "https://gerasimov.dev",
	trailingSlash: "never",
	scopedStyleStrategy: "class",

	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [sitemap(), robotsTxt()],

	build: {
		assets: "assets",
	},

	i18n: {
		locales: ["en", "ru"],
		defaultLocale: "en",
	},

	server: {
		port: 3000,
		host: true,
	},

	devToolbar: {
		enabled: false,
	},
});
