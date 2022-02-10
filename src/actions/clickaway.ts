export const clickaway = (node: HTMLElement, fn: () => void) => {
  const click = (event: Event) => {
    if (!event.composedPath().includes(node)) {
      fn();
    }
  };

  document.body.addEventListener('click', click);

  return {
    destroy() {
      document.body.removeEventListener('click', click);
    },
  };
};
