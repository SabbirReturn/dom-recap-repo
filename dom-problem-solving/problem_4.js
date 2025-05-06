// Write an arrow function where it will do the following:
// a)It will take two array input
// b) Combine the two  arrays and assign them in a new array
// b) Find the maximum number from the new array and return the result


let arrayOne = [1,2,3,4,5];
let arrayTwo = [11,22,33,44];
let addArray = (arrayOne,arrayTwo)=>{
    let newArray = [...arrayOne,...arrayTwo];
    // console.log(newArray)
    let maximumNumber= Math.max(...newArray);
    return maximumNumber;
}
let result = addArray(arrayOne,arrayTwo);
console.log(result);