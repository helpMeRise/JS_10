document.addEventListener(`DOMContentLoaded`, () => {
'use strict';

    const codeText = document.querySelector(`.text`),
            button = document.querySelector(`.button`);

    const changeColor = () => {
        let r = Math.floor(Math.random() * 256).toString(16),
            g = Math.floor(Math.random() * 256).toString(16),
            b = Math.floor(Math.random() * 256).toString(16);

        document.body.style.background = `#${r}${g}${b}`;
        codeText.textContent = `#${r}${g}${b}`;
        codeText.style.color = `#${b}${r}${g}`;
        
    };

    button.addEventListener(`click`, changeColor);

});