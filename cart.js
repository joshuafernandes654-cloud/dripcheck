
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(name + " added to cart!");
}

function displayCart() {
  let cartItemsDiv = document.getElementById('cart-items');
  let totalDiv = document.getElementById('total');
  if (!cartItemsDiv) return;

  cartItemsDiv.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    let div = document.createElement('div');
    div.textContent = item.name + " - $" + item.price;
    cartItemsDiv.appendChild(div);
    total += item.price;
  });

  totalDiv.textContent = "Total: $" + total;
}

function checkout() {
  document.getElementById('thankyou').style.display = 'block';
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
}

window.onload = displayCart;
