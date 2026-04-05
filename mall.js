/* ===== mall.js — ליבת מערכת הקניון ===== */
'use strict';

// ===== DATA: מאגר חנויות לדוגמה =====
const STORES = [
  {
    id: 1, name: 'בית הבגד', category: 'clothing-men',
    street: 'רחוב רבי עקיבא 45', phone: '03-5551001',
    emoji: '🎩', bg: '#e8eef8',
    tags: ['בגדי שבת', 'חליפות', 'גברים'],
    rating: 5, reviews: 48,
    desc: 'חנות ביגוד גברים ותיקה ומוכרת. חליפות לשבת, חולצות ומכנסיים בסגנון מסורתי.',
    products: [
      { id: 101, name: 'חליפה שחורה לשבת', price: 480, emoji: '🤵' },
      { id: 102, name: 'חולצה לבנה קלאסית', price: 95, emoji: '👕' },
      { id: 103, name: 'מכנסיים כהים', price: 160, emoji: '👖' },
    ]
  },
  {
    id: 2, name: 'יודאיקה שפירא', category: 'judaica',
    street: 'רחוב חזון איש 12', phone: '03-5552002',
    emoji: '🕎', bg: '#f5f0e0',
    tags: ['מנורות', 'מזוזות', 'כלי שבת'],
    rating: 4, reviews: 31,
    desc: 'כלי קודש ויודאיקה איכותיים. ספרי תורה, מנורות חנוכה, מזוזות ועוד.',
    products: [
      { id: 201, name: 'חנוכיה כסף מעוצבת', price: 320, emoji: '🕎' },
      { id: 202, name: 'מזוזה עם קלף', price: 85, emoji: '📜' },
      { id: 203, name: 'גביע קידוש', price: 210, emoji: '🍷' },
    ]
  },
  {
    id: 3, name: 'צעצועי פרידמן', category: 'toys',
    street: 'שוק העיר, דוכן 7', phone: '03-5553003',
    emoji: '🧸', bg: '#e8f2ec',
    tags: ['לתינוקות', 'חינוכי', 'משחקים'],
    rating: 5, reviews: 62,
    desc: 'צעצועים חינוכיים ומשחקים לכל הגילאים. מבחר ענק של משחקי לוח, פאזלים ועוד.',
    products: [
      { id: 301, name: 'פאזל עץ 50 חלקים', price: 65, emoji: '🧩' },
      { id: 302, name: 'משחק משפחה', price: 89, emoji: '🎲' },
      { id: 303, name: 'בובת ילד', price: 45, emoji: '🪆' },
    ]
  },
  {
    id: 4, name: 'ספרייה בלפור', category: 'books',
    street: 'רחוב בלפור 3', phone: '03-5554004',
    emoji: '📖', bg: '#f5f0e8',
    tags: ['ספרי קודש', 'ילדים', 'לימוד'],
    rating: 4, reviews: 27,
    desc: 'ספרי קודש, ספרות ילדים ועזרי לימוד. מבחר רחב לכל הגילאים.',
    products: [
      { id: 401, name: 'שבת שלום — ספר לילדים', price: 42, emoji: '📚' },
      { id: 402, name: 'הגדה של פסח מאויירת', price: 78, emoji: '📖' },
      { id: 403, name: 'סידור לילדים', price: 35, emoji: '🙏' },
    ]
  },
  {
    id: 5, name: 'מודה ושמחה', category: 'clothing-women',
    street: 'רחוב רבי עקיבא 78', phone: '03-5555005',
    emoji: '👒', bg: '#f5e8ec',
    tags: ['נשים', 'כיסויי ראש', 'צנוע'],
    rating: 5, reviews: 94,
    desc: 'ביגוד נשים צנוע ואופנתי. כיסויי ראש, שמלות לשבת, חצאיות ועוד.',
    products: [
      { id: 501, name: 'מטפחת משי', price: 120, emoji: '🧣' },
      { id: 502, name: 'שמלת שבת', price: 295, emoji: '👗' },
      { id: 503, name: 'חצאית מידי פרחים', price: 165, emoji: '🌸' },
    ]
  },
  {
    id: 6, name: 'הבית שלנו', category: 'home',
    street: 'רחוב חזון איש 33', phone: '03-5556006',
    emoji: '🏡', bg: '#ede8f5',
    tags: ['כלי בית', 'מטבח', 'עיצוב'],
    rating: 4, reviews: 39,
    desc: 'כלי בית ועיצוב לבית יהודי. מוצרי מטבח, שמחת בית ועוד.',
    products: [
      { id: 601, name: 'סט כלים לשבת', price: 340, emoji: '🍽️' },
      { id: 602, name: 'מפת שבת', price: 89, emoji: '🏠' },
      { id: 603, name: 'פמוטי שבת', price: 195, emoji: '🕯️' },
    ]
  },
  {
    id: 7, name: 'מאפיית אשכנזי', category: 'food',
    street: 'שוק העיר, דוכן 2', phone: '03-5557007',
    emoji: '🍞', bg: '#fff3e0',
    tags: ['חלה', 'עוגות', 'כשר למהדרין'],
    rating: 5, reviews: 118,
    desc: 'מאפייה מסורתית. חלות שישי, עוגות לשבת, קוגל ועוגות מיוחדות לחגים.',
    products: [
      { id: 701, name: 'חלה שישי גדולה', price: 28, emoji: '🍞' },
      { id: 702, name: 'קוגל ירושלמי', price: 45, emoji: '🥘' },
      { id: 703, name: 'עוגת שמרים', price: 65, emoji: '🎂' },
    ]
  },
  {
    id: 8, name: 'תכשיטי בן-דוד', category: 'jewelry',
    street: 'רחוב ז\'בוטינסקי 5', phone: '03-5558008',
    emoji: '💍', bg: '#fce4ec',
    tags: ['מתנות', 'זהב', 'נישואין'],
    rating: 4, reviews: 22,
    desc: 'תכשיטים ומתנות לאירועים. טבעות, שרשראות, צמידים ועוד.',
    products: [
      { id: 801, name: 'שרשרת כסף עם מגן דוד', price: 195, emoji: '✡️' },
      { id: 802, name: 'צמיד זהב 14K', price: 480, emoji: '💛' },
      { id: 803, name: 'עגיל פנינה', price: 145, emoji: '💎' },
    ]
  }
];

// ===== CART =====
const CART_KEY = 'bbmall_cart';

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartUI();
}

function addToCart(storeId, productId) {
  if (isShabbatNow()) { showToast('האתר סגור בשבת 🕯️'); return; }
  const store = STORES.find(s => s.id === storeId);
  const product = store?.products.find(p => p.id === productId);
  if (!store || !product) return;

  const cart = getCart();
  const existing = cart.find(i => i.productId === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      storeId, storeName: store.name,
      productId, productName: product.name,
      price: product.price, emoji: product.emoji,
      qty: 1
    });
  }
  saveCart(cart);
  showToast(`✓ ${product.name} נוסף לסל`);
}

function removeFromCart(productId) {
  const cart = getCart().filter(i => i.productId !== productId);
  saveCart(cart);
}

function updateQty(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.productId === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) return removeFromCart(productId);
  saveCart(cart);
}

function cartTotal() {
  return getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
}

function cartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function updateCartUI() {
  const count = cartCount();
  document.querySelectorAll('.cart-badge').forEach(el => el.textContent = count);
  document.querySelectorAll('.cart-total-amount').forEach(el =>
    el.textContent = '₪ ' + cartTotal().toLocaleString('he-IL')
  );
}

// ===== SHABBAT =====
let shabbatData = null;

async function fetchShabbatTimes() {
  try {
    const r = await fetch(
      'https://www.hebcal.com/shabbat?cfg=json&geonameid=294801&M=on&a=on'
    );
    const data = await r.json();
    const candles  = data.items.find(i => i.category === 'candles');
    const havdalah = data.items.find(i => i.category === 'havdalah');
    if (candles && havdalah) {
      shabbatData = { start: new Date(candles.date), end: new Date(havdalah.date) };
    }
  } catch (e) {
    // fallback: use Friday 18:00 – Saturday 20:00 as estimate
    const now = new Date();
    const day = now.getDay(); // 6=Sat, 5=Fri
    const friday = new Date(now);
    friday.setDate(now.getDate() + ((5 - day + 7) % 7));
    friday.setHours(18, 0, 0, 0);
    const saturday = new Date(friday);
    saturday.setDate(friday.getDate() + 1);
    saturday.setHours(20, 0, 0, 0);
    shabbatData = { start: friday, end: saturday };
  }
  return shabbatData;
}

function isShabbatNow() {
  if (!shabbatData) return false;
  const now = new Date();
  return now >= shabbatData.start && now <= shabbatData.end;
}

function formatTime(date) {
  return date.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' });
}

function applyShabbatState() {
  const closed = isShabbatNow();
  const bar = document.getElementById('shabbat-bar');
  const overlay = document.getElementById('shabbat-overlay');
  const dot = document.getElementById('shabbat-dot');

  if (bar) {
    if (closed) {
      bar.classList.add('closed');
      dot?.classList.add('red');
      dot?.classList.remove('green');
      document.getElementById('shabbat-msg').textContent = 'האתר סגור כעת לרכישות — שבת שלום';
      if (shabbatData) document.getElementById('shabbat-time').textContent =
        'האתר יפתח מחדש בשעה ' + formatTime(shabbatData.end);
    } else if (shabbatData) {
      const hoursLeft = (shabbatData.start - new Date()) / 3600000;
      let msg = 'האתר פעיל';
      let timeStr = '';
      if (hoursLeft > 0 && hoursLeft < 3) {
        msg = `⚠️ כניסת שבת בעוד ${Math.ceil(hoursLeft * 60)} דקות`;
        timeStr = ' — בשעה ' + formatTime(shabbatData.start);
      } else if (hoursLeft > 0) {
        msg = 'האתר פעיל';
        timeStr = ' · כניסת שבת בשעה ' + formatTime(shabbatData.start);
      }
      const msgEl = document.getElementById('shabbat-msg');
      const timeEl = document.getElementById('shabbat-time');
      if (msgEl) msgEl.textContent = msg;
      if (timeEl) timeEl.textContent = timeStr;
    }
  }

  if (overlay) overlay.classList.toggle('show', closed);

  // disable buy buttons
  document.querySelectorAll('.btn-buy, .btn-checkout').forEach(btn => {
    btn.disabled = closed;
    if (closed) btn.title = 'האתר סגור בשבת';
  });
}

// ===== TOAST =====
function showToast(msg) {
  let el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2800);
}

// ===== SEARCH =====
function filterStores(query, category) {
  return STORES.filter(s => {
    const matchCat = !category || category === 'all' || s.category === category;
    const matchQ = !query || query.trim() === '' ||
      s.name.includes(query) || s.tags.some(t => t.includes(query)) ||
      s.desc.includes(query);
    return matchCat && matchQ;
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', async () => {
  await fetchShabbatTimes();
  applyShabbatState();
  setInterval(applyShabbatState, 60 * 1000);
  updateCartUI();
});
