function addToCart(productName, productPrice, productPhoto) {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const product = {
        name: productName,
        price: productPrice,
        img: productPhoto,
    };

    cartItems.push(product);

    localStorage.setItem("cart", JSON.stringify(cartItems));

    updateCartCount();
}

function updateCartCount() {
    const cartCountElement = document.getElementById("count-cart");
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartCountElement.textContent = cartItems.length;
}