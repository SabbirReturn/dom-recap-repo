let numbers = (11,12,13,14,100,200);
let max = Math.max(numbers);
// console.log(max);


let nums = [1001,2003,102,3001];
let arrayMax = Math.max(...nums);
// console.log(arrayMax);


let friends = [1,4,7,10];
let bondhu = friends;
bondhu.push(33);
console.log(...friends);
console.log(Math.max(...friends));
console.log(bondhu);