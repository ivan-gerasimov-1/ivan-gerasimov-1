import type { TMainContent } from "#app/i18n/main/types.ts";
import type { TPageMeta } from "#app/i18n/types.ts";

export const meta: TPageMeta = {
	keywords: [
		"frontend",
		"front-end",
		"front end",
		"developer",
		"engineer",
		"software",
		"software engineer",
		"software developer",
		"javascript",
		"typescript",
		"js",
		"ts",
		"react",
		"reactjs",
		"vue",
		"vuejs",
		"vue.js",
		"node",
		"node.js",
		"nodejs",
		"domain driven design",
		"ddd",
		"clean architecture",
		"solid",
		"oop",
		"object oriented programming",
	].join(", "),

	description: "Иван Герасимов | Senior Frontend Developer (Fullstack)",
	title: "Иван Герасимов | Software Engineer",
};

export const content: TMainContent = {
	name: "Иван Герасимов",
	role: "Fullstack Разработчик (JavaScript)",
	description: `
		<strong>Senior Fullstack разработчик с 9 годами опыта.</strong>
		Специализируюсь на разработке с использованием <strong>TypeScript</strong>,
		<strong>React</strong> и <strong>Node.js</strong>, а также на
		проектировании архитектуры веб-приложений, включая local-first с большим
		количеством логики на клиенте. Имею опыт управления командой, выстраивания
		процессов и кросс-командного взаимодействия в крупном продукте.
	`,
	email: {
		to: "ivan@gerasimov.dev",
		label: "ivan@gerasimov.dev",
	},
	cv: {
		link: "/ivan-gerasimov_cv_senior-fullstack-javascript_ru.pdf",
		label: "Скачать резюме",
	},
	socialLinks: {
		linkedin: {
			link: "https://linkedin.com/in/ivan-gerasimov",
			label: "Профиль LinkedIn",
		},
		github: {
			link: "https://github.com/ivan-gerasimov-1",
			label: "Профиль GitHub",
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
			name: "EF Research",
			years: "2016—2017",
		},
		{
			id: "postcardAndTag",
			name: "Postcard & Tag",
			years: "2015—2016",
		},
	],
};
