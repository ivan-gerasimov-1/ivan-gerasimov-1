import type { TMainContent } from "#app/i18n/main/types.ts";
import type { TPageMeta } from "#app/i18n/types.ts";

import { keywords } from "#app/i18n/keywords/en/keywords.ts";

export const meta: TPageMeta = {
	keywords: keywords.join(", "),

	description: "Ivan Gerasimov | Software Engineer (JavaScript, Fullstack)",
	title: "Ivan Gerasimov | Software Engineer",
};

export const content: TMainContent = {
	name: "Ivan Gerasimov",
	role: "Software Engineer (JavaScript, Fullstack)",
	description: `
		<strong>Senior Fullstack Engineer with 9 years of experience.</strong> Specializing in
		development using <strong>TypeScript</strong>, <strong>React</strong> and <strong>Node.js</strong>, as well as web
		application architecture design, including local-first apps with
		extensive client-side logic. Experienced in team management, process
		establishment and cross-team collaboration in a large-scale product.
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
