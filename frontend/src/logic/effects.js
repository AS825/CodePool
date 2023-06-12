const EFFECTS = ['fade-up', 'fade-down', 'zoom-in', 'fade-right', 'fade-left', 'flip-right'];

export function getRandomEffect() {
  const randomIndex = Math.floor(Math.random() * EFFECTS.length);
  return EFFECTS[randomIndex];
}