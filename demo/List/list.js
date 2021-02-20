// const from = document.querySelector('form');
// const product = document.querySelector('#product');
// const quantity = document.querySelector('#qty');

// const groceryList = document.querySelector('#list');

// from.addEventListener('submit', function(e){
//     e.preventDefault();
//     const newList = document.createElement('li');
//     newList.innerHTML = `${quantity.value} ${product.value}`;
//     groceryList.appendChild(newList);
//     quantity.value = "";
//     product.value = "";
// })

//################################

const input = document.querySelector('input');

input.addEventListener('change', function(e){
    console.log("input Event!")

})


//################################

const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input', function(){
    if (input.value){
        h1.innerText = 'Welcome. `${input.value}`';
    }else{
        h1.innerText = 'Enter Your username';
    }
});

