const scroll = () => {
  const donwBtn = document.querySelector(`a, [href="service-block"]`),
    menu = document.querySelector(`menu`),
    menuList = menu.querySelectorAll(`li [href^="#"]`),
    serviceBlock = document.querySelector(`#service-block`),
    portfolio = document.querySelector(`#portfolio`),
    calc = document.querySelector(`#calc`),
    companies = document.querySelector(`#companies`),
    command = document.querySelector(`#command`),
    connect = document.querySelector(`#connect`);
  let animate,
    count = 0;

  const serviceBlockC = (serviceBlock.getBoundingClientRect().top + window.pageYOffset),
    portfolioС = (portfolio.getBoundingClientRect().top + window.pageYOffset),
    calcC = (calc.getBoundingClientRect().top + window.pageYOffset),
    companiesC = (companies.getBoundingClientRect().top + window.pageYOffset),
    commandC = (command.getBoundingClientRect().top + window.pageYOffset),
    connectC = (connect.getBoundingClientRect().top + window.pageYOffset);


  //функция прокрутки к блоку сервис
  const toService = () => {
    count = window.scrollY;
    animate = requestAnimationFrame(toService);
    if (count <= (serviceBlockC - 30)) {
      count += 40;
    }
    scrollTo(0, count);
    if (count >= serviceBlockC) {
      cancelAnimationFrame(animate);
    }
  };
  //функция прокрутки к портфолио
  const toPortfolio = () => {
    count = window.scrollY;
    animate = requestAnimationFrame(toPortfolio);
    if (count <= (portfolioС - 30)) {
      count += 40;
    }
    scrollTo(0, count);
    if (count >= portfolioС) {
      cancelAnimationFrame(animate);
    }
  };
  //функция прокрутки к калькулятору
  const toCalc = () => {
    count = window.scrollY;
    animate = requestAnimationFrame(toCalc);
    if (count <= (calcC - 30)) {
      count += 40;
    }
    scrollTo(0, count);
    if (count >= calcC) {
      cancelAnimationFrame(animate);
    }
  };
  //функция прокрутки к команде
  const toCommand = () => {
    count = window.scrollY;
    animate = requestAnimationFrame(toCommand);
    if (count <= (commandC - 30)) {
      count += 40;
    }
    scrollTo(0, count);
    if (count >= commandC) {
      cancelAnimationFrame(animate);
    }
  };
  //функция прокрутки к вопросам
  const toConnect = () => {
    count = window.scrollY;
    animate = requestAnimationFrame(toConnect);
    if (count <= (connectC - 30)) {
      count += 40;
    }
    scrollTo(0, count);
    if (count >= connectC) {
      cancelAnimationFrame(animate);
    }
  };

  menuList.forEach((item) => {
    switch (item.textContent) {
      //Наши услуги
      case (`Наши услуги`):
        item.addEventListener(`click`, (e) => {
          e.preventDefault();
          toService();
        });
        break;
        //Портфолио
      case (`Портфолио`):
        item.addEventListener(`click`, (e) => {
          e.preventDefault();
          toPortfolio();
        });
        break;
        //Калькулятор
      case (`Калькулятор стоимости`):
        item.addEventListener(`click`, (e) => {
          e.preventDefault();
          toCalc();
        });
        break;
        //Команда
      case (`Наша команда`):
        item.addEventListener(`click`, (e) => {
          e.preventDefault();
          toCommand();
        });
        break;
        //Вопросы
      case (`Остались вопросы?`):
        item.addEventListener(`click`, (e) => {
          e.preventDefault();
          toConnect();
        });
    }
  });

  donwBtn.addEventListener(`click`, (e) => {
    e.preventDefault();
    toService();
  });


};

export default scroll;