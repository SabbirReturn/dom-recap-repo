// let items = document.getElementsByClassName('item');
// for(let item of items){
//     item.addEventListener('click', function(event){
//         event.target.parentNode.removeChild(event.target)
//     })
// }

document.getElementById('list-container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
})

document.getElementById('addBtn').addEventListener('click', function(){
    let listContainer = document.getElementById('list-container');
    let li = document.createElement('li');
    li.innerText = 'New list Item';
    li.classList.add('item')
    listContainer.appendChild(li);
})