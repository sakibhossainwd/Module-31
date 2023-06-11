// Practice Problem-01
`1) Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result.
`
// 01
const multiply = (first, second, third) => first * second * third;
// console.log(multiply(5, 10, 20));

`2) Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani.
`
// 02
const threeLines = `I am a web developer.
I love to code.
I love to eat biryani`;
// console.log(threeLines);

`3) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result.
`
// 03
const defaulParameter = (first, two = 10) => first + two;
// console.log(defaulParameter(10));



// Practice Problem-02
`Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result.
`
// solve-02
const friendName = (friends) => {
    const evenName = friends.filter(name => name.length % 2 === 0);
    return evenName;
}
const friends = ['sakib', 'Jahangir', 'jakir', 'shorab', 'soboj'];
const result = friendName(friends);
// console.log(result);


// Practice Problem - 03
`Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result.
`
// solve-03
const squareElement = (elements) => {
    const square = elements.map(element => element * element);
    const sum = square.reduce((first, second) => first + second, 0);
    const average = sum / square.length;
    return average;
}
const elements = [2, 4, 6, 8];
const result1 = squareElement(elements);
console.log(result1);



// Practice problem-04
`Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result`
// solve-04


