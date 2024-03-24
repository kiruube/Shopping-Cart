// Import items from cartdata.js
import { items } from "./cartdata.js";

// Get references to DOM elements
const openShopping = document.querySelector('.shopping');
const closingShopping = document.querySelector('.closingShopping');
const list = document.querySelector('.list');
const listCart = document.querySelector('.listCart');
const body = document.querySelector('body');
const total = document.querySelector('.total');
const quantity = document.querySelector('.quantity');

// Initialize listCards array to store added items
let listCarts = [];

// Opening the shopping cart list
openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

// Closing the shopping cart list
closingShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

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

// Function to add items to the cart
function addToCart(itemId){
    const selectedItem = items.find(item => item.id === itemId);
    const existingItem = listCarts.find(item => item.id === itemId);

    if(existingItem) {
        existingItem.quantity += 1;
    } else {
        const newItem = { ...selectedItem, quantity: 1 };
        listCarts.push(newItem);
    }

    reloadCart();
};

// Function to update the cart display
function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCarts.forEach((item, key) => {
        totalPrice += item.price * item.quantity;
        count += item.quantity;

        const newDiv = document.createElement('li');
        newDiv.innerHTML =`
            <div><img src="image/${item.image}" /></div>
            <div>${item.name}</div>
            <div>${(item.price * item.quantity).toLocaleString()}</div>
            <div>
                <button onclick="changeQuantity(${key}, ${item.quantity - 1})">-</button>
                <div class="count">${item.quantity}</div>
                <button onclick="changeQuantity(${key}, ${item.quantity + 1})">+</button>
            </div>
        `;
        listCart.appendChild(newDiv);
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
};

// Function to change the quantity of items in the cart
function changeQuantity(key, quantity){
    if(quantity == 0){
        listCarts.splice(key, 1);
    } else {
        listCarts[key].quantity = quantity;
    }
    reloadCart();
};
