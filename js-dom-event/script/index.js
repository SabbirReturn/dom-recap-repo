let title = document.getElementById('title');
title.setAttribute('title','Special day');

function makeRed(){
    document.body.style.backgroundColor = 'red';
}

let makePurple = document.getElementById('make-purple');
makePurple.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

let yellowBtn = document.getElementById('make-yellow');
yellowBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow'
})

document.getElementById('make-blue').addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
})