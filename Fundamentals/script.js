const name = 'John Dore'
console.log(typeof name);
const age = 45;
console.log(typeof age);
const hasKids = true;
console.log(typeof hasKids);
const car = null;
console.log(typeof car);
let test;
console.log(typeof test);
const sym = Symbol();
console.log(typeof sym);

const hobbies = ['movies', 'music'];
console.log(typeof hobbies);

const address = {
    city: 'Boston',
    state: 'NA'
};
console.log(typeof address);

const today = new Date();
console.log(typeof today);

// -- TYPE CONVERSATION -- //
let val;
// number to string
val = 5;
console.log(val);
console.log(val.length);

val = String(true);
console.log(val);
val = String(new Date());
console.log(val);

val = '5';
console.log(val);
console.log(typeof val);

const num1 = 100;
const num2 = 50;
let value;
value = num1 + num2;
value = num1 % num2;
value = Math.PI;
value = Math.E
value = Math.round(2.4)
value = Math.floor(2.8);
value = Math.ceil(2.4);
value = Math.random();

value = Math.floor(Math.random() * 10);
console.log(value);

// String
const firstName = 'William';
const lastName = 'Johnson';
const str = "Hello there my name is Jacob";
const tags = 'web design, web development, programming';
value = firstName + ' ' + lastName;
value = "Hello, my name is " + firstName + ' and I am ' + age;
value = 'That\'s awesome, I can\'t wait';
value = firstName[2];
value = firstName.indexOf('l');
value = firstName.lastIndexOf('l');
value = firstName.charAt('0');
value = firstName.charAt(firstName.length - 1);
value = firstName.substring(0, 4);
value = firstName.slice(0, 4);
value = firstName.slice(-3);
value = str.split(' ');
value = tags.split(',');
value = str.replace('Jacob', "Jay");
value = str.includes('Hello');

console.log(value);

// -- Template literals -- //
const names = 'John';
const ages = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;
html = '<ul><li>Name: ' + names + '</li></ul>';
html += '<ul><li>Age: ' + age + '</li></ul>';
html += '<ul><li>Job: ' + names + '</li></ul>';
html += '<ul><li>City: ' + names + '</li></ul>';

html = `<ul>
    <li>Name: ${names}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
</ul>`;

document.body.innerHTML = html;

// -- ARRAYS -- // 
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["Oranges", "Apples", "Banana"];
const mixed = [22, 'Hello', true, undefined, null, {
    a: 1,
    b: 1
}, new Date()];
console.log(mixed);

value = numbers.length;
value = Array.isArray(numbers);
value = numbers[2];
value = numbers[0];
value = numbers.indexOf(5);
numbers.push(250);
numbers.unshift(120);
numbers.pop();
numbers.shift();
numbers.splice(1, 3);
numbers.reverse();

value = numbers.concat(numbers2);
value = fruit.sort();
numbers.sort();
numbers.sort(function (x, y) {
    return x - y;
    // return y - x;

});

function under50(num) {
    return num < 50;

}

value = numbers.find(under50);

console.log(numbers);
console.log(value);

// -- Object literals -- //
const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@test.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'Fl'
    },

    getBirthYear: function () {
        return 2022 - this.age;

    }
};

value = person;
value = person.firstName;
value = person.age;
value = person.hobbies;
value = person.hobbies[1];
value = person.address.state;
value = person.address['city'];
value = person.getBirthYear();
console.log(value);

const people = [{
        name: 'John',
        age: 30
    },
    {
        name: 'Mike',
        age: 23
    }, {
        name: 'Nancy',
        age: 33
    }

];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);

}

// -- Date and Time -- //
const date = new Date();
let birthday = new Date('September 10 1991');
value = birthday;
value = date.getMonth();
value = today.getDate();
value = today.getDay();
value = today.getFullYear();
value = today.getHours();
value = today.getMinutes();
value = today.getSeconds();
value = today.getTime();
birthday.setMonth(2);

console.log(birthday);
console.log(value);

// -- Conditionals -- //
const id = 100;

if (id == 101) {
    console.log("Correct");

} else {
    console.log("Incorrect");

}

if (id !== 100) {
    console.log("Correct");

} else {
    console.log("Incorrect");

}

if (typeof id !== 'undefined') {
    console.log('The id is ' + id);
} else {
    console.log("no Id");
}

if (id > 100) {
    console.log("yes");
} else {
    console.log("not");
}

const name1 = 'Steve';
const age2 = 30;

if (age2 > 0 && age < 12) {
    console.log(`${name1} is a child.`);
} else if (age2 >= 13 && age <= 19) {
    console.log(`${name1} is a teenager`);
} else {
    console.log(`${name1} is an adult`);
}

// ternary operator -- //
console.log(id === 100 ? "Correct" : "Incorrect");

const color = 'pink';
switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log("color is blue");
        break;
    default:
        console.log("neither red or blue");
        break;

}

switch (new Date().getDay()) {
    case 0:
        day = 'sunday'
        break;
    case 1:
        day = 'monday'
        break;
    case 2:
        day = 'tuesday'
        break;
    case 3:
        day = 'wednesday'
        break;
    case 4:
        day = 'thursday'
        break;
    case 5:
        day = 'friday'
        break;
    case 6:
        day = 'saturday'
        break;


}

console.log(`Today is ${day}`);

// -- FUNCTION DECLARATIONS AND EXPRESSIONS -- //
function greet(firstName, lastName) {
    if (typeof firstName === 'undefined')
        firstName = 'John';

    // console.log("Hello");
    return 'Hello, ' + firstName + " " + lastName;

}

console.log(greet('John', "Doe"));

const square = function (x) {
    return x * x;

};

console.log(square(8));

(function () {
    console.log('IIFE Ran..');
})();

(function (name) {
    console.log("hello " + name);
})('Jacob');

const todo = {
    add: function () {
        console.log('Add todo..');
    },
    edit: function (id) {
        console.log("Edit todo..");
    }
}

todo.delete = function () {
    console.log("Delete todo...");

}

todo.add();
todo.edit(22);
todo.delete();


//-- Loops -- //
for (let i = 0; i < 10; i++) {
    if (i == 2) {
        console.log('my favorite number is 2');
        continue;

    }

    if (i === 5) {
        break;

    }
    console.log(i);
}

let i = 0;
while (i < 10) {
    console.log("number" + i);
    i++;

}

do {
    console.log('Number ' + i);
} while (i < 10);

const cars = ['ford', 'chevy', 'Honda', 'Toyota'];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);

}

while (i < cars.length) {
    console.log(cars[i]);
}

// foreach
cars.forEach(function (car, index) {
    console.log(`${index}: ${car}`);

});

// map
const users = [{
        id: 1,
        name: 'John',
    }, {
        id: 2,
        name: 'Sarah'
    },
    {
        id: 3,
        name: 'Karen'
    }
];

const ids = users.map(function (user) {
    return user.id;

});

console.log(ids);

// For In
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for (let x in user) {
    console.log(`${x}: ${user[x]}`);
}

// Window
// const input = prompt();

// if (confirm('Are you sure')) {
//     console.log('Yes');
// } else {
//     console.log('No');

// }

value = window.outerHeight;
value = window.outerWidth;
value = window.innerHeight;
value = window.innerWidth;

value = window.scrollY;
value = window.scrollX;

value = window.location;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;
value = window.location.search;

// value = window.location.href = 'http://google.com';
value = window.location.reload;
value = window.navigator;
value = window.navigator.appName;
value = window.navigator.appVersion;
value = window.navigator.userAgent;
value = window.navigator.platform;
value = window.navigator.language;

console.log(value);

var a = 1;
var b = 2;
var c = 3;

function testing() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope:', a, b, c);

}

testing();

console.log('Global Scope: ', a, b, c);