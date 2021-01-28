"use strict";

//set Time Out
// console.log("hello!!!...")
// setTimeout(() =>{
//     console.log(".... Are you still there?")
// }, 3000)
// console.log("UHHH")
// SetInterval
// cosnt id = setInterval(() => {
//     console.log(Math.random())
// }, 2000);
//clearInterval(id)
// const numbers = [1, 2, 3, 4, 5, 6]
// numbers.filter(n => {
//     return n < 4;
// })
// function validUserName(userName){
//     return userName.filter(name => name.length < 10);
// }
// function red(){
//     document.getElementById("header").style.color = "Red";
// }
// function green(){
//     document.getElementById("header").style.color = "Green";
// }
function pressed() {
  var text = document.getElementById("inp").Value;

  if (text === 'red') {
    document.getElementById('header').style.color = 'red';
  } else if (text === 'green') {
    document.getElementById('header').style.color('green');
  } else if (text === 'blue') {
    document.getElementById('header').style.color = 'blue';
  }
}