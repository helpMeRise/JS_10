window.addEventListener(`DOMContentLoaded`, function(){
'use strict';

//Создаем переменные для вывода элементов на страницу
const countTimer = function(deadline){
  let pPart = document.createElement(`p`),
      pDay = document.createElement(`p`),
      pTime = document.createElement(`p`),
      pNY = document.createElement(`p`);

  //Получаем время до дедлайна
  const getTimeRemaining = function(){
    let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60),
        days = Math.floor(timeRemaining / 60 / 60 / 24);

        return {timeRemaining, days, hours, minutes, seconds};
        
  };
  let toNY = getTimeRemaining();

  //Текущее время
  const now = function(){
    let dayNow = new Date(),
        time = dayNow.toLocaleTimeString(),
        day = dayNow.getDay();

        return {dayNow, time, day};

  };
  let d = now();


  
  //Записываем данные в элементы
  const toEl = function(){
    if ( d.dayNow.getHours() < 6 ) {
      pPart.textContent = `Доброй ночи`;
    } else if (d.dayNow.getHours() > 6 && d.dayNow.getHours() < 12) {
      pPart.textContent = `Доброе утро`;
    } else if (d.dayNow.getHours() > 12 && d.dayNow.getHours() < 18) {
      pPart.textContent = `Добрый день`;
    } else {
      pPart.textContent = `Доброй вечер`;
    }

    let arrDays = [`Воскресенье`,  `Понедельник`, `Вторник`, `Среда`, `Четверг`, `Пятница`, `Суббота`];
    arrDays.forEach( (item, i) => {
      if (d.dayNow.getDay() === i){
        pDay.textContent = `Сегодня:${item}`;
      }
    });

      pTime.textContent = `Текущее время:${d.time}`;

      pNY.textContent = `До Нового Года осталось ${toNY.days} дней`;
  };
  toEl();

  //Добавляем элементы на страничку
  const toPage = function(){
    document.body.appendChild(pPart);
    document.body.appendChild(pDay);
    document.body.appendChild(pTime);
    document.body.appendChild(pNY);
  };
  toPage();

};

countTimer(`1 january 2020`);

});