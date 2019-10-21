'use strict';

let money = 30000,
    income = 'фриланс',
    addExpenses = 'Cчетчики, погулять, вкусно покушать',
    deposit = false,
    mission = 100000,
    period = 3;


money = prompt('Ваш месячный доход?', 30000);
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

console.log(addExpenses.split(', '));

deposit = confirm('Есть ли у вас депозит в банке?');

console.log( typeof money );
console.log( typeof income );
console.log( typeof deposit );



let question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let question2 = prompt('Во сколько это обойдется?');
let question3 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let question4 = prompt('Во сколько это обойдется?');

let budgetMonth = money - +question2 - +question4;
console.log('budgetMonth: ', budgetMonth);

console.log( Math.ceil( mission / budgetMonth ) );

let budgetDay = budgetMonth / 30;
console.log( Math.floor(budgetDay) );
console.log( money % 30 );

if ( budgetDay > 800 ) {
  console.log('Высокий уровень дохода');
} else if (  800 <= budgetDay > 300 ) {
  console.log( 'Средний уровень дохода' );
} else if ( 300 <= budgetDay > 0 ) {
  console.log( 'Низкий уровень дохода' );
} else {
  console.log( 'Что-то пошло не так' );
}