const imgChange = () => {
  const command = document.querySelector(`.command`);
  let images = command.querySelectorAll(`img`);

  //при наведении на изображение записываем адрес текущей картинки в data-img2, а картинку меняем на ту что в data-img
  command.addEventListener(`mouseover`, (event) => {
    let target = event.target;
    images.forEach((item) => {
      if (target === item) {
        item.dataset.img2 = item.src;
        item.src = item.dataset.img;
      }
    });
  });
  //когда уводим мышку меняем картинку на ту что была изначально, берм ее из созданного при наведении data-img2
  command.addEventListener(`mouseout`, (event) => {
    let target = event.target;
    images.forEach((item) => {
      if (target === item) {
        item.src = item.dataset.img2;
      }
    });
  });
};

export default imgChange;