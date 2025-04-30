// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Add to Cart Functionality
const addToCartBtn = document.querySelector('.add-to-cart');

addToCartBtn.addEventListener('click', () => {
  const size = document.getElementById('size').value;
  const quantity = document.getElementById('quantity').value;

  alert(`Added ${quantity} item(s) of size ${size} to the cart!`);
});
