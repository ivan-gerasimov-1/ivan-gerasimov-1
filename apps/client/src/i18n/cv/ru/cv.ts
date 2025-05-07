import type { TCVContent, TSectionTitle } from "#app/i18n/cv/types.ts";
import type { TPageMeta } from "#app/i18n/types.ts";

import { keywords } from "#app/i18n/keywords/ru/keywords.ts";

export const meta: TPageMeta = {
	keywords: keywords.join(", "),

	description: "Резюме Senior Frontend Developer — Иван Герасимов",
	title: "Иван Герасимов | Резюме",
};

export const sectionTitle: TSectionTitle = {
	about: "Обо мне",
	languages: "Языки",
	employmentHistory: "Опыт работы",
	skills: "Навыки",
	education: "Образование",
	additionalActivities: "Дополнительная активность",
};

export const content: TCVContent = {
	name: "Иван Герасимов",
	occupation: "Fullstack Разработчик (JavaScript)",
	about: `
		<strong>Senior Fullstack разработчик с 9 годами опыта.</strong>
		Специализируюсь на разработке с использованием <strong>TypeScript</strong>,
		<strong>React</strong> и <strong>Node.js</strong>, а также на проектировании
		архитектуры веб-приложений, включая local-first с большим количеством логики
		на клиенте. Имею опыт управления командой, выстраивания процессов и
		кросс-командного взаимодействия в крупном продукте.
	`,
	location: "Белград, Сербия",
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
			url: "mailto:ivan@gerasimov.dev",
		},
		{
			label: "Телеграм",
			contact: "@IvanGerasimow",
			url: "https://t.me/IvanGerasimow",
		},
	],

	languages: [
		{
			name: "Русский",
		},
		{
			name: "Английский",
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
			company: "Apliteni, Эстония",
			position: "Frontend-разработчик",
			years: "Март 2025 — По настоящее время",
			summary: "",
			skills: `
			#javascript #typescript #react #zustand #tanstack-query #react-query
			#vite #vitest #testing-library #webpack #node.js #framer #sentry
			`,
		},
		{
			company: "Fundraise Up, США",
			position: "Fullstack-разработчик",
			years: "Январь 2021 — Февраль 2024 ",
			additional: "Тимлид, Техлид",
			summary: `
				Работал в команде чекаута — основного продукта, который ежедневно
				используют миллионы людей (3M DAU на конец 2022 года). За 1.5 года
				вырос из разработчика до руководителя команды из 5 человек. Проектировал
				архитектуру фронтенд-приложений, продумывал планы реализации новой
				функциональности, писал техническую документацию и руководил командой.
			`,
			achievements: [
				`
					Руководил внедрением интернационализации в весь стэк компании:
					спроектировал фронтенд/бэкенд архитектуру, координировал 4 команды
					разработки, выстроил процесс непрерывной доставки новых переводов
					на продакшен. Компания начала расширение на рынки вне США и Канады
				`,
				`
					Спроектировал local-first архитектуру и перевёл продукт с Vue на React.
					После успешного MVP стал тимлидом команды, которая завершила разработку
					и внедрение, став основной командой разработки продукта. Благодаря
					чистой архитектуре бизнес-логика была полностью отделена от UI, что
					повысило стабильность и ускорило релизы
				`,
				`
				Запустил новый продукт на основе выделенной бизнес-логики чекаута
				с минимальным количеством изменений. Это позволило клиентам выбирать
				разные версии чекаута без увеличения сложности и времени разработки
				`,
			],
			skills: `
				#react #testing-library #vue #vuex #storybook #webpack #node.js #koa
				#nestjs #mongodb #clickhouse #sentry #stripe #domain-driven-design
				#clean-architecture
			`,
		},
		{
			company: "Connio, Канада",
			position: "Frontend-разработчик",
			years: "Июнь 2018 — Январь 2021",
			additional: "",
			summary: `
				Присоединился к компании как UI-разработчик на отдельный проект, но
				со временем взял на себя разработку всего фронтенда, включая Node.js.
				Работал как под руководством ведущего UI-разработчика, так и руководил
				командой из трёх человек. В последний год напрямую работал с основателем
				и CTO компании, участвуя в обсуждениях вопросов, относящихся к
				пользовательскому интерфейсу и продукту в целом.
			`,
			achievements: [
				`
					Оптимизировал основное приложение компании, снизив потребление памяти
					с нескольких гигабайт до сотен мегабайт
				`,
				`
					Спроектировал и запустил дополнительные проекты компании, заточенные
					под индивидуальные бизнес-задачи отдельных клиентов
				`,
				`
					Разработал расширение для VS Code, интегрирующее основную функциональность
					главного приложения, что значительно упростило работу клиентам
				`,
			],
			skills: `
				#react #react-router #redux #redux-thunk #react-hook-form #node.js
				#angularjs #vue #express.js #koa #vscode-extension #node-red #docker
				#pm2 #gocd
			`,
		},
		{
			company: "ARM, Великобритания",
			position: "Frontend-разработчик",
			years: "Май 2017 — Июнь 2018",
			additional: "",
			summary: `
				Вместе с командой разработчиков и менеджеров из ARM создавал пользовательский
				интерфейс новой платформы для управления корпоративными eSIM — Kigen,
				выступая в роли ведущего разработчика.
			`,
			achievements: [
				`
					Спроектировал основу приложения и создал MVP для презентаций, благодаря
					которому проект получил финансирование и продолжил развитие
				`,
				`
					Координировал работу трёх UI-разработчиков
				`,
				`
					За год работы выпустили несколько релизов, доведя UI до состояния,
					удовлетворяющего требованиям внутренних клиентов ARM
				`,
			],
			skills: `
				#react #react-router #redux-saga #styled-components #node.js #koa #web-sockets
			`,
		},
		{
			company: "E&F Research, Канада",
			position: "Frontend-разработчик",
			years: "Апрель 2016 — Май 2017",
			additional: "",
			summary: `
				Занимался разработкой пользовательских интерфейсов для различных проектов.
				Основной стек — AngularJS, React Native и Cordova. Создавал интерфейсы,
				адаптированные под разные платформы и бизнес-задачи клиентов.
			`,
			achievements: [
				`
					Мобильное приложение на React Native для реагирования компании на инциденты
				`,
				`
					Дашборд для канадской лиги крикета, помогающий с организацией команд иматчей
				`,
				`
					Дашборд для нефтетрейдинговой компании
				`,
				`
					Приложение на Cordova для выездного персонала (фото объектов, геопозиция,
					трекинг времени)
				`,
			],
			skills: `
				#angularjs #react #react-native #redux #gulp #webpack #node.js #cordova #gocd
			`,
		},
		{
			company: "Postcard & Tag, Сингапур",
			position: "Frontend-разработчик",
			years: "Август 2015 — Январь 2016",
			additional: "",
			summary: `
				Начал карьеру как UI-разработчик, занимаясь HTML/CSS-вёрсткой. Постепенно
				перешёл к рефакторингу старого JavaScript-кода, а затем к разработке новой
				функциональности на AngularJS и частично на React.
			`,
			achievements: [
				`
					Улучшил качество вёрстки проекта, сделав её более структурированной
				`,
				`
					Встроил в проект сервис аналитики Mixpanel
				`,
				`
					Спроектировал и разработал модуль бронирования гостиниц
				`,
				`
					Оптимизировал сборку приложения на Gulp.js, сократив время с полутора
					минут до	десятка секунд
				`,
			],
			skills: `
				#angularjs #gulp #react #webpack #html #css #pug #less
			`,
		},
	],

	additionalActivities: [
		{
			company: "SPB Frontend, Россия",
			position: "Организатор",
			years: "2019 — 2022",
			summary: `
				Организовал более 5 митапов для фронтенд-разработчиков в составе
				команды SPB Frontend. Каждый митап собирал от 100 до 200 участников.
			`,
		},
	],

	education: [
		{
			institution: `
				Самарский Государственный Аэрокосмический Университет,
				Прикладная математикаи информатика
			`,
			years: "2009—2013",
		},
		{
			institution: "Самарский Государственный Аэрокосмический Лицей",
			years: "2007—2009",
		},
	],
};
