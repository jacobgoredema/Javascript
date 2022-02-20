// -- Constructor and This key word -- //
const brad = {
    name: 'Brad',
    age: 30
}

console.log(brad);


// -- Person constructor -- //
function Person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);

        return Math.abs(ageDate.getUTCFullYear() - 1981);

    }
}

const person = new Person("Brad");
const bradley = new Person("bradley");
console.log(person);
console.log(bradley);

const jay = new Person("Jay", '9/10/1982');
console.log(jay.calculateAge());

// -- Built in Constructors -- //

// -- Strings -- //
const name1 = 'Jeff';
const name2 = new String('Jeff');

console.log(name1);
console.log(name2);
console.log(typeof name1);
console.log(typeof name2);

const num1 = 5;
const num2 = new Number(5);
console.log(num1);
console.log(num2);

const getSum1 = function (x, y) {
    return x + y;
}

console.log(getSum1(1, 1));


const jon = {
    name: "Jon"
};
console.log(jon);



// -- PROTOTYPES -- //
function newPerson(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);

        return Math.abs(ageDate.getUTCFullYear() - 1970);

    }

}

// Get full name
newPerson.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;

}

// Gets Married
newPerson.prototype.getsMarried = function (newLastName) {
    this.lastName = newLastName;

}

const gore = new newPerson('John', 'Doe', '8/12/90');
const mary = new newPerson('Mary', 'Johnson', '8/12/1978');
console.log(mary);
console.log(mary.getFullName());

mary.getsMarried("Smith");
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('fullName'));


// -- PROTOTYPE INHERITANCE -- //
function Customer(firstName, lastName, phone, membership) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.membership = membership;

}

// Greeting
Customer.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;

}

const customer = new Customer('John', 'Doe');
console.log(customer.greeting());

// create customer
const cust = new Customer('Tom', "Smith", '555-555-5555', "Standard");
console.log(cust);


// -- Using Object.create  -- //
const personPrototypes = {
    greeting: function () {
        return `Hello there ${this.firstName} ${this.lastName}`;

    },
    getsMarried: function (newLastName) {
        this.lastName = newLastName;

    }
}

const marry = Object.create(personPrototypes);
marry.firstName = 'Mary';
marry.lastName = 'Williams';
marry.age = 30;

console.log(marry.greeting());
marry.getsMarried("Thompson");

console.log(marry.greeting());

const jacx = Object.create(personPrototypes, {
    firstName: {
        value: 'Brad'
    },
    lastName: {
        value: 'Brad'
    },
    age: {
        value: 36
    }
});

console.log(brad);

// -- ES6 -- //
class People {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);

    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;

    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);

        return Math.abs(ageDate.getUTCFullYear() - 1970);

    }

    getsMarried(newLastName) {
        this.lastName = newLastName;

    }

    static addNumbers(x, y) {
        return x + y;

    }
}

const maria = new People('Maria', 'Williams', '11/11/1980');
console.log(maria);
console.log(maria.calculateAge());
maria.getsMarried('Gore');
console.log(maria);

console.log(People.addNumbers(1, 2));


// -- SUB CLASSES -- //
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;

    }
}

class Worker extends Employee {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;

    }

    static getMembershipCost() {
        return 500;

    }

}

const john = new Employee('John', 'Doe', '555-555-5555', 'standard');
console.log(john);
console.log(john.greeting());
console.log(Worker.getMembershipCost());