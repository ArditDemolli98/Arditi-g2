// Template literals
const firstName = 'Ardit';
const birthYear = 1998;
const job = 'teacher';
+ " a " + (2022 - birthYear) + " year old " + job;
const ardit = "I'm " + firstName

console.log(ardit);

const ardit1 = `I'm ${firstName} a ${2022 - birthYear} year old ${job}`;
console.log(ardit1);

const randomSentence = `Hello everyone
How are 
you
doing`;

const simpleString = 'Hello world';
console.log(randomSentence);

// Type conversion and coercion

const randomNumber = '200';
const randomNumber2 = 150;
const randomWord = 'Foo';

console.log(randomNumber2 - randomNumber);
console.log(Number(randomNumber) + String(randomNumber2));

// Boolean type conversion and coercion
/*
5 falsy values:
0 
''
undefined
null
NaN
false
*/
let undefinedVariable;
console.log(Boolean(NaN));

let money;

if (money) {
    console.log("Good for you, don't spend it all");
} else {
    console.log("You should get a job");
}

// Equality operator loosly equal == vs strictly equal ===

console.log(10 === 10);

let luckyNumber = '7';
if (Number(luckyNumber) === 7) {
    console.log('Congrats, you won');
} else {
    console.log('Try again');
}


luckyNumber = Number(luckyNumber);
console.log(typeof luckyNumber);

console.log('number' === 'NuMbEr');

// Logical operators
// console.log(7 < !8);

let budget = true;
let time = false;

if (budget && !time) {
    console.log("You can go on a vacation🌴");
} else {
    console.log("Stay home and grind!");
}

// Exercise

// const avgDolphins = (96 + 108 + 89) / 3;
// const avgKoalas = (88 + 91 + 110) / 3;
const avgDolphins = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 123) / 3;



console.log(avgDolphins, avgKoalas);

if (avgDolphins > avgKoalas && avgDolphins > 100) {
    console.log('Team Dolphins are the winners🏆');
} else if (avgDolphins === avgKoalas && avgDolphins > 100) {
    console.log('We have a draw');
} else if (avgKoalas > avgDolphins && avgKoalas > 100) {
    console.log('Team Koalas are the winners🏆');
} else {
    console.log('There is no winner in this tournament');
}

// Ternary Operator
let custom = 10 + 200 - 100;

const experiment = 20 > 10 ? '20 is greater than 10' : 'Ardit';

const greaterThan = 20 > 10 ? '20 is greater than 10' : 'Ardit';

console.log(greaterThan);

if (greaterThan) {
    console.log("We're still experimenting");
} else {
    console.log("Yes");
}