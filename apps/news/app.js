const app = document.querySelector('#app');
const archive = document.querySelector('#archive');
const archiveList = document.querySelector('#archive-list');
const archiveToggle = document.querySelector('.archive-toggle');

const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Europe/Belgrade',
});

const shortDateFormatter = new Intl.DateTimeFormat('ru-RU', {
  day: 'numeric',
  month: 'short',
  timeZone: 'Europe/Belgrade',
});

function asBelgradeDate(value) {
  return new Date(`${value}T12:00:00+02:00`);
}

function escapeHtml(value = '') {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderStory(story) {
  const source = story.source?.url
    ? `<a class="story-source" href="${escapeHtml(story.source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(story.source.name || 'Источник')} ↗</a>`
    : '';

  const published = story.publishedAt
    ? `<span>${escapeHtml(story.publishedAt)}</span>`
    : '';

  return `
    <article class="story">
      <h3 class="story-title">${escapeHtml(story.title)}</h3>
      <p class="story-summary">${escapeHtml(story.summary)}</p>
      <div class="story-meta">${source}${published}</div>
    </article>
  `;
}

function renderIssue(issue) {
  document.title = `Daily Brief — ${dateFormatter.format(asBelgradeDate(issue.date))}`;

  const sections = issue.sections
    .map((section) => `
      <section class="section" id="${escapeHtml(section.id)}">
        <div class="section-header">
          <h2 class="section-title">${escapeHtml(section.title)}</h2>
          <span class="section-count">${section.items.length}</span>
        </div>
        ${section.items.length ? section.items.map(renderStory).join('') : '<div class="empty">Сегодня ничего достаточно важного.</div>'}
      </section>
    `)
    .join('');

  app.innerHTML = `
    <header class="issue-header">
      <p class="kicker">${dateFormatter.format(asBelgradeDate(issue.date))}</p>
      <h1 class="issue-title">Один выпуск.<br>И достаточно.</h1>
      <p class="issue-note">Сербия и Белград, важное в мире и технические новости — один раз в сутки, без ленты и алгоритмического продолжения.</p>
    </header>
    ${sections}
  `;
}

function renderArchive(index, selectedDate) {
  archiveList.innerHTML = index.dates
    .map((date) => {
      const current = date === selectedDate ? ' aria-current="page"' : '';
      return `<a href="?date=${encodeURIComponent(date)}"${current}>${shortDateFormatter.format(asBelgradeDate(date))}</a>`;
    })
    .join('');
}

archiveToggle.addEventListener('click', () => {
  const nextExpanded = archiveToggle.getAttribute('aria-expanded') !== 'true';
  archiveToggle.setAttribute('aria-expanded', String(nextExpanded));
  archive.hidden = !nextExpanded;
});

async function start() {
  try {
    const indexResponse = await fetch('./data/index.json', { cache: 'no-store' });
    if (!indexResponse.ok) throw new Error('Не удалось загрузить индекс выпусков');
    const index = await indexResponse.json();

    const requestedDate = new URLSearchParams(location.search).get('date');
    const selectedDate = index.dates.includes(requestedDate) ? requestedDate : index.latest;
    renderArchive(index, selectedDate);

    const issueResponse = await fetch(`./data/${encodeURIComponent(selectedDate)}.json`, { cache: 'no-store' });
    if (!issueResponse.ok) throw new Error('Не удалось загрузить выпуск');
    renderIssue(await issueResponse.json());
  } catch (error) {
    console.error(error);
    app.innerHTML = '<div class="error">Выпуск сейчас недоступен.</div>';
  }
}

start();
