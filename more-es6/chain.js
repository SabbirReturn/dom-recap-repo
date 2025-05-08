// data access

let data = [{id:1, name:'Sabbir', address:'Uttara sector 10'}];
// console.log(data[0].address);

let products={
    count:5000,
    data:[
        {id:1, name:'Lenevo laptop', price:65000},
        {id:2, name : 'macbook', price:150000}
    ]
}
// console.log(products.data[1].price);

let user1 = {
    id:5001,
    name:'Sabbir Hasan',
    address :{
        street:{
            first: "73/f, 12/b, uttara sector10",
            second: 'Mohammadpur',
            third :'Kollanpur'
        }
    },
    city:'Dhaka'
}
// console.log(user1.address.street.second);
console.log(user1.address.street.third)

let user2 = {
    id:5002,
    name:'Misu',
    address:{
        city:'Chittagong',
        country:'Bangladesh'
    }
}
// console.log(user1.address.street.second);
// console.log(user2.address.street?.second);