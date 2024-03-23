let openShopping = document.querySelector('.shopping');
let closingShopping = document.querySelector('.closingShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

// Displaying selected items in the shopping cart
openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

// Closing the shopping cart list
closingShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

// Importation
import { items } from "./cartdata.js";
console.log(items);

// GET
const shoppingList = document.querySelector('.listCard');

// CREATE
items.forEach((item, key) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
        <img src="image/${item.image}" />
        <div class="title">${item.name}</div>
        <div class="price">${item.price.toLocaleString()}</div>
        <button onclick="addToCart(${item.id})">Add To Cart</button>
    `;
    list.appendChild(newDiv);
});

// Initialize the app (if needed)
function initApp() {
    
}
