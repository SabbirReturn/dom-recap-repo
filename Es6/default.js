function add(num1=2,num2=5){
    let result = num1 + num2;
    console.log(num1,num2,result)
    return result;
}
// let sum = add(5,7)
// let sum = add(2)
// let sum = add();



function fullName(firstName='FirstName', lastName='LastName'){
    let attach = firstName + ' '+lastName;
    console.log(attach);
    return attach;
}

// let fullWord = fullName('Sabbir', 'hasan')
let fullWord = fullName()