"use strict";

// var myP = document.createElement('p'),
//     myPText = document.createTextNode('This Paragraph created with JS');
// myP.appendChild(myPText);
// document.body.appendChild(myP);
// const allImages = document.getElemnetByTagName('img');
// for(let img of allImages){
//     img.src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"
// }
var squareImg = document.getElementsByClassName('square');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = squareImg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var img = _step.value;
    img.src = 'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=100';
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}