'use strict';

let books = document.querySelector('.books');
let book = document.querySelectorAll('.book');
let book1 = book[1],
    book2 = book[0],
    book3 = book[4],
    book4 = book[3],
    book5 = book[5],
    book6 = book[2];

books.insertBefore(book1, book2);
books.insertBefore(book3, book4);
books.appendChild(book6);

document.body.setAttribute('style', 'background-image: url("./image/you-dont-know-js.jpg")');

book3.querySelector('a').textContent = "Книга 3. this и Прототипы Объектов";

let adv = document.querySelector('.adv');
document.body.removeChild(adv);

let chapterCollect2 = book[0].querySelector('ul'),
chapters2 = book[0].querySelectorAll('li');

chapterCollect2.appendChild(chapters2[4]);
chapterCollect2.appendChild(chapters2[5]);

let chapterCollect5 = book[5].querySelector('ul'),
chapters5 = book[5].querySelectorAll('li');

chapterCollect5.insertBefore(chapters5[9],chapters5[2]);
chapterCollect5.insertBefore(chapters5[5],chapters5[8]);
chapterCollect5.insertBefore(chapters5[2],chapters5[6]);

let chapterCollect6 = book[2].querySelector('ul'),
    chapters6 = book[2].querySelectorAll('li'),
    newChapter = document.createElement('li');

newChapter.textContent = 'Глава 8: За пределами ES6';

chapterCollect6.insertBefore(newChapter, chapters6[9]);





