// Functions

// DRY Don't repeat yourself
// Keep your code DRY

function helloWorld() {
    console.log('Hello world');
}

helloWorld();


console.log();
Number();
String();
Boolean();

let currentYear = 2022;

const ageArdit = findAge(currentYear, 1998);
console.log(ageArdit);
const ageRigert = findAge(2022, 2004);
console.log(ageRigert);


function espressoMachine(size) {
    if (size === 's' || size === 'S') {
        return 'Short espresso';
    } else if (size === 'm' || size === 'M') {
        return 'Medium espresso';
    } else if (size === 'l' || size === 'L') {
        return 'Large espresso';
    } else if (size === 'd' || size === 'D') {
        return 'Double espresso';
    } else {
        return 'Please choose only between: "s", "m", "l" or "d"';
    }
}

const shortEspresso = espressoMachine('s');

console.log(shortEspresso);

// Functions variations

console.log(findAge(2022, 2010));

// Function declaration
function findAge(currentYear, birthYear) {
    return currentYear - birthYear;
}

// Function expression
const findAge1 = function (currentYear, birthYear) {
    return currentYear - birthYear;
}
console.log(findAge1(2022, 2000));

// Arrow functions
const findAge3 = birthYear => 2022 - birthYear;

console.log(findAge3(2002));

////////////////////////////////////////////////

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreOfDolphins = calcAverage(44, 23, 71);
const scoreOfKoalas = calcAverage(65, 54, 49);

const scoreDolphins1 = calcAverage(85, 54, 41);
const scoreKoalas1 = calcAverage(23, 34, 27);

function checkWinner(scoreDolphins, scoreKoalas) {
    if (scoreDolphins >= 2 * scoreKoalas) {
        return `Team Dolphins won with a score of ${scoreDolphins} points against team Koalas with a score of ${scoreKoalas} points 🏆`;
    } else if (scoreKoalas >= 2 * scoreDolphins) {
        return `Team Koalas won with a score of ${scoreKoalas} points against team Dolphins with a score of ${scoreDolphins} points 🏆`;
    } else {
        return `Both teams lost the tournament!`;
    }
}

console.log(checkWinner(scoreOfDolphins, scoreOfKoalas));
console.log(checkWinner(scoreDolphins1, scoreKoalas1));