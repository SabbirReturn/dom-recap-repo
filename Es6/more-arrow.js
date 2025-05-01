let member = {
    name: 'sabbir',
    age : 25,
    location:'Uttara 10'
}

let getAge = (person) => person.age * 2;
let age = getAge(member);
// console.log(age);

// let numbers = [11,12,13,14];
// let number = (number) => number[2];
// let num = number(numbers);
// console.log(num);

let num1 = () => Math.PI;
let num2 = num1();
// console.log(num2);

let numbers= (x,y,z) =>{
    let sum = x + y +z;
    let multiply = x * y * z;
    let result = sum + multiply;
    return result;
}

let number = numbers(10,20,30);
console.log(number);
