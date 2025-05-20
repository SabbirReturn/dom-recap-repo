// function kitchen(){
//     let rost = 0
//     return function(){
//         rost++
//         return rost
//     }
// }

// let food = kitchen();
// console.log(food());
// console.log(food());
// console.log(food());
// console.log(food());

function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return `counter:${counter}`;
    }
}

let watch1 = stopWatch();
// console.log(watch1());
// console.log(watch1());
// console.log(watch1());
// console.log(watch1());
// console.log(watch1());
function outer() {
  let counter = 0;

  return function inner() {
    counter++;
    console.log(`Counter: ${counter}`);
  };
}

const count = outer();

// count(); // Counter: 1
// count(); // Counter: 2

function createUser(name) {
  let score = 0;

  return{
    getName: ()=>name,
    incrementScore:()=>score++,
    getScore :()=>score,
  }
//   return {
//     getName: () => name,
//     increaseScore: () => score++,
//     getScore: () => score,
//   };
}

const user1 = createUser('Alice');

console.log(user1.getName()); // Alice
user1.incrementScore();
user1.incrementScore();
console.log(user1.getScore()); // 2


