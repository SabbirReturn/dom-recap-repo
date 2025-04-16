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