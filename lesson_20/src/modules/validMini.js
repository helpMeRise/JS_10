const validMini = () => {
  const inputs = document.querySelectorAll(`input`);
  
  inputs.forEach( (item) => {
    if ( item.type === `tel`) {
      item.addEventListener(`input`, () => {item.value = item.value.replace(/[^\+\d]/, '');});
    }
    if (item.type ===`text`) {
      item.addEventListener(`input`, () => {item.value = item.value.replace(/[^\sа-яА-ЯёЁ]/, '');});
    }
  });
  
  
};

export default validMini;