/* ─── DATA ──────────────────────────────────────────── */
const dishes = [
  {
    id: 1, name: "Classic Chicken Burger", cat: "burger", price: 250,
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80&auto=format&fit=crop",
    desc: "Juicy grilled chicken, crisp lettuce, fresh tomatoes, and our signature herb mayo on a brioche bun.",
    prep: "15-20 min", cal: "520 kcal", popular: true
  },
  {
    id: 2, name: "Beef Pizza Supreme", cat: "pizza", price: 500,
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&auto=format&fit=crop",
    desc: "Slow-braised beef, caramelised onions, roasted peppers, and three-cheese blend on our stone-baked base.",
    prep: "20-25 min", cal: "780 kcal", popular: true
  },
  {
    id: 3, name: "Margherita Pizza", cat: "pizza", price: 400,
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80&auto=format&fit=crop",
    desc: "Classic San Marzano tomato sauce, fresh mozzarella, fragrant basil leaves, and a drizzle of extra virgin olive oil.",
    prep: "18-22 min", cal: "620 kcal", popular: false
  },
  {
    id: 4, name: "Double Cheese Burger", cat: "burger", price: 300,
    img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80&auto=format&fit=crop",
    desc: "Two smash-style beef patties, double cheddar, house pickles, special sauce and shredded lettuce.",
    prep: "15-20 min", cal: "720 kcal", popular: true
  },
  {
    id: 5, name: "Grilled Veggie Burger", cat: "burger", price: 220,
    img: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=600&q=80&auto=format&fit=crop",
    desc: "Smoky black bean and quinoa patty, avocado spread, roasted red pepper, and micro greens.",
    prep: "12-18 min", cal: "420 kcal", popular: false
  },
  {
    id: 6, name: "Spicy Pepperoni Pizza", cat: "pizza", price: 480,
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80&auto=format&fit=crop",
    desc: "Premium pepperoni, jalapeños, chilli-infused tomato sauce, and stretchy mozzarella on a crispy crust.",
    prep: "20-25 min", cal: "850 kcal", popular: true
  },
  {
    id: 7, name: "Crispy Calamari", cat: "appetizers", price: 180,
    img: "https://images.unsplash.com/photo-1599021419847-d8a7a6aba5b4?w=600&q=80&auto=format&fit=crop",
    desc: "Tender rings of squid in a light, crunchy coating. Served with lemon aioli and fresh chilli.",
    prep: "10-15 min", cal: "320 kcal", popular: false
  },
  {
    id: 8, name: "Mango Lassi", cat: "drinks", price: 120,
    img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80&auto=format&fit=crop",
    desc: "Creamy blended Alphonso mangoes with chilled yoghurt, a hint of cardamom, and fresh mint.",
    prep: "5 min", cal: "185 kcal", popular: false
  },
  {
    id: 9, name: "Chocolate Lava Cake", cat: "desserts", price: 200,
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80&auto=format&fit=crop",
    desc: "Warm dark chocolate fondant with a molten centre. Served with vanilla bean ice cream.",
    prep: "12-15 min", cal: "480 kcal", popular: true
  },
  {
    id: 10, name: "Garden Fresh Salad", cat: "salads", price: 160,
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&auto=format&fit=crop",
    desc: "Mixed greens, heirloom cherry tomatoes, cucumber, radish, and a zesty lemon-herb dressing.",
    prep: "8 min", cal: "180 kcal", popular: false
  },
  {
    id: 11, name: "Loaded Fries", cat: "sides", price: 150,
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80&auto=format&fit=crop",
    desc: "Double-fried golden fries loaded with melted cheese sauce, crispy bacon bits, and sour cream.",
    prep: "10 min", cal: "550 kcal", popular: true
  },
  {
    id: 12, name: "BBQ Chicken Wings", cat: "appetizers", price: 280,
    img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80&auto=format&fit=crop",
    desc: "Smoky, tender wings glazed in our house BBQ sauce. Served with blue cheese dip and celery.",
    prep: "20-25 min", cal: "620 kcal", popular: true
  }
];

/* ─── STATE ─────────────────────────────────────────── */
let cart = JSON.parse(localStorage.getItem('gh_cart') || '[]');
let activeTab = 'all';
let searchQuery = '';

/* ─── INIT ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderDishes();
  updateCartUI();
  initNavScroll();
  initNavLinks();
  initAnimations();
  setTodayAsMinDate();
});

/* ─── NAVBAR ─────────────────────────────────────────── */
function initNavScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

function initNavLinks() {
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) {
        current = sec.getAttribute('id');
      }
    });
    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  links.forEach(link => {
    link.addEventListener('click', () => {
      const nav = document.getElementById('navLinks');
      const ham = document.getElementById('hamburger');
      nav.classList.remove('open');
      ham.classList.remove('open');
    });
  });
}

function toggleMenu() {
  const nav = document.getElementById('navLinks');
  const ham = document.getElementById('hamburger');
  nav.classList.toggle('open');
  ham.classList.toggle('open');
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ─── SCROLL ANIMATIONS ──────────────────────────────── */
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-anim]').forEach(el => observer.observe(el));
}

/* ─── DISHES ─────────────────────────────────────────── */
function renderDishes() {
  const grid = document.getElementById('dishGrid');
  let filtered = dishes.filter(d => {
    const matchCat = activeTab === 'all' || d.cat === activeTab;
    const matchSearch = !searchQuery ||
      d.name.toLowerCase().includes(searchQuery) ||
      d.cat.toLowerCase().includes(searchQuery) ||
      d.desc.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <span>🍽</span>
        <p>No dishes found</p>
        <small>Try a different category or search term</small>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(d => `
    <div class="dish-card" data-id="${d.id}">
      <div class="dish-img-wrap">
        <img src="${d.img}" alt="${d.name}" loading="lazy" />
        <div class="dish-badges">
          ${d.popular ? '<span class="dish-badge badge-popular">Popular</span>' : ''}
          <span class="dish-badge badge-cat">${capitalise(d.cat)}</span>
        </div>
      </div>
      <div class="dish-body">
        <h3 class="dish-name">${d.name}</h3>
        <p class="dish-desc">${d.desc}</p>
        <div class="dish-meta">
          <div class="dish-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${d.prep}
          </div>
          <div class="dish-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
            ${d.cal}
          </div>
        </div>
        <div class="dish-footer">
          <div class="dish-price">
            ৳${d.price}
            <span class="dish-price-sub">per serving</span>
          </div>
          <button class="btn-add" onclick="addToCart(${d.id})">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function setTab(btn, cat) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  activeTab = cat;
  searchQuery = '';
  document.getElementById('searchInput').value = '';
  renderDishes();
}

function filterDishes() {
  searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();
  activeTab = 'all';
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelector('.tab[data-cat="all"]').classList.add('active');
  renderDishes();
}

function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* ─── CART ───────────────────────────────────────────── */
function addToCart(id) {
  const dish = dishes.find(d => d.id === id);
  if (!dish) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...dish, qty: 1 });
  }

  saveCart();
  updateCartUI();
  showToast(`${dish.name} added to cart`, 'success', '🛒');

  // open cart
  setTimeout(() => openCart(), 300);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart();
  updateCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('gh_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const count = cart.reduce((s, c) => s + c.qty, 0);
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const total = subtotal + (subtotal > 0 ? 50 : 0);

  // Badge
  const badge = document.getElementById('cartCount');
  badge.textContent = count;
  badge.style.transform = count > 0 ? 'scale(1.2)' : 'scale(1)';
  setTimeout(() => badge.style.transform = 'scale(1)', 200);

  // Totals
  document.getElementById('cartSubtotal').textContent = `৳${subtotal}`;
  document.getElementById('cartTotal').textContent = `৳${total}`;

  // List
  const listEl = document.getElementById('cartList');
  const emptyEl = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');

  if (cart.length === 0) {
    emptyEl.style.display = 'flex';
    listEl.innerHTML = '';
    footerEl.style.opacity = '0.4';
    footerEl.style.pointerEvents = 'none';
  } else {
    emptyEl.style.display = 'none';
    footerEl.style.opacity = '1';
    footerEl.style.pointerEvents = 'all';
    listEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.img}" alt="${item.name}" />
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">৳${item.price * item.qty}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = sidebar.classList.contains('open');
  if (isOpen) {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  } else {
    openCart();
  }
}

function placeOrder() {
  if (cart.length === 0) {
    showToast('Your cart is empty!', 'error', '⚠️');
    return;
  }
  // Close cart
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';

  // Show modal
  const modal = document.getElementById('modalBackdrop');
  modal.classList.add('open');

  // Clear cart
  cart = [];
  saveCart();
  updateCartUI();
}

function closeModal() {
  document.getElementById('modalBackdrop').classList.remove('open');
}

/* ─── RESERVATION ────────────────────────────────────── */
function submitReservation(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.textContent = 'Booking…';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = '✓ Confirmed!';
    btn.style.background = '#4CAF50';
    showToast('Table reserved! Confirmation sent to your email.', 'success', '🎉');
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.disabled = false;
      e.target.reset();
    }, 3000);
  }, 1200);
}

/* ─── NEWSLETTER ─────────────────────────────────────── */
function subscribeNewsletter() {
  const input = document.getElementById('nlEmail');
  const email = input.value.trim();
  if (!email || !email.includes('@')) {
    showToast('Please enter a valid email address.', 'error', '⚠️');
    return;
  }
  showToast('You\'re subscribed! Exclusive offers coming your way.', 'success', '📬');
  input.value = '';
}

/* ─── TOAST ──────────────────────────────────────────── */
function showToast(msg, type = 'info', icon = 'ℹ️') {
  const wrap = document.getElementById('toastWrap');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${msg}</span>`;
  wrap.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    toast.style.transition = 'opacity .3s, transform .3s';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

/* ─── HELPERS ────────────────────────────────────────── */
function setTodayAsMinDate() {
  const dateInputs = document.querySelectorAll('input[type="date"]');
  const today = new Date().toISOString().split('T')[0];
  dateInputs.forEach(inp => inp.setAttribute('min', today));
}

// Close mobile nav on outside click
document.addEventListener('click', (e) => {
  const nav = document.getElementById('navLinks');
  const ham = document.getElementById('hamburger');
  if (nav.classList.contains('open') &&
      !nav.contains(e.target) &&
      !ham.contains(e.target)) {
    nav.classList.remove('open');
    ham.classList.remove('open');
  }
});

// Close modal on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    const sidebar = document.getElementById('cartSidebar');
    if (sidebar.classList.contains('open')) toggleCart();
  }
});
