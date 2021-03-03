// const newDate = Date()
// const n = newDate.toDateString()
// console.log(n)

// let number = 2;
// if (number > 0){
//     console.log("hello for you!")
// } else{
//     console.log("By By for you!")
// }

// const number = prompt("Enter a number: ");
// if (number > 0){
//     console.log("The number is positive");
// }else{
//     console.log("The number is either a negative or 0");
// }
// console.log("The if.... else statment is easy");

//**************************************************** */
//**************************************************** */

// Simple calculation with switch statment:
// let result;

// let operator = prompt("Enter your desire operator('-' or '+' or '*'): ");

// const firstNumber = parseFloat( prompt("Enter yur first Number: "));
// const secondNumber = parseFloat(prompt("Enter your Second Number: "));

// switch(operator){
//     case '+':
//         result = firstNumber  + secondNumber;
//         console.log(`${firstNumber} + ${secondNumber} = ${result} `);
//         break;
//     case '-':
//         result = firstNumber - secondNumber;
//         console.log(`${firstNumber} - ${secondNumber} = ${result}` );
//         break;
//     case '*':
//         result = firstNumber * secondNumber;
//         console.log(`${firstNumber} * ${secondNumber} = ${result}`);
//         break;
//     default:
//         console.log("Please Enter a valid operator.") 

// }

// let fruit = prompt("What kind of fresh fruit juise would you like to drink: ").toLowerCase();
// switch(fruit){
//     case 'apple':
//     case 'mango':
//     case 'ineapple':
//         console.log(`${fruit} juise is a nice choice, coming up in 5 mint`);
//         break;
//     default:
//         console.log(`Sorry ${fruit} juise is not serve in our store`);
// }

// Switch can be shared with multiple casess:

//**************************************************** */
//**************************************************** */
// While Loop
//************/

// let i = 1, n = 5;
// while(i <= n){
//     console.log(i);
//     i ++;
// }

// let sum = 0;
// // take input from the user
// let number = parseInt(prompt("Enter a Number: "));
//   // add all positive numbers
// while(number >= 0){
//     sum += number;
//     // take input again if the number is positive
//     number = parseInt(prompt("Enter a number: "));
// }
// //Dipslay the sum
// console.log(`The sum is ${sum}.`);

//**************************************************** */
//**************************************************** */

// do.... While Loop
// let i = 1;
// let n = 5;

// do{
//     console.log(i);
//     i++;
// } while(i <= n);
//*****************************

// let sum = 0, number;
// while(true){
//     number = parseInt(prompt('Enter a number: '));
//     if(number < 0){
//         break;
//     }
//     sum += number;
// }
// console.log(`The sum is ${sum}`)

//*****************************
//Nested Loop
// for(let i = 1; i <= 3; i++){
//     for(let j = 1; j<= 3; j++){
//         if(i == 2){
//             break;
//         }
//         console.log(`i = ${i}, j= ${j}`);
//     }
// }
//**************************************************** */
//**************************************************** */
// Continue
// for(let i = 1; i <= 5; i++){
//     if(i == 4){
//         continue;
//     }
//     console.log(i); 
// }

// Continue with a while loop
let sum = 0;
let number = 0;
while(number >= 0){
    // add all positive numbers
    sum += number;
    // take input from the user
    number = parseInt(prompt("Enter a number"));
    // continue condition
    if(isNaN(number)){
        console.log(" The number you intered is not a number.");
        number = 0; // the value of number is made 0 again
        continue
    }
}
// display the sum
console.log(`The sum is ${sum}.`);

























