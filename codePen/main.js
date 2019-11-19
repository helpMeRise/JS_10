const task1 = document.getElementById(`task1`);
const task2 = document.getElementById(`task2`);
const body = document.querySelector(`body`);
const content = document.querySelectorAll(`div`);


task1.innerHTML = task1.textContent.replace(/функци./g, '<strong>функция</strong>');


task2.innerHTML = task2.innerHTML.replace(/(\d{2}:\d{2})/g, `<b>$1</b>`);


const links = (item) => {
  body.innerHTML = body.innerHTML.replace(/(http:\/\/)(w{3}\.)?(.*\.ru)((\/.*)?)*(\))/g, 
  `<a href = "$1$2$3$5">$3</a>)`);
};
links();


const mark = (item) => {
  item.innerHTML = item.innerHTML.replace(/(".{2,}")/g, `<mark>$1</mark>`);
};
content.forEach( (item) => {
  mark(item);
});


const color = body.innerHTML.match(/#[\d\w]{6}/g);
console.log(color);
