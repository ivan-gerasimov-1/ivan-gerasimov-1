// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://gerasimov.dev",
	experimental: {
		svg: true,
	},
	image: {
		service: passthroughImageService(),
	},
	i18n: {
		locales: ["en", "ru"],
		defaultLocale: "en",
	},
	integrations: [sitemap()],
});
