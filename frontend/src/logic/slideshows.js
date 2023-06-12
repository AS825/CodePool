export function previousSlide(index, elements) {
  const previous = index - 1;
  return previous >= 0 ? previous : elements.length - 1;
}

export function nextSlide(index, elements) {
  const next = index + 1;
  return next % elements.length;
}
