'use strict';


let game = function(){
  let m;
  let getRandom = function(min, max){
    let random = min + Math.random() * (max +1 - min);
    return Math.floor(random);
  };
  let random = getRandom(1, 99);
  console.log('random: ', random);
  let question = +prompt('Угадай число');
  console.log(question);
  
  
    
  while (question !== random){
    if ( question > random ){
      alert('Меньше!');
      question = confirm('Будем продолжать?');
      if (!question) {
        m = 'Пока, слабак';
        return alert(m);
      } else {
        question = +prompt('Введите число');
      }
    } else if ( question < random ){
      alert('Больше!');
      question = confirm('Будем продолжать?');
      if (!question) {
        m = 'Пока, слабак';
        return alert(m);
      } else {
        question = +prompt('Введите число');
      }
    } else if ( isNaN(question) ){
      question = +prompt('Введите число!');
    } 
  }
  
  alert('Поздравляю, вы угадали!');
  let accept = confirm('Хотите сыграть еще?');
  if (accept) {
    game(1, 99);
  } else {
    m = 'Всего доброго';
    
  }
  return alert(m);
};

game();

