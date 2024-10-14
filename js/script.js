window.addEventListener('DOMContentLoaded', () => {

// Hamburger
const hamburger = document.querySelector('.navbar__hamburger'),
    menu = document.querySelector('.mobile__hamburger'),
    navbar = document.querySelector('.navbar'),
    close = document.querySelector('.mobile__close'),
    aboutUl = document.querySelector('.about__ul'),
    aboutLi = document.querySelectorAll('.about__li'),
    aboutItems = document.querySelectorAll('.about__item'),
    projectsImgFull = document.querySelector('#overlay'),
    projectsImg = document.querySelector('#largeImage'),
    projectsImages = document.querySelectorAll('.projects__image'),
    body = document.querySelector('.body');

  
    let scale = 1;
projectsImages.forEach((item,i) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      projectsImgFull.style.display = 'flex';
      projectsImg.src = '../img/hangman_full.jpg';
      body.classList.add('active');
    })
})
  
projectsImgFull.addEventListener('click', (e) => {
    e.preventDefault();
    projectsImgFull.style.display = 'none';
    body.classList.remove('active');
})
  


function adjustScale(event) {
  if (event.ctrlKey) { // Проверяем, удерживается ли клавиша Ctrl
      event.preventDefault(); // Отключаем прокрутку страницы
      if (event.deltaY < 0) {
          scale += 0.1; // Увеличиваем масштаб
      } else {
          scale -= 0.1; // Уменьшаем масштаб
      }
      scale = Math.min(Math.max(scale, 1), 2); // Устанавливаем ограничения на масштаб
      projectsImg.style.transform = `scale(${scale})`; // Применяем трансформацию
      projectsImg.style.cursor = scale === 1 ? 'zoom-in' : 'zoom-out'; // Меняем курсор
  }
}

// Привязываем события

projectsImg.addEventListener('wheel', adjustScale);

hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.add('active');
  })

close.addEventListener('click', (e) => {
    menu.classList.remove('active');
    navbar.classList.remove('active');
  })

window.addEventListener('scroll', scrollFunction);

function scrollFunction (){
    if (window.scrollY > 1) {
      navbar.style.backgroundColor = 'rgba(255,255,255,0.85)';
    } else {
      navbar.style.backgroundColor = '';
    }
}

aboutUl.addEventListener('click', (e) => {
    if (e.target && e.target.matches('.about__li')){
      aboutItems.forEach((item, i) => {
        item.classList.remove('active');
      })
      aboutLi.forEach((item, i) => {
        item.classList.remove('active');
        if (e.target === item){
          aboutLi[i].classList.add('active');
          aboutItems[i].classList.add('active');
        }
      })
    }

})






























})