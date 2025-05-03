let actor = {
    name : 'Sabbir',
    age: 26,
    number : '01516502400',
    balance: 1234567889,
}

const {number,age} = actor;

// console.log(actor.balance);
// console.log(number,age);


let numbers = [11,12,13,14,15];

let [x,,y] = numbers;
// console.log(x,y);


function doubleThem(x,y){
    return [ x *2, y*3]
}

// const [first,second] = doubleThem(2,3);
// console.log(first,second);

let double = (x,y) => [x*2, y*3];

let [first, second] = double(3,4);
console.log(first);
