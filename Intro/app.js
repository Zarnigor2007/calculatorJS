
let name = 'Zarnigor';
let age = 16; 

let person = {
    name: 'Zarnigor',
    age: 16,
}

// Both Dot notation and Bracket notation are correct!
person['age'] += 1;

console.log('MyObject:', person);
console.log(person['name']);
console.log(person.age);

// arrays
let selectedColors = ['red', 'blue'];

// add items
selectedColors[2] = 'green';
// yeah, you'll do that the way you wish every other language did.

console.log('My Array:', selectedColors);
console.log('Length:', selectedColors.length);
// array is an object, just like NULL and OBJECT (TYPE in pseudocode)


// Procedure
function greet(name, surname){
    console.log('Hi '+ name + ' ' + surname +'!')
}

greet('Zarnigor', 'Yusupova');


// Function
function square(number){
    area = number ** 2;
    return area;
}

console.log(square(9));