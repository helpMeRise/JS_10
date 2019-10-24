'use strict';

let comparison = function(){
  let arr = [];

  
  for ( let i = 0; i < 2; i++ ) {

    do {
      arr[i] = prompt('Введите число');
    } 
    while ( arr[i] === '' || isNaN(arr[i]) || arr[i] === null || arr[i].trim() === '' );

  }

  let res = arr[0] === arr[1] ? 'Числа равны' :
      arr[0] > arr[1] ? 'Первое число больше' :
      'Второе число больше';

  return res;
};

console.log(comparison());

