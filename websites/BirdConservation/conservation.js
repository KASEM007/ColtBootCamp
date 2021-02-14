const container = document.getElementById("container");
for(let i=0; i<100; i++){
    let button = document.createElement('button');
    container.appendChild(button);
    button.innerText = "Click Me!"
}