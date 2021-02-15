// const button = document.querySelector('button');
// const h2 = document.querySelector('h2');

// button.addEventListener('click', function(){
//     document.body.style.backgroundColor = 'olive';
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);

//     const newColor = `rgb(${r},${g},${b})`
//     document.body.style.backgroundColor = newColor;
//     h2.innerText = newColor;
   
// })

// ****** Using Function *****

const button = document.querySelector('button');
const h2 = document.querySelector('h2');

button.addEventListener('click', function(){
    const newColor = makeRandomColor()
    document.body.style.backgroundColor = newColor;
    h2.innerText = newColor;  
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}