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
    for (const item of this.slides) {
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
  controlSlider() {
    this.prev.addEventListener(`click`, this.prevSlider.bind(this));
    this.next.addEventListener(`click`, this.nextSlider.bind(this));
  }
  //настраиваем стрелку "назад"
  prevSlider() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;
      if (this.options.position < 0) {
        this.options.position = this.options.maxPosition;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }
  }
  //настраиваем стрелку "вперед"
  nextSlider() {
    if (this.options.infinity || this.options.maxPosition > this.options.position) {
      ++this.options.position;
      if (this.options.position > this.options.maxPosition) {
        this.options.position = 0;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }
  }
  //добавляем стрелки
  addArrow() {
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
  responseInit() {
    const slidesToShowDefault = this.slidesToShow;
    const allResponse = this.responsive.map(item => item.breakpoint);
    const maxResponse = Math.max(...allResponse);

    const checkResponse = () => {
      const widthWindow = document.documentElement.clientWidth;
      if (widthWindow < maxResponse) {
        for (let i = 0; i < allResponse.length; i++) {
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

export default SliderCarousel;