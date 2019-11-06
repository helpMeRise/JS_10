'use strict';

function DomElement(selector, height, width, bg, fontSize){

  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

}

DomElement.prototype.create = function(text){
  
  if ( this.selector[0] === '.' ) {
    this.el = document.createElement('div');
    this.el.classList.add(this.selector.slice(1));
    document.body.appendChild(this.el);
  }
  if ( this.selector[0] === '#' ) {
    this.el = document.createElement('p');
    this.el.classList.add(this.selector.slice(1));
    document.body.appendChild(this.el);
  }
  this.el.style = 'height: ' + this.height + 'px; ' + 'width: ' + this.width + 'px; ' + 'background: ' + this.bg + ';' +
   ' font-size: ' + this.fontSize + ';';
  this.el.textContent = text;
};

let test = new DomElement('.class', 200, 400, '#ccc', 18);
test.create('Hello World!');



