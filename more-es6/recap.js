//1.Default parameter
// 2.Template string
// 3.Arrow function
// 4.destructuring and spread operator


function addName(first='Misu',second='Sabbir'){
    let fullName = first + ' '+second;
    return fullName;
}
let fullname = addName('sabbir','Hasan');
// console.log(fullname);
let setName = (first,second)=>{
    let fullName = first + ' ' +second;
    return fullName;
}
let name = setName('Sabbir','Hasan');
// console.log(name);

let a = 55;
let numbers = [3,4,5,67];
let person = {
    name:'Sabbir Hasan',
    age: 25
}
let message = `Hi , ${person.name} 
has a: ${a} 
access to ${numbers[4]}`
// console.log(message);


let [first, second, ...others] = numbers;
console.log(first);
console.log(others);