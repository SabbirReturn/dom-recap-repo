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
    // console.log(name);

}

let place = document.querySelector('.place li');
// console.log(place)

let liCollections = document.getElementsByTagName('li');
for( let liCollection of liCollections){
    // console.log(liCollection.innerText);
}

// let title = document.getElementById('place-title')
// let list = title.classList;
// console.log(list);
// title.classList.add('sabbir');

let title = document.getElementById('place-title')
let classlist = title.classList;
// console.log(classlist);

title.style.backgroundColor = 'yellow';
title.style.textAlign = 'center';

let change = document.getElementsByClassName('place')[0];
change.innerHTML = '<h1> Hello </h1>'



