// Write your code here...

let imgURL = 'http://localhost:3000/menu';

fetch(imgURL)
.then (resp => resp.json())
.then (data => {
    console.log(data);
    renderDetails(data[0])
    for (let menu of data)
    renderMenu(menu);
});

function renderMenu (menu) {

    let spanElement = document.querySelector('#menu-items');
    let menuItems = document.createElement('span');
    menuItems.textContent = menu.name

    spanElement.append(menuItems)

    // let dishDetails = document.querySelector('#dish');

    // let dishImage = document.querySelector('#dish-image');
    // dishImage.src = menu.image;

    // let dishName = document.querySelector('#dish-name');
    // dishName.textContent = menu.name;

    // let dishDescription = document.querySelector('#dish-description');
    // dishDescription.textContent = menu.description;

    // let dishPrice = document.querySelector('#dish-price');
    // dishPrice.textContent = menu.price;
   
    menuItems.addEventListener('click', (e) => {
        renderDetails(menu)
    });
}


function renderDetails (menu) {

    let dishImage = document.querySelector('#dish-image');
    dishImage.src = menu.image;

    let dishName = document.querySelector('#dish-name');
    dishName.textContent = menu.name;

    let dishDescription = document.querySelector('#dish-description');
    dishDescription.textContent = menu.description;

    let dishPrice = document.querySelector('#dish-price');
    dishPrice.textContent = menu.price;

}

let cartForm = document.querySelector('#cart-form');
let cartNumber = document.querySelector('#number-in-cart');
cartForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e)

    let currentNumberInCart = parseInt(cartNumber.textContent, 10)

    let cartAmount = document.getElementById('cart-amount')
    let amountToAdd = parseInt(cartAmount.value, 10);

    cartNumber.textContent = currentNumberInCart + amountToAdd;

    cartAmount.value = "";
});
