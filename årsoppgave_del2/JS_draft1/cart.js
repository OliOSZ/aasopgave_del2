document.addEventListener("DOMContentLoaded", function () {
    displayCartItems();
    updateCartCount();
});

function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("Cart");

    if (cartItems.length === 0) {
        cartContainer.innerHTML = "<p>Handlekurven din er tom :(</p>";
    }
    else {
        cartContainer.innerHTML = "<h2>Handlekurven</h>";
        cartItems.forEach((item) => {
            const productElement = document.createElement("div");
            productElement.innerHTML = `<p>${item.name} - ${item.price} - </p><img class="img" src=${item.img}  >`;
            cartContainer.appendChild(productElement);
        });
    }
}

function updateCartCount() {
    const cartCountElement = document.getElementById("count-cart");
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartCountElement.textContent = cartItems.length;
}