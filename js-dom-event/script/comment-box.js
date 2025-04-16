document.getElementById('postBtn').addEventListener('click', function(){
    let textField = document.getElementById('textarea');
    let textValue = textField.value;
    

    let p = document.createElement('p');
    p.innerText = textValue;
    let mainContainer = document.getElementById('main-container');
    mainContainer.appendChild(p);
    textField.value = '';
})