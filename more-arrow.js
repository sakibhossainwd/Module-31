 const add = (first, second) => first + second;
 const getFullName = (first, second) => first + ' ' + second;
 const multiply = (a, b) => a * b;

 const result = multiply(5, 7);
//  console.log(result);


// no parameter arrow function
const getPie = () => 3.14;

// one parameter
const doubleIt = (num) => num * 2;

// one parameter simple version
const fiveTime = num => num * 5;

// multi line arrow function
// if you want to return something, use the return
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum + secondSum;
    const result = multiplyResult / 2;
    return result;
}