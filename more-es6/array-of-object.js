let products = [
    {id:1, name:'lenevo', price:50000},
    {id:2, name:'hp', price:65000},
    {id:3, name:'dell', price:60000},
    {id:4, name:'mac', price:160000},
]


// map

let id = products.map(product =>product.id);
// console.log(id);

// forEach

// let price = products.forEach(product=> console.log(product.price));

// filter

let price = products.filter(product=>product.price>60000);
let importPrice = price.map(product=>product.price);
// console.log(importPrice)

let total  = products.reduce((previousPrice,currentPrice)=> previousPrice+currentPrice.price ,0);
console.log(total);