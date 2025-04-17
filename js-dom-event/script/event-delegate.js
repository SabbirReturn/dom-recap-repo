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

// document.getElementById('Btn').addEventListener('click', function(event){
//     let firstBtn = event.target.innerText;
//     console.log(firstBtn);
// })

let seats = document.getElementsByClassName('Btn');
for(let seat of seats){
    seat.addEventListener('click', function(event){
        let btn = event.target.innerText;
        
    })
}