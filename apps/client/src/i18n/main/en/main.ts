import type { TMainContent } from "#app/i18n/main/types.ts";
import type { TPageMeta } from "#app/i18n/types.ts";

import { keywords } from "#app/i18n/keywords/en/keywords.ts";

export const meta: TPageMeta = {
	keywords: keywords.join(", "),

	description: "Ivan Gerasimov | Product Engineer",
	title: "Ivan Gerasimov | Product Engineer",
};

export const content: TMainContent = {
	name: "Ivan Gerasimov",
	role: "Product Engineer",
	description: `
		I build web applications that work like real software with domain models,
		offline capability and architecture that survives past the first pivot.
		<strong>10 years</strong> across startups in fintech, IoT, nonprofit and
		enterprise. <strong>TypeScript</strong>, <strong>React</strong>,
		<strong>Node.js</strong>. Equally comfortable leading a team technically
		or shipping alone.
	`,
	email: {
		to: "ivan@gerasimov.dev",
		label: "ivan@gerasimov.dev",
	},
	cv: {
		link: "/ivan-gerasimov_cv_senior-product-engineer.pdf",
		label: "Download CV",
	},
	socialLinks: {
		linkedin: {
			link: "https://linkedin.com/in/ivan-gerasimov",
			label: "LinkedIn profile",
		},
		github: {
			link: "https://github.com/ivan-gerasimov-1",
			label: "GitHub profile",
		},
	},
	companies: [
		{
			id: "apliteni",
			name: "Apliteni",
			years: "2025—2026",
		},
		{
			id: "fundraiseUp",
			name: "Fundraise Up",
			years: "2021—2024",
		},
		{
			id: "connio",
			name: "Connio",
			years: "2018—2021",
		},
		{
			id: "arm",
			name: "ARM",
			years: "2017—2018",
		},
		{
			id: "efResearch",
			name: "E&F Research",
			years: "2016—2017",
		},
		{
			id: "postcardAndTag",
			name: "Postcard&Tag",
			years: "2015—2016",
		},
	],
};
