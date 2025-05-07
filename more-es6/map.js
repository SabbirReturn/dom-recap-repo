let numbers = [2,3,4,5,6];
// // let doubleIT = [];

// for(let number of numbers){
//     let double = number *2;
//     doubleIT.push(double);
// }
// console.log(doubleIT)

function doubleIT(num){
    console.log(num)
    return num *2
    
}

// let result = numbers.map(doubleIT)
let double = x=> x*2
let output = numbers.map(x=>x*2)
// console.log(output)

