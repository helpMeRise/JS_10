window.addEventListener(`DOMContentLoaded`, function(){
  'use strict';

  //Timer
  const countTimer = function(){
    const timerHours = document.querySelector(`#timer-hours`),
          timerMinutes = document.querySelector(`#timer-minutes`),
          timerSeconds = document.querySelector(`#timer-seconds`);

    //Получаем время до дедлайна
    let  dateNow = new Date(),
          seconds = 59 - dateNow.getSeconds(),
          minutes = 59 - dateNow.getMinutes(),
          hours = 23 - (dateNow.getHours());
   

    const zero = (elem) => { return (elem < 10) ? `0${elem}`: elem;};
          
      //Выводим значения на страницу
      timerHours.textContent = zero(hours);
      timerMinutes.textContent = zero(minutes);
      timerSeconds.textContent = zero(seconds);
      // //Выводим ноли
      // if (timeRemaining <= 0){
      //   timerHours.textContent = zero(0);
      //   timerMinutes.textContent = zero(0);
      //   timerSeconds.textContent = zero(0);
      // }
      
      
        
     
    
    //Запускаем и останавливаемтаймер
  let intervalClock = setInterval(countTimer, 1000);
  // if ( timeRemaining <= 0 ){
  //   clearInterval(intervalClock);
  // }

  };
  
countTimer();

});