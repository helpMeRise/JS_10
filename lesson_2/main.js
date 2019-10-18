
let money = 30000,
    income = 'фриланс',
    addExpenses = 'Cчетчики, погулять, вкусно покушать',
    deposit = false,
    mission = 100000,
    period = 3;

console.log( typeof money );
console.log( typeof income );
console.log( typeof deposit );
console.log( income.length );
console.log( 'Период ' + period + ' месяцa' );
console.log( 'Цель заработать ' + mission + ' рублей' );

addExpenses = addExpenses.toLowerCase().split(', ');
console.log( addExpenses );

let budgetDay = money / 30;
console.log( budgetDay );
console.log( money % 30 );
