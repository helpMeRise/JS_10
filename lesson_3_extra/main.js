'use strict';

let lang = prompt('ru или en?'),
    en = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    
    ru = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

if ( lang == 'ru' ) {
  console.log(ru);
} else if ( lang == 'en' ) {
  console.log( en );
}
    
switch (lang) {
  case 'ru':
    console.log(ru);
    break;
  case 'en':
    console.log(en);
}

let arr = {
  'ru': ru,
  'en': en
};

console.log( arr[lang] );


let namePerson = prompt('Имя');

let result = namePerson === 'Артем' ? console.log( 'Директор' ) :
    namePerson === 'Максим' ? console.log( 'Преподаватель' ) :
    console.log( 'Студент' );