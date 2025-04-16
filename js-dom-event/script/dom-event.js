document.getElementById('change').addEventListener('click', function(){
    let defaultChange = document.getElementById('default');
    defaultChange.innerText = 'Change bt Dom'
})

function anotherChange(){
    let defaultChange = document.getElementById('default');
    defaultChange.innerText = 'Another Change'
}

document.getElementById('submitBtn').addEventListener('click', function(){
    let textBtn = document.getElementById('text-Btn');
    let inputText = textBtn.value
    
    let h1 = document.createElement('h1');
    h1.innerText = inputText;
    
    let mainContainer = document.getElementById('main-container')
    mainContainer.appendChild(h1);
    textBtn.value = '';
})