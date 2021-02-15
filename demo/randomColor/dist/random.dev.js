"use strict";

// const button = document.querySelector('button');
// const h2 = document.querySelector('h2');
// button.addEventListener('click', function(){
//     document.body.style.backgroundColor = 'olive';
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     const newColor = `rgb(${r},${g},${b})`
//     document.body.style.backgroundColor = newColor;
//     h2.innerText = newColor;
// })
// ****** Using Function *****
var button = document.querySelector('button');
var h2 = document.querySelector('h2');
button.addEventListener('click', function () {
  var newColor = makeRandomColor();
  document.body.style.backgroundColor = newColor;
  h2.innerText = newColor;
});

var makeRandomColor = function makeRandomColor() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
};