const hamburgerIcon = document.querySelector('.hamburger-menu-container');
const headerContent = document.querySelector('.header-content');
const closeIcon = document.querySelector('.close-icon');
const nav = document.querySelector('nav');

hamburgerIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  headerContent.classList.add('menu-open');
});

nav.addEventListener('click', (e) => {
  e.stopPropagation();
});

closeIcon.addEventListener('click', () => {
  headerContent.classList.remove('menu-open');
});

window.addEventListener('click', () => {
  headerContent.classList.remove('menu-open');
});

// Optional: Smooth scroll fallback
document.querySelector('.go-to-top a').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
