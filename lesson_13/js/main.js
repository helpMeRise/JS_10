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
          closeBtn = document.querySelector(`.close-btn`),
          menuItems = menu.querySelectorAll(`ul>li`);

          //функция открывания и закрывания меню
          const handlerMenu = () => {menu.classList.toggle(`active-menu`);};

          //показываем/скрываем меню при нажатии на кнопку меню
          btnMenu.addEventListener(`click`, handlerMenu);

          //закрываем меню на крестик
          closeBtn.addEventListener(`click`, handlerMenu);

          //закрываем меню при нажатии на любой пункт
          menuItems.forEach( (item) => {item.addEventListener(`click`, handlerMenu);});
  };
  toggleMenu();

  //popup
  const togglePopUp = () => {
    const popup = document.querySelector(`.popup`),
        popupBtn = document.querySelectorAll(`.popup-btn`),
        popUpClose = document.querySelector(`.popup-close`);

    //открываем окно при нажатии на кнопки
    popupBtn.forEach( (item) => {
      item.addEventListener(`click`, () => { show(); });
    });

    //закрываем окно по нажатию на крестик
    popUpClose.addEventListener(`click`, () => { counter = 0; popup.style.display = `none`;});

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

  };
  togglePopUp();


});