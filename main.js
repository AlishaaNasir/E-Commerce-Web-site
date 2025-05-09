// Retrieve the cart data from local storage or initialize it as an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update the cart count on the homepage
function updateCartCount() {
    const cartCount = cart.length;
    document.getElementById('cart-count').textContent = cartCount;
}

// Add item to cart
function addToCart(product) {
    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1; // Increase the quantity if the product is already in the cart
    } else {
        product.quantity = 1; // Set the quantity to 1 for a new product
        cart.push(product); // Add the new product to the cart
    }

    // Update local storage and cart count
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showAddToCartNotification();
}

// Show notification when an item is added to the cart
function showAddToCartNotification() {
    const notification = document.getElementById('addToCartNotification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

// Event listener for add-to-cart buttons on the homepage
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const product = {
            id: this.getAttribute('data-product-id'),
            name: this.getAttribute('data-product-name'),
            price: parseFloat(this.getAttribute('data-product-price'))
        };
        addToCart(product);
    });
});

// Function to update the cart page
function updateCartPage() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    // Empty the cart items container first
    cartItemsContainer.innerHTML = '';
    
    // Calculate the total price
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        // Create a new div for each cart item
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span class="item-name">${item.name}</span>
            <span class="item-quantity">x${item.quantity}</span>
            <span class="item-price">$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Display the total price
    cartTotalElement.textContent = `$${total.toFixed(2)}`;
}

// Update the cart page when the page loads
if (window.location.pathname.includes('cart.html')) {
    updateCartPage();
}

// Update the cart count on the homepage
updateCartCount();
