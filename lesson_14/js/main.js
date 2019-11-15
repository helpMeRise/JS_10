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
    const btnMenu = document.querySelector(`.menu`),
          menu = document.querySelector(`menu`),
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

});