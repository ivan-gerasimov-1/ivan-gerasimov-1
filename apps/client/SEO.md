# План SEO-оптимизации

## 1. Мета-теги и структурированные данные

### 1.1. Open Graph и Twitter карточки

- [ ] Добавить базовые OG-теги в `baseLayout.astro`:
  ```html
  <meta property="og:title" content="{title}" />
  <meta property="og:description" content="{description}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{Astro.url.href}" />
  <meta property="og:image" content="/path/to/social-image.jpg" />
  ```
- [ ] Добавить Twitter карточки:
  ```html
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{title}" />
  <meta name="twitter:description" content="{description}" />
  <meta name="twitter:image" content="/path/to/social-image.jpg" />
  ```
- [ ] Создать и оптимизировать изображения для соцсетей (1200x630px для OG, 1200x600px для Twitter)

### 1.2. Schema.org разметка

- [ ] Создать компонент `src/components/JsonLd.astro`
- [ ] Добавить разметку Person:
  ```typescript
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Иван Герасимов",
    "url": "https://gerasimov.dev",
    "jobTitle": "Software Engineer",
    "sameAs": [
      "https://linkedin.com/in/ivan-gerasimov",
      "https://github.com/ivan-gerasimov-1"
    ]
  }
  ```
- [ ] Добавить разметку WebSite
- [ ] Проверить через Google Rich Results Test

### 1.3. hreflang и локализация

- [ ] Создать компонент `src/components/Hreflang.astro`
- [ ] Добавить теги для всех страниц:
  ```html
  <link rel="alternate" hreflang="en" href="https://gerasimov.dev/path" />
  <link rel="alternate" hreflang="ru" href="https://gerasimov.dev/ru/path" />
  <link
  	rel="alternate"
  	hreflang="x-default"
  	href="https://gerasimov.dev/path"
  />
  ```
- [ ] Проверить взаимные ссылки на всех страницах
- [ ] Добавить canonical URLs

## 2. Оптимизация контента

### 2.1. Ключевые слова

- [ ] Обновить русские ключевые слова в `src/i18n/keywords/ru/keywords.ts`
- [ ] Проверить и обновить английские ключевые слова
- [ ] Убедиться, что ключевые слова используются в контенте естественным образом

### 2.2. Мета-описания

- [ ] Обновить description для всех страниц на обоих языках
- [ ] Убедиться, что описания уникальны и содержат ключевые слова
- [ ] Проверить длину описаний (120-160 символов)

## 3. Техническая оптимизация

### 3.1. Sitemap

- [ ] Обновить конфигурацию в `astro.config.js`:
  ```javascript
  sitemap({
  	filter: (page) => !page.includes("/api/"),
  	changefreq: (page) => {
  		if (
  			page === "https://gerasimov.dev/" ||
  			page === "https://gerasimov.dev/ru/"
  		)
  			return "weekly";
  		if (page.includes("/cv")) return "monthly";
  		return "monthly";
  	},
  	priority: (page) => {
  		if (
  			page === "https://gerasimov.dev/" ||
  			page === "https://gerasimov.dev/ru/"
  		)
  			return 1.0;
  		if (page.includes("/cv")) return 0.8;
  		return 0.7;
  	},
  	lastmod: new Date(),
  	i18n: {
  		defaultLocale: "en",
  		locales: {
  			en: "en",
  			ru: "ru",
  		},
  	},
  });
  ```
- [ ] Проверить сгенерированный sitemap.xml
- [ ] Убедиться, что все нужные страницы включены

### 3.2. Производительность

- [ ] Оптимизировать изображения
- [ ] Настроить кэширование статических ресурсов
- [ ] Добавить lazy loading для нетривиальных компонентов
- [ ] Проверить Core Web Vitals через PageSpeed Insights

## 4. Регистрация и мониторинг

### 4.1. Поисковые консоли

- [x] Зарегистрировать сайт в Google Search Console
- [x] Зарегистрировать сайт в Яндекс.Вебмастер
- [x] Добавить файлы верификации
- [x] Отправить sitemap.xml

### 4.2. Мониторинг

- [ ] Настроить отслеживание позиций
- [ ] Настроить алерты на ошибки индексации
- [ ] Регулярно проверять Core Web Vitals
- [ ] Отслеживать поведение пользователей через аналитику

## 5. Регулярные задачи

### 5.1. Еженедельно

- [ ] Проверять отчеты в поисковых консолях
- [ ] Анализировать поведение пользователей
- [ ] Проверять ошибки индексации

### 5.2. Ежемесячно

- [ ] Обновлять контент
- [ ] Проверять позиции в поиске
- [ ] Анализировать Core Web Vitals
- [ ] Обновлять даты в sitemap

### 5.3. Ежеквартально

- [ ] Полный аудит SEO
- [ ] Обновление стратегии
- [ ] Анализ конкурентов
