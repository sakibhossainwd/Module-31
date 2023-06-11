const person = {
    name: 'Rakib',
    address: 'cumilla',
    age: 15,
    class: 'ten', 
    roll: 01,
    phone: 01700000050
}

// const roll = person.roll;
// console.log(roll);

// Object Destructuring
const {age, roll} = {name: 'Rakib', age: 15, address: 'cumilla', roll: 01};
// console.log(age, roll);

const {address} = person;
// console.log(address);

//  Array Destructuring
const [first, second] = [10, 20, 30];
console.log(first, second);




