let numbers = [12,14,15,17];

let fiveBonus = numbers.map(x=>x+5);
// console.log(fiveBonus);


let friends = ['tom','sabbir','hasan'];

// function letter(friend){
//     console.log(friend)
// }

// let length = friends.map(friend=>friend.length);
// // let firstLetter= friends.map(friend=>friend[1])
// let firstLetter = letter(['tom','sabbir','hasan'])
// // console.log(length);
// console.log(firstLetter)

// function letter(friend){
//     let fLetter = friend[0];
//     let lett = fLetter.split('');
//     console.log(lett[0])
// }

// let firstLetter = letter(['tom','sabbir','hasan']);

let firstLetter = friends.map(fir=>fir[0]);

console.log(firstLetter);