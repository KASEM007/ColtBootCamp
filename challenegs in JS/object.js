

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


let password;
do{
    password = prompt("What is the passcode?");    
} while(password.toLowerCase() !== "let me in");