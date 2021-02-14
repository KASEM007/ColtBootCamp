const btn = document.querySelector('#v1');

btn.onclick = function(){
    console.log("You Clicked me!")
    console.log("I Hope it Worked!!")
}

function scream(){
    console.log("AAAAHHHH");
    console.log("Stop Touching Me")
}


btn.onmouseenter = scream;

document.querySelector('h1').onclick=() =>{
    alert('You Clicked me!')
}

const btn2 = document.querySelector('#v2');
btn3.addEventListener('click', function(){
    alert('clicked!')
})