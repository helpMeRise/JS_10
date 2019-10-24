'use strict';

let three = function(){
  let num,
    sum = 0;
  while ( num !== null ){
    num = prompt('Число');
  if ( isNaN(num) ) {
    continue;
  }
  sum += +num;
}
return sum;
};
console.log(three());