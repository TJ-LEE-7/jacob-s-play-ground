const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 10.00,
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 2,
        name: 'Product 2',
        price: 15.00,
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 20.00,
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 4,
        name: 'Product 4',
        price: 25.00,
        image: 'https://via.placeholder.com/150'
    }
];

const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

let cart = [];

products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productElement);
});

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.product.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ product: product, quantity: 1 });
    }

    renderCart();
}

function removeFromCart(productId) {
    const cartItemIndex = cart.findIndex(item => item.product.id === productId);

    if (cartItemIndex > -1) {
        cart.splice(cartItemIndex, 1);
    }

    renderCart();
}

function renderCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement('li');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <span>${item.product.name} (x${item.quantity})</span>
            <span>$${(item.product.price * item.quantity).toFixed(2)}</span>
            <button onclick="removeFromCart(${item.product.id})">Remove</button>
        `;
        cartItems.appendChild(cartItemElement);
        total += item.product.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    alert('Thank you for your purchase!');
    cart = [];
    renderCart();
}