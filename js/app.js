/* ========================================
   AllSellz Main Application
   ======================================== */

   // app.js ke start mein ye add karein
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const route = urlParams.get('route');
    if (route) {
        navigate(route); // Ye function aapke shop/categories page ko load kar dega
    }
});

const app = document.getElementById('app');
let currentRoute = 'home';
let currentProduct = null;
let shopFilters = { categories: [], brands: [], price: 200000, sort: 'featured', search: '', page: 1 };
const PER_PAGE = 12;


          // --- 1. PAGE LOADING LOGIC (Refresh handling) ---
window.addEventListener('DOMContentLoaded', () => {
    // URL se 'route' parameter nikaalna
    const urlParams = new URLSearchParams(window.location.search);
    const route = urlParams.get('route') || 'home';

    // Page loading animation
    const loader = document.getElementById('loader');
    if (loader) setTimeout(() => loader.classList.add('hidden'), 800);
    
    function openPage(route){
      const loader = 
      document.getElementById("loader");
      if (loader) {
          loader.classList.remove("hidden");
      }
      setTimeout(() => {
        navigate(route);
        if(loader){
            loader.classList.add("hidden");
        }
      }, 2000);
    }

    

    // Sahi page load karna
    navigate(route);
    
    // Baki features initialize karna
    initGlobalListeners();
});




/* ---------- UTILITIES ---------- */
function toast(msg, type = 'info') {
  const container = document.getElementById('toastContainer');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  const icons = { success: 'check-circle', error: 'times-circle', warning: 'exclamation-circle', info: 'info-circle' };
  el.innerHTML = `<i class="fas fa-${icons[type]}"></i><p>${msg}</p>`;
  container.appendChild(el);
  setTimeout(() => { el.style.animation = 'slideIn 0.3s reverse'; setTimeout(() => el.remove(), 300); }, 3000);
}


function productCard(p) {
  const wished = Cart.inWishlist(p.id);
  return `
    <article class="product-card" data-id="${p.id}">
      <div class="product-img-wrap" onclick="navigate('product', ${p.id})">
        ${p.bestseller ? '<span class="product-badge">BESTSELLER</span>' : (p.discount >= 30 ? `<span class="product-badge" style="background:var(--success)">-${p.discount}%</span>` : '')}
        <button class="wishlist-btn ${wished ? 'active' : ''}"
  onclick="event.stopPropagation(); Cart.toggleWishlist(${p.id}); renderApp();">
  <i class="${wished ? 'fas' : 'far'} fa-heart"></i>
    </button>
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
      </div>
      <div class="product-info" onclick="navigate('product', ${p.id})" style="cursor:pointer;">
        <span class="product-cat">${p.brand} · ${p.category}</span>
        <h3 class="product-title">${p.title}</h3>
        <div class="product-rating">

        </div>
        <div class="product-stock ${p.stock > 0 ? 'in-stock' : 'out-stock'}">
          <i class="fas fa-${p.stock > 0 ? 'check-circle' : 'times-circle'}"></i>
          ${p.stock > 0 ? `In Stock (${p.stock})` : 'Out of Stock'}
        </div>
        <div class="product-price">
          <span class="price-current">₹${p.price.toLocaleString('en-IN')}</span>
          <span class="price-old">₹${p.oldPrice.toLocaleString('en-IN')}</span>
          <span class="price-off">${p.discount}% OFF</span>
        </div>
      </div>
      <button class="add-cart-btn" onclick="Cart.add(${p.id})" ${p.stock === 0 ? 'disabled' : ''}>
        <i class="fas fa-shopping-bag"></i>
        ${p.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </article>`;
}

/* ---------- ROUTER ---------- */
function navigate(route, data = null) {
  currentRoute = route;
  if (route === 'product') currentProduct = data;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.route === route));
  // Close mobile menu
  document.getElementById('navLinks').classList.remove('open');
  renderApp();
}

function renderApp() {
  switch (currentRoute) {
    case 'home': renderHome(); break;
    case 'shop': renderShop(); break;
    case 'categories': renderCategories(); break;
    case 'product': renderProductDetail(currentProduct); break;
    case 'login': renderLogin(); break;
    case 'signup': renderSignup(); break;
    case 'forgot': renderForgot(); break;
    case 'profile': renderProfile(); break;
    case 'orders': renderOrders(); break;
    case 'wishlist': renderWishlist(); break;
    case 'checkout': renderCheckout(); break;
    case 'success': renderSuccess(); break;
    case 'admin': renderAdmin(); break;
    default: renderHome();
  }
}

/* ---------- HOME PAGE ---------- */
function renderHome() {
  const featured = PRODUCTS.slice(0, 8);
  const bestsellers = PRODUCTS.filter(p => p.bestseller).slice(0, 8);

  app.innerHTML = `
    <!-- HERO -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <i class="fas fa-bolt" style="color:var(--accent);"></i>
            <span>New season collection out now</span>
          </div>
          <h1>Discover Premium <span class="grad-text">Tech & Fashion</span> All in One Place</h1>
          <p>Shop the latest gadgets, accessories, and lifestyle products from top global brands at unbeatable prices.</p>
          <div class="hero-actions">
            <button class="btn btn-primary btn-lg" onclick="navigate('shop')">
              Shop Now <i class="fas fa-arrow-right"></i>
            </button>
            <button class="btn btn-outline btn-lg" onclick="navigate('categories')">
              Browse Categories
            </button>
          </div>
          <div class="hero-stats">
            <div><h3 class="grad-text">50+</h3><p>Premium Products</p></div>
          
          </div>
        </div>
        <div class="hero-image">
          <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*ZHNvdhLw94zbDByBRtPBeQ.jpeg" alt="Featured product" />
          <div class="hero-card hero-card-1">
            <div class="ic"><i class="fas fa-truck-fast"></i></div>
            <div><strong style="font-size:14px;">AllSellz</strong><p style="font-size:12px;color:var(--text-light);">A Perfect E-Commerce Website</p></div>
          </div>
          <div class="hero-card hero-card-2">
            <div class="ic"><i class="fas fa-shield-halved"></i></div>
            <div><strong style="font-size:14px;">1 Year Warranty</strong><p style="font-size:12px;color:var(--text-light);">on Selected Products</p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CATEGORIES -->
    <section>
      <div class="container">
        <div class="section-header">
          <div><h2>Shop by <span class="grad-text">Category</span></h2><p>Explore our wide range of premium product categories</p></div>
          <a href="#" class="section-link" data-route="categories">View all →</a>
        </div>
        <div class="categories-grid">
          ${CATEGORIES.slice(0, 6).map(c => `
            <div class="category-card" onclick="shopFilters.categories=['${c.id}']; navigate('shop')">
              <img src="${c.img}" alt="${c.name}" loading="lazy" />
              <div class="overlay"><h3>${c.name}</h3></div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FEATURED -->
    <section style="background:var(--bg-alt);">
      <div class="container">
        <div class="section-header">
          <div><h2>Featured <span class="grad-text">Products</span></h2><p>Hand-picked products just for you</p></div>
          <a href="#" class="section-link" data-route="shop">View all →</a>
        </div>
        <div class="products-grid">
          ${featured.map(productCard).join('')}
        </div>
      </div>
    </section>

    <!-- BESTSELLERS -->
    <section>
      <div class="container">
        <div class="section-header">
          <div><h2>Best <span class="grad-text">Sellers</span></h2><p>Most loved by our customers</p></div>
          <a href="#" class="section-link" data-route="shop">View all →</a>
        </div>
        <div class="products-grid">
          ${bestsellers.map(productCard).join('')}
        </div>
      </div>
    </section>

    
    <!-- NEWSLETTER -->
    <section>
      <div class="container">
        <div class="newsletter-section">
          <h2>Get 10% Off Your First Order</h2>
          <p>Subscribe to our newsletter for exclusive deals and updates</p>
          <form class="newsletter-form" onsubmit="event.preventDefault(); toast('Thanks for subscribing! Check your email for 10% off coupon.', 'success'); this.reset();">
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  `;
  bindRoutes();
}

/* ---------- CATEGORIES PAGE ---------- */
function renderCategories() {
  app.innerHTML = `
    <section>
      <div class="container">
        <div class="section-header"><div><h2>All <span class="grad-text">Categories</span></h2><p>Explore our wide range of products</p></div></div>
        <div class="categories-grid" style="grid-template-columns:repeat(auto-fill,minmax(200px,1fr));">
          ${CATEGORIES.map(c => `
            <div class="category-card" onclick="shopFilters.categories=['${c.id}']; navigate('shop')">
              <img src="${c.img}" alt="${c.name}" loading="lazy" />
              <div class="overlay"><h3>${c.name}</h3></div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

/* ---------- SHOP PAGE WITH FILTERS ---------- */
function renderShop() {
  let filtered = PRODUCTS.slice();
  if (shopFilters.categories.length) filtered = filtered.filter(p => shopFilters.categories.includes(p.category));
  if (shopFilters.brands.length) filtered = filtered.filter(p => shopFilters.brands.includes(p.brand));
  filtered = filtered.filter(p => p.price <= shopFilters.price);
  if (shopFilters.search) {
    const s = shopFilters.search.toLowerCase();
    filtered = filtered.filter(p => p.title.toLowerCase().includes(s) || p.brand.toLowerCase().includes(s) || p.category.toLowerCase().includes(s));
  }

  // Sort
  switch (shopFilters.sort) {
    case 'price-low': filtered.sort((a,b)=>a.price-b.price); break;
    case 'price-high': filtered.sort((a,b)=>b.price-a.price); break;
    case 'rating': filtered.sort((a,b)=>b.rating-a.rating); break;
    case 'newest': filtered.sort((a,b)=>b.id-a.id); break;
  }

  // Pagination
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const start = (shopFilters.page - 1) * PER_PAGE;
  const paged = filtered.slice(start, start + PER_PAGE);

  const brands = [...new Set(PRODUCTS.map(p => p.brand))];

  app.innerHTML = `
    <div class="shop-layout">
      <aside class="filters">
        <h3 style="margin-bottom:20px;">Filters</h3>
        
        <div class="filter-group">
          <h4>Categories</h4>
          <div class="filter-options">
            ${CATEGORIES.map(c => `
              <label>
                <input type="checkbox" value="${c.id}" ${shopFilters.categories.includes(c.id) ? 'checked' : ''} 
                  onchange="toggleFilter('categories', '${c.id}', this.checked)" />
                ${c.name}
              </label>
            `).join('')}
          </div>
        </div>

        <div class="filter-group">
          <h4>Brands</h4>
          <div class="filter-options" style="max-height:220px;overflow-y:auto;">
            ${brands.map(b => `
              <label>
                <input type="checkbox" value="${b}" ${shopFilters.brands.includes(b) ? 'checked' : ''} 
                  onchange="toggleFilter('brands', '${b}', this.checked)" />
                ${b}
              </label>
            `).join('')}
          </div>
        </div>

        <div class="filter-group">
          <h4>Max Price: ₹${shopFilters.price.toLocaleString('en-IN')}</h4>
          <input type="range" min="500" max="200000" step="500" value="${shopFilters.price}" 
            style="width:100%;accent-color:var(--primary);"
            oninput="shopFilters.price=+this.value; shopFilters.page=1; renderShop();" />
        </div>

        <button class="btn btn-outline btn-block" onclick="shopFilters={categories:[],brands:[],price:200000,sort:'featured',search:'',page:1}; renderShop();">
          Clear Filters
        </button>
      </aside>

      <div>
        <div class="shop-header">
          <div>
            <h2 style="font-family:'Space Grotesk',sans-serif;font-size:28px;">All Products</h2>
            <p style="color:var(--text-light);font-size:14px;">${filtered.length} products found</p>
          </div>
          <select onchange="shopFilters.sort=this.value; renderShop();">
            <option value="featured" ${shopFilters.sort==='featured'?'selected':''}>Featured</option>
            <option value="price-low" ${shopFilters.sort==='price-low'?'selected':''}>Price: Low to High</option>
            <option value="price-high" ${shopFilters.sort==='price-high'?'selected':''}>Price: High to Low</option>
            <option value="rating" ${shopFilters.sort==='rating'?'selected':''}>Top Rated</option>
            <option value="newest" ${shopFilters.sort==='newest'?'selected':''}>Newest</option>
          </select>
        </div>

        ${paged.length === 0 ? `
          <div style="text-align:center;padding:80px 20px;color:var(--text-light);">
            <i class="fas fa-search" style="font-size:60px;opacity:0.3;margin-bottom:20px;"></i>
            <h3>No products found</h3>
            <p>Try adjusting your filters</p>
          </div>
        ` : `
          <div class="products-grid">
            ${paged.map(productCard).join('')}
          </div>

          ${totalPages > 1 ? `
            <div class="pagination">
              <button onclick="shopFilters.page--; renderShop();" ${shopFilters.page === 1 ? 'disabled' : ''}>
                <i class="fas fa-chevron-left"></i>
              </button>
              ${Array.from({length: totalPages}, (_, i) => `
                <button class="${shopFilters.page === i+1 ? 'active' : ''}" onclick="shopFilters.page=${i+1}; renderShop();">${i+1}</button>
              `).join('')}
              <button onclick="shopFilters.page++; renderShop();" ${shopFilters.page === totalPages ? 'disabled' : ''}>
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          ` : ''}
        `}
      </div>
    </div>
  `;
}

function toggleFilter(type, value, checked) {
  if (checked) {
    if (!shopFilters[type].includes(value)) shopFilters[type].push(value);
  } else {
    shopFilters[type] = shopFilters[type].filter(v => v !== value);
  }
  shopFilters.page = 1;
  renderShop();
}

/* ---------- PRODUCT DETAIL ---------- */
function renderProductDetail(productId) {
  const p = PRODUCTS.find(p => p.id === productId);
  if (!p) { navigate('shop'); return; }
  const related = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);
  const wished = Cart.inWishlist(p.id);

  app.innerHTML = `
    <div class="product-detail">
      <div class="product-gallery">
        <div class="main-img"><img id="mainImg" src="${p.images[0]}" alt="${p.title}" /></div>
        <div class="thumb-row">
          ${p.images.map((img, i) => `
            <div class="thumb ${i === 0 ? 'active' : ''}" onclick="document.getElementById('mainImg').src='${img}'; document.querySelectorAll('.thumb').forEach(t=>t.classList.remove('active')); this.classList.add('active');">
              <img src="${img}" alt="" />
            </div>
          `).join('')}
        </div>
      </div>

      <div class="product-detail-info">
        <span class="product-cat" style="color:var(--primary);font-weight:600;">${p.brand} · ${CATEGORIES.find(c=>c.id===p.category)?.name}</span>
        <h1>${p.title}</h1>
        <div class="detail-rating product-rating">
          
          
        </div>
        <div class="detail-price">
          <span class="price-current">₹${p.price.toLocaleString('en-IN')}</span>
          <span class="price-old">₹${p.oldPrice.toLocaleString('en-IN')}</span>
          <span class="price-off">${p.discount}% OFF</span>
        </div>
        <p class="detail-desc">${p.desc}</p>

        <div class="detail-meta">
          <div><strong>Brand:</strong> ${p.brand}</div>
          <div><strong>Category:</strong> ${CATEGORIES.find(c=>c.id===p.category)?.name}</div>
          <div><strong>Stock:</strong> <span class="${p.stock > 0 ? 'in-stock' : 'out-stock'}">${p.stock > 0 ? p.stock + ' available' : 'Out of stock'}</span></div>
          <div><strong>Delivery:</strong> Free delivery in 2-3 days</div>
        </div>

        <div class="qty-selector">
          <strong>Quantity:</strong>
          <div class="qty-control">
            <button onclick="let i=document.getElementById('qtyInput'); i.value=Math.max(1,+i.value-1);">−</button>
            <input id="qtyInput" type="number" value="1" min="1" max="${p.stock}" />
            <button onclick="let i=document.getElementById('qtyInput'); i.value=Math.min(${p.stock},+i.value+1);">+</button>
          </div>
        </div>

        <div class="detail-actions">
          <button class="btn btn-primary btn-lg" ${p.stock === 0 ? 'disabled' : ''} onclick="Cart.add(${p.id}, +document.getElementById('qtyInput').value);">
            <i class="fas fa-shopping-bag"></i> Add to Cart
          </button>
          <button class="btn btn-outline btn-lg" ${p.stock === 0 ? 'disabled' : ''} onclick="Cart.add(${p.id}, +document.getElementById('qtyInput').value); navigate('checkout');">
            <i class="fas fa-bolt"></i> Buy Now
          <button class="btn btn-ghost btn-lg"
  onclick="Cart.toggleWishlist(${p.id}); renderApp();">
  <i class="${wished ? 'fas' : 'far'} fa-heart"></i>
</button>
        </div>

        <div style="display:flex;gap:24px;margin-top:30px;padding-top:24px;border-top:1px solid var(--border);flex-wrap:wrap;">
          <div style="display:flex;gap:10px;align-items:center;font-size:13px;">
            <i class="fas fa-truck" style="color:var(--primary);font-size:20px;"></i>
            <div><strong>Free Shipping</strong><br/><span style="color:var(--text-light);">Above ₹5,000</span></div>
          </div>
          <div style="display:flex;gap:10px;align-items:center;font-size:13px;">
            <i class="fas fa-rotate-left" style="color:var(--primary);font-size:20px;"></i>
            <div><strong>Easy Returns</strong><br/><span style="color:var(--text-light);">7-day return policy</span></div>
          </div>
          <div style="display:flex;gap:10px;align-items:center;font-size:13px;">
            <i class="fas fa-shield-halved" style="color:var(--primary);font-size:20px;"></i>
            <div><strong>Secure Payment</strong><br/><span style="color:var(--text-light);">100% protected</span></div>
          </div>
        </div>
      </div>
    </div>

    ${related.length ? `
      <section class="related">
        <div class="section-header"><div><h2>Related <span class="grad-text">Products</span></h2></div></div>
        <div class="products-grid">${related.map(productCard).join('')}</div>
      </section>
    ` : ''}
  `;
}

/* ---------- AUTH PAGES ---------- */
function renderLogin() {
  app.innerHTML = `
    <div class="auth-page">
      <div class="auth-card">
        <h2>Welcome Back</h2>
        <p>Sign in to continue shopping with AllSellz</p>
        <form id="loginForm" novalidate>
          <div class="form-group">
            <label>Email Address</label>
            <input type="email" class="form-control" id="loginEmail" required />
            <div class="form-error">Please enter a valid email</div>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" id="loginPass" required minlength="6" />
            <div class="form-error">Password must be at least 6 characters</div>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;font-size:13px;">
            <label style="display:flex;gap:6px;align-items:center;color:var(--text-light);"><input type="checkbox" /> Remember me</label>
            <a href="#" data-route="forgot" style="color:var(--primary);font-weight:600;">Forgot Password?</a>
          </div>
          <button type="submit" class="btn btn-primary btn-block btn-lg">Sign In</button>
          <div class="auth-divider">OR</div>
          <button type="button" class="google-btn" onclick="toast('Google login UI demo - not implemented', 'info')">
            <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303a12 12 0 1 1-3.305-13.043l5.657-5.657A20 20 0 1 0 44 24c0-1.341-.138-2.65-.389-3.917Z"/><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819A12 12 0 0 1 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657A19.95 19.95 0 0 0 24 4 19.99 19.99 0 0 0 6.306 14.691Z"/><path fill="#4CAF50" d="M24 44a19.99 19.99 0 0 0 13.409-5.192l-6.19-5.238A11.85 11.85 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025A19.98 19.98 0 0 0 24 44Z"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l6.19 5.238A19.94 19.94 0 0 0 44 24c0-1.341-.138-2.65-.389-3.917Z"/></svg>
            Continue with Google
          </button>
        </form>
        <div class="auth-footer">Don't have an account? <a href="#" data-route="signup">Sign up</a></div>
      </div>
    </div>
  `;
  bindRoutes();
  document.getElementById('loginForm').onsubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPass').value;
    if (!email.includes('@') || pass.length < 6) {
      toast('Invalid credentials', 'error'); return;
    }
    if (Auth.login(email, pass)) {
      toast('Welcome back!', 'success'); navigate('home');
    } else {
      // Demo: auto-create on first try
      Auth.signup(email.split('@')[0], email, pass);
      toast('Logged in successfully', 'success'); navigate('home');
    }
  };
}

function renderSignup() {
  app.innerHTML = `
    <div class="auth-page">
      <div class="auth-card">
        <h2>Create Account</h2>
        <p>Join AllSellz and unlock exclusive deals</p>
        <form id="signupForm" novalidate>
          <div class="form-group">
            <label>Full Name</label>
            <input type="text" class="form-control" id="suName" required minlength="2" />
          </div>
          <div class="form-group">
            <label>Email Address</label>
            <input type="email" class="form-control" id="suEmail" required />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" id="suPass" required minlength="6" />
          </div>
          <button type="submit" class="btn btn-primary btn-block btn-lg">Create Account</button>
          <div class="auth-divider">OR</div>
          <button type="button" class="google-btn" onclick="toast('Google signup UI demo', 'info')">
            <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303a12 12 0 1 1-3.305-13.043l5.657-5.657A20 20 0 1 0 44 24c0-1.341-.138-2.65-.389-3.917Z"/><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819A12 12 0 0 1 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657A19.95 19.95 0 0 0 24 4 19.99 19.99 0 0 0 6.306 14.691Z"/><path fill="#4CAF50" d="M24 44a19.99 19.99 0 0 0 13.409-5.192l-6.19-5.238A11.85 11.85 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025A19.98 19.98 0 0 0 24 44Z"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l6.19 5.238A19.94 19.94 0 0 0 44 24c0-1.341-.138-2.65-.389-3.917Z"/></svg>
            Sign up with Google
          </button>
        </form>
        <div class="auth-footer">Already have an account? <a href="#" data-route="login">Sign in</a></div>
      </div>
    </div>
  `;
  bindRoutes();
  document.getElementById('signupForm').onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('suName').value.trim();
    const email = document.getElementById('suEmail').value;
    const pass = document.getElementById('suPass').value;
    if (name.length < 2 || !email.includes('@') || pass.length < 6) {
      toast('Please fill all fields correctly', 'error'); return;
    }
    if (Auth.signup(name, email, pass)) {
      toast('Account created successfully!', 'success'); navigate('home');
    } else {
      toast('Email already registered', 'error');
    }
  };
}

function renderForgot() {
  app.innerHTML = `
    <div class="auth-page">
      <div class="auth-card">
        <h2>Forgot Password?</h2>
        <p>Enter your email and we'll send you a reset link</p>
        <form onsubmit="event.preventDefault(); toast('Password reset link sent to your email', 'success'); navigate('login');">
          <div class="form-group">
            <label>Email Address</label>
            <input type="email" class="form-control" required />
          </div>
          <button type="submit" class="btn btn-primary btn-block btn-lg">Send Reset Link</button>
        </form>
        <div class="auth-footer">Remember your password? <a href="#" data-route="login">Sign in</a></div>
      </div>
    </div>
  `;
  bindRoutes();
}

/* ---------- PROFILE / ORDERS / WISHLIST ---------- */
function renderProfile() {
  if (!Auth.user) { navigate('login'); return; }
  app.innerHTML = `
    <div class="container" style="padding:40px 24px;max-width:800px;">
      <h2 style="font-family:'Space Grotesk',sans-serif;margin-bottom:24px;">My Profile</h2>
      <div class="auth-card" style="max-width:100%;">
        <div style="display:flex;gap:20px;align-items:center;margin-bottom:24px;">
          <div style="width:80px;height:80px;border-radius:50%;background:var(--gradient);display:grid;place-items:center;color:white;font-size:32px;font-weight:700;">
            ${Auth.user.name[0].toUpperCase()}
          </div>
          <div>
            <h3>${Auth.user.name}</h3>
            <p style="color:var(--text-light);">${Auth.user.email}</p>
          </div>
        </div>
        <div class="form-group"><label>Full Name</label><input class="form-control" value="${Auth.user.name}" /></div>
        <div class="form-group"><label>Email</label><input class="form-control" value="${Auth.user.email}" disabled /></div>
        <div class="form-group"><label>Phone</label><input class="form-control" placeholder="+91 9876543210" /></div>
        <div class="form-group"><label>Address</label><textarea class="form-control" rows="3" placeholder="Your shipping address"></textarea></div>
        <button class="btn btn-primary btn-block" onclick="toast('Profile updated successfully', 'success')">Save Changes</button>
      </div>
    </div>
  `;
}

function renderOrders() {
  const orders = JSON.parse(localStorage.getItem('allsellz_orders') || '[]');
  app.innerHTML = `
    <div class="container" style="padding:40px 24px;max-width:1000px;">
      <h2 style="font-family:'Space Grotesk',sans-serif;margin-bottom:24px;">My Orders</h2>
      ${orders.length === 0 ? `
        <div style="text-align:center;padding:80px 20px;color:var(--text-light);">
          <i class="fas fa-box-open" style="font-size:60px;opacity:0.3;margin-bottom:20px;"></i>
          <h3>No orders yet</h3>
          <p>Start shopping to see your orders here</p>
          <button class="btn btn-primary" style="margin-top:20px;" onclick="navigate('shop')">Start Shopping</button>
        </div>
      ` : orders.slice().reverse().map(o => `
        <div class="admin-panel" style="margin-bottom:16px;">
          <div style="display:flex;justify-content:space-between;align-items:start;flex-wrap:wrap;gap:12px;">
            <div>
              <h4>Order #${o.id}</h4>
              <p style="color:var(--text-light);font-size:13px;">${new Date(o.createdAt).toLocaleString()}</p>
            </div>
            <div style="text-align:right;">
              <span class="status-tag status-${o.status}">${o.status.toUpperCase()}</span>
              <p style="font-size:18px;font-weight:700;margin-top:6px;">₹${o.total.toLocaleString('en-IN')}</p>
            </div>
          </div>
          <div style="margin-top:16px;display:flex;gap:8px;flex-wrap:wrap;">
            ${o.items.slice(0,4).map(it => {
              const p = PRODUCTS.find(p => p.id === it.id);
              return p ? `<img src="${p.image}" style="width:50px;height:50px;border-radius:8px;object-fit:cover;" title="${p.title}" />` : '';
            }).join('')}
            ${o.items.length > 4 ? `<div style="width:50px;height:50px;border-radius:8px;background:var(--bg-alt);display:grid;place-items:center;font-size:13px;color:var(--text-light);">+${o.items.length-4}</div>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderWishlist() {
  const items = Cart.wishlist.map(id => PRODUCTS.find(p => p.id === Number(id))).filter(Boolean);
  app.innerHTML = `
    <div class="container" style="padding:40px 24px;">
      <h2 style="font-family:'Space Grotesk',sans-serif;margin-bottom:24px;">My Wishlist (${items.length})</h2>
      ${items.length === 0 ? `
        <div style="text-align:center;padding:80px 20px;color:var(--text-light);">
          <i class="far fa-heart" style="font-size:60px;opacity:0.3;margin-bottom:20px;"></i>
          <h3>Your wishlist is empty</h3>
          <button class="btn btn-primary" style="margin-top:20px;" onclick="navigate('shop')">Start Shopping</button>
        </div>
      ` : `<div class="products-grid">${items.map(productCard).join('')}</div>`}
    </div>
  `;
}

/* ---------- CHECKOUT ---------- */
function renderCheckout() {
  if (Cart.items.length === 0) {
    toast('Your cart is empty', 'warning'); navigate('shop'); return;
  }
  app.innerHTML = `
    <div class="checkout-layout">
      <form class="checkout-form" id="checkoutForm" novalidate>
        <h3>📍 Shipping Information</h3>
        <div class="form-row">
          <div class="form-group"><label>First Name</label><input class="form-control" name="firstName" required value="${Auth.user?.name?.split(' ')[0] || ''}" /></div>
          <div class="form-group"><label>Last Name</label><input class="form-control" name="lastName" required value="${Auth.user?.name?.split(' ')[1] || ''}" /></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label>Email</label><input class="form-control" type="email" name="email" required value="${Auth.user?.email || ''}" /></div>
          <div class="form-group"><label>Phone</label><input class="form-control" type="tel" name="phone" required pattern="[0-9]{10}" /></div>
        </div>
        <div class="form-group"><label>Address</label><input class="form-control" name="address" required /></div>
        <div class="form-row">
          <div class="form-group"><label>City</label><input class="form-control" name="city" required /></div>
          <div class="form-group"><label>State</label><input class="form-control" name="state" required /></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label>PIN Code</label><input class="form-control" name="pin" required pattern="[0-9]{6}" /></div>
          <div class="form-group"><label>Country</label><input class="form-control" name="country" value="India" required /></div>
        </div>

        <h3>💳 Billing Information</h3>
        <label style="display:flex;gap:8px;align-items:center;margin-bottom:12px;font-size:14px;">
          <input type="checkbox" id="sameAsShipping" checked /> Same as shipping address
        </label>

        <h3>💰 Payment Method</h3>
        <div class="payment-options">
          <label class="payment-option selected">
            <input type="radio" name="payment" value="card" checked style="accent-color:var(--primary);" />
            <i class="far fa-credit-card"></i>
            <div><strong>Credit / Debit Card</strong><p style="font-size:12px;color:var(--text-light);">Visa, Mastercard, Rupay</p></div>
          </label>
          <label class="payment-option">
            <input type="radio" name="payment" value="upi" style="accent-color:var(--primary);" />
            <i class="fas fa-mobile-screen"></i>
            <div><strong>UPI</strong><p style="font-size:12px;color:var(--text-light);">Pay via Google Pay, PhonePe, Paytm</p></div>
          </label>
          <label class="payment-option">
            <input type="radio" name="payment" value="paypal" style="accent-color:var(--primary);" />
            <i class="fab fa-paypal"></i>
            <div><strong>PayPal</strong><p style="font-size:12px;color:var(--text-light);">Pay using your PayPal account</p></div>
          </label>
          <label class="payment-option">
            <input type="radio" name="payment" value="cod" style="accent-color:var(--primary);" />
            <i class="fas fa-money-bill-wave"></i>
            <div><strong>Cash on Delivery</strong><p style="font-size:12px;color:var(--text-light);">Pay when you receive</p></div>
          </label>
        </div>

        <button type="submit" class="btn btn-primary btn-block btn-lg" style="margin-top:24px;">
          <i class="fas fa-lock"></i> Place Order — ₹${Cart.getTotal().toLocaleString('en-IN')}
        </button>
      </form>

      <aside class="order-summary">
        <h3 style="margin-bottom:16px;">Order Summary</h3>
        ${Cart.items.map(item => {
          const p = PRODUCTS.find(p => p.id === item.id);
          return `
            <div class="summary-item">
              <img src="${p.image}" alt="${p.title}" />
              <div class="info">
                <strong>${p.title}</strong>
                <p>Qty: ${item.qty}</p>
              </div>
              <div class="price">₹${(p.price * item.qty).toLocaleString('en-IN')}</div>
            </div>`;
        }).join('')}
        <div class="cart-totals" style="margin-top:16px;">
          <div class="row"><span>Subtotal</span><span>₹${Cart.getSubtotal().toLocaleString('en-IN')}</span></div>
          <div class="row"><span>Tax (18% GST)</span><span>₹${Cart.getTax().toLocaleString('en-IN')}</span></div>
          <div class="row"><span>Shipping</span><span>${Cart.getShipping() === 0 ? 'FREE' : '₹' + Cart.getShipping()}</span></div>
          <div class="row total"><span>Total</span><span>₹${Cart.getTotal().toLocaleString('en-IN')}</span></div>
        </div>
      </aside>
    </div>
  `;

  // Payment option selection
  document.querySelectorAll('.payment-option').forEach(opt => {
    opt.onclick = () => {
      document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    };
  });

  // Place order
  document.getElementById('checkoutForm').onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    // Validation
    if (!/^\d{10}$/.test(data.phone)) { toast('Invalid phone number', 'error'); return; }
    if (!/^\d{6}$/.test(data.pin)) { toast('Invalid PIN code', 'error'); return; }

    const order = {
      id: 'ORD-' + Math.floor(Math.random() * 9000 + 1000),
      items: [...Cart.items],
      shipping: data,
      payment: data.payment,
      subtotal: Cart.getSubtotal(),
      tax: Cart.getTax(),
      shippingFee: Cart.getShipping(),
      total: Cart.getTotal(),
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    const orders = JSON.parse(localStorage.getItem('allsellz_orders') || '[]');
    orders.push(order);
    localStorage.setItem('allsellz_orders', JSON.stringify(orders));
    localStorage.setItem('allsellz_last_order', JSON.stringify(order));
    Cart.clear();
    navigate('success');
  };
}

/* ---------- SUCCESS ---------- */
function renderSuccess() {
  const order = JSON.parse(localStorage.getItem('allsellz_last_order') || 'null');
  app.innerHTML = `
    <div class="success-page">
      <div class="success-icon"><i class="fas fa-check"></i></div>
      <h1>Order Placed Successfully!</h1>
      <p style="color:var(--text-light);margin-bottom:8px;">Thank you for shopping with AllSellz</p>
      ${order ? `
        <p style="font-size:14px;margin-bottom:24px;">Order ID: <strong>${order.id}</strong></p>
        <div class="auth-card" style="text-align:left;margin:0 auto 24px;">
          <h3 style="margin-bottom:16px;">Order Details</h3>
          <div class="cart-totals">
            <div class="row"><span>Items (${order.items.length})</span><span>₹${order.subtotal.toLocaleString('en-IN')}</span></div>
            <div class="row"><span>Tax</span><span>₹${order.tax.toLocaleString('en-IN')}</span></div>
            <div class="row"><span>Shipping</span><span>${order.shippingFee === 0 ? 'FREE' : '₹' + order.shippingFee}</span></div>
            <div class="row total"><span>Total Paid</span><span>₹${order.total.toLocaleString('en-IN')}</span></div>
          </div>
          <p style="margin-top:16px;color:var(--text-light);font-size:13px;">
            <i class="fas fa-truck"></i> Expected delivery: ${new Date(Date.now() + 3*86400000).toLocaleDateString('en-IN', {day:'numeric',month:'short'})} - ${new Date(Date.now() + 5*86400000).toLocaleDateString('en-IN', {day:'numeric',month:'short'})}
          </p>
        </div>
      ` : ''}
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="navigate('orders')">View My Orders</button>
        <button class="btn btn-outline" onclick="navigate('shop')">Continue Shopping</button>
      </div>
    </div>
  `;
}

/* ---------- ROUTE BINDING & INIT ---------- */
function bindRoutes() {
  document.querySelectorAll('[data-route]').forEach(el => {
    if (el.dataset.bound) return;
    el.dataset.bound = '1';
    el.addEventListener('click', (e) => {
      e.preventDefault();
      navigate(el.dataset.route);
    });
  });
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // Hide loader
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 800);

  // Theme toggle
  const savedTheme = localStorage.getItem('allsellz_theme') || 'light';
  document.documentElement.dataset.theme = savedTheme;
  document.querySelector('#themeToggle i').className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  document.getElementById('themeToggle').onclick = () => {
    const cur = document.documentElement.dataset.theme;
    const next = cur === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('allsellz_theme', next);
    document.querySelector('#themeToggle i').className = next === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  };

  // Navbar scroll
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
    document.getElementById('backToTop').classList.toggle('show', window.scrollY > 400);
  });

  // Back to top
  document.getElementById('backToTop').onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Cart drawer
  document.getElementById('cartBtn').onclick = openCart;
  document.getElementById('closeCart').onclick = closeCart;
  document.getElementById('cartOverlay').onclick = closeCart;

  // User dropdown
  document.getElementById('userBtn').onclick = (e) => {
    e.stopPropagation();
    document.querySelector('.user-menu').classList.toggle('open');
  };
  document.addEventListener('click', () => document.querySelector('.user-menu').classList.remove('open'));
  document.getElementById('logoutBtn').onclick = (e) => { e.preventDefault(); Auth.logout(); };

  // Hamburger
  document.getElementById('hamburger').onclick = () => {
    document.getElementById('navLinks').classList.toggle('open');
  };

  // Search
  document.getElementById('searchInput').addEventListener('input', (e) => {
    shopFilters.search = e.target.value;
    shopFilters.page = 1;
    if (currentRoute !== 'shop' && e.target.value.length > 1) navigate('shop');
    else if (currentRoute === 'shop') renderShop();
  });

  // Nav links
  bindRoutes();

  // Init
  Auth.updateUI();
  Cart.updateUI();
  renderApp();

document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("searchInput");

  // agar input nahi mila to stop
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {

    const query = e.target.value.toLowerCase().trim();

    // filter products
    const filteredProducts = PRODUCTS.filter(product =>
      product.title.toLowerCase().includes(query)
    );

    // render results
    renderSearchResults(filteredProducts);

  });

});



function renderSearchResults(products) {

  const app = document.getElementById("app");

  // no product found
  if (products.length === 0) {

    app.innerHTML = `
      <div style="padding:40px;text-align:center;">
        <h2>No products found 😢</h2>
      </div>
    `;

    return;
  }

  // show products
  app.innerHTML = `
    <div class="grid">

      ${products.map(product => `

        <div class="product-card">

          <img src="${product.image}" alt="${product.title}" />

          <h3>${product.title}</h3>

          <p>₹${product.price}</p>

          <button onclick="Cart.add(${product.id})">
            Add to Cart
          </button>

        </div>

      `).join("")}

    </div>
  `;
}

});

window.renderHome = renderHome;
