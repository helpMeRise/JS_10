'use strict';

//Получаю все нужные элементы в переменные
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

//создаю объект
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
  //функция запуска программы по нажатию на кнопку
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
    appData.showResult();
  },
  //функция вывода данных в правой части программы
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
  //меняю кнопку рассчитать на кнопку сбросить
  getReset: function(){
    start.style.display = 'none';
    reset.style.display = 'block';
  },
  //запрещаю ввод данных после нажатия на кнопку
  getCancel: function(){

    let dataChildren = data.querySelectorAll('*');
    
    for ( let i=0; i < dataChildren.length; i++){
      
      if ( dataChildren[i].type == 'text') {
        dataChildren[i].setAttribute('disabled', '');
      }
    }
  },
  //отображение шага из инпута range
  getPeriodAmount: function(){

    let periodAmountItem = document.querySelector('.period-amount');
    periodSelect.addEventListener('input', function(){
      periodAmountItem.textContent = periodSelect.value;
    });
    
  },
  //клонирование полей расходов
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
  },
  //клонирование полей доходов
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
  },
  //рассчитываем расходы
  getExpenses: function(){
    expensesItems.forEach(function(item){
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== ''){
        appData.expenses[itemExpenses] = +cashExpenses;
      }

    });
  },
  //рассчитываем доход
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
  //расходы за месяц
  getExpensesMonth: function(){
    let sum = 0;
  
    for ( let key in appData.expenses ){
      sum += appData.expenses[key];
      appData.expensesMonth = sum;
    }
  },
  //бюджет
  getBudget: function(){
    
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;

    return appData.budget - appData.expensesMonth;
  },
  //дополнительные расходы
  getAddExpenses: function(){
    let addExpenses = additionalExpensesItem.value.split(',');

    addExpenses.forEach( function(item){
      item = item.trim();
      if ( item !== '' ) {
        appData.addExpenses.push(item);
      }
    });
  },
  //дополнительные доходы
  getAddIncome: function(){
    additionalIncomeItem.forEach( function(item){
      let itemValue = item.value.trim();
      if (itemValue !== '' ) {
        appData.addIncome.push(itemValue);
      }
    });  
  },
  //рассчитваем когда достигнем цели
  getTargetMonth: function(){
    return targetAmount.value / appData.budget;
  },
  //рассчитываем накопления за период
  calcPeriod: function(){
    return appData.budgetMonth * periodSelect.value;
  },
  //добавляем правила ввода в поля с определенными плейсхолдерами
  getCheckPlaceholder: function(){
    
    inputs.forEach(function(item){
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
  });
  }
};

start.addEventListener('click', appData.start);


//добавление новых полей по нажатию на + а так же применения к ним регулярок
expensesPlus.addEventListener('click', function(){
  appData.addExpensesBlock();
  inputs = document.querySelectorAll('input');
  appData.getCheckPlaceholder();
});
incomePlus.addEventListener('click', function(){
  appData.addIncomeBlock();
  inputs = document.querySelectorAll('input');
  appData.getCheckPlaceholder();
});

appData.getCheckPlaceholder();
appData.getPeriodAmount();
