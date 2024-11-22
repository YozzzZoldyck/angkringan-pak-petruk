// Mengambil elemen-elemen yang dibutuhkan
const cartList = document.getElementById('cart-list');
const totalPriceElement = document.getElementById('total-price');
const checkoutBtn = document.getElementById('checkout-btn');

// Menyimpan data keranjang
let cart = [];

// Menambahkan item ke keranjang
function addToCart(itemName, itemPrice) {
    const item = {
        name: itemName,
        price: parseInt(itemPrice)
    };
    cart.push(item);
    renderCart();
}

// Merender tampilan keranjang
function renderCart() {
    cartList.innerHTML = '';  // Kosongkan list keranjang
    let totalPrice = 0;

    // Menambahkan item ke dalam daftar keranjang
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price}`;
        cartList.appendChild(li);
        totalPrice += item.price;
    });

    // Update total harga
    totalPriceElement.textContent = totalPrice;
}

// Menangani klik tombol 'Tambah' untuk item menu
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.getAttribute('data-name');
        const itemPrice = this.getAttribute('data-price');
        addToCart(itemName, itemPrice);
    });
});

// Fungsi untuk menangani checkout
checkoutBtn.addEventListener('click', function() {
    if (cart.length > 0) {
        alert('Terima kasih telah memesan! Total Pembayaran: Rp ' + totalPriceElement.textContent);
        cart = [];  // Kosongkan keranjang setelah checkout
        renderCart();  // Update tampilan keranjang
    } else {
        alert('Keranjang Anda kosong!');
    }
});
