/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('header');
const navToggle = document.querySelector('.header-wrapper__toggle');
const navig = document.querySelector('.main-nav');
const nojs = document.querySelector('.main-nav--nojs');
const toggle = document.querySelector('.header-wrapper__toglewrap');
const mainmapimg = document.querySelector('.main-map--no-js');
const mainmapframe = document.querySelector('.main-map--frame-hidden');

navig.classList.remove('main-nav--nojs');
toggle.classList.remove('header-wrapper__toglewrap--nojs');
mainmapimg.classList.remove('main-map--no-js');
mainmapimg.classList.add('main-map--js');
mainmapframe.classList.remove('main-map--frame-hidden');
mainmapframe.classList.add('main-map--frame-shown');

navMain.classList.add('header-wrapper--closed');
navMain.classList.remove('header-wrapper--opened');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('header-wrapper--closed')) {
    navMain.classList.remove('header-wrapper--closed');
    navMain.classList.add('header-wrapper--opened');
  } else {
    navMain.classList.add('header-wrapper--closed');
    navMain.classList.remove('header-wrapper--opened');
  }
});

