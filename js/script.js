const menuBtn = document.querySelector('.burger');
const closeBtn = document.querySelector('.close');
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu__item-link');

const openMenu = () => {
  menu.classList.add('active');
};

const closeMenu = () => {
  menu.classList.remove('active');
};

menuBtn.addEventListener('click', openMenu);

closeBtn.addEventListener('click', closeMenu);

menuLink.forEach(item => {
  item.addEventListener('click', closeMenu);
})

