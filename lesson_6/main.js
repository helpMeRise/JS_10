'use strict';

let money,
    start = function(){
      do {
        money = prompt('Ваш месячный доход?', 30000);
      }
      while ( isNaN(money) || money === '' || money === null );
    };

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 100000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас в банке депозит?');
            
        let expenses,
            check;
    
        for ( let i = 0; i < 2; i++ ){
          if ( i === 0 ) {
            expenses = prompt('Введите обязательную статью расходов', 'Квартплата');
          }
          if ( i === 1 ){
            expenses = prompt('Введите обязательную статью расходов', 'Еда');
          }
          do {
            check = prompt('Во сколько это обойдется', 10000);
          }
          while ( isNaN(check) || check === '' || check === null || check !== check.trim() );
            appData.expenses[expenses] = check;
        }

            
  },
    getExpensesMonth: function() {
      
      let sum = 0;
      for ( let key in appData.expenses ){
        sum += +appData.expenses[key];
      }
      return sum;
      
      
      
  },
    getBudget: function() {
      appData.budgetMonth = money - +appData.getExpensesMonth();
      console.log('budgetMonth: ', appData.budgetMonth);

      appData.budgetDay = appData.budgetMonth / 30;
      console.log('budgetDay: ', appData.budgetDay);
      return +money - +appData.getExpensesMonth();
  },
    getTargetMonth: function() {
  
    return (+appData.mission) / (+acumulatedMonth);
    
  },
    getStatusIncome: function() {
    if ( appData.budgetDay > 800 ) {
      return 'Высокий уровень дохода';
    } else if ( appData.budgetDay <= 800 && appData.budgetDay > 300 ) {
      return 'Средний уровень дохода' ;
    } else if ( appData.budgetDay <= 300 && appData.budgetDay >= 0 ) {
      return 'Низкий уровень дохода' ;
    } else {
      return 'Что-то пошло не так' ;
    }
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

appData.getStatusIncome();
console.log('getStatusIncome(): ', appData.getStatusIncome());

let acumulatedMonth = appData.getBudget();

console.log('getExpensesMonth:', appData.getExpensesMonth());
console.log('acumulatedMonth: ', acumulatedMonth);
console.log('appData.mission: ', appData.mission);
if ( appData.getTargetMonth() < 0 ){
  console.log('Цель не будет достигнута');
} else {
  console.log( 'Цель будет достигнута через: ' + Math.floor(appData.getTargetMonth()) );
}

console.log("Наша программа включает в себя данные: ");
for ( let key in appData ){
console.log(key + ": " + appData[key]);
}
