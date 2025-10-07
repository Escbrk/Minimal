'use strict';

const mobileMenuBtn = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuIcon = document.querySelector('.burger-menu-icon');
const mobileCloseMenuBtn = document.querySelector('.close-menu-icon');
const mobMenuLinks = document.querySelectorAll('.mobile-menu-link');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-mobile-menu-open');

  if (mobileMenu.classList.contains('is-mobile-menu-open')) {
    mobileCloseMenuBtn.classList.remove('hidden');
    mobileMenuIcon.classList.add('hidden');
  } else {
    mobileCloseMenuBtn.classList.add('hidden');
    mobileMenuIcon.classList.remove('hidden');
  }
});

mobMenuLinks.forEach(link =>
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-mobile-menu-open');
  })
);
