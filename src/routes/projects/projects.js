const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const CATEGORIES_ORDER = ['all'];

export function init() {
  const state = {
    all: [],
    filtered: [],
    activeCat: 'all',
    q: '',
    sort: 'id-asc',
  };

  // ------- Rendering -------
  function renderFilters(projects) {
    const wrap = $('#filters');
    wrap.innerHTML = '';
    const cats = new Set();
    projects.forEach(p => p.category.forEach(c => cats.add(c)));
    const ordered = [...CATEGORIES_ORDER, ...[...cats].sort((a, b) => a.localeCompare(b, 'fr'))];

    ordered.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn';
      btn.type = 'button';
      btn.textContent = cat === 'all' ? 'All' : cat;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', String(cat === state.activeCat));
      btn.dataset.cat = cat;
      btn.addEventListener('click', () => {
        state.activeCat = cat;
        $$('.filter-btn', wrap).forEach(b => b.setAttribute('aria-selected', 'false'));
        btn.setAttribute('aria-selected', 'true');
        applyAndRender();
      });
      wrap.appendChild(btn);
    });
  }

  function makeCard(p) {
    const done = p.status?.toLowerCase().includes('finished');
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.cat = p.category.join(' ');
    card.dataset.title = p.title.toLowerCase();
    card.dataset.desc = (p.description || '').toLowerCase();
    card.dataset.stack = (p.stack || []).join(' ').toLowerCase();
    card.dataset.id = p.id;

    card.innerHTML = `
      <div class="card__media">
        ${p.image ? `<img src="${p.image}" alt="${p.title}" loading="lazy" />` : ''}
      </div>
      <div class="card__body">
        <h3 class="card__title">${p.id}. ${p.title}</h3>
        <p class="card__desc">${p.description || ''}</p>
        <div class="tags">
          ${(p.stack || []).map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="card__footer">
        <span class="status">
          <span class="dot ${done ? 'dot--done' : 'dot--progress'}"></span>
          ${p.status || ''}
        </span>
        <span class="links">
          ${p.links?.demo
            ? `<a class="icon-btn" href="${p.links.demo}" target="_blank" rel="noopener" aria-label="View demo">
                 <i class="fa-solid fa-arrow-up-right-from-square"></i>
               </a>`
            : (p.video
                ? `<button class="icon-btn js-video" data-video="${p.video}" data-title="${p.title}" aria-label="Watch video">
                     <i class="fa-solid fa-play"></i>
                   </button>`
                : '')
          }
          ${p.links?.github
            ? `<a class="icon-btn" href="${p.links.github}" target="_blank" rel="noopener" aria-label="View on GitHub">
                 <i class="fa-brands fa-github"></i>
               </a>`
            : ''
          }
        </span>
      </div>
    `;
    return card;
  }

  function renderGrid(list) {
    const grid = $('#grid');
    grid.innerHTML = '';
    const frag = document.createDocumentFragment();
    list.forEach(p => frag.appendChild(makeCard(p)));
    grid.appendChild(frag);

    $$('.js-video', grid).forEach(b => {
      b.addEventListener('click', () => openVideo(b.dataset.video, b.dataset.title));
    });
  }

  // ------- Filter / Sort -------
  function applyFilters() {
    const cat = state.activeCat;
    const q = state.q.trim().toLowerCase();

    let list = state.all.filter(p => {
      const catOk = cat === 'all' || (p.category || []).includes(cat);
      if (!catOk) return false;
      if (!q) return true;
      const hay = `${p.title} ${p.description} ${(p.stack || []).join(' ')}`.toLowerCase();
      return hay.includes(q);
    });

    switch (state.sort) {
      case 'id-desc':
        list.sort((a, b) => String(b.id).localeCompare(String(a.id), undefined, { numeric: true }));
        break;
      case 'title-asc':
        list.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        list.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'status':
        list.sort((a, b) => {
          const aDone = a.status?.toLowerCase().includes('finished') ? 0 : 1;
          const bDone = b.status?.toLowerCase().includes('finished') ? 0 : 1;
          return aDone - bDone || a.title.localeCompare(b.title);
        });
        break;
      default:
        list.sort((a, b) => String(a.id).localeCompare(String(b.id), undefined, { numeric: true }));
    }

    state.filtered = list;
  }

  function applyAndRender() {
    applyFilters();
    renderGrid(state.filtered);
  }

  // ------- Modal -------
  const modal = $('#videoModal');
  const modalTitle = $('#modalTitle');
  const modalVideo = $('#modalVideo');
  const closeModalBtn = $('#closeModal');

  function openVideo(src, title) {
    if (!src || !modal) return;
    modalTitle.textContent = `Demo — ${title}`;
    modalVideo.src = src;
    if (typeof modal.showModal === 'function') modal.showModal();
    else modal.setAttribute('open', '');
  }

  function closeVideo() {
    if (!modal) return;
    modalVideo.pause();
    modalVideo.removeAttribute('src');
    if (typeof modal.close === 'function') modal.close();
    else modal.removeAttribute('open');
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeVideo);
  if (modal) {
    modal.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      const inDialog = e.clientX >= rect.left && e.clientX <= rect.right &&
                       e.clientY >= rect.top  && e.clientY <= rect.bottom;
      if (!inDialog) closeVideo();
    });
  }
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeVideo(); });

  // ------- Toolbar -------
  $('#q').addEventListener('input', (e) => { state.q = e.target.value; applyAndRender(); });
  $('#sort').addEventListener('change', (e) => { state.sort = e.target.value; applyAndRender(); });

  // ------- Fetch -------
  fetch('/data/projects.json')
    .then(r => r.json())
    .then(data => {
      state.all = data;
      renderFilters(data);
      applyAndRender();
    })
    .catch(err => {
      console.error('Error loading projects:', err);
      $('#grid').innerHTML = '<p>Unable to load projects.</p>';
    });
}