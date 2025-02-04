// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";

export default defineConfig({
	experimental: {
		svg: true,
	},
	image: {
		service: passthroughImageService(),
	},
});
