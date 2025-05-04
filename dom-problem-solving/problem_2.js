// let friends = ['sabbir','misu'];
let newArray = []


// let eventNames = (friends)=>{
//     let newArray = [];
//     // for(let friend of friends){

//     // }
// }

// for( let i = 0; i<friends[0];i++){
//     console.log(i);
// }

// for(let friend of friends[0]){
//     console.log(friend);
// }

// let eventName = (x,y) =>{

// }

// // let friends = eventName([])
// function eventName(names){
//     let eventNewArray = [];
//     let oddNewArray = [];
//     for(let name of names){
//         console.log(name)
//         // let eventName = name.length;
//         // console.log(eventName)
//         // let splits = name.split('');
//         // let length = splits.length
//         // console.log(length)
//         if(name.length % 2===0 ){
//             eventNewArray.push(name);
//         }
//         else{
//             oddNewArray.push(name)
//         }
//     }
//     return{
//         eventNewArray,
//         oddNewArray
//     }
// }
// let friends = eventName(['sabbir','hasan','misu'])
// console.log(friends)


let eventName = (names) =>{
    let eventNewArray=[];
    let oddNewArray=[];
    for(let name of names){
        if(name.length % 2===0){
            eventNewArray.push(name)
        }
        else{
            oddNewArray.push(name)
        }
    }
    return{eventNewArray, oddNewArray};
}

let friend = eventName(['sabbir','hasan','misu'])
console.log(friend);