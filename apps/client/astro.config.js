// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";

export default defineConfig({
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
});
