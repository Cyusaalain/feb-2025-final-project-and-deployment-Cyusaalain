// CART: Manage LocalStorage-based cart
function addToCart(button) {
  const product = {
    name: button.getAttribute('data-name'),
    price: parseFloat(button.getAttribute('data-price')),
    img: button.getAttribute('data-img'),
  };

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
  loadCart();
}
  
  function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
    alert('Cart cleared!');
  }
  function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
  }
  
  function loadCart() {
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    if (!cartList || !cartTotal) return;
  
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartList.innerHTML = '';
    let total = 0;
  
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="${item.img}" alt="${item.name}" style="width:50px;height:50px;margin-right:10px;" />
        ${item.name} - $${item.price.toFixed(2)}
        <button onclick="removeFromCart(${index})" style="margin-left:10px;">Remove</button>
      `;
      cartList.appendChild(li);
      total += item.price;
    });
  
    cartTotal.textContent = total.toFixed(2);
  }
  
  // CONTACT FORM
  function submitContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('name')?.value;
    const email = document.getElementById('email')?.value;
    const message = document.getElementById('message')?.value;
  
    if (name && email && message) {
      alert(`Thank you, ${name}! We’ll contact you at ${email}.`);
      event.target.reset();
    }
  }
  
  // NAV TOGGLE (future mobile menu support)
  function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
  }
  
  // INIT
  document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
      searchInput.addEventListener('input', filterProducts);
    }
  });
  
  function filterProducts(event) {
    const query = event.target.value.toLowerCase();
    const products = document.querySelectorAll('.product-grid article');
  
    products.forEach(product => {
      const title = product.querySelector('h3')?.textContent.toLowerCase();
      if (title.includes(query)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }