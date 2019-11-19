'use strict';

const body = document.querySelector(`body`);

let list = document.createElement(`ol`);
body.appendChild(list);

let btn = document.createElement(`button`);
btn.className = `btn`;
btn.textContent = `Добавить`;
body.appendChild(btn);

let style = document.createElement(`style`);
  style.textContent = `
    * {
      box-sizing: border-box;
      font-family: sans-serif;
    }
    .btn {
      width: 100px;
      height: 30px;
      margin-right: 20px;
      cursor: pointer
    }
    .input {
      width: 200px;
      height: 30px;
      padding-left: 15px;
      outline: none
    }
    .through {
      text-decoration: line-through;
    }
  `;
document.head.appendChild(style);

let input = document.createElement(`input`);
input.className = `input`;
body.appendChild(input);

const newLi = () => {
  if (input.value === '') {
    alert(`Напиши задачу`);
    return;
  } 
  let newLi = document.createElement(`li`);
  newLi.textContent = input.value;
  list.appendChild(newLi);
  input.value = '';
};

btn.addEventListener(`click`, newLi);

list.addEventListener(`click`, (event) => {
  let target = event.target;
  if (target.closest(`li`)) {
    target.classList.toggle(`through`);
  }
});

