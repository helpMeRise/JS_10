window.addEventListener(`DOMContentLoaded`, function(){
  'use strict';

  //Timer
  const countTimer = function(deadline){
    const timerHours = document.querySelector(`#timer-hours`),
          timerMinutes = document.querySelector(`#timer-minutes`),
          timerSeconds = document.querySelector(`#timer-seconds`);

    //Получаем время до дедлайна
    const getTimeRemaining = function(){
      let dateStop = new Date(deadline).getTime(),
          dateNow = new Date().getTime(),
          timeRemaining = (dateStop - dateNow) / 1000,
          seconds = Math.floor(timeRemaining % 60),
          minutes = Math.floor((timeRemaining / 60) % 60),
          hours = Math.floor(timeRemaining / 60 / 60);
          return {timeRemaining, hours, minutes, seconds};
    };

    //добавление нолей
    const zero = (elem) => { return (elem < 10) ? `0${elem}`: elem;};
          
    const updateClock = function(){
      const timer = getTimeRemaining();

      //Выводим значения на страницу
      timerHours.textContent = zero(timer.hours);
      timerMinutes.textContent = zero(timer.minutes);
      timerSeconds.textContent = zero(timer.seconds);
      //Выводим ноли
      if (timer.timeRemaining <= 0){
        timerHours.textContent = zero(0);
      timerMinutes.textContent = zero(0);
      timerSeconds.textContent = zero(0);
      }
      
      //Запускаем и останавливаемтаймер
      let intervalClock = setInterval(updateClock, 1000);
      if ( timer.timeRemaining <= 0 ){
        clearInterval(intervalClock);
      }
    };
    updateClock();
  };  
  countTimer(`01 december 2019`);

  //Menu
  const toggleMenu = () => {
    //получаем элементы в переменные
    const menu = document.querySelector(`menu`),
          menuItems = menu.querySelectorAll(`ul>li`),
          body = document.querySelector(`body`);

    body.addEventListener(`click`, (event) => {

      let target = event.target;
      
      if (target.closest(`.menu`)){
        menu.classList.toggle(`active-menu`);
      } else if (target.closest(`.close-btn`) || !target.closest(`menu`)){
        menu.classList.remove(`active-menu`);
      } else {
        menuItems.forEach ( (item) => {
          if (item.contains(target)){
            menu.classList.toggle(`active-menu`);
          }
        });
      }
    });
  };
  toggleMenu();

  //popup
  const togglePopUp = () => {
    const popup = document.querySelector(`.popup`),
        popupBtn = document.querySelectorAll(`.popup-btn`);

    //открываем окно при нажатии на кнопки
    popupBtn.forEach( (item) => {
      item.addEventListener(`click`, () => { show(); });
    });

      //анимация появления окна
    let animate,
        counter = 0;
    let show = () => {
      
      animate = requestAnimationFrame(show);
        
        popup.style.opacity = counter;
        counter += 0.05;
        if ( counter > 1 || screen.width <= 768 ){
          cancelAnimationFrame(animate);
          popup.style.opacity = 1;
        }
        popup.style.display = `block`;
    };

    popup.addEventListener(`click`, (event) => {
      let target = event.target;
      //закрытие на крестик
      if (target.classList.contains(`popup-close`)){
        counter = 0; 
        popup.style.display = `none`;
      } else {    //закрытие при клике мимо окна
        target = target.closest(`.popup-content`);
        if (!target){
          popup.style.display = `none`;
        }
      }
      
    });

  };
  togglePopUp();

  //Плавная прокрутка
  const scroll = () => {
    const donwBtn = document.querySelector(`a, [href="service-block"]`),
          menu = document.querySelector(`menu`),
          menuList = menu.querySelectorAll(`li [href^="#"]`),
          serviceBlock = document.querySelector(`#service-block`),
          portfolio = document.querySelector(`#portfolio`),
          calc = document.querySelector(`#calc`),
          companies = document.querySelector(`#companies`),
          command = document.querySelector(`#command`),
          connect = document.querySelector(`#connect`);
    let animate,
        count = 0;

    const serviceBlockC = (serviceBlock.getBoundingClientRect().top + window.pageYOffset),
          portfolioС = (portfolio.getBoundingClientRect().top + window.pageYOffset),
          calcC = (calc.getBoundingClientRect().top + window.pageYOffset),
          companiesC = (companies.getBoundingClientRect().top + window.pageYOffset),
          commandC = (command.getBoundingClientRect().top + window.pageYOffset),
          connectC = (connect.getBoundingClientRect().top + window.pageYOffset);
              

    //функция прокрутки к блоку сервис
    const toService = () => {
      count = window.scrollY;
      animate = requestAnimationFrame(toService);
      if ( count <= (serviceBlockC - 30) ){
        count += 40;
      }
      scrollTo(0, count);
      if ( count >= serviceBlockC){
        cancelAnimationFrame(animate);
      }
    };
    //функция прокрутки к портфолио
    const toPortfolio = () => {
      count = window.scrollY;
      animate = requestAnimationFrame(toPortfolio);
      if ( count <= (portfolioС - 30) ){
        count += 40;
      }
      scrollTo(0, count);
      if ( count >= portfolioС){
        cancelAnimationFrame(animate);
      }
    };
    //функция прокрутки к калькулятору
    const toCalc = () => {
      count = window.scrollY;
      animate = requestAnimationFrame(toCalc);
      if ( count <= (calcC - 30) ){
        count += 40;
      }
      scrollTo(0, count);
      if ( count >= calcC){
        cancelAnimationFrame(animate);
      }
    };
    //функция прокрутки к команде
    const toCommand = () => {
      count = window.scrollY;
      animate = requestAnimationFrame(toCommand);
      if ( count <= (commandC - 30) ){
        count += 40;
      }
      scrollTo(0, count);
      if ( count >= commandC){
        cancelAnimationFrame(animate);
      }
    };
    //функция прокрутки к вопросам
    const toConnect = () => {
      count = window.scrollY;
      animate = requestAnimationFrame(toConnect);
      if ( count <= (connectC - 30) ){
        count += 40;
      }
      scrollTo(0, count);
      if ( count >= connectC){
        cancelAnimationFrame(animate);
      }
    };

    menuList.forEach( (item) => {
      switch (item.textContent){
        //Наши услуги
        case (`Наши услуги`):
          item.addEventListener(`click`, (e) => {e.preventDefault(); toService();});
          break;
        //Портфолио
        case (`Портфолио`):
            item.addEventListener(`click`, (e) => {e.preventDefault(); toPortfolio();});
            break;
        //Калькулятор
        case (`Калькулятор стоимости`):
            item.addEventListener(`click`, (e) => {e.preventDefault(); toCalc();});
            break;
        //Команда
        case (`Наша команда`):
            item.addEventListener(`click`, (e) => {e.preventDefault(); toCommand();});
            break;
        //Вопросы
        case (`Остались вопросы?`):
            item.addEventListener(`click`, (e) => {e.preventDefault(); toConnect();});
      }        
    });
    
    donwBtn.addEventListener(`click`, (e) => { e.preventDefault(); toService(); });
     

  };
  scroll();

  //Табы
  const tabs = () => {
    const tabHeader = document.querySelector(`.service-header`),
          tab = document.querySelectorAll(`.service-header-tab`),
          tabContent = document.querySelectorAll(`.service-tab`);

    //функция добавления/удаления класса
    const toggleTabContent = (index) => {
      for ( let i = 0; i < tabContent.length; i++){
        if (index === i){
          tab[i].classList.add(`active`);
          tabContent[i].classList.remove(`d-none`);
        } else {
          tab[i].classList.remove(`active`);
          tabContent[i].classList.add(`d-none`);
        }
      }
    };
    
    //обработчик события для табов
    tabHeader.addEventListener(`click`, (event) => {
      let target = event.target;
          target = target.closest(`.service-header-tab`);
      if (target.classList.contains(`service-header-tab`)){
        tab.forEach( (item, i) => {
          if (item === target){
            toggleTabContent(i);
          }
        });
      }
    });
  };
  tabs();

  //Слайдер
  const slider = () => {
    const slide = document.querySelectorAll(`.portfolio-item`),
    btn = document.querySelectorAll(`.portfolio-btn`),
    slider = document.querySelector(`.portfolio-content`),
    list = document.querySelector(`.portfolio-dots`);
    let dot = document.querySelectorAll(`.dot`);

    //создаем доты в количестве равному слайдам
    const dots = () => {
      
      slide.forEach( () => {
        let newDot = document.createElement(`li`);
        newDot.classList.add(`dot`);
        list.appendChild(newDot);
        
      });
      dot = document.querySelectorAll(`.dot`);
    };
    dots();

    let currentSlide = 0,
        interval;
     
    //убираем старый слайд
    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };
    //показываем новый слайд
    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    //автопролистывание слайдера
    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, `portfolio-item-active`);
      prevSlide(dot, currentSlide, `dot-active`);
      currentSlide++;
      if (currentSlide >= slide.length){
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, `portfolio-item-active`);
      nextSlide(dot, currentSlide, `dot-active`);
    };
    
    const startSlide = (time) => {
      interval = setInterval(autoPlaySlide, time);
    };
    startSlide(1500);
    
    const stopSlide = () => {
      clearInterval(interval);
    };

    
    slider.addEventListener(`click`, (event) => {
      event.preventDefault();

      let target = event.target;

      if (!target.matches(`.portfolio-btn, .dot`)){
        return;
      }

      prevSlide(slide, currentSlide, `portfolio-item-active`);
      prevSlide(dot, currentSlide, `dot-active`);
      
      if (target.matches(`#arrow-right`)){    //следующий слайд при нажатии стрелки вправо
        currentSlide++;
      } else if ( target.matches(`#arrow-left`)){     //предыдущий слайд при нажатии стрелки влево
        currentSlide--;
      } else if ( target.matches(`.dot`)){      //соответствующий слайд при нажатии на дот
        dot.forEach( (elem, i ) => {
          if ( elem === target ) {
            currentSlide = i;
          }
        });
      }
      //первый слайд после последнего
      if ( currentSlide >= slide.length){
        currentSlide = 0;
      } 
      //последний слайд перед первым
      if ( currentSlide < 0) {
        currentSlide = slide.length - 1;
      }

      nextSlide(slide, currentSlide, `portfolio-item-active`);
      nextSlide(dot, currentSlide, `dot-active`);

    });
    //остановка автоплея при наведении на стрелки и доты
    slider.addEventListener(`mouseover`, (event) => {
      if (event.target.matches(`.portfolio-btn, .dot`)){
        stopSlide();
      }
    });
    //возобновление автоплея при убирании иышки с кнопок и дотов
    slider.addEventListener(`mouseout`, (event) => {
      if (event.target.matches(`.portfolio-btn, .dot`)){
        startSlide(1500);
      }
    });
    

  };
  slider();
  
  //Слайдер карусель
  class SliderCarousel {
    constructor({
      wrap, 
      main, 
      next,
      prev,
      position = 0,
      slidesToShow = 3,
      infinity = false,
      responsive = []
    }) {
      if (!main || !wrap) {
        console.warn(`slider-carousel: Необходимо передать 2 свойстваб 'main' и 'wrap'`);
      }
      this.main = document.querySelector(main);
      this.wrap = document.querySelector(wrap);
      this.slides = document.querySelector(wrap).children;
      this.prev = document.querySelector(prev);
      this.next = document.querySelector(next);
      this.slidesToShow = slidesToShow;
      this.responsive = responsive;
      this.options = {
        position,
        infinity,
        widthSlide: Math.floor(100 / this.slidesToShow),
        maxPosition: this.slides.length - this.slidesToShow,
      };
    }
    //инициализация всех функций
    init() {
      this.addGloClass();
      this.addStyle();

      if (this.prev && this.next) {
        this.controlSlider();
      } else {
        this.addArrow();
        this.controlSlider();
      }
      if (this.responsive) {
        this.responseInit();
      }
    }
    //добавляем свои классы элементам
    addGloClass() {
      this.main.classList.add(`glo-slider`);
      this.wrap.classList.add(`glo-slider__wrap`);
      for ( const item of this.slides ) {
        item.classList.add(`glo-slider__item`);
      }
    }
    //прописываем стили для своих классов
    addStyle() {
      let style = document.getElementById(`sliderCarousel-style`);
      if (!style) {
        style = document.createElement(`style`);
        style.id = `sliderCarousel-style`;
      }
      style.textContent = `
        .glo-slider {
          overflow: hidden;
        }
        .glo-slider__wrap {
          display: flex !important;
          transition: transform 0.5s !important;
          will-change: transform !important;
        }
        .glo-slider__item {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          margin: auto 0 !important;
          flex: 0 0 ${this.options.widthSlide}% !important
        }
      `;

      document.head.appendChild(style);
    }
    //подключаем управление стрелками
    controlSlider(){
      this.prev.addEventListener(`click`, this.prevSlider.bind(this));
      this.next.addEventListener(`click`, this.nextSlider.bind(this));
    }
    //настраиваем стрелку "назад"
    prevSlider(){
      if (this.options.infinity || this.options.position > 0) {
        --this.options.position;
        if ( this.options.position < 0) {
          this.options.position = this.options.maxPosition; 
        }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      }
    }
    //настраиваем стрелку "вперед"
    nextSlider(){
      if (this.options.infinity || this.options.maxPosition > this.options.position) {
        ++this.options.position;
        if ( this.options.position > this.options.maxPosition) {
          this.options.position = 0;
        }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      }
    }
    //добавляем стрелки
    addArrow(){
      this.prev = document.createElement(`button`);
      this.next = document.createElement(`button`);

      this.prev.className = `glo-slider__prev`;
      this.next.className = `glo-slider__next`;

      this.main.appendChild(this.prev);
      this.main.appendChild(this.next);

      const style = document.createElement(`style`);
      style.textContent = `
        .glo-slider__prev,
        .glo-slider__next {
          margin: 0 10px;
          border: 20px solid transparent;
          background: transparent;
        }
        .glo-slider__next {
          border-left-color: #19b5fe;
        }
        .glo-slider__prev {
          border-right-color: #19b5fe;
        }
        .glo-slider__prev:hover,
        .glo-slider__next:hover,
        .glo-slider__prev:focus,
        .glo-slider__next:focus {
          background: transparent
        }
      `;
      document.head.appendChild(style);
    }
    //настраиваем адаптив
    responseInit(){
      const slidesToShowDefault = this.slidesToShow;
      const allResponse = this.responsive.map(item => item.breakpoint);
      const maxResponse = Math.max(...allResponse);

      const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow < maxResponse) {
          for ( let i = 0; i < allResponse.length; i++) {
            if (widthWindow < allResponse[i]) {
              this.slidesToShow = this.responsive[i].slideToShow;
              this.options.widthSlide = Math.floor(100 / this.slidesToShow);
              this.addStyle();
            } 
          }
        } else {
          this.slidesToShow = slidesToShowDefault;
          this.options.widthSlide = Math.floor(100 / this.slidesToShow);
          this.addStyle();
        }
      };
      checkResponse();

      window.addEventListener(`resize`, checkResponse);
    }

  }
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
  const imgChange = () => {
    const command = document.querySelector(`.command`);
  let images = command.querySelectorAll(`img`);

  //при наведении на изображение записываем адрес текущей картинки в data-img2, а картинку меняем на ту что в data-img
  command.addEventListener(`mouseover`, (event) => {
    let target = event.target;
    images.forEach( (item) => {
      if (target === item) {
        item.dataset.img2 = item.src;
        item.src = item.dataset.img;
      }
    });
  });
  //когда уводим мышку меняем картинку на ту что была изначально, берм ее из созданного при наведении data-img2
  command.addEventListener(`mouseout`, (event) => {
    let target = event.target;
    images.forEach( (item) => {
      if (target === item) {
        item.src = item.dataset.img2;
      }
    });
  });
  };
  imgChange();


  //ввод только цифр в инпуты калькулятора
  const calcReg = () => {
    let nms = document.querySelectorAll(`input`);
    nms.forEach( (item) => {
      if (item.getAttribute(`type`) === `number`) {
        item.addEventListener(`input`, () => {
          item.value = item.value.replace(/\D/, '');
        });
      }
    });
    
  };
  calcReg();

  //калькулятор
  const calc = (price = 100) => {
    const calcBlock = document.querySelector(`.calc-block`),
          calcType = document.querySelector(`.calc-type`),
          calcSquare = document.querySelector(`.calc-square`),
          calcDay = document.querySelector(`.calc-day`),
          calcCount = document.querySelector(`.calc-count`),
          totalValue = document.getElementById(`total`);
          let count = 0;

    const countSum = () => {
      let total = 0,
          countValue = 1,
          dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if ( calcDay.value && calcDay.value < 5 ) {
        dayValue *= 2;
      } else if ( calcDay.value && calcDay.value < 10 ) {
        dayValue *= 1.5;
      }

      if ( typeValue && squareValue ) {
        total = Math.floor(price * typeValue * squareValue * countValue * dayValue);
      } 

      

      
      let animate;
      const change = () => {
        animate = requestAnimationFrame(change);
        if ( count < total ) {
          count += 5;
          totalValue.textContent = count;
        } else if ( count > total ) {
          count -= 5;
          totalValue.textContent = count;
        } else if( count === total ) {
          totalValue.textContent = count;
          cancelAnimationFrame(animate);
        }
      };
      change();
    };

    calcBlock.addEventListener(`change`, (event) => {
      let target = event.target;

      if ( target.matches(`.calc-type, .calc-square, .calc-day, .calc-count`) ) {
        countSum();
      }
    });

    

     

  };
  calc();

});