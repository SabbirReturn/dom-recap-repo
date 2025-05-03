let numbers = [1,2,3,45,5,6];
for( let i = 0; i<numbers.length; i++){
    // console.log(i);
}

for(let number of numbers){
    // console.log(number);
}

let glass = {
    name : 'Glass',
    price: 5000,
    color: 'Golden',
}
for(let key in glass){
    // let key = glass[key];
    let value = glass[key];
    // console.log(key,value);
}

let keys = Object.keys(glass);
for( let key of keys){
    let value = glass[key];
    console.log(key,value);
}