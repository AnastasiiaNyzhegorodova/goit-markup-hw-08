(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mobile-menu__open-button'),
    closeMenuBtn: document.querySelector('.mobile-menu__close-button'),
    menu: document.querySelector('.mobile-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();

