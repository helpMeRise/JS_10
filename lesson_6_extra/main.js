'use strict';

let week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

let today = new Date();
console.log('today: ', today);

console.log(today.getDay());
// week.forEach(function(item, i){
//   if ( i === today.getDay() && (i === 0 || i === 6) ) {
//     document.body.innerHTML += "<b><i>" + item + "</b></i><br>";
//   } else if ( i === 0 || i === 6 ){
//     document.body.innerHTML += "<i>" + item + "</i><br>";
//   } else if ( i === today.getDay() ){
//     document.body.innerHTML += "<b>" + item + "</b><br>";
//   }  else {
//     document.body.innerHTML +=  item + "<br>";
//   }
// });

week.forEach(function(item, i){
  let day = document.createElement('p');
  day.textContent = item;
  if ( i === today.getDay() ){
    day.classList.add('today');
  }
  if ( item === 'Воскресенье' || item === 'Суббота' ){
    day.classList.add('weekend');
  }
  document.body.appendChild(day);
});

