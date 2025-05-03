let glass = {
    name : 'Glass',
    price: 5000,
    color: 'Golden',
}
console.log(glass);
let key = Object.keys(glass);
console.log(key);
let value = Object.values(glass);
console.log(value);

delete glass.color;
console.log(glass)

glass.isClean = 'clean'
console.log(glass);