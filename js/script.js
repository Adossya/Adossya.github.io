window.addEventListener('DOMContentLoaded', () => {


// UA lang 
const langBtn = document.querySelector('.navbar__lang'),
      langNavbarUll = document.querySelector('.navbar__ul'),
      langNavbarUl = langNavbarUll.querySelectorAll('.navbar__link'),
      langMobileUl = document.querySelector('.mobile__ul'),
      langMobileLi = langMobileUl.querySelectorAll('.navbar__link'),
      langHeroDescr = document.querySelector('.hero__description'),
      langAboutTitle = document.querySelector('.about__title'),
      langAboutLi = document.querySelectorAll('.about__li'),
      langAboutDescr = document.querySelectorAll('.about__item'),
      langAboutResBtn = document.querySelector('.about__resume'),
      langSkillsSubtitle = document.querySelector('.skills__subtitle'),
      langProjectsSubtitle = document.querySelector('.projects__subtitle'),
      langProjectsDescr = document.querySelectorAll('.projects__description'),
      langContactTitle = document.querySelector('.contact__title'),
      langContactSubtitle = document.querySelector('.contact__subtitle'),
      langContactDescr = document.querySelectorAll('.contact__description');


const langUA = {
    navBar: ["Головна", "Про мене", "Проекти", "Контакти"],
    heroSubTitle: `Привіт, мене звати Антон Лупалов. І я Junior Frontend Developer з міста Кривий Ріг, Україна.`,
    aboutMeTitle: "Про мене",
    aboutLi: ["Життя", "Освіта", "Досвід"],
    aboutStory: ["Мене звати Антон. Я народився і виріс у місті Кривий Ріг, де провів більшу частину свого життя. У шкільні роки активно займався спортом, що допомогло мені розвинути наполегливість та цілеспрямованість. З дитинства цікавився технікою та новими технологіями, що визначило мій вибір професії. Я вступив до університету на факультет комп'ютерної інженерії і успішно закінчив навчання. Відтоді моя кар'єра завжди була пов'язана з різними напрямками IT-індустрії. Наразі я працюю у компанії, що надає телекомунікаційні послуги, та прагну професійного зростання у сфері веб-розробки. У вільний час люблю проводити його з родиною, грати в комп'ютерні ігри та приділяти увагу саморозвитку.", "Минуло близько 10 років з того часу, як я закінчив Криворізький національний університет за спеціальністю «Комп'ютерна інженерія». Чесно кажучи, я завжди бачив себе в IT-сфері. Пробував себе як тестувальник програмного забезпечення, потім працював на великій криптовалютній фермі. Пізніше, вже працюючи в телекомунікаційній компанії, намагався вивчити Java, але не міг знайти, як застосувати ці знання на практиці. Виконання безлічі завдань без чіткого розуміння того, чим саме я буду займатися і де зможу це використовувати, викликало у мене розчарування. Через деякий час я вирішив спробувати веб-розробку, до якої давно присматривался, але раніше обходив стороною. Як тільки я почав занурюватися в процес, зрозумів, що це саме те, чим хочу займатися. Мені приносить величезне задоволення бачити миттєві результати моєї роботи — будь то створення блоку в HTML, стилізація в CSS або логіка на JavaScript. Зараз я точно знаю, що веб-розробка — це те напрямок, в якому я хочу розвиватися і зростати.", "З моїми знаннями HTML, CSS та JavaScript я здатен створювати сучасні та адаптивні вебсайти, які відповідають останнім стандартам і трендам. Я можу допомогти у розробці користувацьких інтерфейсів, забезпечуючи плавну взаємодію користувачів із сайтом. Від простої розмітки та стилізації сторінок до впровадження динамічного контенту за допомогою JavaScript — я готовий взяти на себе весь процес."
    ],
    aboutMeBtn: 'Завантажити CV',
    skillTitle: "Технічні навички",
    projectTitle: "Мої останні проекти",
    projectDescriptio: ["Під час вивчення HTML, CSS та JavaScript я активно практикувався, використовуючи платформу ICodeThis. Виконуючи завдання на сайті, я застосовував отримані знання на практиці, створюючи різні веб-елементи та інтерфейси. Це допомогло мені краще зрозуміти, як працюють веб-технології, розвинути навички програмування, а також зміцнити розуміння взаємодії HTML, CSS та JavaScript у реальних проєктах.", 
      "Я створив проєкт 'Шибениця' для демонстрації своїх навичок роботи з JavaScript, HTML та CSS. У процесі розробки гри я використав JavaScript для обробки логіки гри, роботи з користувацькими введеннями, а також для динамічної зміни інтерфейсу залежно від дій гравця.", 
      "Під час вивчення веб-розробки я активно практикувався у створенні різних лендинг-сторінок. Ці проєкти стали чудовою можливістю застосувати теоретичні знання на практиці.  Створення лендингів допомогло мені краще зрозуміти, як грамотно організовувати контент, покращувати користувацький інтерфейс і забезпечувати зручну навігацію — важливі аспекти веб-дизайну."],
    contactTitle: "Найміть мене для свого проекту",
    contactSubTitle: "Зв'яжіться зі мною будь-яким зручним способом для обговорення деталей",
    contactItem: ["Напиши мені -", "Напиши мені -", "Знайди мене -"],
}

  const langENG = {
    navBar: ["Home", "About", "Projects", "Contact"],
    heroSubTitle: `Hi, I'm Anton Lupalov. Junior Frontend Developer based in Krivyi Rih, Ukraine.`,
    aboutMeTitle: "About me",
    aboutLi: ["Life", "Education", "Expirience"],
    aboutStory: ["My name is Anton. I was born and raised in Kryvyi Rih, where I spent most of my life. During my school years, I was actively involved in sports, which helped me develop perseverance and determination. From an early age, I was interested in technology and new innovations, which led me to choose a profession in the IT field. I enrolled in the university’s Faculty of Computer Engineering and successfully completed my studies. Since then, my career has always been connected to various areas of the IT industry. Currently, I work for a telecommunications service provider and strive for professional growth in the field of web development. In my free time, I enjoy spending it with my family, playing video games, and focusing on self-development", 
    `It's been about 10 years since I graduated from Kryvyi Rih National University with a degree in "Computer Engineering." To be honest, I have always seen myself in the IT field. I tried my hand as a software tester, then worked at a large cryptocurrency farm. Later, while working at a telecommunications company, I attempted to learn Java, but I couldn't find a way to apply that knowledge in practice. Completing many tasks without a clear understanding of what exactly I would be doing and where I could use it left me feeling frustrated. After some time, I decided to try web development, which I had been interested in for a long time but had previously avoided. Once I started immersing myself in the process, I realized that this was exactly what I wanted to do. I get immense pleasure from seeing the immediate results of my work—whether it's creating a block in HTML, styling in CSS, or writing logic in JavaScript. Now I am certain that web development is the direction I want to grow and develop in.`, 
    `With my knowledge of HTML, CSS, and JavaScript, I am capable of creating modern and responsive websites that meet the latest standards and trends. I can assist in developing user interfaces, ensuring a smooth interaction experience for users. From simple markup and styling of pages to implementing dynamic content using JavaScript, I am ready to take on the entire process.`
    ],
    aboutMeBtn: 'Download CV',
    skillTitle: "Tech skills",
    projectTitle: "My last projects",
    projectDescriptio: ["While studying HTML, CSS, and JavaScript, I actively practiced using the ICodeThis platform. By completing tasks on the site, I applied the knowledge I gained to create various web elements and interfaces. This helped me better understand how web technologies work and develop my programming skills, as well as strengthen my understanding of the interaction between HTML, CSS, and JavaScript in real-world projects.", 
      "I created the 'Hangman' project to showcase my skills in working with JavaScript, HTML, and CSS. During the development of the game, I used JavaScript to handle the game logic, process user inputs, and dynamically update the interface based on player actions.", 
      "While studying web development, I actively practiced creating various landing pages. These projects were a great opportunity to apply theoretical knowledge in practice. Building landing pages helped me better understand how to organize content effectively, improve user interfaces, and ensure easy navigation, which are crucial aspects of web design."],
    contactTitle: "Hire Me for Your Project",
    contactSubTitle: "Contact me in any converient way to discuss the details",
    contactItem: ["Write me -", "Write me -", "Find me -"],
  }

function updateContent(objLang) {
  const {
    navBar,
    heroSubTitle,
    aboutMeTitle,
    aboutLi,
    aboutStory,
    aboutMeBtn,
    skillTitle,
    projectTitle,
    projectDescriptio,
    contactTitle,
    contactSubTitle,
    contactItem,
  } = objLang;

  langNavbarUl.forEach((item, i) => {   
    item.textContent = navBar[i];
  })
  langMobileLi.forEach((item, i) => {
    item.textContent = navBar[i];
  })


  langHeroDescr.textContent = heroSubTitle;
  langAboutTitle.textContent = aboutMeTitle;
  langAboutLi.forEach((item, i) => {
      item.textContent = aboutLi[i];
  })
  langAboutDescr.forEach((item, i) => {
    item.textContent = aboutStory[i];
  })
  langAboutResBtn.textContent = aboutMeBtn;
  langSkillsSubtitle.textContent = skillTitle;
  langProjectsSubtitle.textContent = projectTitle;
  langProjectsDescr.forEach((item, i) => {
    item.textContent = projectDescriptio[i];
  })
  langContactTitle.textContent = contactTitle;
  langContactSubtitle.textContent = contactSubTitle;
  langContactDescr.forEach((item, i) => {
    item.textContent = contactItem[i];
  })
}

langBtn.addEventListener('click', (e) => {
    if(langBtn.textContent === 'UA'){
      updateContent(langUA);
      localStorage.setItem('lang', 'UA');
      langBtn.textContent = 'ENG';
      langAboutResBtn.setAttribute("href", "../file/Ukrainian_resume.pdf");
      langAboutResBtn.setAttribute("download", "CV_Антон Лупалов_frontend developer.pdf");

    } else {
      updateContent(langENG);
      localStorage.setItem('lang', "ENG");
      langBtn.textContent = 'UA';
      langAboutResBtn.setAttribute("href", "../file/English_resume.pdf");
      langAboutResBtn.setAttribute("download", "CV_Anton Lupalov_frontend developer.pdf");
    };
  })



if (localStorage.getItem('lang') === 'UA'){
  updateContent(langUA);
  langBtn.textContent = 'ENG';
} else {
  updateContent(langENG);
  langBtn.textContent = "UA";
  localStorage.setItem('lang', 'ENG');
}


// Hamburger
const hamburger = document.querySelector('.navbar__hamburger'),
    menu = document.querySelector('.mobile__hamburger'),
    navbar = document.querySelector('.navbar'),
    close = document.querySelector('.mobile__close'),
    aboutUl = document.querySelector('.about__ul'),
    aboutLi = document.querySelectorAll('.about__li'),
    aboutItems = document.querySelectorAll('.about__item'),
    projectsImgFull = document.querySelector('#overlay'),
    // projectsImg = document.querySelector('#largeImage'),
    projectsImages = document.querySelectorAll('.projects__image'),
    body = document.querySelector('.body');

//     let scale = 1;
// projectsImages.forEach((item,i) => {
//     item.addEventListener('click', (e) => {
//       e.preventDefault();
//       projectsImgFull.style.display = 'flex';

//       projectsImg.src = '../img/hangman_full.jpg';
//       projectsImages.style.scale = "300%";
//       body.classList.add('active');
//     })
// })
  
// projectsImgFull.addEventListener('click', (e) => {
//     e.preventDefault();
//     projectsImgFull.style.display = 'none';
//     body.classList.remove('active');
// })
  


// function adjustScale(event) {
//   if (event.ctrlKey) { // Проверяем, удерживается ли клавиша Ctrl
//       event.preventDefault(); // Отключаем прокрутку страницы
//       if (event.deltaY < 0) {
//           scale += 0.2; // Увеличиваем масштаб
//       } else {
//           scale -= 0.2; // Уменьшаем масштаб
//       }
//       scale = Math.min(Math.max(scale, 2), 3); // Устанавливаем ограничения на масштаб
//       projectsImg.style.transform = `scale(${scale})`; // Применяем трансформацию
//       projectsImg.style.cursor = scale === 1 ? 'zoom-in' : 'zoom-out'; // Меняем курсор
//   }
// }

// Привязываем события

// projectsImg.addEventListener('wheel', adjustScale);

hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.add('active');
    body.classList.add('active');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    menu.append(overlay);
    overlay.addEventListener('click', (e) => {

      body.classList.remove('active');
      menu.classList.remove('active');
      navbar.classList.remove('active');
    })
  })

close.addEventListener('click', (e) => {
  body.classList.remove('active');
    menu.classList.remove('active');
    navbar.classList.remove('active');
  })

window.addEventListener('scroll', scrollFunction);

function scrollFunction (){
    if (window.scrollY > 1) {
      navbar.style.backgroundColor = 'white';
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