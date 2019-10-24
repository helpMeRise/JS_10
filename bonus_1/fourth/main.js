'use strict';


let game = function(){
  let getRandom = function(min, max){
    let random = min + Math.random() * (max +1 - min);
    return Math.floor(random);
  };
  let random = getRandom(1, 99);
  console.log('random: ', random);
  let question = +prompt('Угадай число');
  while (question !== random){
    if ( question > random ){
      question = +prompt('Меньше!');
    } else if ( question < random ){
      question = +prompt('Больше');
    } else if ( isNaN(question) ){
      question = +prompt('Введите число!');
    }
  }
  let accept = confirm('Хотите сыграть еще?');
  if (accept) {
    game(1, 99);
  } else {
    return alert('Всего доброго');
  }
};

game();

