export const clickaway = (node: HTMLElement, fn: () => void) => {
  const click = (event: Event) => {
    if (!node.contains(event.target as Node)) {
      fn();
    }
  };

  document.body.addEventListener('click', click);

  return {
    destroy() {
      document.body.removeEventListener('click', click);
    }
  };
};
