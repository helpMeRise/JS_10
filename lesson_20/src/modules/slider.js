const slider = () => {
  const slide = document.querySelectorAll(`.portfolio-item`),
    btn = document.querySelectorAll(`.portfolio-btn`),
    slider = document.querySelector(`.portfolio-content`),
    list = document.querySelector(`.portfolio-dots`);
  let dot = document.querySelectorAll(`.dot`);

  //создаем доты в количестве равному слайдам
  const dots = () => {

    slide.forEach(() => {
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
    if (currentSlide >= slide.length) {
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

    if (!target.matches(`.portfolio-btn, .dot`)) {
      return;
    }

    prevSlide(slide, currentSlide, `portfolio-item-active`);
    prevSlide(dot, currentSlide, `dot-active`);

    if (target.matches(`#arrow-right`)) { //следующий слайд при нажатии стрелки вправо
      currentSlide++;
    } else if (target.matches(`#arrow-left`)) { //предыдущий слайд при нажатии стрелки влево
      currentSlide--;
    } else if (target.matches(`.dot`)) { //соответствующий слайд при нажатии на дот
      dot.forEach((elem, i) => {
        if (elem === target) {
          currentSlide = i;
        }
      });
    }
    //первый слайд после последнего
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    //последний слайд перед первым
    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }

    nextSlide(slide, currentSlide, `portfolio-item-active`);
    nextSlide(dot, currentSlide, `dot-active`);

  });
  //остановка автоплея при наведении на стрелки и доты
  slider.addEventListener(`mouseover`, (event) => {
    if (event.target.matches(`.portfolio-btn, .dot`)) {
      stopSlide();
    }
  });
  //возобновление автоплея при убирании иышки с кнопок и дотов
  slider.addEventListener(`mouseout`, (event) => {
    if (event.target.matches(`.portfolio-btn, .dot`)) {
      startSlide(1500);
    }
  });


};

export default slider;