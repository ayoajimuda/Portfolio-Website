// ── Data loading ───────────────────────────────────────────────────────────
export async function loadJourney(path = '../data/journey.json') {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to fetch journey.json: ${res.status}`);
  return res.json();
}