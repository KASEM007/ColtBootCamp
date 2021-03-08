// Write a method odd_sum that method should return  
// the total sum of AbortControllerodd numbers 
// of the array

// odd_Sum([5, 4, 6, 13, 1]); //19
// odd_Sum([10, 2, 11, 3]); //14
// odd_Sum([8, 18]); // 0

// function odd_Sum(arr){
//     let total = 0

//     for(let i; i <= arr.length; i++){
//          if(i % 2 == 0){
//             total += i;   
//         }
//         return total
//     }
 

// }
// console.log(odd_Sum([5, 4, 6, 13, 1]))

// *******************************************
// *******************************************

// // program to find the square of a number
// // function is declared inside the variable
// let x = function(num){ return num * num};
// console.log(x(4));

// // can be used as variable value for other variables
// let y = x(3);
// console.log(y);

// *******************************************
// *******************************************
// Program to count down numbers to 1.

// function countDown(number){
//    // number = parseFloat(prompt("Enter a number: "))
//    //display the number
//     console.log(number);
//     //decrease the number value
//     const newNumber = number - 1;
//     // base case
//     if(newNumber > 0){
//         countDown(newNumber)   
//     }
// }

// countDown(5);

// *******************************************
// *******************************************

// let i = 2;
// for(let j=0; i <= 11; j++){
//     i *= j;
//     console.log(++i);
// }

// *******************************************
// *******************************************

// program to find the factorial of a number
function factorial(x){
    //if number is 0
    if(x == 0){
        return 1;
    }
    //if number is positive
    else{
        console.log(x);
        return x * factorial(x - 1);
    }
}

const num = 3;
// calling factorial() if num is non-negative
if(num > 0){
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);

}











