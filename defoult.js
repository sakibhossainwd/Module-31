// function add(first, second){
//     const total = first + second;
//     return total
// }

// const result = add(10, 20);
// console.log(result);
// result will be: 30


// Here is will use default perameter by if condition
// function add(one, two){
//     if(two === undefined){
//         two = 0;
//     }
//     const total = one + two;
//     return total
// }
// const result = add(20);
// console.log(result);

// Here will use default perameter 
function add(one, two = 0){
    const total = one + two;
    return total
}
const result = add(20);
console.log(result);


