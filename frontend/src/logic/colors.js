export function getRandomHSL() {
  const hue = Math.floor(Math.random() * 70) + 340;
  const saturation = Math.floor(Math.random() * 41) + 60;
  const lightness = Math.floor(Math.random() * 21) + 61;
  return `hsl(${hue} ${saturation}% ${lightness}%)`;
}
