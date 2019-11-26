const calcReg = () => {
  let nms = document.querySelectorAll(`input`);
  nms.forEach((item) => {
    if (item.getAttribute(`type`) === `number`) {
      item.addEventListener(`input`, () => {
        item.value = item.value.replace(/\D/, '');
      });
    }
  });

};
export default calcReg;