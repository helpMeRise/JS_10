const togglePopUp = () => {
  const popup = document.querySelector(`.popup`),
    popupBtn = document.querySelectorAll(`.popup-btn`);

  //открываем окно при нажатии на кнопки
  popupBtn.forEach((item) => {
    item.addEventListener(`click`, () => {
      show();
    });
  });

  //анимация появления окна
  let animate,
    counter = 0;
  let show = () => {

    animate = requestAnimationFrame(show);

    popup.style.opacity = counter;
    counter += 0.05;
    if (counter > 1 || screen.width <= 768) {
      cancelAnimationFrame(animate);
      popup.style.opacity = 1;
    }
    popup.style.display = `block`;
  };

  popup.addEventListener(`click`, (event) => {
    let target = event.target;
    //закрытие на крестик
    if (target.classList.contains(`popup-close`)) {
      counter = 0;
      popup.style.display = `none`;
    } else { //закрытие при клике мимо окна
      target = target.closest(`.popup-content`);
      if (!target) {
        popup.style.display = `none`;
      }
    }

  });

};

export default togglePopUp;