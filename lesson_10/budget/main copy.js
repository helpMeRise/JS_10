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
inputs = document.querySelectorAll('input'),
calc = document.querySelector('.calc'),
periodAmountItem = document.querySelector('.period-amount');

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
  start: function(appData){
    if ( salaryAmount.value === '') {
      start.setAttribute('disable', '');
      return;
    } else {
      start.removeAttribute('disable', '');
    }
    this.budget = +salaryAmount.value;

    this.getExpenses();
    this.getIncome();
    this.getAddExpenses();
    this.getExpensesMonth();
    this.getBudget();
    this.getAddIncome();
    this.getCancel();
    this.getReset();

    this.showResult();
  },
  showResult: function(){
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.ceil(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    
    periodSelect.addEventListener('input', function(){
      incomePeriodValue.value = this.calcPeriod();
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

    
    periodSelect.addEventListener('input', function(){
      periodAmountItem.textContent = periodSelect.value;
    });
    
  },
  addExpensesBlock: function(){
    
    let cloneExpensesItem = expensesItems[0].cloneNode(true);

    let expensesChildren = cloneExpensesItem.querySelectorAll('*');
    
    for ( let i=0; i < expensesChildren.length; i++){
      if ( expensesChildren[i].type == 'text') {
        expensesChildren[i].value = null;
      }
    }

    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if ( expensesItems.length === 3 ){
      expensesPlus.style.display = 'none';
    }
    cloneExpensesItem.querySelectorAll('input').forEach(appData.getCheckPlaceholder);
  },
  addIncomeBlock: function(){
    let cloneIncomeItem = incomeItems[0].cloneNode(true);

    let incomeChildren = cloneIncomeItem.querySelectorAll('*');
    for ( let i=0; i < incomeChildren.length; i++){
      
      if ( incomeChildren[i].type == 'text') {
        incomeChildren[i].value = null;
      }
    }

    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if ( incomeItems.length === 3 ){
      incomePlus.style.display = 'none';
    }
    cloneIncomeItem.querySelectorAll('input').forEach(appData.getCheckPlaceholder);
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
      this.expensesMonth = sum;
    }
  },
  getBudget: function(){
    
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = this.budgetMonth / 30;

    return this.budget - this.expensesMonth;
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
    return targetAmount.value / this.budget;
  },
  calcPeriod: function(){
    return this.budgetMonth * periodSelect.value;
  },
  reset: function(){
    inputs.forEach(function(item){
      item.removeAttribute('disabled');
      item.value = '';
      periodSelect.value = 1;
      periodAmountItem.textContent = 1;
      appData.delete();
      start.style.display = 'block';
      reset.style.display = 'none';
    });
  },
  delete: function(){
    inputs = document.querySelectorAll('input');
    let inc = document.querySelectorAll('.income-items');
    let exp = document.querySelectorAll('.expenses-items');
    for ( let i = 1; i < inc.length; i++ ){
      inc[i].remove();
    }
    for ( let i = 1; i < exp.length; i++ ){
      exp[i].remove();
    }
  },
  getCheckPlaceholder: function(item){
      if ( item.placeholder === 'Наименование' ){
        item.addEventListener('input', function(){
          item.value = item.value.replace(/[^а-яА-ЯёЁ\s.,!()?-]/,'');
        });
      }
      if ( item.placeholder === 'Сумма' ){
        item.addEventListener('input', function(){
          item.value = item.value.replace(/[^\d]/,'');
        });
      }
  },
};

inputs.forEach(appData.getCheckPlaceholder);

start.addEventListener('click', appData.start.bind(appData));
reset.addEventListener('click', appData.reset);

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);

appData.getPeriodAmount();
