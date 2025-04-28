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

// let seats = document.getElementsByClassName('Btn');
// for(let seat of seats){
//     seat.addEventListener('click', function(event){
//         let btn = event.target.innerText;
//         let SeatBtn = document.getElementById('c4');
//         SeatBtn.innerText = btn;
//         // event.target.style.backgroundColor = 'green';
//         // event.target.style.color = 'white';
//         btn.style.backgroundColor = 'green';
//     })
// }

// document.getElementById('seatList').addEventListener('click', function(event){
//     let btn = event.target.innerText;
//     console.log(btn);
//     btn.style.backGroundColor = 'red'
// })

// let seats = document.getElementsByClassName('Btn');
// for(let seat of seats){
//     seat.addEventListener('click', function(event){
//         let btn = event.target.innerText;
//         let SeatBtn = document.getElementById('c4');
//         SeatBtn.innerText = btn;

//         // Add background color to the clicked button
//         event.target.style.backgroundColor = 'green'; // or any color you like
//         event.target.style.color = 'white'; // optional: change text color for better contrast
//     });
// }


// let seats = document.getElementsByClassName('Btn');
// for (let seat of seats) {
//     seat.addEventListener('click', function (event) {
//         let btn = event.target.innerText;
//         let SeatBtn = document.getElementById('c4');
//         SeatBtn.innerText = btn;

//         // Toggle background color
//         if (event.target.style.backgroundColor === 'green') {
//             event.target.style.backgroundColor = '';
//             event.target.style.color = '';
//             SeatBtn.innerText = ''; // Optional: Clear c4 if same button is deselected
//         } 
//         else {
//             // Reset all buttons
//             for (let s of seats) {
//                 s.style.backgroundColor = '';
//                 s.style.color = '';
//             }
//             // Set selected color
//             event.target.style.backgroundColor = 'green';
//             event.target.style.color = 'white';
//         }
//     });
// }

// let seats = document.getElementsByClassName('Btn');
// for (let seat of seats) {
//     seat.addEventListener('click', function (event) {
//         let btn = event.target.innerText;
//         let SeatBtn = document.getElementById('c4');
//         SeatBtn.innerText = btn;

//         // Toggle background color
//         if (event.target.style.backgroundColor === 'green') {
//             event.target.style.backgroundColor = '';
//             event.target.style.color = '';
//             SeatBtn.innerText = ''; // Optional: Clear c4 if same button is deselected
//         } 
//         else {
//             // Reset all buttons
//             for (let s of seats) {
//                 s.style.backgroundColor = '';
//                 s.style.color = '';
//             }
//             // Set selected color
//             event.target.style.backgroundColor = 'green';
//             event.target.style.color = 'white';
//         }
//     });
// }

