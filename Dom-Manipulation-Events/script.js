// -- The Document Object -- //
let items = document.getElementsByTagName('li');

items = Array.from(items);
// items.reverse();

items.forEach(function (li, index) {
    console.log(li.className);
    li.textContent = `${index}: Hello`;

});
console.log(items);

const item = document.querySelectorAll('ul.collection li.collection-item');
console.log(item);
item.forEach(function (li, index) {
    li.textContent = `${index}: Hello`;

});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');
liOdd.forEach(function (item, index) {
    item.style.background = "#ccc";

});

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = "#f4f4f4";

}

// -- Traversing the DOM tree -- //

let value;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

value = listItem;
value = list;

// get child nodes
value = list.childNodes;
// get children element nodes
value = list.children;
// value = list.childNodes[0];
value = list.children[0];

// get children of children
value = list.children[3].children[0];
value = list.firstChild;
value = list.firstElementChild;

value = list.lastChild;
value = list.lastElementChild;

//count child elements
value = list.childElementCount;

console.log(value);

// -- Create An Element -- //
const li = document.createElement('li');
li.className = 'collection-item';
li.id = 'new-item';
li.setAttribute('title', 'New Item');

// create text node and append
li.appendChild(document.createTextNode('Hello World'));

// create new link element
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// append link into list
li.appendChild(link);

// append li as child to ul
document.querySelector('ul.collection').appendChild(li);
console.log(li);

// -- Removing & Replacing Elements -- //
// -- Replace Elements -- //
const newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));
// get old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');
//replace
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);

// Remove element
const lis = document.querySelectorAll('li');
const lists = document.querySelector('ul');

// remove
// lis[0].remove();
// remove child elements
// lists.removeChild(lis[3]);

// -- Event Listeners -- //
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
    let val;
    val = e;

    // event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    e.target.innerText = 'Hello';

    console.log(val);
}

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
form.addEventListener('submit', runEvent);

function runEvent() {
    e.preventDefault();
    console.log(`Event Type: ${e.type}`);
    console.log(taskInput.value);

}

// -- EVENT BUBBLING -- // 
document.querySelector('.card-title').addEventListener('click', function () {
    console.log('card title');

});

// -- delegation -- //
const deleteItem = document.querySelector('.delete-item');
deleteItem.addEventListener('click', delItem);

function delItem() {
    console.log('delete Item');
}

// -- LOCAL STORAGE AND SESSION STORAGE -- //