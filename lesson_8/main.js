'use strict';

let start = document.getElementById('start'),
reset = document.querySelector('#cancel'),
button = document.getElementsByTagName('button'),
incomePlus = button[0],
expensesPlus = button[1],
additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
additionalExpensesItem = document.querySelector('.additional_expenses-item'),
targetAmount = document.querySelector('.target-amount'),
depositCheck = document.querySelector('#deposit-check'),
budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
targetMonthValue = document.getElementsByClassName('target_month-value')[0],
salaryAmount = document.querySelector('.salary-amount'),
incomeTitle = document.querySelector('.income-title'),
incomeAmount = document.querySelector('.income-amount'),
expensesTitle = document.querySelector('.expenses-title'),
additionalExpenses = document.querySelector('.additional_expenses'),
periodSelect = document.querySelector('.period-select'),
incomeItems = document.querySelectorAll('.income-items'),
expensesItems = document.querySelectorAll('.expenses-items'),
data = document.querySelector('.data'),
inputs = document.querySelectorAll('input');

let appData = {
  income: {},
  addIncome: [],
  addExpenses: [],
  incomeMonth: 0,
  deposit: false,
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  expenses: {},
  start: function(){

    if ( salaryAmount.value === '') {
      start.setAttribute('disable', '');
      return;
    } else {
      start.removeAttribute('disable', '');
    }
    appData.budget = +salaryAmount.value;

    appData.getExpenses();
    appData.getIncome();
    appData.getAddExpenses();
    appData.getExpensesMonth();
    appData.getBudget();
    appData.getAddIncome();
    appData.getCancel();
    appData.getReset();
    appData.getCheckPlaceholder();
    appData.showResult();
  },
  showResult: function(){
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = Math.ceil(appData.budgetDay);
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(appData.getTargetMonth());

    periodSelect.addEventListener('input', function(){
      incomePeriodValue.value = appData.calcPeriod();
    });
    
  },
  getReset: function(){
    start.style.display = 'none';
    reset.style.display = 'block';
  },
  getCancel: function(){

    let dataChildren = data.querySelectorAll('*');
    
    for ( let i=0; i < dataChildren.length; i++){
      
      if ( dataChildren[i].type == 'text') {
        dataChildren[i].setAttribute('disabled', '');
      }
    }
  },
  getPeriodAmount: function(){

    let periodAmountItem = document.querySelector('.period-amount');
    periodSelect.addEventListener('input', function(){
      periodAmountItem.textContent = periodSelect.value;
    });
    
  },
  addExpensesBlock: function(){
    
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if ( expensesItems.length === 3 ){
      expensesPlus.style.display = 'none';
    }
  },
  addIncomeBlock: function(){
    
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if ( incomeItems.length === 3 ){
      incomePlus.style.display = 'none';
    }
  },
  getExpenses: function(){
    expensesItems.forEach(function(item){
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== ''){
        appData.expenses[itemExpenses] = +cashExpenses;
      }

    });
  },
  getIncome: function(){
    incomeItems.forEach(function(item){
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== ''){
        appData.income[itemIncome] = +cashIncome;
      }

      for ( let key in appData.income ) {
        appData.incomeMonth += +appData.income[key];
      }

    });

  },
  getExpensesMonth: function(){
    let sum = 0;
  
    for ( let key in appData.expenses ){
      sum += appData.expenses[key];
      appData.expensesMonth = sum;
    }
  },
  getBudget: function(){
    
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;

    return appData.budget - appData.expensesMonth;
  },
  getAddExpenses: function(){
    let addExpenses = additionalExpensesItem.value.split(',');

    addExpenses.forEach( function(item){
      item = item.trim();
      if ( item !== '' ) {
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function(){
    additionalIncomeItem.forEach( function(item){
      let itemValue = item.value.trim();
      if (itemValue !== '' ) {
        appData.addIncome.push(itemValue);
      }
    });  
  },
  getTargetMonth: function(){
    return targetAmount.value / appData.budget;
  },
  calcPeriod: function(){
    return appData.budgetMonth * periodSelect.value;
  }
};

start.addEventListener('click', appData.start);


expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);

appData.getPeriodAmount();
