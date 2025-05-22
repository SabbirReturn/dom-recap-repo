// function greeting(greetingHandler,name){
//     greetingHandler(name);
// }

// function greetingHandler(name){
//     console.log('Good Morning',name)
// }
// greeting(greetingHandler,'Sabbir')

// function greeting(greetingHandler,name){
//     greetingHandler(name)
// }
// function greetingEvening(name){
//     console.log('Good Evening:', name)
// }
// greeting(greetingEvening,'sabbir');
// function greeting(greetingHandler,name){
//     greetingHandler(name);
// }

// function greetingEvening(name){
//     console.log('Good Evening:', name)
// }
// greeting(greetingEvening,'sabbir')

// function greeting(greetingHandler,name){
//    return greetingHandler(name)
// }
// function greetingEvening(name){
//     // console.log('Good Evening:', name)
//     return `Good Evening: ${name}`
// }
// let outPut = greeting(greetingEvening,'Sabbir');
// console.log(outPut)
function greeting(greetingHandler,name){
   return greetingHandler(name)
}
function greetingEvening(name){
    // console.log('Good Evening:', name)
    return `Good Evening: ${name}`
}
let outPut = greeting(greetingEvening,'Sabbir');
console.log(outPut)
