// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Cart functionality
const removeButtons = document.querySelectorAll('.btn-remove');
const cartTotal = document.getElementById('cart-total');

removeButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.remove();
    updateTotal();
  });
});

function updateTotal() {
  const items = document.querySelectorAll('.cart-item');
  let total = 0;
  items.forEach(item => {
    let price = item.querySelector('p').innerText.replace('Price: $', '');
    let qty = item.querySelector('input').value;
    total += price * qty;
  });
  cartTotal.innerText = `$${total}`;
}
