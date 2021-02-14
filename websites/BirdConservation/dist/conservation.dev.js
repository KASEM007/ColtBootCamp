"use strict";

var container = document.getElementById("container");

for (var i = 0; i < 100; i++) {
  var button = document.createElement('button');
  container.appendChild(button);
  button.innerText = "Click Me!";
}