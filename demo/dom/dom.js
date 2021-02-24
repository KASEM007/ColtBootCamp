// Examine the document Object//
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.all[10]);
// document.all[10]

// console.log(document.forms);
// console.log(document.links);
// const headerTitle = document.getElementById('header-title');
// headerTitle.textContent = "hiiiii!!!";
// headerTitle.innerText = "Goodbye!!";
// headerTitle.innerHTML = '<h3> Hello from h3 </h3>'
// const header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px grey';

// ****** Get elements by className *********

// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hiii 777'
// items[2].style.backgroundColor = 'orange';
// items[2].style.fontSize = '20px'

// ****gives Error

//Item.style.backgroundColor = '#f4f4f4' we have to use a for loopto change the background for all items
// for(let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f2f2f2';
// }
// // Get elements By Tag Name;

// const li = document.getElementsByTagName('li');
// // console.log('li')

// for(let i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = '#f2f2f2'
// }

// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc'

//******** Query Selector *******/

// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// const input = document.querySelector('input');
// input.value = "Hello World";

// let submit = document.querySelector('input[type="submit"]');
// submit.value="Send";

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red'

// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// ******* Query Selector All ****** //

// const titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = "Q-S-All"
// titles[1].textContent = "And Here we Start: "

// const odd = document.querySelectorAll('li:nth-child(odd)');
// const even = document.querySelectorAll('li:nth-child(even)');

// for(let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc'
// }


// ******** Traversing The Dom ********//

//const itemList = document.querySelector('#items');


// parentNode == parentEelement
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentEelement
// console.log(itemList.parentEelement);
// itemList.parentEelement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentEelement.parentEelement.parentEelement);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[2].style.backgroundColor = 'yellow';

// //********* First Child */
// console.log(itemList.firstChild);
// console.log(itemList.firstChild[1]);

// //******* First element Child ************/
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

//******* Last element Child ************/
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

//** nextSibling */
//console.log(itemList.nextSibling);
//// nextElemnetSibling
//console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color ='green';

//****** Creating Element */
//******creatElement
//create a div
// const newDiv = document.createElement('div');

// //add class
// newDiv.className='hello';
// //add id
// newDiv.id = 'hello1';
// //Add attr
// newDiv.setAttribute('title', 'Hello Div');

// To insert text inside our new div that we just created
// create text node

// const newDivText = document.createTextNode('Hello 2end');
// console.log(newDivText);

// ***** button
//const button = document.getElementById('button').addEventListener('click', buttonClick);
// let button = document.getElementById('button');
// let box = document.getElementById('box');

// function buttonClick(){
//     document.getElementById('header-title').textContent = 'Changed';
//     document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//     //console.log(e);
// }

// box.addEventListener('mousemove', runEvent);
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);

// box.addEventListener('mousemove', runEvent);

// const itemInput = document.querySelector('input[type="text"]');
// const form = document.querySelector('form');

// itemInput.addEventListener('keydown', runEvent)


// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type);
//     console.log(e.target.value);
//     document.getElementById('output').innerHTML = '<h3> '+e.target.value+' </h3>';

    //output.innerHTML= '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+ '</h3>';
    //box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
    //document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
//}

//*** start project */

const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);

// Delete Event
itemList.addEventListener('click', removeItem);
//Add filter
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e){
    e.preventDefualt();

    //Get input Value
    var newItem = document.getElementById('item').value;

    //creat new li element
    const li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //creat Delete button element
    const deleteBtn = doument.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('x'));

    //Append button to li
    li.appendChild(deleteBtn);

    //Append li to list
    itemList.appendChild(li);
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// filter items
function filterItems(e){
    //convert text to lower case
    const text = e.target.value.toLowerCase();
    // get list
    const items = itemList.getElementsByTagName('li');
    // convert to an erray
    Array.form(items).forEach(function(item){
        const itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    });
}









