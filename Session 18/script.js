// Arrays

const car1 = 'Toyota';
const car2 = 'Nissan';
const car3 = 'Honda';
const car4 = 'Mazda';

const cars = ['Toyota', 'Nissan', 'Honda', 'Mazda', 'Hyundai', 'Audi', 'Mercedes', 'BMW', 'Volkswagen'];

console.log(cars);

console.log(cars[2]);
console.log(cars[3]);

// Arrays length
console.log(cars.length);

// Targeting the last element of the array
console.log(cars[cars.length - 1]);

// Add new element
cars.push('Citroen'); // Adding element at the end of the array
console.log(cars);

cars.unshift('Range Rover'); // Adding element at the begining of the array
console.log(cars);

// Remove element from array
cars.pop();
console.log(cars);

cars.shift();
console.log(cars);


cars[0] = 'Tesla';

let mixedArray = [20, true, null, 'Hello', cars];
console.log(mixedArray);
console.log(cars);

cars[cars.indexOf('Mercedes')] = 'Mercedes Benz';
console.log(cars);

if (cars.includes('Mercedes Benz')) {
    console.log("Great car");
} else {
    console.log('You should get one');
}

console.log([].concat = (mixedArray, cars));

console.log(typeof cars);

// Object
const ardit = [
    'Ardit',
    'Demolli',
    24,
    'Programmer',
    ['America', 'France', 'Germany', 'Italy'],
    true
]

const arditObject = {
    firstName: 'Ardit',
    lastName: 'Demolli',
    age: 24,
    job: 'Programmer',
    location: 'Prishtine',
    visitedCountries: ['America', 'France', 'Germany', 'Italy'],
    hasDriversLicense: true
}

console.log(arditObject.firstName);
console.log(arditObject.hasDriversLicense);

'Ardit Demolli is a 24 years old Programmer from Prishtine who has visited 4 countries'

console.log(`${arditObject.firstName} ${arditObject.lastName} is a ${arditObject.age} years old ${arditObject.job} from ${arditObject.location} who has visited ${arditObject.visitedCountries.length} countries`);

const nameKey = 'Name'

console.log(arditObject['first' + nameKey]);
console.log(arditObject['last' + nameKey]);

// const interestedIn = prompt("Choose something you are interested about ardit, between firstName, lastName, age, job, location, visitedCountries");

// console.log(arditObject[interestedIn]);


console.log(arditObject['first' + nameKey]);

const coffeeMachine = {
    brand: 'Gaggia',
    model: 'Classic Pro',
    color: 'white',

    about: function () {
        console.log(`I am a ${this.color} ${this.model} ${this.brand}`);
    },

    makeEspresso: function (size) {
        if (size === 's') {
            return 'Short espresso';
        } else if (size === 'm') {
            return 'Medium espresso';
        } else if (size === 'l') {
            return 'Large espresso';
        } else if (size === 'd') {
            return 'Double espresso';
        } else {
            return 'Invalid size given';
        }
    }
}

const doubleEspresso = coffeeMachine.makeEspresso('d');
console.log(doubleEspresso);

coffeeMachine.about();
// Loops

for (let i = 1; i < 11; i++) {
    console.log('Multiplication by '
        + i);
    for (let e = 1; e < 11; e++) {
        console.log(`${i} * ${e} = ${i * e}`);
    }
}

let i = 1;

while (i < 10) {
    console.log('Hello ' + i);

    i += 3;
}
