'use strict';

let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

let today = new Date();
console.log('today: ', today);

week.forEach(function(item, i){
  if ( i === today.getDate() && i === 4 || i === 5 ) {
    document.body.innerHTML += "<b><i>" + item + "</b></i><br>";
  } else if ( i === 5 || i === 6 ){
    document.body.innerHTML += "<i>" + item + "</i><br>";
  } else if ( i === today.getDate() ){
    document.body.innerHTML += "<b>" + item + "</b><br>";
  }  else {
    document.body.innerHTML +=  item + "<br>";
  }
});
