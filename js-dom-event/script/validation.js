let number = '22';
let num = parseInt(number)
// console.log( typeof num);
 if(typeof num ==='number'){
    // console.log('right')
    // return 'right'
 }
 else{
    // console.log('wrong')
 }


function milliSeconds(x){
if(isNaN(x)){
    return 'Not a number'
}
else{
    return x * 1000;
}
}

// console.log(milliSeconds('1000T+1'));
// console.log(milliSeconds('1000E+10'));


let age = 26;
let isBCS = true;
if(age<30 || isBCS == true){
    // console.log('Raji')
}
else{
    // console.log('Na')
}


let numbers = [1,2,3,4,5,6]
let studentDetails = {
    name:'Sabbir Hasan',
    Age : 22,
    isStudent : false
}
console.log(Array.isArray(numbers));
console.log(studentDetails.isStudent)
if(studentDetails.isStudent == false){
    console.log('Admit a school')
}
else{
    console.log('Good')
}