const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

function loadEventListeners() {
    // load tasks
    document.addEventListener('DOMContentLoaded', getTasks);

    // add task
    form.addEventListener('submit', addTask);

    // remove task
    taskList.addEventListener('click', removeTask);

    // clear task event
    clearBtn.addEventListener('click', clearTasks);

    // filter through all tasks
    filter.addEventListener('keyup', filterTasks);

}

// get all tasks
function getTasks() {
    let tasks;

    if (localStorage.getItem('tasks') === null)
        tasks = [];
    else
        tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.forEach(function (task) {
        //create li element
        const li = document.createElement('li');

        // add class
        li.className = 'collection-item';

        // create text node and append to li
        li.appendChild(document.createTextNode(task));

        // create new link element
        const link = document.createElement('a');

        // className
        link.className = 'delete-item secondary-content';

        // add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';

        //appendChild link to li
        li.appendChild(link);

        taskList.appendChild(li);

    });

}

// add Task
function addTask(e) {
    if (taskInput.value === '') {
        alert('add a task');
    }

    //create li element
    const li = document.createElement('li');

    // add class
    li.className = 'collection-item';

    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // create new link element
    const link = document.createElement('a');

    // className
    link.className = 'delete-item secondary-content';

    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //appendChild link to li
    li.appendChild(link);

    // append li to ul
    taskList.appendChild(li);

    // Store in local storage
    storeTaskInLocalStorage(taskInput.value);

    // clear input
    taskInput.value = '';

    e.preventDefault();

}

// remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you Sure'))
            e.target.parentElement.parentElement.remove();

        // remove from local storage
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);

    }

}

// clear tasks
function clearTasks() {
    // taskList.innerHTML = '';

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);

    }

    clearTasksFromLocalStorage();

}

// clear tasks from local storage
function clearTasksFromLocalStorage() {
    localStorage.clear();

}

// remove from local storage
function removeTaskFromLocalStorage(taskItem) {
    let tasks;

    if (localStorage.getItem('tasks') === null)
        tasks = [];
    else
        tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task)
            tasks.splice(index, 1);

    });

    localStorage.setItem('tasks', JSON.stringify(tasks));

}

//filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;

        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else
            task.style.display = 'none';

    });

}

// store task
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];

    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

}