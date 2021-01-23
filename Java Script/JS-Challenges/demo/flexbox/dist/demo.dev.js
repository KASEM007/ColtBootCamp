"use strict";

// let input = prompt("Hey, Say Somthing!")
// while (true){
//     input = prompt(input);
//     if(input.toLowerCase()=== "stop copying me")
//     break;
// }
// console.log("OK, You Win!")
// const sub = ['cringe', 'books', 'chicken', 'soccer', 'funny']
// for( let each of sub){
//     console.log(`Visit reddit.com/r/${each}`)
// }
// function greet(firstName){
//     console.log(`first Name is: ${firstName}`)
// }
// greet("Ahmed")
// function isSnakeEyes(firstNum, secondNum){
//     if(firstNum === 1 && secondNum === 1){
//         console.log("SnakeEyes!")
//     }
//     else{
//         console.log("NotSnakeEyes!")
//     }
// }
// isSnakeEyes(1,1)
// isSnakeEyes(1,5)
// isSnakeEyes(4,5)
// function repeat(str, numTimes){
//     for (let i = 0; i < numTimes; i++){
//         console.log(str)
//     }}
// function sumArray(x){
//     let total = 0;
//     for(i = 0; i < x.length; i++){
//         total += x[i]
//         return total
//     }
// }
// sumArray([1, 2, 3, 4])
// function bankRobbery(){
//     const heroes = ['SpiderMan', 'Wolverine', 'BattMan', 'BlackPanter']
//     function cryForHelp(){
//         for(let hero of heroes){
//             console.log(`Please Help Us, ${hero.toUpperCase()}`)
//         }
//     } 
//     cryForHelp();
// }
// function callTwice(func){
//     func();
//     func();
// }
function callTenTimes(f) {
  for (var i = 0; i < 10; i++) {
    f();
  }
}

function rollDie() {
  var roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}