"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

console.log("Hello World");
var name = 'Aysha';
var lastName = 'Kasem';
var result = " The name are ".concat(name, " and the last name is ").concat(lastName);
console.log(result);
var number1 = 3 / 0;
console.log(number1);
var number2 = -3 / 0;
console.log(number2);
var value1 = Symbol('Hello');
var value2 = Symbol('Helloooo');
console.log(value1);
console.log(_typeof(number2));