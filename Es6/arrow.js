// Function declaration

function add1(num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}

let sum = add1(5,6);
// console.log(sum)


// function expression

let add2 = function(num1, num2){
    return num1 + num2;
}

let sum2 = add2(10,22);
// console.log(sum2);



// arrow function
let add3 = (num1, num2) => num1 + num2;
let sum3 = add3(10,32);
console.log(sum3);