// ── Constants ──────────────────────────────────────────────────────────────
export const CARDS_PER_VIEW = 3; // how many cards are visible at once

// ── Data loading ───────────────────────────────────────────────────────────
export async function loadProjects(path = 'projects.json') {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to fetch projects: ${res.status}`);
  return res.json();
}

// ── Navigation ─────────────────────────────────────────────────────────────
export function clampIndex(index, totalSlides) {
  return Math.max(0, Math.min(index, totalSlides - 1));
}

export function getTotalSlides(projectCount, cardsPerView) {
  return Math.max(0, projectCount - cardsPerView + 1);
}

export function navigateTo(index, totalSlides) {
  return clampIndex(index, totalSlides);
}

// ── Scrollbar geometry ─────────────────────────────────────────────────────
export function getThumbWidthPct(totalSlides) {
  return totalSlides > 1 ? (1 / totalSlides) * 100 : 100;
}

export function getThumbOffsetPct(clampedIndex, totalSlides, thumbWidthPct) {
  return totalSlides > 1
    ? (clampedIndex / (totalSlides - 1)) * (100 - thumbWidthPct)
    : 0;
}

// ── Track translate ────────────────────────────────────────────────────────
export function getTranslatePct(clampedIndex, cardsPerView) {
  return clampedIndex * (100 / cardsPerView);
}

// ── Scrollbar drag ─────────────────────────────────────────────────────────

/**
 * Call on pointerdown. Returns initial drag state.
 * @param {PointerEvent} e
 * @param {number} clampedIndex
 * @returns {{ isDragging: boolean, dragStartX: number, dragStartIndex: number }}
 */
export function startDrag(e, clampedIndex) {
  e.currentTarget.setPointerCapture(e.pointerId);
  return {
    isDragging: true,
    dragStartX: e.clientX,
    dragStartIndex: clampedIndex,
  };
}

/**
 * Call on pointermove. Returns the new slide index (or current if not dragging).
 * @param {PointerEvent} e
 * @param {{ isDragging: boolean, dragStartX: number, dragStartIndex: number }} dragState
 * @param {HTMLElement} trackEl
 * @param {number} totalSlides
 * @param {number} currentIndex
 * @returns {number} new index
 */
export function moveDrag(e, dragState, trackEl, totalSlides, currentIndex) {
  if (!dragState.isDragging || !trackEl) return currentIndex;

  const trackW = trackEl.offsetWidth;
  const thumbW = trackW / Math.max(totalSlides, 1);
  const delta = e.clientX - dragState.dragStartX;
  const slidesMoved = Math.round((delta / (trackW - thumbW)) * (totalSlides - 1));

  return clampIndex(dragState.dragStartIndex + slidesMoved, totalSlides);
}

/**
 * Call on pointerup / pointercancel. Returns reset drag state.
 * @param {PointerEvent} e
 * @returns {{ isDragging: boolean }}
 */
export function endDrag(e) {
  e.currentTarget.releasePointerCapture(e.pointerId);
  return { isDragging: false };
}