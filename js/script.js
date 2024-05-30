const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closerElem = document.querySelector('.menu__close'),
      foneClose = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closerElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

foneClose.addEventListener('click', () => {
    menu.classList.remove('active');
});
