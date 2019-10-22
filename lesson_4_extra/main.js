'use strict';
let a = prompt('Введите строку');
let one = function(a){
  if ( typeof(a) != 'string' ) {
    alert( 'Нужно ввести строку' );
  } else if ( a.length <= 30 ) {
    return a.trim();
  } else {
    return a.trim().substr(0, 30) + '...';
  }
};

console.log('one(a): ', one(a));