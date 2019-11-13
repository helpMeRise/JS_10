document.addEventListener(`DOMContentLoaded`, function(){
'use strict';
let circle = document.querySelector(`.circle`),
    start = document.querySelector(`.start`),
    stop = document.querySelector(`.stop`),
    animate;
let count = 0;

let move = () => {
    animate = requestAnimationFrame(move);
    count++;
    circle.style.left = (count + `px`);

    stop.addEventListener(`click`, () => {cancelAnimationFrame(animate);count = 0;circle.style.left = (count + `px`);});
    
};

let a = false;
start.addEventListener(`click`, () => {
    if (!a) {
        a = true;
        animate = requestAnimationFrame(move);
        start.style.background = `orange`;
    } else {
        cancelAnimationFrame(animate);
        a = false;
        start.style.background = `green`;

        
    } 
    
});
});
