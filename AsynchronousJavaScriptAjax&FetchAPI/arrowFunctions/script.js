// const sayHello = function () {
//     console.log('Hello');

// }

// const sayHello = () => {
//     console.log('Hello');

// }

const sayHello = () => console.log('Hello');

// return object
const Hello = () => ({
    msg: 'Helloooo'
});

sayHello();
console.log(Hello());

const greet = () => console.log(`Hello ${name}`);
greet('Jay');

// more than 1 parameter arguments
const greeting = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
greeting('Jay', "Gore");

// As callbacks
const users = ['Nathan', 'John', 'William'];
// const namesLength = users.map(function (name) {
//     return name.length;

// });
// const namesLength = users.map((name) => {
//     return name + " " + name.length;

// });

const namesLength = users.map(name => name.length);

console.log(namesLength);