// Toggle Mobile Menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Add to Cart Functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('cart-count');

// Initialize cart items count
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
updateCartCount();

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));

    // Check if item already exists in the cart
    const existingItem = cartItems.find(item => item.name === name);

    if (existingItem) {
      // If item exists, increase quantity (optional)
      alert(`${name} is already in the cart.`);
    } else {
      // Add item to the cart
      cartItems.push({ name, price });
      localStorage.setItem('cart', JSON.stringify(cartItems));
      alert(`${name} added to the cart!`);
    }

    // Update cart item count
    updateCartCount();
  });
});

function updateCartCount() {
  cartCount.textContent = cartItems.length;
}

// Example to display cart items in cart.html (if needed)
if (window.location.pathname.includes('cart.html')) {
  const cartContainer = document.querySelector('.cart-items');
  
  if (cartItems.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cartItems.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('cart-item');
      itemElement.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: $${item.price.toFixed(2)}</p>
      `;
      cartContainer.appendChild(itemElement);
    });
  }
}
