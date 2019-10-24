'use strict';


let start = +prompt('Начало'),
    end = +prompt('Конец');
let leap = function(){
  
  if ( start < end ){
    for ( let i = start; i < end; i++ ){
      if ( new Date(i, 1, 29).getMonth() == 1 ){
        console.log(i);
      }
    }
  } else {
    for ( let i = end; i < start; i++ ){
      if ( new Date(i, 1, 29).getMonth() == 1 ){
        console.log(i);
      }
    }
  } 

};
leap();