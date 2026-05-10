/* ═══════════════════════════════════════════════════════
   GOURMET HAVEN — main.js
   Full SPA: Main → Dish Detail → Checkout
   ═══════════════════════════════════════════════════════ */

/* ─── DISH DATA ──────────────────────────────────────── */
const dishes = [
  {
    id: 1, name: "Classic Chicken Burger", cat: "burger", price: 250, popular: true,
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85&auto=format&fit=crop",
    desc: "Juicy grilled chicken, crisp lettuce, fresh tomatoes, and our signature herb mayo on a toasted brioche bun.",
    fullDesc: "Our Classic Chicken Burger is a testament to the beauty of simplicity done right. We start with a free-range chicken breast, marinated for 12 hours in our house blend of herbs and spices, then flame-grilled to perfection. Placed on a lightly toasted brioche bun with crisp iceberg lettuce, ripe vine tomatoes, and our legendary herb-infused aioli, every single bite delivers an explosion of flavour. This is not just a burger — it's a commitment to quality.",
    ingredients: ["Free-range chicken breast", "Brioche bun", "Iceberg lettuce", "Vine tomatoes", "Herb aioli", "Cheddar cheese", "Pickled cucumber", "Red onion", "Dijon mustard", "Smoked paprika"],
    prep: "15–20 min", cal: "520 kcal",
    nutrition: { protein: "38g", carbs: "42g", fat: "18g", fiber: "3g", sodium: "890mg", sugar: "8g" }
  },
  {
    id: 2, name: "Beef Pizza Supreme", cat: "pizza", price: 500, popular: true,
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=85&auto=format&fit=crop",
    desc: "Slow-braised beef, caramelised onions, roasted peppers, and three-cheese blend on our stone-baked base.",
    fullDesc: "The Beef Pizza Supreme is our flagship creation, representing the pinnacle of our culinary craft. Tender slow-braised premium beef is layered over a rich house tomato sauce on our hand-stretched, stone-baked base. Caramelised onions add a natural sweetness, while the trio of mozzarella, gruyère, and aged parmesan creates a glorious, stretchy cheese pull. Finished with roasted bell peppers and fresh rocket, this is the pizza that has earned us our 4.9-star reputation.",
    ingredients: ["Premium beef brisket", "Stone-baked pizza dough", "San Marzano tomatoes", "Mozzarella", "Gruyère", "Aged parmesan", "Caramelised onions", "Roasted peppers", "Fresh rocket", "Olive oil", "Fresh basil"],
    prep: "20–25 min", cal: "780 kcal",
    nutrition: { protein: "42g", carbs: "68g", fat: "28g", fiber: "4g", sodium: "1240mg", sugar: "12g" }
  },
  {
    id: 3, name: "Margherita Pizza", cat: "pizza", price: 400, popular: false,
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=85&auto=format&fit=crop",
    desc: "Classic San Marzano tomato sauce, fresh mozzarella, fragrant basil, and a drizzle of extra virgin olive oil.",
    fullDesc: "Sometimes the most iconic dishes are also the simplest. Our Margherita Pizza celebrates the Holy Trinity of Italian pizza-making: San Marzano tomatoes slow-cooked into a vibrant, tangy sauce; genuine buffalo mozzarella flown in weekly; and the most fragrant fresh basil you have ever tasted. Stone-baked in our 400°C wood-fired oven for exactly 90 seconds, the crust develops a beautiful char while remaining soft and airy inside. Finished with a generous pour of cold-pressed extra virgin olive oil.",
    ingredients: ["San Marzano tomatoes", "Buffalo mozzarella", "Fresh basil", "Extra virgin olive oil", "Sea salt", "Pizza dough (00 flour)", "Garlic"],
    prep: "18–22 min", cal: "620 kcal",
    nutrition: { protein: "28g", carbs: "72g", fat: "22g", fiber: "3g", sodium: "980mg", sugar: "10g" }
  },
  {
    id: 4, name: "Double Cheese Burger", cat: "burger", price: 300, popular: true,
    img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=85&auto=format&fit=crop",
    desc: "Two smash-style beef patties, double cheddar, house pickles, special sauce and shredded lettuce.",
    fullDesc: "This is the burger that true beef lovers dream about. Two smashed 100-gram wagyu beef patties are pressed onto a scorching flat-top griddle, creating a beautiful, deeply-caramelised crust while keeping the interior incredibly juicy. Double-stacked with aged cheddar melted directly onto each patty, our secret house sauce (a recipe we will never reveal), shredded iceberg, house-made dill pickles, and white onion. All of this is cradled in a potato brioche bun, toasted to golden perfection.",
    ingredients: ["Wagyu beef patties (2×100g)", "Aged cheddar (double)", "Potato brioche bun", "House secret sauce", "Shredded iceberg", "Dill pickles", "White onion", "Yellow mustard"],
    prep: "15–20 min", cal: "720 kcal",
    nutrition: { protein: "52g", carbs: "38g", fat: "38g", fiber: "2g", sodium: "1100mg", sugar: "9g" }
  },
  {
    id: 5, name: "Grilled Veggie Burger", cat: "burger", price: 220, popular: false,
    img: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=800&q=85&auto=format&fit=crop",
    desc: "Smoky black bean and quinoa patty, avocado spread, roasted red pepper, and micro greens.",
    fullDesc: "Proof that plant-based eating can be every bit as exciting as its carnivore counterpart. Our Grilled Veggie Burger is built around a house-made patty of black beans, red quinoa, roasted sweet potato, and oats — seasoned with cumin, smoked paprika, and fresh coriander. Charred on a grill for a beautiful smokiness, then layered with silky avocado spread, fire-roasted red pepper, crisp micro greens, and a tangy chipotle yoghurt. A full-flavour experience that just happens to be vegetarian.",
    ingredients: ["Black beans", "Red quinoa", "Roasted sweet potato", "Rolled oats", "Avocado", "Micro greens", "Fire-roasted red pepper", "Chipotle yoghurt", "Smoked paprika", "Fresh coriander", "Sesame bun"],
    prep: "12–18 min", cal: "420 kcal",
    nutrition: { protein: "18g", carbs: "52g", fat: "16g", fiber: "9g", sodium: "680mg", sugar: "7g" }
  },
  {
    id: 6, name: "Spicy Pepperoni Pizza", cat: "pizza", price: 480, popular: true,
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=85&auto=format&fit=crop",
    desc: "Premium pepperoni, jalapeños, chilli-infused tomato sauce, and stretchy mozzarella on a crispy crust.",
    fullDesc: "For those who want their pizza to fight back. We begin with our signature chilli-infused tomato sauce — simmered with fresh bird's eye chillies and smoked paprika — then lay on an almost criminally generous amount of premium Italian pepperoni. Fresh jalapeño slices bring a bright, green heat, while our stretched mozzarella provides the creamy counterbalance. A final drizzle of chilli-infused honey after baking creates the ultimate sweet-heat finish. Rated 🔥🔥🔥 by our regulars.",
    ingredients: ["Italian pepperoni", "Fresh jalapeños", "Chilli-infused tomato sauce", "Mozzarella", "Chilli honey drizzle", "Smoked paprika", "Red onion", "Pizza dough", "Fresh parsley"],
    prep: "20–25 min", cal: "850 kcal",
    nutrition: { protein: "36g", carbs: "74g", fat: "34g", fiber: "3g", sodium: "1480mg", sugar: "11g" }
  },
  {
    id: 7, name: "Crispy Calamari", cat: "appetizers", price: 180, popular: false,
    img: "https://images.unsplash.com/photo-1599021419847-d8a7a6aba5b4?w=800&q=85&auto=format&fit=crop",
    desc: "Tender rings of squid in a light, crunchy coating. Served with lemon aioli and fresh chilli.",
    fullDesc: "Our Crispy Calamari is a masterclass in texture. Fresh squid is cleaned and cut into rings, then soaked in seasoned buttermilk before being coated in our proprietary blend of semolina and spiced flour. Flash-fried at exactly 180°C for 2 minutes, they emerge perfectly golden and audibly crunchy on the outside, while remaining irresistibly tender within. Served with a house-made lemon and garlic aioli and fresh chilli slices, it's the perfect opener for any meal.",
    ingredients: ["Fresh whole squid", "Semolina", "Spiced flour blend", "Buttermilk", "Garlic aioli", "Fresh lemon", "Red chilli", "Flat-leaf parsley"],
    prep: "10–15 min", cal: "320 kcal",
    nutrition: { protein: "22g", carbs: "28g", fat: "12g", fiber: "1g", sodium: "620mg", sugar: "2g" }
  },
  {
    id: 8, name: "Mango Lassi", cat: "drinks", price: 120, popular: false,
    img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=85&auto=format&fit=crop",
    desc: "Creamy blended Alphonso mangoes with chilled yoghurt, a hint of cardamom, and fresh mint.",
    fullDesc: "The Mango Lassi is our most-loved beverage, and once you try it you will understand why. We import Alphonso mangoes — known as the King of Mangoes — directly from Maharashtra during peak season, then blend them with thick, full-fat yoghurt, raw honey, a pinch of green cardamom, and a drop of rose water. Served ice-cold in a chilled glass, garnished with a sprig of fresh mint and a dusting of cardamom powder. It's cool, creamy, tropical, and utterly impossible to put down.",
    ingredients: ["Alphonso mango pulp", "Full-fat yoghurt", "Raw honey", "Green cardamom", "Rose water", "Fresh mint", "Ice"],
    prep: "5 min", cal: "185 kcal",
    nutrition: { protein: "6g", carbs: "32g", fat: "4g", fiber: "1g", sodium: "80mg", sugar: "28g" }
  },
  {
    id: 9, name: "Chocolate Lava Cake", cat: "desserts", price: 200, popular: true,
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=85&auto=format&fit=crop",
    desc: "Warm dark chocolate fondant with a molten centre. Served with vanilla bean ice cream.",
    fullDesc: "There is a theatre to our Chocolate Lava Cake that never gets old. Crafted from 72% Valrhona dark chocolate, our fondant is set to achieve a perfectly firm, cake-like exterior while hiding a devastatingly rich, liquid chocolate interior. As soon as you break through the crust with your spoon, the molten chocolate lava flows out — warm, silky, and intensely chocolatey. Served alongside a quenelle of hand-churned Madagascar vanilla bean ice cream, whose cold creaminess is the perfect counterpoint.",
    ingredients: ["72% Valrhona dark chocolate", "Unsalted butter", "Free-range eggs", "Caster sugar", "Plain flour", "Madagascan vanilla bean ice cream", "Cocoa powder", "Icing sugar"],
    prep: "12–15 min", cal: "480 kcal",
    nutrition: { protein: "8g", carbs: "56g", fat: "24g", fiber: "3g", sodium: "180mg", sugar: "42g" }
  },
  {
    id: 10, name: "Garden Fresh Salad", cat: "salads", price: 160, popular: false,
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=85&auto=format&fit=crop",
    desc: "Mixed greens, heirloom cherry tomatoes, cucumber, radish, and a zesty lemon-herb dressing.",
    fullDesc: "Our Garden Fresh Salad is a vibrant celebration of the season's finest produce. A generous bed of mixed baby greens — rocket, spinach, and watercress — is topped with heirloom cherry tomatoes in three colours, thin-sliced Persian cucumber, crisp French radishes, and shaved fennel. The house lemon-herb vinaigrette — made with cold-pressed olive oil, fresh lemon juice, Dijon mustard, and a generous handful of mixed fresh herbs — is drizzled over at the last moment to keep every leaf perfectly dressed. Light, beautiful, and genuinely satisfying.",
    ingredients: ["Baby mixed greens", "Heirloom cherry tomatoes", "Persian cucumber", "French radish", "Shaved fennel", "Cold-pressed olive oil", "Fresh lemon juice", "Dijon mustard", "Mixed fresh herbs", "Sea salt"],
    prep: "8 min", cal: "180 kcal",
    nutrition: { protein: "4g", carbs: "18g", fat: "10g", fiber: "4g", sodium: "280mg", sugar: "8g" }
  },
  {
    id: 11, name: "Loaded Fries", cat: "sides", price: 150, popular: true,
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=85&auto=format&fit=crop",
    desc: "Double-fried golden fries loaded with melted cheese sauce, crispy bacon bits, and sour cream.",
    fullDesc: "Our Loaded Fries are not a side dish — they are a destination. We begin with thick-cut Maris Piper potatoes, blanched and then double-fried for a fry that is shattering-crispy outside and fluffy within. These golden beauties are then absolutely buried under our three-cheese sauce (aged cheddar, gouda, and cream cheese), crispy smoked bacon lardons, cool sour cream, sliced spring onions, and a generous scattering of fresh chives. Eat them while they're hot.",
    ingredients: ["Maris Piper potatoes", "Three-cheese sauce (cheddar, gouda, cream cheese)", "Smoked bacon lardons", "Sour cream", "Spring onions", "Fresh chives", "Sea salt", "Sunflower oil"],
    prep: "10 min", cal: "550 kcal",
    nutrition: { protein: "16g", carbs: "58g", fat: "28g", fiber: "4g", sodium: "920mg", sugar: "4g" }
  },
  {
    id: 12, name: "BBQ Chicken Wings", cat: "appetizers", price: 280, popular: true,
    img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&q=85&auto=format&fit=crop",
    desc: "Smoky, tender wings glazed in our house BBQ sauce. Served with blue cheese dip and celery.",
    fullDesc: "Our BBQ Chicken Wings have developed something of a cult following, and with good reason. We source large, free-range chicken wings, then dry-rub them with a blend of smoked paprika, garlic powder, cayenne, and brown sugar before slow-cooking them at low temperature for three hours until fall-off-the-bone tender. They're then finished on the grill with our house BBQ sauce — smoky, tangy, and with just enough sweetness. Served with a creamy, tangy blue cheese dipping sauce and fresh celery sticks to cut through the richness.",
    ingredients: ["Free-range chicken wings", "Smoked paprika", "Garlic powder", "Cayenne pepper", "Brown sugar", "House BBQ sauce (secret recipe)", "Blue cheese dip", "Celery sticks", "Butter"],
    prep: "20–25 min", cal: "620 kcal",
    nutrition: { protein: "46g", carbs: "24g", fat: "36g", fiber: "1g", sodium: "1080mg", sugar: "18g" }
  }
];

/* ─── STATE ─────────────────────────────────────────── */
let cart = JSON.parse(localStorage.getItem('gh_cart') || '[]');
let activeTab = 'all';
let searchQuery = '';
let currentDishId = null;
let detailQty = 1;
let currentPage = 'main';
let promoApplied = false;
let promoDiscount = 0;

/* ─── INIT ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderDishes();
  updateCartUI();
  initNavScroll();
  initNavLinks();
  initAnimations();
  setTodayAsMinDate();
  handleHashRoute();
  window.addEventListener('popstate', handleHashRoute);
});

/* ─── HASH ROUTING ───────────────────────────────────── */
function handleHashRoute() {
  const hash = window.location.hash;
  if (hash.startsWith('#dish-')) {
    const id = parseInt(hash.replace('#dish-', ''));
    if (!isNaN(id)) { openDish(id, false); return; }
  }
  if (hash === '#checkout') { goToCheckout(false); return; }
  showPage('main', false);
}

/* ─── PAGE NAVIGATION ────────────────────────────────── */
function showPage(page, pushState = true) {
  document.getElementById('pageMain').style.display     = page === 'main'     ? '' : 'none';
  document.getElementById('pageDish').style.display     = page === 'dish'     ? '' : 'none';
  document.getElementById('pageCheckout').style.display = page === 'checkout' ? '' : 'none';
  currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (pushState) {
    const hash = page === 'main' ? '' : page === 'checkout' ? '#checkout' : `#dish-${currentDishId}`;
    history.pushState({ page }, '', hash || window.location.pathname);
  }
}

/* ─── DISH DETAIL ────────────────────────────────────── */
function openDish(id, pushState = true) {
  const dish = dishes.find(d => d.id === id);
  if (!dish) return;

  currentDishId = id;
  detailQty = 1;

  // Populate
  document.getElementById('dishDetailImg').src = dish.img;
  document.getElementById('dishDetailImg').alt = dish.name;
  document.getElementById('dishDetailName').textContent = dish.name;
  document.getElementById('dishDetailPrice').textContent = `৳${dish.price}`;
  document.getElementById('dishDetailPrep').textContent = dish.prep;
  document.getElementById('dishDetailCal').textContent = dish.cal;
  document.getElementById('dishDetailDesc').textContent = dish.desc;
  document.getElementById('dishFullDesc').textContent = dish.fullDesc;
  document.getElementById('dishBreadcrumb').textContent = `Home / Menu / ${dish.name}`;
  document.getElementById('detailQty').textContent = detailQty;
  updateDetailSubtotal(dish);

  // Category badge
  const catBadge = document.getElementById('dishDetailCat');
  catBadge.textContent = capitalise(dish.cat);
  catBadge.className = 'detail-cat-badge';

  // Popular badge
  const badges = document.getElementById('dishDetailBadges');
  badges.innerHTML = dish.popular ? '<span class="dish-badge badge-popular">⭐ Popular</span>' : '';

  // Ingredients
  document.getElementById('dishIngredients').innerHTML =
    dish.ingredients.map(i => `<div class="ingr-pill"><span>🌿</span>${i}</div>`).join('');

  // Nutrition
  const n = dish.nutrition;
  document.getElementById('dishNutrition').innerHTML = `
    <div class="nutr-item"><span class="nutr-val">${n.protein}</span><span class="nutr-key">Protein</span></div>
    <div class="nutr-item"><span class="nutr-val">${n.carbs}</span><span class="nutr-key">Carbs</span></div>
    <div class="nutr-item"><span class="nutr-val">${n.fat}</span><span class="nutr-key">Fat</span></div>
    <div class="nutr-item"><span class="nutr-val">${n.fiber}</span><span class="nutr-key">Fibre</span></div>
    <div class="nutr-item"><span class="nutr-val">${n.sodium}</span><span class="nutr-key">Sodium</span></div>
    <div class="nutr-item"><span class="nutr-val">${n.sugar}</span><span class="nutr-key">Sugar</span></div>
  `;

  // Related dishes (same category, max 3)
  const related = dishes.filter(d => d.cat === dish.cat && d.id !== id).slice(0, 3);
  document.getElementById('relatedGrid').innerHTML = related.length
    ? related.map(d => buildDishCard(d)).join('')
    : '<p style="color:var(--text-muted);text-align:center;grid-column:1/-1;padding:20px">No related items found.</p>';

  // Reset tabs
  document.querySelectorAll('.dtab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.dtab')[0].classList.add('active');
  document.getElementById('dtab-desc').style.display = '';
  document.getElementById('dtab-ingr').style.display = 'none';
  document.getElementById('dtab-nutr').style.display = 'none';

  if (pushState) {
    history.pushState({ page: 'dish', id }, '', `#dish-${id}`);
  }
  showPage('dish', false);
}

function closeDish() {
  showPage('main');
  setTimeout(() => scrollToSection('menu'), 100);
}

function changeDetailQty(delta) {
  detailQty = Math.max(1, detailQty + delta);
  document.getElementById('detailQty').textContent = detailQty;
  const dish = dishes.find(d => d.id === currentDishId);
  if (dish) updateDetailSubtotal(dish);
}

function updateDetailSubtotal(dish) {
  document.getElementById('detailSubtotal').textContent = `Subtotal: ৳${dish.price * detailQty}`;
}

function addDetailToCart() {
  const dish = dishes.find(d => d.id === currentDishId);
  if (!dish) return;
  for (let i = 0; i < detailQty; i++) {
    const existing = cart.find(c => c.id === dish.id);
    if (existing) { existing.qty++; }
    else { cart.push({ ...dish, qty: 1 }); }
  }
  saveCart();
  updateCartUI();
  showToast(`${detailQty}× ${dish.name} added to cart`, 'success', '🛒');
  detailQty = 1;
  document.getElementById('detailQty').textContent = 1;
  updateDetailSubtotal(dish);
  setTimeout(() => openCart(), 400);
}

function switchDetailTab(btn, tabId) {
  document.querySelectorAll('.dtab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  ['dtab-desc','dtab-ingr','dtab-nutr'].forEach(id => {
    document.getElementById(id).style.display = id === tabId ? '' : 'none';
  });
}

/* ─── CHECKOUT ───────────────────────────────────────── */
function goToCheckout(pushState = true) {
  if (cart.length === 0) {
    showToast('Add some dishes to your cart first!', 'error', '⚠️');
    return;
  }
  // Close cart sidebar
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';

  renderCheckout();
  if (pushState) {
    history.pushState({ page: 'checkout' }, '', '#checkout');
  }
  showPage('checkout', false);
}

function closeCheckout() {
  showPage('main');
}

function renderCheckout() {
  promoApplied = false;
  promoDiscount = 0;
  document.getElementById('promoInput').value = '';
  document.getElementById('promoMsg').textContent = '';
  document.getElementById('coDiscountRow').style.display = 'none';

  const list = document.getElementById('checkoutItems');
  list.innerHTML = cart.map(item => `
    <div class="checkout-item">
      <img src="${item.img}" alt="${item.name}" class="co-item-img" />
      <div class="co-item-info">
        <div class="co-item-name">${item.name}</div>
        <div class="co-item-price">৳${item.price} each</div>
        <div class="co-item-qty">
          <button class="qty-btn" onclick="coChangeQty(${item.id},-1)">−</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="coChangeQty(${item.id},1)">+</button>
          <button class="co-remove" onclick="coRemove(${item.id})">Remove</button>
        </div>
      </div>
      <div class="co-item-total">৳${item.price * item.qty}</div>
    </div>
  `).join('');

  updateCheckoutTotals();
}

function updateCheckoutTotals() {
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const total = subtotal - promoDiscount + (subtotal > 0 ? 50 : 0);
  document.getElementById('coSubtotal').textContent = `৳${subtotal}`;
  document.getElementById('coTotal').textContent = `৳${total}`;
  document.getElementById('coOrderTotal').textContent = `৳${total}`;
  // also update cart sidebar totals
  document.getElementById('cartSubtotal').textContent = `৳${subtotal}`;
  document.getElementById('cartTotal').textContent = `৳${subtotal + (subtotal > 0 ? 50 : 0)}`;
}

function coChangeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { cart = cart.filter(c => c.id !== id); }
  saveCart();
  updateCartUI();
  renderCheckout();
}

function coRemove(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
  if (cart.length === 0) { closeCheckout(); return; }
  renderCheckout();
}

function applyPromo() {
  const code = document.getElementById('promoInput').value.trim().toUpperCase();
  const msgEl = document.getElementById('promoMsg');
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);

  if (promoApplied) { msgEl.textContent = 'A promo code is already applied.'; msgEl.style.color = 'var(--text-muted)'; return; }
  if (code === 'GOURMET20') {
    if (subtotal < 500) { msgEl.textContent = 'Minimum order ৳500 required for GOURMET20.'; msgEl.style.color = '#e53e3e'; return; }
    promoDiscount = Math.round(subtotal * 0.20);
    promoApplied = true;
    document.getElementById('coDiscountRow').style.display = '';
    document.getElementById('coDiscountLabel').textContent = '20% Promo (GOURMET20)';
    document.getElementById('coDiscount').textContent = `−৳${promoDiscount}`;
    msgEl.textContent = '🎉 Promo code applied! 20% discount added.';
    msgEl.style.color = '#4CAF50';
    updateCheckoutTotals();
  } else {
    msgEl.textContent = 'Invalid promo code. Try GOURMET20 for 20% off.';
    msgEl.style.color = '#e53e3e';
  }
}

function selectPayMethod(method) {
  document.querySelectorAll('.pay-method').forEach(m => m.classList.remove('active'));
  document.getElementById(`pm-${method}`).classList.add('active');
  document.getElementById('cardFields').style.display  = method === 'card'  ? '' : 'none';
  document.getElementById('bkashFields').style.display = method === 'bkash' ? '' : 'none';
}

function formatCard(input) {
  let v = input.value.replace(/\D/g,'').substring(0,16);
  input.value = v.replace(/(.{4})/g,'$1 ').trim();
}

function placeCheckoutOrder() {
  const name    = document.getElementById('coName').value.trim();
  const phone   = document.getElementById('coPhone').value.trim();
  const email   = document.getElementById('coEmail').value.trim();
  const address = document.getElementById('coAddress').value.trim();

  if (!name || !phone || !email || !address) {
    showToast('Please fill in all required delivery fields.', 'error', '⚠️');
    return;
  }
  if (!email.includes('@')) { showToast('Please enter a valid email address.', 'error', '⚠️'); return; }

  const total = document.getElementById('coOrderTotal').textContent;
  showModal('Order Confirmed! 🎉', `Your order (${total}) has been placed and will arrive in <strong>15–20 minutes</strong>.`, 'Confirmation sent to ' + email);

  cart = [];
  saveCart();
  updateCartUI();
  promoApplied = false;
  promoDiscount = 0;

  setTimeout(() => { closeModal(); showPage('main'); }, 200);
}

/* ─── NAVBAR ─────────────────────────────────────────── */
function initNavScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
}

function initNavLinks() {
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    if (currentPage !== 'main') return;
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute('id');
    });
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });
  links.forEach(link => link.addEventListener('click', closeMobileMenu));
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}
function closeMobileMenu() {
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
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
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('[data-anim]').forEach(el => observer.observe(el));
}

/* ─── DISHES ─────────────────────────────────────────── */
function renderDishes() {
  const grid = document.getElementById('dishGrid');
  if (!grid) return;
  let filtered = dishes.filter(d => {
    const matchCat = activeTab === 'all' || d.cat === activeTab;
    const matchSearch = !searchQuery ||
      d.name.toLowerCase().includes(searchQuery) ||
      d.cat.toLowerCase().includes(searchQuery) ||
      d.desc.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  grid.innerHTML = filtered.length
    ? filtered.map(d => buildDishCard(d)).join('')
    : `<div class="no-results"><span>🍽</span><p>No dishes found</p><small>Try a different category or search term</small></div>`;
}

function buildDishCard(d) {
  return `
  <div class="dish-card" onclick="openDish(${d.id})" style="cursor:pointer" role="button" tabindex="0" onkeypress="if(event.key==='Enter')openDish(${d.id})">
    <div class="dish-img-wrap">
      <img src="${d.img}" alt="${d.name}" loading="lazy" />
      <div class="dish-badges">
        ${d.popular ? '<span class="dish-badge badge-popular">⭐ Popular</span>' : ''}
        <span class="dish-badge badge-cat">${capitalise(d.cat)}</span>
      </div>
      <div class="dish-hover-overlay">
        <span>View Details</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
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
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/></svg>
          ${d.cal}
        </div>
      </div>
      <div class="dish-footer">
        <div class="dish-price">৳${d.price}<span class="dish-price-sub"> / serving</span></div>
        <button class="btn-add" onclick="event.stopPropagation(); addToCart(${d.id})">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add
        </button>
      </div>
    </div>
  </div>`;
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
  if (existing) { existing.qty++; } else { cart.push({ ...dish, qty: 1 }); }
  saveCart();
  updateCartUI();
  showToast(`${dish.name} added to cart`, 'success', '🛒');
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
  if (item.qty <= 0) { removeFromCart(id); return; }
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
  const count    = cart.reduce((s, c) => s + c.qty, 0);
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const total    = subtotal + (subtotal > 0 ? 50 : 0);

  const badge = document.getElementById('cartCount');
  badge.textContent = count;
  badge.style.transform = count > 0 ? 'scale(1.25)' : 'scale(1)';
  setTimeout(() => badge.style.transform = 'scale(1)', 250);

  document.getElementById('cartSubtotal').textContent = `৳${subtotal}`;
  document.getElementById('cartTotal').textContent = `৳${total}`;

  const listEl   = document.getElementById('cartList');
  const emptyEl  = document.getElementById('cartEmpty');
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
  if (sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('open');
    document.body.style.overflow = '';
  } else { openCart(); }
}

function placeOrder() {
  if (cart.length === 0) { showToast('Your cart is empty!', 'error', '⚠️'); return; }
  goToCheckout();
}

/* ─── FORMS (Formspree) ──────────────────────────────── */
function handleFormSubmit(e, form) {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  const label = btn.querySelector('.btn-label');
  const loading = btn.querySelector('.btn-loading');
  btn.disabled = true;
  label.style.display = 'none';
  loading.style.display = '';

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  })
  .then(res => {
    if (res.ok) {
      showModal(
        form.id === 'reservationForm' ? '🎉 Reservation Confirmed!' : '✉️ Message Sent!',
        form.id === 'reservationForm'
          ? 'Your table has been reserved. A confirmation email is on its way!'
          : 'Thank you for reaching out. We\'ll reply within 2 hours.',
        'Please check your inbox (and spam folder).'
      );
      form.reset();
    } else {
      throw new Error('Form submission failed');
    }
  })
  .catch(() => {
    showToast('Something went wrong. Please try again.', 'error', '⚠️');
  })
  .finally(() => {
    btn.disabled = false;
    label.style.display = '';
    loading.style.display = 'none';
  });
}

/* ─── NEWSLETTER ─────────────────────────────────────── */
function subscribeNewsletter() {
  const input = document.getElementById('nlEmail');
  const email = input.value.trim();
  if (!email || !email.includes('@')) {
    showToast('Please enter a valid email address.', 'error', '⚠️');
    return;
  }
  showToast("You're subscribed! Exclusive offers coming your way.", 'success', '📬');
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
    setTimeout(() => toast.remove(), 350);
  }, 3400);
}

/* ─── MODAL ──────────────────────────────────────────── */
function showModal(title, body, note = '') {
  document.getElementById('modalTitle').innerHTML = title;
  document.getElementById('modalBody').innerHTML  = body;
  document.getElementById('modalNote').textContent = note;
  document.getElementById('modalBackdrop').classList.add('open');
}
function closeModal() {
  document.getElementById('modalBackdrop').classList.remove('open');
}

/* ─── HELPERS ────────────────────────────────────────── */
function setTodayAsMinDate() {
  const today = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"]').forEach(inp => inp.setAttribute('min', today));
}

// Close mobile nav on outside click
document.addEventListener('click', (e) => {
  const nav = document.getElementById('navLinks');
  const ham = document.getElementById('hamburger');
  if (nav.classList.contains('open') && !nav.contains(e.target) && !ham.contains(e.target)) {
    closeMobileMenu();
  }
});

// Keyboard: escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    const sidebar = document.getElementById('cartSidebar');
    if (sidebar.classList.contains('open')) toggleCart();
  }
});
