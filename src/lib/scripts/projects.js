import { onMount } from 'svelte';
import projectsData from '../data/projects.json';

/**
 * Shuffles and returns 4 random projects from the data.
 * Call this inside onMount in the component.
 * @returns {any[]}
 */
export function pickRandomProjects() {
  const shuffled = [...projectsData];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, 4);
}

/**
 * Scrolls the slide container to the card at the given index.
 * @param {HTMLElement} slideEl
 * @param {number} index
 */
export function scrollToCard(slideEl, index) {
  if (!slideEl) return;
  const cards = [...slideEl.querySelectorAll('.projects-card')];
  if (cards[index]) {
    cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }
}

/**
 * Returns the index of the card whose left edge is closest to the container's left edge.
 * @param {HTMLElement} slideEl
 * @returns {number}
 */
export function getClosestCardIndex(slideEl) {
  if (!slideEl) return 0;
  const containerLeft = slideEl.getBoundingClientRect().left;
  const cards = [...slideEl.querySelectorAll('.projects-card')];
  let closestIndex = 0;
  let minDiff = Infinity;
  cards.forEach((card, i) => {
    const diff = Math.abs(card.getBoundingClientRect().left - containerLeft);
    if (diff < minDiff) {
      minDiff = diff;
      closestIndex = i;
    }
  });
  return closestIndex;
}