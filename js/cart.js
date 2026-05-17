/* ========================================
   Cart Management with localStorage
   ======================================== */

const Cart = {
  items: JSON.parse(localStorage.getItem('allsellz_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('allsellz_wishlist') || '[]'),

  save() {
    localStorage.setItem('allsellz_cart', JSON.stringify(this.items));
    localStorage.setItem('allsellz_wishlist', JSON.stringify(this.wishlist));
    this.updateUI();
  },

  add(productId, qty = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product || product.stock === 0) {
      toast('Sorry, this product is out of stock', 'error');
      return;
    }
    const existing = this.items.find(i => i.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      this.items.push({ id: productId, qty });
    }
    this.save();
    toast(`${product.title} added to cart`, 'success');
  },

  remove(productId) {
    this.items = this.items.filter(i => i.id !== productId);
    this.save();
    toast('Item removed from cart', 'warning');
  },

  updateQty(productId, qty) {
    const item = this.items.find(i => i.id === productId);
    if (item) {
      item.qty = Math.max(1, qty);
      this.save();
    }
  },

  clear() {
    this.items = [];
    this.save();
  },

toggleWishlist(productId) {
  productId = Number(productId); // 🔥 IMPORTANT FIX

  const idx = this.wishlist.indexOf(productId);

  if (idx > -1) {
    this.wishlist.splice(idx, 1);
    toast('Removed from wishlist', 'warning');
  } else {
    this.wishlist.push(productId);
    toast('Added to wishlist', 'success');
  }

  this.save();

  // UI refresh
  if (typeof renderApp === 'function') {
    renderApp();
  }
},

  inWishlist(productId) {
    return this.wishlist.includes(productId);
  },

  getSubtotal() {
    return this.items.reduce((sum, item) => {
      const p = PRODUCTS.find(p => p.id === item.id);
      return sum + (p ? p.price * item.qty : 0);
    }, 0);
  },

  getTax() {
    return Math.round(this.getSubtotal() * 0.18); // 18% GST
  },

  getShipping() {
    const subtotal = this.getSubtotal();
    if (subtotal === 0) return 0;
    return subtotal > 5000 ? 0 : 99;
  },

  getTotal() {
    return this.getSubtotal() + this.getTax() + this.getShipping();
  },

  getCount() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  },

  updateUI() {
    document.getElementById('cartBadge').textContent = this.getCount();
    document.getElementById('wishlistBadge').textContent = this.wishlist.length;
    this.renderDrawer();
  },

  renderDrawer() {
    const body = document.getElementById('cartBody');
    const footer = document.getElementById('cartFooter');

    if (this.items.length === 0) {
      body.innerHTML = `
        <div class="cart-empty">
          <i class="fas fa-shopping-bag"></i>
          <h4>Your cart is empty</h4>
          <p>Add some products to get started!</p>
        </div>`;
      footer.innerHTML = '';
      return;
    }

    body.innerHTML = this.items.map(item => {
      const p = PRODUCTS.find(p => p.id === item.id);
      if (!p) return '';
      return `
        <div class="cart-item">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
          <div class="cart-item-info">
            <h4>${p.title}</h4>
            <div class="price">₹${(p.price * item.qty).toLocaleString('en-IN')}</div>
            <div class="cart-qty">
              <button onclick="Cart.updateQty(${p.id}, ${item.qty - 1})">−</button>
              <span>${item.qty}</span>
              <button onclick="Cart.updateQty(${p.id}, ${item.qty + 1})">+</button>
            </div>
          </div>
          <button class="remove" onclick="Cart.remove(${p.id})" aria-label="Remove">
            <i class="fas fa-trash"></i>
          </button>
        </div>`;
    }).join('');

    footer.innerHTML = `
      <div class="cart-totals">
        <div class="row"><span>Subtotal</span><span>₹${this.getSubtotal().toLocaleString('en-IN')}</span></div>
        <div class="row"><span>Tax (18% GST)</span><span>₹${this.getTax().toLocaleString('en-IN')}</span></div>
        <div class="row"><span>Shipping</span><span>${this.getShipping() === 0 ? 'FREE' : '₹' + this.getShipping()}</span></div>
        <div class="row total"><span>Total</span><span>₹${this.getTotal().toLocaleString('en-IN')}</span></div>
      </div>
      <button class="btn btn-primary btn-block" onclick="closeCart(); navigate('checkout');">
        <i class="fas fa-lock"></i> Checkout Securely
      </button>`;
  }
};

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}


window.Cart = Cart;