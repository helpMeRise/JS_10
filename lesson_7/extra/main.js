'use strict';

let head = document.createElement('h1'),
    date = new Date(),
    hour = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear(),
    myTime = [hour, minutes, seconds],
    myDate = [day, month, year];


let zero = function(){
  for ( let i = 0; i < myTime.length; i++) {
    if ( myTime[i] < 10 ) {
      myTime[i] = '0' + myTime[i];
    } 
  }
  for ( let i = 0; i < myDate.length; i++) {
    if ( myDate[i] < 10 ) {
      myDate[i] = '0' + myDate[i];
    } 
  }
};

zero();
    
let body = document.querySelector('body');

head.textContent = myTime.join(':') + ' ' + myDate.join(':');

body.appendChild(head);




