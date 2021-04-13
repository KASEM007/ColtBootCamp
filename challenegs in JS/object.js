

// const student = {
//     name : 'John',
//     age : 20,
//     marks :{
//         science : 70,
//         math : 75
//     },
//     greet : function(){ console.log("Hello")}
// };

// console.log(student.marks);
// console.log(student.marks.math);
//console.log(`${student.greet()} ${student.name}`);
//console.log(student.greet());

// const person = {
//     name : 'Sam',
//     age : 30,
//     greet:function(){ console.log('hello')}
// }

// person.greet(), console.log(person.name);


// let number = '3427';
// let result = parseInt(number);
// console.log(result + 2)

// let student = {};
// student.name ='Mo';
// student.class = 'javaScript';
// student.age = 36;
// student.greet = function(){
//     console.log(`Hello, ${this.name}`);
// }
// console.log(student);


// let number  = '23.4';
// let result = ParseInt(number);
// console.log(result);


// const person = {
//     name:'John',
//     age: 30,
//     //greet:function(){console.log('The name is' + ' ' + this.name);}
//     greet:function(){console.log(`The name is ${this.name} and his is ${this.age} years old`)}

// };
// person.greet();


// **** Change words with JS ****
// ______________________________
const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input', function (e){
    h1.innerText = 'Welcome, ' + input.value;

    if(input.value ===""){
        h1.innerText = "Enter Your Username";
    }
});

document.querySelector("#btn").onclick = function(){
    document.querySelector("#start").innerHTML = "Let's Get Started!";

    document.querySelector("#btn").style.display = "none";

}

// document.querySelector("#button").onclick = function(){
//     document.querySelector("#confirm").innerHTML = "Order placed, Check email for confirmation";
//     // make the button disappear
//     document.querySelector("#button").style.display = "none";

// }

// {   let name = prompt("What is your name?");
//     let point = name === "kasem"? 10:2;
//     console.log(point);

// }


// let password;
// do{
//     password = prompt("What is the passcode?");    
// } while(password.toLowerCase() !== "let me in");


// let myString = "Search this string baby";
// let chartToString = "c";
// for(let i = 0; i < myString.length; i++){
//     if(myString[i] === chartToString){
//         console.log(`Found ${myString[i]} at the index ${i}` )
//     }
// }

   
//{ let d = document.getEelementById("distination");
//  for(let i = 0; i < 10; i++){
//     for(let k = i; k >= 0; k--){
//         d.append(k + " ");
//     }
//     var br = document.createElement('br');
//     d.appendChild(br);
// }

// {
//     let grades = [15, 4, 4, 66, 7, 9, 33, 4, 6, 43, 43, 43, 40];
//     // grades.length = 30;
//     //grades[34] = 40;

//     let avg =  0;
//     let total = 0
//     let count = 0;

//     for(let i = 0; i < grades.length; i++){
//         if(grades[i] !== undefined){
//             count ++
//             total += grades[i];
//         }
//     }
//     avg = total / count;
//     console.log(`The avrage of the list is ${avg}`) 
   
// }

{
//     let grades = [];
//     while(true){
//         let input = prompt("Add your grades..");
//         if(input === "q" || input === "Q" || input === null){
//             break;

//         }
//         grades.push(Number(input));
//         console.log(grades);
//     }

    // let grades = [12, 13, 32, 43, 42, 23];
    // grades.length = 30;

    // grades.forEach(function(item){
    //     console.log(item)
    // })

// 
    grades = [
        [2, 4, 6, 34, 453 ,78, 5, 3],
        [7, 8, 4, 65, 34 , 45, 2, 5],
        [6, 7, 23, 65, 43, 67, 67, 2]
    ]

    // for(let i = 0; i < grades.length; i++){
    //     for(let k = 0; k < grades[i].length; k++){
    //         console.log(grades[i][k]);
    //     }
    //     console.log("~~~~~~~~");
    // }

    //** Bestway
    grades.forEach(function(row){
        row.forEach(function(col){
            console.log(col);
        });
        console.log("~~~~~~~~~")
    });

    const valentine = new Date();
    console.log(valentine)

}

