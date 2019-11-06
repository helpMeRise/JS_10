'use strict';

document.addEventListener('DOMContentLoaded', function(){
  let el;
  function DomElement(selector, height, width, bg, fontSize){

    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.left = 0;
    this.top = 0;
  }
  
  DomElement.prototype.create = function(text){
    
    if ( this.selector[0] === '.' ) {
      el = document.createElement('div');
      el.classList.add(this.selector.slice(1));
      document.body.appendChild(el);
    }
    if ( this.selector[0] === '#' ) {
      el = document.createElement('p');
      
      el.classList.add(this.selector.slice(1));
      document.body.appendChild(el);
    }
    el.style = 'height: ' + this.height + 'px; ' + 'width: ' + this.width + 'px; ' + 'background: ' + 
    this.bg + ';' + ' font-size: ' + this.fontSize + ';' + ' position: absolute; ' + 'left: ' + this.left + 'px; ' +
     'top: ' + this.top + 'px;';
    el.textContent = text;
    };

    DomElement.prototype.move = function(){
      document.addEventListener('keydown', function(event){
        let newLeft = parseFloat(el.style.left);
        let newTop = parseFloat(el.style.top);
        switch (event.key){
          case ('ArrowLeft'):
            el.style.left = newLeft - 10 + 'px';
            break;
          case ('ArrowUp'):
            el.style.top = newTop - 10 + 'px';
            break;
          case ('ArrowRight'):
            el.style.left = newLeft + 10 + 'px';
            break;
          case ('ArrowDown'):
          el.style.top = newTop + 10 + 'px';
        }
      });

    };

  let test = new DomElement('.class', 100, 100, '#ccc', 18);
  test.create('Move me');
  test.move();

});


