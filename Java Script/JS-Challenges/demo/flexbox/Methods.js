// const cat = {
//     name:'Blue Steele',
//     color:'grey',
//     breed:'scottish fold',
//     meow(){
//         console.log(`${this.name} says Meowww`);
//     }
// }

// const GManager = {
//     firstName: 'Ahmed',
//     lastName: 'Kamal',
//     id: 777,
//     fullName:function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// const AManager = {
//     firstName: 'John',
//     lastName: 'Doe',
//     id: 777,
//     fullName:function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const SManager = {
//     firstName: 'James',
//     lastName: 'flip',
//     id: 777,
//     fullName:function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// function yell(msg){
//     try{
//         console.log(msg.toUpperCase().repeat(3));
//     } catch (e){
//         console.log('Enter a string. Daa, Error!!')
//     }
// }

// Map

// const texts = ['rofl', 'lol', 'omg', 'ttyl'];
// const caps = texts.map(function(t){
//     return t.toUpperCase();
// })

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const double = numbers.map(function(num){
//     return num * 2;
// })

// const cleanNames = ([" timothee", "  darth_hater", "sassyfrassy  ", " elton John  "]);

// const newNames = cleanNames.map(function(each){
//     return each.trim();
// });

//Arrow Function
//**************

// const add = function(x, y){
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y
// }

// const greet = (name) => {
//     return "Hey " + name;
// }

// const greet = (name) => {
//     return `Hey ${name}!`;
// }

// Reduse
//*********

// const prices = [9.99, 1.50, 19.99, 49.99, 30.50];
// let total = 0
// for (let price of prices){
//     total += price
// }
// console.log(total)

//reduce ((accumlator), (each element))
//const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// const total = prices.reduce((total, each)=>{
//     return total + each
// })

// console.log(total)

// const total = prices.reduce((total, price) => total * price)
//  // to get the smallest price
// prices.reduce((min, price) =>{
//     if (price < min){
//         return price;
//     }
//     return min;
// })

// const evens = [2, 4, 6, 8];
// evens.reduce((sum, num) => sum + num, 100)

//Spreed
//******
// const cats = ['Blue', 'Scout', 'Rocket'];
// const dogs = ['Rusty', 'Wyatt']
// const pets = [...cats, ...dogs]

// const dataFromForm = {
//     email: 'qasem777@gmail.com',
//     password: 'qasem2020',
//     userName: 'q777'
// }

// const newUser = {...dataFromForm, id:2020, isAdmen: false}

// Rest
//*****
// function sum(...nums){
//     return nums.reduce((total, ele) => total + ele)
// }

// function raceResault(Gold, Silver, Bronse, ...everyOneElse){
//     console.log(`Gold medal goes tO: ${Gold}`)
//     console.log(`Silver medal goes to: ${Silver}`)
//     console.log(`Bronse medal goes to ${Bronse}`)
//     console.log(`And thanks to every one else: ${everyOneElse}`)
// }

// Destructuring

// const runner = {
//     first:'Ertugul',
//     last:'Sultan',
//     country:'Turky',
//     title:'Bey of the Seria'
// }
// const{first, last, country} = runner;
//****************************** */

// const user = {
//     email: 'haverd@gmail.com',
//     password: 'h_1984',
//     firstName: 'Harvey',
//     lastName: 'Milk',
//     born: '1980',
//     died: '2001',
//     city: 'SF',
//     state: 'CA'
// }

// const firstName = user.firstName;
// const lastName = user.lastName;
// const{email, firstName, lastName, city} = user;
// const{born:BirthDay} = user;

const user = {firstName:'Aysha', lastName:'Kasem', id:4040, city:'Dallas'};

function fullName({firstName, lastName}){
    return `${firstName} ${lastName}`
}
















