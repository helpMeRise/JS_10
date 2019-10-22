'use strict';

let money = 30000,
    income = 'фриланс',
    addExpenses = 'Cчетчики, погулять, вкусно покушать',
    deposit = false,
    mission = 100000,
    period = 3;


money = prompt('Ваш месячный доход?', 30000);
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');



deposit = confirm('Есть ли у вас депозит в банке?');

let showTypeOf = function(data) {
  console.log( data, typeof( data ) );
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);



let question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let question2 = prompt('Во сколько это обойдется?');
let question3 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let question4 = prompt('Во сколько это обойдется?');

let budgetMonth = money - +question2 - +question4;


let budgetDay = budgetMonth / 30;


let getStatusIncome = function() {
  if ( budgetDay > 800 ) {
    return'Высокий уровень дохода';
  } else if (  800 <= budgetDay > 300 ) {
    return 'Средний уровень дохода' ;
  } else if ( 300 <= budgetDay > 0 ) {
    return 'Низкий уровень дохода' ;
  } else {
    return 'Что-то пошло не так' ;
  }
};

console.log('getStatusIncome();: ', getStatusIncome());

let getExpensesMonth = function() {
  return +question2 - +question4;
};

let getAccumulatedMonth = function() {
  return budgetMonth - getExpensesMonth();
};
let acumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function() {
  return mission / acumulatedMonth;
};

console.log( acumulatedMonth );
console.log( Math.floor(getTargetMonth()) );