'use strict';

let arr = ['3822', '2415624', '872684', '76284', '983274902375923', '62244', '424224'];

for ( let i = 0; i < arr.length; i++ ){
  if ( arr[i][0] == 2 || arr[i][0] == 4 ){
    console.log( arr[i] );
  }
}

let n = 100;

target:
for ( let i = 2; i <= n; i++) {
  
  for ( let j = 2; j < i; j++){
    if ( i % j == 0){
      continue target;
      
    }
  }
  console.log("Делителями числа " + i + " являются числа: " + i + " и " + 1);
}