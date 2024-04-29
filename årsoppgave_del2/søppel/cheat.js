// script.js

function addToCart(productName, productPrice) {
    // Retrieve existing cart items from local storage or initialize an empty array
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new product to the cart
    const product = {
        name: productName,
        price: productPrice,
    };

    cartItems.push(product);

    // Store the updated cart in local storage
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Update the cart count
    updateCartCount();
}

function updateCartCount() {
    const cartCountElement = document.getElementById("count-cart");
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartCountElement.textContent = cartItems.length;
}


// cart.js

document.addEventListener("DOMContentLoaded", function () {
    displayCartItems();
    updateCartCount();
});

function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("Cart");

    if (cartItems.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cartContainer.innerHTML = "<h2>Shopping Cart</h2>";
        cartItems.forEach((item) => {
            const productElement = document.createElement("div");
            productElement.innerHTML = `<p>${item.name} - ${item.price}</p>`;
            cartContainer.appendChild(productElement);
        });
    }
}

function updateCartCount() {
    const cartCountElement = document.getElementById("count-cart");
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartCountElement.textContent = cartItems.length;
}
