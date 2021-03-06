'use strict';

const start = document.getElementById('start'),
      reset = document.querySelector('#cancel'),
      button = document.getElementsByTagName('button'),
      incomePlus = button[0],
      expensesPlus = button[1],
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
      data = document.querySelector('.data'),
      calc = document.querySelector('.calc'),
      periodAmountItem = document.querySelector('.period-amount'),
      depositBank = document.querySelector('.deposit-bank'),
      depositAmount = document.querySelector('.deposit-amount'),
      depositPercent = document.querySelector('.deposit-percent'),
      additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
      additionalExpensesItem = document.querySelector('.additional_expenses-item');

let inputs = document.querySelectorAll('input'),
  incomeItems = document.querySelectorAll('.income-items'),
  expensesItems = document.querySelectorAll('.expenses-items');
  
  
  


const AppData = function(){

  this.income = {};
  this.addIncome = [];
  this.addExpenses = [];
  this.incomeMonth = 0;
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
  this.expenses = {};
};

const appData = new AppData();

AppData.prototype.start = function(){
  salaryAmount.addEventListener('input', function(){
    start.removeAttribute('disabled', '');
  });
  if ( salaryAmount.value === '') {
    start.setAttribute('disabled', '');
    return;
  } 
      
  
  this.budget = +salaryAmount.value;

  this.getExpenses();
  this.getIncome();
  this.get(additionalExpensesItem, this.addExpenses);
  this.getExpensesMonth();
  this.getInfoDeposit();
  this.getBudget();
  this.get(additionalIncomeItem, this.addIncome);
  this.getCancel();
  this.getReset();

  this.showResult();
};

AppData.prototype.showResult = function(){
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = Math.ceil(this.budgetDay);
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.addExpenses.join(', ');
  additionalIncomeValue.value = this.addIncome.join(', ');
  targetMonthValue.value = Math.ceil(this.getTargetMonth());
  
  periodSelect.addEventListener('input', () => {
    incomePeriodValue.value = this.calcPeriod();
  });
  
};
AppData.prototype.getReset = function(){
  start.style.display = 'none';
  reset.style.display = 'block';
};
AppData.prototype.getCancel = function(){

  let dataChildren = data.querySelectorAll('*');
  
  for ( let i=0; i < dataChildren.length; i++){
    
    if ( dataChildren[i].type == 'text') {
      dataChildren[i].setAttribute('disabled', '');
    }
  }
};
AppData.prototype.getPeriodAmount = function(){

  
  periodSelect.addEventListener('input', function(){
    periodAmountItem.textContent = periodSelect.value;
  });
  
};
AppData.prototype.addBlock = function(item, button, itemClass){
  
  let cloneItem = item[0].cloneNode(true);
  let itemChild = cloneItem.querySelectorAll('*');
  
  for ( let i = 0; i < itemChild.length; i++ ) {
      itemChild[i].value = '';
  }
   
  item[0].parentNode.insertBefore(cloneItem, button);
  item = document.querySelectorAll(itemClass);
  
  if (item.length === 3) {
    button.style.display = 'none';
  }
  cloneItem.querySelectorAll('input').forEach(this.getCheckPlaceholder);
};
AppData.prototype.getExpenses = function(){
  expensesItems.forEach((item) => {
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
    if (itemExpenses !== '' && cashExpenses !== ''){
      this.expenses[itemExpenses] = +cashExpenses;
    }

  });
};
AppData.prototype.getIncome = function(){
  incomeItems = document.querySelectorAll('.income-items');
  incomeItems.forEach((item) => {
    let itemIncome = item.querySelector('.income-title').value;
    let cashIncome = item.querySelector('.income-amount').value;
    if (itemIncome !== '' && cashIncome !== ''){
      this.income[itemIncome] = +cashIncome;
    }
  });
  for ( let key in this.income ) {
    this.incomeMonth += +this.income[key];
    
  }
};
AppData.prototype.getExpensesMonth = function(){
  let sum = 0;

  for ( let key in this.expenses ){
    sum += this.expenses[key];
    this.expensesMonth = sum;
  }
};
AppData.prototype.getBudget = function(){
  
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit)/12;
  this.budgetDay = this.budgetMonth / 30;

  return this.budget - this.expensesMonth;
};
AppData.prototype.get = function(elem, obj){
  const _this = this;
  if (typeof elem.value === 'string'){
     elem = elem.value.split(',');
      elem.forEach( function(item){
        item = item.trim();
        if ( item !== '' ) {
          obj.push(item);
        }
      });
  } else {
    elem.forEach( function(item){
        let itemValue = item.value.trim();
        if (itemValue !== '' ) {
          obj.push(itemValue);
        }
      });
  }
};
AppData.prototype.getInfoDeposit = function(){
  if (this.deposit) {
    this.percentDeposit = depositPercent.value;
    this.moneyDeposit = depositAmount.value;
  }
};
AppData.prototype.getTargetMonth = function(){
  return targetAmount.value / this.budget;
};
AppData.prototype.calcPeriod = function(){
  return this.budgetMonth * periodSelect.value;
};
AppData.prototype.reset = function(){
  this.delete();
  this.addIncome.length = 0;
    this.addExpenses.length = 0;
    this.deposit = false;
    
    periodAmountItem.textContent = 1;
    start.style.display = 'block';
    reset.style.display = 'none';
    incomePlus.style.display = 'block';
    expensesPlus.style.display = 'block';
    
    inputs.forEach((item) => {
      item.removeAttribute('disabled');
      item.value = '';
      periodSelect.value = 1;
      
  });
};
AppData.prototype.delete = function(){
  inputs = document.querySelectorAll('input');
  let inc = document.querySelectorAll('.income-items');
  let exp = document.querySelectorAll('.expenses-items');
  for ( let i = 1; i < inc.length; i++ ){
    inc[i].remove();
  }
  for ( let i = 1; i < exp.length; i++ ){
    exp[i].remove();
  }
};
AppData.prototype.getCheckPlaceholder = function(item){
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
};
AppData.prototype.eventsListeners = function(){
  inputs.forEach(this.getCheckPlaceholder);

  depositCheck.addEventListener('change', () => {
    if (depositCheck.checked){
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';
      this.deposit = true;
      depositBank.addEventListener('change', function(){
        let selectIndex = this.options[this.selectedIndex].value;
        if (selectIndex === 'other'){
          depositPercent.style.display = 'inline-block';
          depositPercent.value = '';
          depositPercent.removeAttribute('disabled', '');
        } else {
          depositPercent.style.display = 'none';
          depositPercent.value = selectIndex;
        }
      });
    } else {
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      depositAmount.value = '';
      this.deposit = false;
    }
  });

  start.addEventListener('click', () => {this.start();});
  reset.addEventListener('click', () => {this.reset();});
  
  expensesPlus.addEventListener('click', () => {
    this.addBlock(expensesItems, expensesPlus, '.expenses-items');
  });
  incomePlus.addEventListener('click', () => {
    this.addBlock(incomeItems, incomePlus, '.income-items');
  } );
  
  this.getPeriodAmount();

};

appData.eventsListeners();



