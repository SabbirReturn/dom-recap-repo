// Write an arrow function where it will do the following: x2;
// a)Square each array element
// b)Calculate the sum of squared element
// Return the average of the sum of the squared element,



// let result = ()=>{
//     let numbers = [2,3,4,5];
//     let sum=0;
//     for( let number of numbers){
//         let square = Math.pow(number,2);
//         sum = sum + square
        
//     }
//     return sum/numbers.length
// }
// let total = result();
// console.log(`The average of the sum is ${total}`);
let result = ()=>{
    let numbers = [2,3,4,5];
    let sum=0;
    for( let number of numbers){
        let square = Math.pow(number,2);
        sum = sum + square
        
    }
    return sum/numbers.length
}
let total = result();
console.log(`The average of the sum is ${total}`);