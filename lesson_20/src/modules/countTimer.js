const countTimer = function (deadline) {
  const timerHours = document.querySelector(`#timer-hours`),
    timerMinutes = document.querySelector(`#timer-minutes`),
    timerSeconds = document.querySelector(`#timer-seconds`);

  //Получаем время до дедлайна
  const getTimeRemaining = function () {
    let dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      seconds = Math.floor(timeRemaining % 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      hours = Math.floor(timeRemaining / 60 / 60);
    return {
      timeRemaining,
      hours,
      minutes,
      seconds
    };
  };

  //добавление нолей
  const zero = (elem) => {
    return (elem < 10) ? `0${elem}` : elem;
  };

  const updateClock = function () {
    const timer = getTimeRemaining();

    //Выводим значения на страницу
    timerHours.textContent = zero(timer.hours);
    timerMinutes.textContent = zero(timer.minutes);
    timerSeconds.textContent = zero(timer.seconds);
    //Выводим ноли
    if (timer.timeRemaining <= 0) {
      timerHours.textContent = zero(0);
      timerMinutes.textContent = zero(0);
      timerSeconds.textContent = zero(0);
    }

    //Запускаем и останавливаемтаймер
    let intervalClock = setInterval(updateClock, 1000);
    if (timer.timeRemaining <= 0) {
      clearInterval(intervalClock);
    }
  };
  updateClock();
};

export default countTimer;