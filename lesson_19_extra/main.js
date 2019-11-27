document.addEventListener(`DOMContentLoaded`, () => {
'use strict';

  const card = document.querySelector(`.card`),
        btns = document.querySelector(`.btns`),
        iframe = document.createElement(`iframe`);
  let link;

  btns.addEventListener(`click`, (event) => {

    let target = event.target;

    if ( target.closest(`.dogs`) ) {
      link = 'https://random.dog/woof.json';
    } 
    if ( target.closest(`.cat`) ) {
      link = 'https://aws.random.cat/meow';
    }

    const postData = () => fetch(link);
    postData()
      .then((response) => {
        if ( response.status !== 200 ) {
          throw new Error(`Ошибочка`);
        }
        response.json().then( data => {
          card.append(iframe);
          iframe.style = `width: 500px; height: 500px`;
          if ( target.closest(`.dogs`) ) {
            iframe.src = data.url;
          }
          if ( target.closest(`.cat`) ) {
            iframe.src = data.file;
          } 
        });  
      })
      .catch( (error) => console.log(error));
  });
  

});