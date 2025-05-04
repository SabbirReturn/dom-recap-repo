let firstName = 'Sabbir';
let lastName = 'Hasan';
let fullSentence = `My name is ${firstName} ${lastName}`;
// console.log(fullSentence);


function sum(x=5,y=6){
    let sum = x + y;
    return sum;
}

// let total = sum();
// console.log(total);

let total = (x=10,y=23) => x+y;

// let sumSecond = total();
// console.log(sumSecond)


// destructuring

let actor = {
    name : 'Sabbir',
    age : 27,
    isStudent:true
}
// let value = Object.values(actor);
// let key = Object.keys(actor);
// console.log(key,value);
for(let key in actor){
    let value = actor[key]
    // console.log(key,value)
}
let keys = Object.keys(actor);
for( let key of keys){
    let value = actor[key]
    console.log(key,value);
}
// console.log(actor.name);
// console.log(actor.age);

let {name,age,isStudent} = actor;
// console.log(name,age,isStudent);

let numbers = [1,2,3,4,5,6,7,8];
let [x,y] = numbers;
let sumThird = x + 10;
// console.log(sumThird);
let number = numbers[4];
// console.log(number);
function double(x,y){
    return [x*2,y*3];
}

let [first,second] = double(number,523);
// console.log(first,second);


