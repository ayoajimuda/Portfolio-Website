import experiencesData from "./experiences.json";

/**
 * @returns {{ icon: string, title: string, desc: string }[]}
 */
export function getExperiences() {
  return experiencesData;
}