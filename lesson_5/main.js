'use strict';

let money,
    income = 'фриланс',
    addExpenses = 'Cчетчики, погулять, вкусно покушать',
    deposit = false,
    mission = 100000,
    period = 3;

let start = function(){
  do {
    money = +prompt('Ваш месячный доход?', 30000);
  }
  while ( isNaN(money) || money === '' || money === null );
};

start();

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');



deposit = confirm('Есть ли у вас депозит в банке?');

let showTypeOf = function(data) {
  console.log( data, typeof( data ) );
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);



let question1,
    question2;

let getExpensesMonth = function() {
  let sum = 0,
      check;

  for ( let i = 0; i < 2; i++ ){
    if ( i === 0 ) {
      question1 = prompt('Введите обязательную статью расходов', 'Квартплата');
    }
    if ( i === 0 ){
      question2 = prompt('Введите обязательную статью расходов', 'Еда');
    }

    do {
      check = +prompt('Во сколько это обойдется', 10000);
    }
    while ( isNaN(check) || check === '' || check === null );
    sum += check; 
  }
  
  return sum;
};

let expensesAmount = getExpensesMonth();

let budgetMonth = money - expensesAmount;
console.log('budgetMonth: ', budgetMonth);


let budgetDay = budgetMonth / 30;
console.log('budgetDay: ', budgetDay);


let getStatusIncome = function() {
  if ( budgetDay > 800 ) {
    return 'Высокий уровень дохода';
  } else if ( budgetDay <= 800 && budgetDay > 300 ) {
    return 'Средний уровень дохода' ;
  } else if ( budgetDay <= 300 && budgetDay >= 0 ) {
    return 'Низкий уровень дохода' ;
  } else {
    return 'Что-то пошло не так' ;
  }
};

getStatusIncome();
console.log('getStatusIncome(): ', getStatusIncome());



let getAccumulatedMonth = function() {
  return money - expensesAmount;
};
let acumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function() {
  return mission / acumulatedMonth;
};

console.log( acumulatedMonth );
if ( getTargetMonth() < 0 ){
  console.log('Цель не будет достигнута');
} else {
  console.log( 'Цель будет достигнута через: ' + Math.floor(getTargetMonth()) );
}
