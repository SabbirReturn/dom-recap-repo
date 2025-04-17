// document.getElementById('deleteBtn').addEventListener('click', function(){
//     let secretInfo = document.getElementById('secret-info');
//     secretInfo.style.display = 'none'
// })

// document.getElementById('input-field').addEventListener('keyup', function(event){
//     let inputField = event.target.value;
    
//     let deleteBtn = document.getElementById('deleteBtn');
//     if(inputField === 'delete'){
//         deleteBtn.removeAttribute('disabled');
//     }
//     else{
//         deleteBtn.setAttribute('disabled', true);
//     }
    
// })
let inputField = document.getElementById('input-field')
inputField.addEventListener('keyup', function(event){
    let inputValue = event.target.value
    let deleteBtn = document.getElementById('deleteBtn');
    if(inputValue === 'delete'){
        deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled', true);
    }
})

document.getElementById('deleteBtn').addEventListener('click',function(){
    let secretInfo = document.getElementById('secret-info');
    secretInfo.style.display = 'none'
    inputField.value = '';
})



