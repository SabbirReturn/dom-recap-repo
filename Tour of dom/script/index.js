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
// change.innerHTML = '<h1> Hello </h1>'

let sections = document.querySelectorAll('section');
for(let section of sections){
    section.style.border = '2px solid red';
    section.style.marginBottom = '10px';
    section.style.padding = '10px';
    section.style.borderRadius = '10px';
    section.style.backgroundColor = 'lightGray';
}

let placeList = document.getElementById('place');
// placeList.classList.add('bg-blue');
placeList.classList.add('bg-blue');

let li = document.createElement('li');
li.innerText = 'Dhaka';
let placeUl = document.querySelector('#place ul');
placeUl.appendChild(li);

let li2 = document.createElement('li');
li2.innerText = 'Horipur';
let placesUl = document.getElementById('places')
placesUl.appendChild(li2)

// let location = placeUl.parentNode;
// console.log(location);




