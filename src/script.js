const mobileMenuBtn = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuIcon = document.querySelector('.burger-menu-icon');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-mobile-menu-open');

  if (mobileMenu.classList.contains('is-mobile-menu-open')) {
    mobileMenuIcon.innerHTML =
      '<use href="/Minimal/img/sprite.svg#icon-close-btn"></use>';
  } else {
    mobileMenuIcon.innerHTML =
      '<use href="/Minimal/img/sprite.svg#icon-burger-menu"></use>';
  }
});
