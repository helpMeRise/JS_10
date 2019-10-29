'use strict';

let head = document.createElement('h1');
setTimeout(function time(){
  
  let  date = new Date(),
    hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
    minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
    seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds(),
    day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
    month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1),
    year = date.getFullYear();
  let body = document.querySelector('body');
  head.textContent = hour + ':' + minutes + ':' + seconds + ' ' + day + ':' + month + ':' + year;
  body.appendChild(head);
  setTimeout(time, 1000);
}, 1000);


