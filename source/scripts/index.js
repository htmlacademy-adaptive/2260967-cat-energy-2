/* в этот файл добавляет скрипты*/
let navMain = document.querySelector('.main-header');
let navToggle = document.querySelector('.header-wrapper__toggle');
let navig = document.querySelector('.main-nav');
let nojs = document.querySelector('.main-nav--nojs');

navig.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  navig.classList.remove('main-nav--nojs');
  if (navMain.classList.contains('header-wrapper--closed')) {
    navMain.classList.remove('header-wrapper--closed');
    navMain.classList.add('header-wrapper--opened');
  } else {
    navMain.classList.add('header-wrapper--closed');
    navMain.classList.remove('header-wrapper--opened');
  }
});

