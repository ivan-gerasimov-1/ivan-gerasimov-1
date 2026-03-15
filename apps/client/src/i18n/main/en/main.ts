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
		<strong>Product Engineer</strong> with <strong>10 years ofexperience
		</strong> building web applications with <strong>TypeScript</strong>,
		<strong>React</strong> and <strong>Node.js</strong>.
		I focus on architecture, rich client-side logic and local-first apps.
		I also have experience in team leadership, improving engineering processes,
		and working across teams in large-scale products.
	`,
	email: {
		to: "ivan@gerasimov.dev",
		label: "ivan@gerasimov.dev",
	},
	cv: {
		link: "/ivan-gerasimov_cv_senior-fullstack-javascript.pdf",
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
