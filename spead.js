const max = Math.max(10, 50, 60, 75,);
// console.log(max);
const numbers = [10, 25, 36, 89, 91];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(99);
console.log(numbers);
console.log(numbers2);