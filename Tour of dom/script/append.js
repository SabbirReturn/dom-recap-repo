let mainContainer = document.getElementById('main-container');

let section = document.createElement('section');
let h1 = document.createElement('h1');

h1.innerText = 'My Favorite Food';

let ul = document.createElement('ul');
let li1 = document.createElement('li');
li1.innerText = 'Biriany'

let li3 = document.createElement('li');
li3.innerText = 'KalaVuna'
// let ul = document.createElement('ul');
// let li1 = document.createElement('li');
// li1.innerText = 'Biriany'

// let li3 = document.createElement('li');
// li3.innerText = 'KalaVuna'



// section.appendChild(h1);
// section.appendChild(ul);
// ul.appendChild(li1);
// ul.appendChild(li3);
// mainContainer.appendChild(section);

section.appendChild(h1);
section.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li3);
mainContainer.appendChild(section);


let section1 = document.createElement('section');
section1.innerHTML = `
    <h1> Favorite Dress</h1>
    <ul>
        <li>Shirt</li>
    </ul>
`

mainContainer.appendChild(section1)


let mainContainerStyle = document.querySelectorAll('#main-container h1');
for(let mainContainer of mainContainerStyle){
    mainContainer.classList.add('text-align');
}
