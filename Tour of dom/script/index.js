// console.log('dom day baba');
// console.log(document.body);

let liCollection = document.getElementsByTagName('li');
for(let li of liCollection){
    // console.log(li.innerText);
}
let placeTitle = document.getElementById('place-title');
let placeChange = placeTitle.innerText
// console.log(placeChange);


// query selector
let places = document.querySelectorAll('.place li');
for( let place of places){
    let name = place.innerText;
    console.log(name);

}

let place = document.querySelector('.place li');
console.log(place)
