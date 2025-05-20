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
        return counter;
    }
}

let watch1 = stopWatch();
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch1());
