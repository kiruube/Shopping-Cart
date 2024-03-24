let openShopping = document.querySelector('.shopping');
let closingShopping = document.querySelector('.closingShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

// Initialize listCards array to store added items
let listCards = [];

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
    
};

// Functionality to add items to the cart
function addToCart(itemId){
    const selectedItem = items.find(item => item.id === itemId);
    const existingItem = listCards.find(item => item.id === itemId);

    if(existingItem) {
        existingItem.quantity += 1;
    } else {
        const newItem = { ...selectedItem, quantity: 1 };
        listCards.push(newItem);
    }

    reloadCard();
};

// Function to update the cart display
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((item, key) => {
        totalPrice += item.price * item.quantity;
        count += item.quantity;

        const newDiv = document.createElement('li');
        newDiv.innerHTML =`
            <div><img src = "image/${item.image}" /></div>
            <div>${item.name}</div>
            <div>${(item.price * item.quantity).toLocaleString()}</div>
            <div>
                <button onclick = "changeQuantity(${key}, ${item.quantity - 1})">-</button>
                <div class="count">${item.quantity}</div>
                <button onclick = "changeQuantity(${key}, ${item.quantity + 1})">+</button>
            </div>
        `;
        listCard.appendChild(newDiv);
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
};

//adding and reducing the quantity of items in the cart
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCard[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
};
