import { onMount } from 'svelte';

export function createStore() {
  let projects       = $state([]);
  let activeCat      = $state('all');
  let q              = $state('');
  let sort           = $state('id-asc');
  let ready          = $state(false);
  let error          = $state(false);
  let dialogEl       = $state(null);
  let videoEl        = $state(null);
  let modalVideoTitle = $state('');
  let modalVideoSrc   = $state('');

  let categories = $derived.by(() => {
    const cats = new Set();
    projects.forEach(p => (p.category || []).forEach(c => cats.add(c)));
    return ['all', ...[...cats].sort((a, b) => a.localeCompare(b))];
  });

  let filtered = $derived.by(() => {
    const search = q.trim().toLowerCase();
    const list = projects.filter(p => {
      if (activeCat !== 'all' && !(p.category || []).includes(activeCat)) return false;
      if (!search) return true;
      return `${p.title} ${p.description || ''} ${(p.stack || []).join(' ')}`
        .toLowerCase().includes(search);
    });
    const out = [...list];
    switch (sort) {
      case 'id-desc':    out.sort((a,b) => String(b.id).localeCompare(String(a.id), undefined, {numeric:true})); break;
      case 'title-asc':  out.sort((a,b) => a.title.localeCompare(b.title)); break;
      case 'title-desc': out.sort((a,b) => b.title.localeCompare(a.title)); break;
      case 'status':
        out.sort((a,b) => {
          const ad = a.status?.toLowerCase().includes('finished') ? 0 : 1;
          const bd = b.status?.toLowerCase().includes('finished') ? 0 : 1;
          return ad - bd || a.title.localeCompare(b.title);
        });
        break;
      default: out.sort((a,b) => String(a.id).localeCompare(String(b.id), undefined, {numeric:true}));
    }
    return out;
  });

  function openVideo(src, title) {
    modalVideoSrc   = src;
    modalVideoTitle = title;
    dialogEl?.showModal?.();
  }

  function closeVideo() {
    if (videoEl) { videoEl.pause(); videoEl.src = ''; }
    dialogEl?.close?.();
  }

  onMount(async () => {
    window.addEventListener('keydown', e => e.key === 'Escape' && closeVideo());
    try {
      const r = await fetch('/data/projects.json');
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      projects = await r.json();
    } catch (e) {
      console.error(e);
      error = true;
    } finally {
        try {
          await document.fonts.load('normal 1rem "DepartureMono"');
        } catch (e) {
          // font failed to load, show page anyway
        }
  requestAnimationFrame(() => requestAnimationFrame(() => ready = true));
}
  });

  return {
    get categories()      { return categories; },
    get filtered()        { return filtered; },
    get activeCat()       { return activeCat; },
    set activeCat(v)      { activeCat = v; },
    get q()               { return q; },
    set q(v)              { q = v; },
    get sort()            { return sort; },
    set sort(v)           { sort = v; },
    get ready()           { return ready; },
    get error()           { return error; },
    get dialogEl()        { return dialogEl; },
    set dialogEl(v)       { dialogEl = v; },
    get videoEl()         { return videoEl; },
    set videoEl(v)        { videoEl = v; },
    get modalVideoTitle() { return modalVideoTitle; },
    get modalVideoSrc()   { return modalVideoSrc; },
    openVideo,
    closeVideo,
  };
} 