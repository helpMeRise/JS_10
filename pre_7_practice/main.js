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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 100000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){

            if (confirm('Есть ли у вас дополнительный заработок?')) {
              let itemIncome,
                  cashIncome;
              do {
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'Glo');
              }
              while ( !isNaN(itemIncome) || itemIncome.trim() === '' || itemIncome === '' || itemIncome === null );
              do {
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 1500);
              }
              while ( isNaN(cashIncome) || cashIncome === '' || cashIncome === null || 
              cashIncome !== cashIncome.trim() );
              appData.income[itemIncome] = cashIncome;
            }

            appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 
            'квартира, алкоголь, девушка');
            appData.addExpenses = appData.addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас в банке депозит?');
            
        let expenses,
              check;
    
        for ( let i = 0; i < 2; i++ ){
          do {
            if ( i === 0 ) {
              expenses = prompt('Введите обязательную статью расходов', 'Квартплата');
            }
            if ( i === 1 ){
              expenses = prompt('Введите обязательную статью расходов', 'Еда');
            }
          }
          while ( !isNaN(expenses) || expenses === '' || expenses.trim() === '' || expenses === null );
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
  },
  getInfoDeposit: function() {
    if ( appData.deposit ) {
      do {
        appData.percentDeposit = prompt('Какой годовой процент?', 5);
      }
      while ( isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null ||
      appData.percentDeposit.trim() === '' );
      do {
        appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
      }
      while ( isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null ||
       appData.moneyDeposit.trim() === '' );
    }
  },
  calcSavedMoney: function() {
    return appData.budgetMonth * appData.period;
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getInfoDeposit();

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


for ( let i = 0; i < appData.addExpenses.length; i++ ){
  appData.addExpenses[i] = appData.addExpenses[i][0].toUpperCase() + appData.addExpenses[i].slice(1);
}
console.log(appData.addExpenses.join(', '));