"use strict";

var from = document.querySelector('form');
var product = document.querySelector('#product');
var quantity = document.querySelector('#qty');
var groceryList = document.querySelector('#list');
from.addEventListener('submit', function (e) {
  e.preventDefault();
  var newList = document.createElement('li');
  newList.innerHTML = "".concat(quantity.value, " ").concat(product.value);
  groceryList.appendChild(newList);
  quantity.value = "";
  product.value = "";
});