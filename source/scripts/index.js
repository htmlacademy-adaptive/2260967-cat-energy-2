/* в этот файл добавляет скрипты*/
let navMain = document.querySelector('header');
let navToggle = document.querySelector('.header-wrapper__toggle');
let navig = document.querySelector('.main-nav');
let nojs = document.querySelector('.main-nav--nojs');
let toggle = document.querySelector('.header-wrapper__toglewrap');
let mainmapimg = document.querySelector('.main-map--no-js');
let mainmapframe = document.querySelector('.main-map--frame-hidden');

navig.classList.remove('main-nav--nojs');
toggle.classList.remove('header-wrapper__toglewrap--nojs');
mainmapimg.classList.remove('main-map--no-js');
mainmapimg.classList.add('main-map--js');
mainmapframe.classList.remove('main-map--frame-hidden');
mainmapframe.classList.add('main-map--frame-shown');

navMain.classList.add('header-wrapper--closed');
navMain.classList.remove('header-wrapper--opened');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header-wrapper--closed')) {
    navMain.classList.remove('header-wrapper--closed');
    navMain.classList.add('header-wrapper--opened');
  } else {
    navMain.classList.add('header-wrapper--closed');
    navMain.classList.remove('header-wrapper--opened');
  }
});

