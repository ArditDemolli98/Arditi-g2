10 + 20 + 60;
console.log(10 + 20 + 60);
console.log("Ardit");

let firstName = "Ardit";

console.log(firstName);
console.log(firstName);
console.log(firstName);


let calculation = 10 + 20 + 60;
console.log(calculation);

// Single line comment

/* Multiple line comment
asdasd
adsasd
asd
*/

// Naming convention of variables
// Camel case
let firstNamePerson = "John";
let firstLastName = 3;

// Descriptive variable names
let myLastJob = "Programmer";
let myCurrentJob = "Teacher";

// Non-descriptive variable names
let job1 = "Programmer";
let job2 = "Teacher";

// Data types

// Number
1998
9
10
25.890
// String
"My name is Ardit"
"I'm 24 year old"
'2000'
// Boolean
true
false

// Undefined
let school;

// Null
let education = null;

console.log(typeof null);

education = "High-school";

education = "University";

education = true;

education = 10;

education = null;

console.log(education);

// Basic operators

// Aritmetic operators / Math operators
// + Addition
// - Substraction
// * Multiplication
// / Division
// ** Exponentiation
// % Modulus
let x = 10;
let y = 10;

console.log(x + y);
console.log(x - y + x + x + x + x - y);
console.log(x * y);
console.log(x ** 2);
console.log(x / 2);
console.log(x % 3);

// Assignment operators
let myFirstPet = 'dog';
myFirstPet = 'cat';
x++;
x++;
x--;
x--;

//x = x + 2;
x += 10;
x -= 10;
x *= 10;
x /= 10;
x **= 10;
x %= 10;

console.log(x);

// Comparison operators
console.log(10 === 5);
console.log(10 > 5);
console.log(10 >= 5);
console.log(10 < 5);
console.log(10 <= 5);
console.log(10 === 5);
console.log(10 == 5);

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass/ height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables 
2. Calculate both their BMIs using the formula (you can even implement both versions) 
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John. 

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. 
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. 

GOOD LUCK 😀
*/
let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI);
console.log(johnBMI);

console.log(markHigherBMI);


// If / else statement

if ('ardit') {
    console.log("10 is greater than 5");
}

let thirsty = false;
let hungry = true;

if (thirsty) {
    console.log("Drink some water💧");
} else if (hungry) {
    console.log("You should eat something")
} else {
    console.log("Good for you, stay hydrated");
}