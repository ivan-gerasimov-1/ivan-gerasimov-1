import type { TCVContent, TSectionTitle } from "#app/i18n/cv/types.ts";
import type { TPageMeta } from "#app/i18n/types.ts";

import { keywords } from "#app/i18n/keywords/en/keywords.ts";

export const meta: TPageMeta = {
	keywords: keywords.join(", "),

	description: "Ivan Gerasimov | Software Engineer, CV",
	title: "Ivan Gerasimov | CV",
};

export const sectionTitle: TSectionTitle = {
	about: "About",
	languages: "Languages",
	employmentHistory: "Employment history",
	skills: "Skills",
	education: "Education",
	additionalActivities: "Additional activities",
};

export const content: TCVContent = {
	name: "Ivan Gerasimov",
	occupation: "Software Engineer (JavaScript, Fullstack)",
	about: `
	<strong>Senior Fullstack Engineer with 9 years of experience.</strong>
	Specializing in development using <strong>TypeScript</strong>,
	<strong>React</strong> and <strong>Node.js</strong>, as well as web
	application architecture design, including local-first apps with
	extensive client-side logic. Experienced in team management, process
	establishment and cross-team collaboration in a large-scale product.
	`,
	location: "Tbilisi, Georgia",
	links: [
		{
			url: "https://gerasimov.dev",
			title: "gerasimov.dev",
		},
		{
			url: "https://linkedin.com/in/ivan-gerasimov",
			title: "linkedin.com/in/ivan-gerasimov",
		},
		{
			url: "https://github.com/ivan-gerasimov-1",
			title: "github.com/ivan-gerasimov-1",
		},
	],
	contacts: [
		{
			label: "Email",
			contact: "ivan@gerasimov.dev",
		},
		{
			label: "Telegram",
			contact: "@IvanGerasimow",
		},
	],

	languages: [
		{
			name: "Russian",
			level: "Native",
		},
		{
			name: "English",
			level: "Professional working proficiency",
		},
	],

	skills: [
		"JavaScript",
		"TypeScript",
		"React",
		"TanStack/Query",
		"Zustand",
		"Redux",
		"Vue",
		"Vuex",
		"Node.js",
		"Express",
		"Fastify",
		"Hono",
		"Vite",
		"Webpack",
		"Vitest",
		"Jest",
		"Mocha",
		"Chai",
		"Sinon",
		"Docker",
		"git",
		"GitHub",
		"GitHub Actions",
		"GitLab",
		"GitLab CI",
		"Cloudflare",
		"Linux",
		"Hetzner",
		"MongoDB",
		"Clean Architecture",
		"Domain Driven Design",
		"Local-First",
		"Frontend",
		"Backend",
		"Fullstack",
		"CI/CD",
	],

	employmentHistory: [
		{
			company: "Fundraise Up, USA",
			position: "Fullstack Engineer",
			years: "January 2021 — February 2024",
			additional: "Team Lead, Tech Lead",
			summary: `
			I was a part of the checkout team - the core product used daily by
			millions of people (3M DAU by the end of 2022). Over 1.5 years, grew
			from a developer to leading a team of 5 people. Designed frontend
			application architecture, planned new feature implementations, wrote
			technical documentation, and managed the team.
			`,
			achievements: [
				`
				Led the implementation of internationalization across the
				company's entire stack: designed frontend/backend architecture,
				coordinated 4 development teams, and established a continuous
				delivery process for new translations to production. The company
				began expansion into markets beyond the US and Canada
				`,
				`
				Designed local-first architecture and migrated the product from
				Vue to React. After successful MVP, became the team lead of the
				group that completed development and implementation, becoming
				the core product development team. Clean architecture enabled
				complete separation of business logic from UI, improving
				stability and accelerating releases
				`,
				`
				Launched a new product based on extracted checkout business
				logic with minimal changes. This allowed clients to choose
				different checkout versions without increasing development
				complexity and time
				`,
			],
			skills: `
			#react #testing-library #vue #vuex #storybook #webpack #node.js #koa
			#nestjs #mongodb #clickhouse #sentry #stripe #domain-driven-design
			#clean-architecture
			`,
		},
		{
			company: "Connio, Canada",
			position: "Frontend Engineer",
			years: "June 2018 — January 2021",
			additional: "",
			summary: `
			Joined the company as a UI Developer for a specific project, but graduallytook over all frontend development, including Node.js. Worked both under the guidance of a Lead UI Developer and led a team of three developers. In the final year, worked directly with the founder and CTO, participating in discussions related to the user interface and overall product development.
			`,
			achievements: [
				`
				Optimized the company's main application, reducing memory consumption from several gigabytes to hundreds of megabytes
				`,
				`
				Designed and launched additional company projects tailored to individual client business needs
				`,
				`
				Developed a VS Code extension that integrated core functionality of the main application, significantly simplifying client workflows
				`,
			],
			skills: `
			#react #react-router #redux #redux-thunk #react-hook-form #node.js #angularjs #vue #express.js #koa #vscode-extension #node-red #docker #pm2 #gocd
			`,
		},
		{
			company: "ARM, United Kingdom",
			position: "Frontend Engineer",
			years: "May 2017 — June 2018",
			additional: "",
			summary: `
			As a Lead Developer, collaborated with ARM's development and management teams to create the user interface for Kigen - a new platform for enterprise eSIM management.
			`,
			achievements: [
				`
				Designed the application foundation and created an MVP for presentations, which secured funding and enabled further project development
				`,
				`
				Coordinated the work of three UI developers
				`,
				`
				Delivered multiple releases over a year, bringing the UI to a state that met ARM's internal customer requirements
				`,
			],
			skills: `
			#react #react-router #redux-saga #styled-components #node.js #koa #web-sockets
			`,
		},
		{
			company: "E&F Research, Canada",
			position: "Frontend Engineer",
			years: "April 2016 — May 2017",
			additional: "",
			summary: `
			Focused on developing user interfaces for various projects. Core tech stack included AngularJS, React Native, and Cordova. Created interfaces adapted for different platforms and client business requirements.
			`,
			achievements: [
				`
				Mobile app in React Native for company incident response
				`,
				`
				Dashboard for Canadian Cricket League to assist with team and event organization
				`,
				`
				Dashboard for oil trading company
				`,
				`
				Cordova-based app for field staff (object photography, geolocation, time tracking)
				`,
			],
			skills: `
			#angularjs #react #react-native #redux #gulp #webpack #node.js #cordova #gocd
			`,
		},
		{
			company: "Postcard & Tag, Singapore",
			position: "Frontend Engineer",
			years: "August 2015 — January 2016",
			additional: "",
			summary: `
			Started my career as a UI Developer, focusing on HTML/CSS development. Gradually transitioned to refactoring legacy JavaScript code, and then to developing new features using AngularJS and partially React.
			`,
			achievements: [
				`
				Improved project's markup quality by making it more structured
				`,
				`
				Integrated Mixpanel analytics service into the project
				`,
				`
				Designed and developed a hotel booking module
				`,
				`
				Optimized Gulp.js build process, reducing build time from 1.5 minutes to tens of seconds
				`,
			],
			skills: `
			#angularjs #gulp #react #webpack #html #css #pug #less
			`,
		},
	],

	additionalActivities: [
		{
			company: "SPB Frontend",
			position: "Meetup Organizer",
			years: "2019 — 2022",
			summary: `
			Organized more than 5 meetups for frontend developers as part
			of the SPB Frontend team. Each meetup attracted between
			100 and 200 participants
			`,
		},
	],

	education: [
		{
			institution:
				"Samara State Aerospace University, Applied Mathematics and Computer Science",
			years: "2009—2013",
		},
		{
			institution: "Samara State Aerospace Lyceum",
			years: "2007—2009",
		},
	],
};
