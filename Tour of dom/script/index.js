// console.log('dom day baba');
// console.log(document.body);

let liCollection = document.getElementsByTagName('li');
for(let li of liCollection){
    console.log(li.innerText);
}