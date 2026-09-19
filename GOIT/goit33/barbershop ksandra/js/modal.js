const handleBackdrop = name => {
  const backdrop = document.querySelector(`[data-backdrop-${name}]`);
  const buttons = document.querySelectorAll(`[data-toggle-backdrop-${name}]`);

  if (!backdrop) return;

  const toggleBackdrop = () => backdrop.classList.toggle('is-hidden');
  buttons.forEach(button => button.addEventListener('click', toggleBackdrop));

  backdrop.addEventListener('click', event => {
    if (event.target === backdrop) {
      toggleBackdrop();
    }
  });
};
// sign
handleBackdrop('sign');
