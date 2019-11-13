window.addEventListener(`DOMContentLoaded`, function () {
  'use strict';


  
  const reRun = function(){
    const timerHours = document.querySelector(`#timer-hours`),
        timerMinutes = document.querySelector(`#timer-minutes`),
        timerSeconds = document.querySelector(`#timer-seconds`);

    const tic = setInterval(reRun, 1000);

    let deadline = new Date();
    deadline.setHours(0, 0, 0);

    let timer = function(){
      let now = new Date(),
        time = now - deadline,
        hours = 23 - Math.floor(((time / 1000) / 60 / 60)),
        minutes = 59 - Math.floor(((time / 1000) / 60) % 60),
        seconds = 59 - Math.floor((time / 1000) % 60);
        return {now, hours, minutes, seconds};
    };
    const go = timer();
    
      
    const zero = (elem) => { return (elem < 10) ? `0${elem}`: elem;};

    //Выводим значения на страницу
    timerHours.textContent = zero(go.hours);
    timerMinutes.textContent = zero(go.minutes);
    timerSeconds.textContent = zero(go.seconds);

    if ( deadline === go.now){
      reRun();
    }

  };

  reRun();

});