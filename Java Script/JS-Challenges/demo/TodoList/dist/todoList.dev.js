"use strict";

var input = prompt("What would you like to do?");
var todos = ["collect chiken Eggs", "Clean litter box"];

while (input !== 'quit' && input !== 'q') {
  if (input === 'list') {
    console.log("****************");

    for (var i = 0; i < todos.length; i++) {
      console.log("".concat(i, " : ").concat(todos[i]));
    }

    console.log("*****************");
  } else if (input === 'new') {
    var newtodo = prompt("Ok, What is the new todo?");
    todos.push(newtodo);
    console.log("".concat(newtodo, " added to the list!"));
  } else if (input === 'delete') {
    var index = parseInt(prompt("ok, enter an index to delete: "));

    if (!Number.isNaN(index)) {
      var deleted = todos.splice(index, 1);
      console.log("Ok, deleted ".concat(deleted[0]));
    } else {
      console.log('Unknown index');
    }
  }

  input = prompt("What would you like to do?");
}

console.log("Ok, Quit the app!");