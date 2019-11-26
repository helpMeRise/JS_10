'use strict';

  import '@babel/polyfill';
  import 'nodelist-foreach-polyfill';
  import elementClosest from 'element-closest';
  elementClosest(window);
  import 'formdata-polyfill';
  import 'es6-promise';
  import 'fetch-polyfill';


  import countTimer from './modules/countTimer';
  import toggleMenu from './modules/toggleMenu';
  import togglePopUp from './modules/togglePopUp';
  import scroll from './modules/scroll';
  import tabs from './modules/tabs';
  import slider from './modules/slider';
  import SliderCarousel from './modules/SliderCarousel';
  import imgChange from './modules/imgChange';
  import calcReg from './modules/calc';
  import calc from './modules/calc';
  import Validator from './modules/validator';
  import sendForm from './modules/sendForm';
  import validMini from './modules/validMini';

  //Timer 
  countTimer(`01 december 2019`);
  //Menu 
  toggleMenu();
  //popup
  togglePopUp();
  //Плавная прокрутка
  scroll();
  //Табы
  tabs();
  //Слайдер
  slider();
  //Слайдер карусель
  //Вызов слайдера
  const carousel = new SliderCarousel({
    main: `.companies-wrapper`,
    wrap: `.companies-hor`,
    slidesToShow: 4,
    infinity: true,
    responsive: [{
        breakpoint: 1024,
        slideToShow: 3
      },
      {
        breakpoint: 768,
        slideToShow: 2
      },
      {
        breakpoint: 567,
        slideToShow: 1
      }
    ]
  });
  carousel.init();
  //Смена изображения при наведении
  imgChange();
  //ввод только цифр в инпуты калькулятора
  calcReg();
  //калькулятор
  calc();

  const valid1 = new Validator({
    selector: `#form1`,
    pattern: {},
    method: {
        'form1-phone': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'form1-email': [
            ['notEmpty'],
            ['pattern', 'email']
        ],
        'form1-name': [
            ['notEmpty'],
            ['pattern', 'text']
        ],
    }
});
valid1.init();

const valid2 = new Validator({
    selector: `#form2`,
    pattern: {},
    method: {
        'form2-phone': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'form2-email': [
            ['notEmpty'],
            ['pattern', 'email']
        ],
        'form2-name': [
            ['notEmpty'],
            ['pattern', 'text']
        ],
        'form2-message': [
            ['pattern', 'text']
        ]
    }
});
valid2.init();

const valid3 = new Validator({
    selector: `#form3`,
    pattern: {},
    method: {
        'form3-phone': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'form3-email': [
            ['notEmpty'],
            ['pattern', 'email']
        ],
        'form3-name': [
            ['notEmpty'],
            ['pattern', 'text']
        ],
    }
});
valid3.init();
  //send-ajax-form
  sendForm(`form1`);
  sendForm(`form2`);
  sendForm(`form3`); 
  //запрет на ввод
  validMini();