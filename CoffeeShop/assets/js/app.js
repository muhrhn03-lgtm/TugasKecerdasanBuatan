// ===== AUTH GUARD =====
const session = JSON.parse(localStorage.getItem('wn_session') || 'null');
if (!session) { window.location.href = 'login.html'; }

function logout() {
  localStorage.removeItem('wn_session');
  window.location.href = 'login.html';
}

// ===== DATA MENU (dari localStorage atau default) =====
function getMenuData() {
  const saved = localStorage.getItem('wn_menu');
  return saved ? JSON.parse(saved) : defaultMenuData;
}
function saveMenuData(data) {
  localStorage.setItem('wn_menu', JSON.stringify(data));
}

const defaultMenuData = [
  // MINUMAN (15 item)
  {
    id: 1, cat: "minuman", name: "Kopi Hitam Arabika",
    desc: "Kopi arabika pilihan, diseduh manual pour-over dengan aroma khas pegunungan.",
    price: 18000, badge: "Terlaris",
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400"
  },
  {
    id: 2, cat: "minuman", name: "Kopi Susu Gula Aren",
    desc: "Espresso double shot dengan susu segar dan lelehan gula aren asli.",
    price: 22000, badge: "Favorit",
    img: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400"
  },
  {
    id: 3, cat: "minuman", name: "Es Kopi Vietnam",
    desc: "Kopi robusta kental diseduh drip, disiram es dan susu kental manis.",
    price: 20000,
    img: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=400"
  },
  {
    id: 4, cat: "minuman", name: "Matcha Latte",
    desc: "Bubuk matcha premium asal Jepang dengan susu oat, creamy dan wangi.",
    price: 25000,
    img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400"
  },
  {
    id: 5, cat: "minuman", name: "Teh Tarik Spesial",
    desc: "Teh hitam strong ditarik dengan susu evaporasi, berbuih tebal.",
    price: 15000, badge: "Hemat",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400"
  },
  {
    id: 6, cat: "minuman", name: "Jus Alpukat Coklat",
    desc: "Alpukat Kalimantan segar diblender dengan susu coklat dan es serut.",
    price: 20000,
    img: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=400"
  },
  {
    id: 7, cat: "minuman", name: "Thai Tea Original",
    desc: "Teh Thailand asli dengan susu kental, berwarna oranye menggoda.",
    price: 18000,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"
  },
  {
    id: 8, cat: "minuman", name: "Coklat Panas Belgia",
    desc: "Coklat premium Belgia murni, creamy dan kaya rasa kakao.",
    price: 22000,
    img: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=400"
  },
  {
    id: 9, cat: "minuman", name: "Es Jeruk Peras",
    desc: "Jeruk lokal segar diperas langsung, manis alami tanpa pemanis buatan.",
    price: 12000, badge: "Segar",
    img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400"
  },
  {
    id: 10, cat: "minuman", name: "Cappuccino Classic",
    desc: "Espresso dengan milk foam tebal, ditaburkan bubuk kayu manis.",
    price: 24000,
    img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400"
  },
  {
    id: 11, cat: "minuman", name: "Smoothie Mangga Lassi",
    desc: "Mangga harum diblender dengan yogurt dan madu, menyegarkan.",
    price: 22000,
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400"
  },
  {
    id: 12, cat: "minuman", name: "Caramel Macchiato",
    desc: "Espresso dengan vanilla syrup, susu steam dan drizzle karamel.",
    price: 26000,
    img: "https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?w=400"
  },
  {
    id: 13, cat: "minuman", name: "Teh Lemon Mint",
    desc: "Teh hijau segar dengan irisan lemon dan daun mint dingin.",
    price: 14000,
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400"
  },
  {
    id: 14, cat: "minuman", name: "Red Velvet Latte",
    desc: "Minuman premium merah khas dengan cream cheese foam di atasnya.",
    price: 28000, badge: "Baru",
    img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400"
  },
  {
    id: 15, cat: "minuman", name: "Kopi Banjar Bajigur",
    desc: "Resep khas Kalimantan: kopi dengan santan, jahe, dan gula kelapa.",
    price: 16000, badge: "Khas",
    img: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=400"
  },

  // MAKANAN RINGAN (15 item)
  {
    id: 16, cat: "makanan", name: "Pisang Goreng Keju",
    desc: "Pisang kepok goreng crispy, ditopping keju leleh dan susu kental.",
    price: 14000, badge: "Terlaris",
    img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400"
  },
  {
    id: 17, cat: "makanan", name: "Roti Bakar Coklat Keju",
    desc: "Roti tebal dibakar sempurna, isi coklat batang dan keju mozzarella.",
    price: 16000,
    img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400"
  },
  {
    id: 18, cat: "makanan", name: "Cireng Bumbu Rujak",
    desc: "Cireng crispy renyah disajikan dengan saus rujak pedas manis.",
    price: 12000,
    img: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400"
  },
  {
    id: 19, cat: "makanan", name: "Singkong Keju Goreng",
    desc: "Singkong empuk digoreng krispi, ditaburi keju parut melimpah.",
    price: 13000,
    img: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=400"
  },
  {
    id: 20, cat: "makanan", name: "French Fries Pedas",
    desc: "Kentang goreng crispy dengan bumbu pedas BBQ dan saus mayo.",
    price: 18000,
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400"
  },
  {
    id: 21, cat: "makanan", name: "Onion Ring Crispy",
    desc: "Cincin bawang bombay dibalut tepung renyah, disajikan saus sambal.",
    price: 16000,
    img: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400"
  },
  {
    id: 22, cat: "makanan", name: "Tahu Walik Crispy",
    desc: "Tahu dibalik diisi adonan bumbu rempah, digoreng garing sempurna.",
    price: 12000, badge: "Lokal",
    img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400"
  },
  {
    id: 23, cat: "makanan", name: "Kentang Wedges BBQ",
    desc: "Kentang belah empat berbumbu BBQ smoky, dioven hingga keemasan.",
    price: 20000,
    img: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400"
  },
  {
    id: 24, cat: "makanan", name: "Lumpia Sayur Goreng",
    desc: "Lumpia isi sayuran segar dengan kulit renyah, cocok untuk camilan.",
    price: 10000,
    img: "https://images.unsplash.com/photo-1561626423-a51b45aef0a1?w=400"
  },
  {
    id: 25, cat: "makanan", name: "Nugget Keju Special",
    desc: "Nugget ayam isi keju leleh, crispy di luar lembut di dalam.",
    price: 18000,
    img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400"
  },
  {
    id: 26, cat: "makanan", name: "Tempe Mendoan",
    desc: "Tempe tipis berlapis tepung bumbu, digoreng setengah matang khas Banjar.",
    price: 10000, badge: "Khas",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400"
  },
  {
    id: 27, cat: "makanan", name: "Waffle Coklat Strawberry",
    desc: "Waffle tebal lembut dengan topping saus coklat, strawberry, dan whipped cream.",
    price: 22000,
    img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400"
  },
  {
    id: 28, cat: "makanan", name: "Toast Peanut Butter Banana",
    desc: "Toast roti gandum dengan selai kacang, irisan pisang, dan madu.",
    price: 18000, badge: "Sehat",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400"
  },
  {
    id: 29, cat: "makanan", name: "Keripik Singkong Balado",
    desc: "Singkong lokal diiris tipis, digoreng krispi dengan bumbu balado pedas.",
    price: 8000,
    img: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400"
  },
  {
    id: 30, cat: "makanan", name: "Brownies Coklat Warm",
    desc: "Brownies fudgy hangat dengan saus coklat cair dan taburan almond.",
    price: 24000, badge: "Baru",
    img: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400"
  }
];

let menuData = getMenuData();

// ===== NAVBAR USER INFO =====
(function initNavUser() {
  const navUser = document.getElementById('navUser');
  if (!session) return;
  navUser.innerHTML = `
    <div class="nav-user" id="navUserWrap">
      <div class="nav-user-info" onclick="toggleUserDropdown()" id="navUserInfo">
        <i class="fas fa-user"></i>
        <span>${session.name}</span>
        <i class="fas fa-chevron-down chevron"></i>
      </div>
      <div class="user-dropdown" id="userDropdown">
        <div class="dropdown-info">
          <span>Login sebagai</span>
          <strong>${session.name}</strong>
        </div>
        <button class="dropdown-item" onclick="openAcctModal(); closeUserDropdown()">
          <i class="fas fa-user-cog"></i> Pengaturan Akun
        </button>
        <div class="dropdown-divider"></div>
        <button class="dropdown-item danger" onclick="logout()">
          <i class="fas fa-sign-out-alt"></i> Logout
        </button>
      </div>
    </div>
  `;
})();

function toggleUserDropdown() {
  document.getElementById('navUserInfo').classList.toggle('open');
  document.getElementById('userDropdown').classList.toggle('open');
}
function closeUserDropdown() {
  document.getElementById('navUserInfo').classList.remove('open');
  document.getElementById('userDropdown').classList.remove('open');
}
document.addEventListener('click', e => {
  const wrap = document.getElementById('navUserWrap');
  if (wrap && !wrap.contains(e.target)) closeUserDropdown();
});

// ===== ACCOUNT MODAL =====
function openAcctModal() {
  document.getElementById('acctName').textContent = session.name;
  document.getElementById('acctRole').textContent = session.role === 'admin' ? 'Administrator' : 'Konsumen';
  document.getElementById('acctUsername').textContent = 'Username: ' + session.username;
  document.getElementById('acctRoleInfo').textContent = 'Role: ' + (session.role === 'admin' ? 'Admin' : 'Konsumen');
  document.getElementById('acctOverlay').classList.add('active');
  document.getElementById('acctModal').classList.add('open');
}
function closeAcctModal() {
  document.getElementById('acctOverlay').classList.remove('active');
  document.getElementById('acctModal').classList.remove('open');
}
function deleteAccount() {
  if (!confirm('Yakin mau hapus akun? Aksi ini tidak bisa dibatalkan!')) return;
  const users = JSON.parse(localStorage.getItem('wn_users') || '[]')
    .filter(u => u.username !== session.username);
  localStorage.setItem('wn_users', JSON.stringify(users));
  localStorage.removeItem('wn_session');
  window.location.href = 'login.html';
}

let cart = [];

// ===== RENDER MENU =====
function renderMenu(filter = 'all') {
  const grid = document.getElementById('menuGrid');
  const filtered = filter === 'all' ? menuData : menuData.filter(item => item.cat === filter);

  grid.innerHTML = filtered.map(item => `
    <div class="menu-card" data-cat="${item.cat}">
      <div class="card-img-wrap">
        <img class="card-img" src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400'">
        ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ''}
      </div>
      <div class="card-body">
        <p class="card-cat">${item.cat === 'minuman' ? '☕ Minuman' : '🍟 Makanan Ringan'}</p>
        <h3 class="card-name">${item.name}</h3>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <span class="card-price">Rp ${item.price.toLocaleString('id-ID')}</span>
          <button class="add-btn" onclick="addToCart(${item.id})" title="Tambah ke keranjang">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterMenu(cat, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu(cat);
}

// ===== CART FUNCTIONS =====
function addToCart(id) {
  const item = menuData.find(m => m.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCartUI();
  showToast(`✅ ${item.name} ditambahkan!`);
}

function updateQty(id, delta) {
  const idx = cart.findIndex(c => c.id === id);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const count = cart.reduce((s, c) => s + c.qty, 0);

  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartCount').style.display = count > 0 ? 'flex' : 'none';

  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');

  if (cart.length === 0) {
    itemsEl.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Keranjang masih kosong</p></div>';
    footerEl.style.display = 'none';
  } else {
    itemsEl.innerHTML = cart.map(c => `
      <div class="cart-item">
        <img src="${c.img}" alt="${c.name}" style="width:52px;height:52px;border-radius:8px;object-fit:cover;">
        <div class="cart-item-info">
          <p class="cart-item-name">${c.name}</p>
          <p class="cart-item-price">Rp ${(c.price * c.qty).toLocaleString('id-ID')}</p>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateQty(${c.id}, -1)">−</button>
          <span class="qty-num">${c.qty}</span>
          <button class="qty-btn" onclick="updateQty(${c.id}, 1)">+</button>
        </div>
      </div>
    `).join('');
    document.getElementById('cartTotal').textContent = `Rp ${total.toLocaleString('id-ID')}`;
    footerEl.style.display = 'block';
  }
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
  document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
}

function checkout() {
  if (cart.length === 0) return;
  const lines = cart.map(c => `\u2022 ${c.name} x${c.qty} = Rp ${(c.price * c.qty).toLocaleString('id-ID')}`).join('\n');
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const msg = encodeURIComponent(`Halo Warung Acil! Saya ingin memesan:\n\n${lines}\n\nTotal: Rp ${total.toLocaleString('id-ID')}\n\nTerima kasih \uD83D\uDE4F`);
  window.open(`https://wa.me/6281257265886?text=${msg}`, '_blank');
}

function openPayment() {
  if (cart.length === 0) return;
  document.getElementById('paymentOverlay').classList.add('active');
  document.getElementById('paymentModal').classList.add('open');
  document.querySelectorAll('input[name="payment"]').forEach(r => r.checked = false);
  document.getElementById('paymentInfoBox').style.display = 'none';
}

function closePayment() {
  document.getElementById('paymentOverlay').classList.remove('active');
  document.getElementById('paymentModal').classList.remove('open');
  document.getElementById('paymentFooter').style.display = 'block';
  document.getElementById('paymentUploadSection').style.display = 'none';
  document.getElementById('buktiPreview').style.display = 'none';
  document.getElementById('uploadPlaceholder').style.display = 'flex';
  document.getElementById('buktiFile').value = '';
  document.getElementById('btnSelesai').disabled = true;
  
  // Reset ongkir info jika ada
  const ongkirEl = document.getElementById('paymentOngkirInfo');
  if (ongkirEl) ongkirEl.style.display = 'none';
  
  // Reset cart total ke subtotal saja
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  document.getElementById('cartTotal').textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
}

function showPaymentInfo(input) {
  const box = document.getElementById('paymentInfoBox');
  const isDana = input.value === 'DANA';
  box.style.display = 'flex';
  box.innerHTML = isDana
    ? `<i class="fas fa-wallet"></i><div><p>Nomor DANA</p><strong>0812-5726-5886</strong><span>a.n. Warung Ne'Cil</span></div>`
    : `<i class="fas fa-university"></i><div><p>No. Rekening ${input.value}</p><strong>7296167422</strong><span>a.n. Warung Ne'Cil</span></div>`;
}

function confirmPayment() {
  const selected = document.querySelector('input[name="payment"]:checked');
  if (!selected) { showToast('\u26A0\uFE0F Pilih metode pembayaran dulu ya!'); return; }
  document.getElementById('paymentFooter').style.display = 'none';
  document.getElementById('paymentUploadSection').style.display = 'block';
}

function handleBuktiUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    const preview = document.getElementById('buktiPreview');
    const placeholder = document.getElementById('uploadPlaceholder');
    preview.src = ev.target.result;
    preview.style.display = 'block';
    placeholder.style.display = 'none';
    validasiBukti(ev.target.result);
  };
  reader.readAsDataURL(file);
}

async function validasiBukti(imageSrc) {
  const statusEl = document.getElementById('validasiStatus');
  const btnSelesai = document.getElementById('btnSelesai');
  const selected = document.querySelector('input[name="payment"]:checked');
  
  // Hitung total yang benar (termasuk ongkir jika delivery)
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const total = jenisLayanan === 'diantar' ? subtotal + deliveryOngkir : subtotal;

  statusEl.style.display = 'block';
  statusEl.className = 'validasi-status loading';
  statusEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memvalidasi bukti pembayaran...';
  btnSelesai.disabled = true;

  const bankKeywords = {
    'Mandiri': ['mandiri', 'bank mandiri', 'mandiri online'],
    'BSI': ['bsi', 'bank syariah indonesia', 'bsi mobile'],
    'BNI': ['bni', 'bank negara indonesia', 'bni mobile'],
    'BCA': ['bca', 'bank central asia', 'mybca', 'klik bca'],
    'DANA': ['dana', 'dana.id']
  };

  try {
    const result = await Tesseract.recognize(imageSrc, 'ind+eng', { logger: () => {} });
    const text = result.data.text.toLowerCase();

    const bankName = selected.value;
    const keywords = bankKeywords[bankName] || [];
    const bankValid = keywords.some(k => text.includes(k));

    const norekValid = text.replace(/\s/g, '').includes('7296167422');

    const totalFormatted = total.toLocaleString('id-ID');
    const totalPlain = String(total);
    const nominalValid = text.replace(/[^0-9]/g, '').includes(totalPlain);

    const errors = [];
    if (!bankValid) errors.push(`Logo/nama <strong>${bankName}</strong> tidak terdeteksi di screenshot`);
    if (!norekValid) errors.push('Nomor rekening tujuan <strong>7296167422</strong> tidak terdeteksi');
    if (!nominalValid) errors.push(`Nominal <strong>Rp ${totalFormatted}</strong> tidak sesuai`);

    if (errors.length === 0) {
      statusEl.className = 'validasi-status success';
      statusEl.innerHTML = '<i class="fas fa-check-circle"></i> Bukti pembayaran valid! Silakan selesaikan.';
      btnSelesai.disabled = false;
    } else {
      statusEl.className = 'validasi-status error';
      statusEl.innerHTML = '<i class="fas fa-times-circle"></i> Bukti tidak valid:<br>' + errors.map(e => `• ${e}`).join('<br>');
      btnSelesai.disabled = true;
    }
  } catch (err) {
    statusEl.className = 'validasi-status error';
    statusEl.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Gagal membaca gambar, coba upload ulang.';
    btnSelesai.disabled = true;
  }
}

function selesaikanPembayaran() {
  const selected = document.querySelector('input[name="payment"]:checked');
  
  // Snapshot cart sebelum dikosongkan
  pesananCart = JSON.parse(JSON.stringify(cart));
  
  closePayment();
  toggleCart();
  
  // Tampilkan status modal
  showStatusModal();
  
  // Kosongkan cart dan reset state
  cart = [];
  updateCartUI();
  
  // Auto kembali ke menu awal setelah beberapa detik (untuk demo)
  setTimeout(() => {
    if (jenisLayanan === 'ditempat') {
      // Untuk makan di tempat, langsung kembali ke menu setelah 8 detik
      setTimeout(() => {
        closeStatusModal();
      }, 8000);
    }
  }, 100);
}

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== MOBILE NAV =====
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Close nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ===== FORM SUBMIT =====
function submitForm(e) {
  e.preventDefault();
  showToast('✉️ Pesan berhasil dikirim! Kami akan segera menghubungi Anda.');
  e.target.reset();
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== SCROLL ANIMATION =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.menu-card, .testi-card, .info-item, .gallery-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ===== INIT =====
renderMenu();

// ===== STATE LAYANAN =====
let jenisLayanan = null; // 'ditempat' | 'diantar'
let deliveryMap = null;
let deliveryMarker = null;
let deliveryOngkir = 0;
let deliveryJarak = 0;
let deliveryNoTelp = '';
let deliveryAlamat = '';
let pesananCart = []; // snapshot cart untuk status

// Koordinat warung (Jl. Kulintang No 09, Samarinda)
const WARUNG_LAT = -0.5022;
const WARUNG_LNG = 117.1536;
const ONGKIR_PER_KM = 3000; // Rp 3.000 / km
const ONGKIR_MIN = 5000;    // minimum ongkir

// ===== MODAL LAYANAN =====
function openServiceModal() {
  if (cart.length === 0) return;
  document.getElementById('serviceOverlay').classList.add('active');
  document.getElementById('serviceModal').classList.add('open');
}

function closeServiceModal() {
  document.getElementById('serviceOverlay').classList.remove('active');
  document.getElementById('serviceModal').classList.remove('open');
}

function pilihLayanan(jenis) {
  jenisLayanan = jenis;
  closeServiceModal();
  if (jenis === 'ditempat') {
    openPayment();
  } else {
    openDeliveryModal();
  }
}

// ===== MODAL DELIVERY + MAP =====
function openDeliveryModal() {
  document.getElementById('deliveryOverlay').classList.add('active');
  document.getElementById('deliveryModal').classList.add('open');
  document.getElementById('noTelpInput').value = '';
  document.getElementById('alamatInput').value = '';
  document.getElementById('catatanInput').value = '';
  document.getElementById('distanceText').textContent = 'Geser pin ke lokasi Anda';
  document.getElementById('ongkirText').textContent = '–';
  deliveryOngkir = 0;
  deliveryJarak = 0;

  setTimeout(() => {
    initDeliveryMap();
  }, 200);
}

function closeDeliveryModal() {
  document.getElementById('deliveryOverlay').classList.remove('active');
  document.getElementById('deliveryModal').classList.remove('open');
}

function backToService() {
  closeDeliveryModal();
  openServiceModal();
}

function initDeliveryMap() {
  if (deliveryMap) {
    deliveryMap.remove();
    deliveryMap = null;
  }

  deliveryMap = L.map('deliveryMap', { zoomControl: true }).setView([WARUNG_LAT, WARUNG_LNG], 14);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(deliveryMap);

  // Marker warung
  const warungIcon = L.divIcon({
    className: '',
    html: '<div style="background:#8B4513;color:white;border-radius:50%;width:34px;height:34px;display:flex;align-items:center;justify-content:center;font-size:16px;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3)"><i class="fas fa-store"></i></div>',
    iconSize: [34, 34],
    iconAnchor: [17, 17]
  });
  L.marker([WARUNG_LAT, WARUNG_LNG], { icon: warungIcon })
    .addTo(deliveryMap)
    .bindPopup('<b>Warung Ne\'Cil</b><br>Jl. Kulintang No 09');

  // Marker konsumen (draggable)
  const userIcon = L.divIcon({
    className: '',
    html: '<div style="background:#e74c3c;color:white;border-radius:50% 50% 50% 0;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:16px;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3);transform:rotate(-45deg)"><i class="fas fa-home" style="transform:rotate(45deg)"></i></div>',
    iconSize: [36, 36],
    iconAnchor: [10, 36]
  });

  deliveryMarker = L.marker([WARUNG_LAT + 0.005, WARUNG_LNG + 0.005], {
    icon: userIcon,
    draggable: true
  }).addTo(deliveryMap).bindPopup('Lokasi Anda');

  hitungJarak(deliveryMarker.getLatLng());

  deliveryMarker.on('dragend', function(e) {
    hitungJarak(e.target.getLatLng());
  });

  deliveryMap.on('click', function(e) {
    deliveryMarker.setLatLng(e.latlng);
    hitungJarak(e.latlng);
  });

  // Coba dapatkan lokasi user otomatis
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        deliveryMarker.setLatLng([userLat, userLng]);
        deliveryMap.setView([userLat, userLng], 15);
        hitungJarak({ lat: userLat, lng: userLng });
        showToast('📍 Lokasi Anda berhasil terdeteksi!');
      },
      function(error) {
        console.log('Geolocation error:', error);
        showToast('ℹ️ Geser pin merah ke lokasi Anda di peta');
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }
}

function hitungJarak(latlng) {
  const R = 6371; // km
  const dLat = toRad(latlng.lat - WARUNG_LAT);
  const dLon = toRad(latlng.lng - WARUNG_LNG);
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(toRad(WARUNG_LAT)) * Math.cos(toRad(latlng.lat)) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const dist = R * c;

  deliveryJarak = dist;
  deliveryOngkir = Math.max(ONGKIR_MIN, Math.ceil(dist * ONGKIR_PER_KM / 1000) * 1000);

  document.getElementById('distanceText').textContent = dist < 1
    ? `${Math.round(dist * 1000)} meter`
    : `${dist.toFixed(1)} km`;
  document.getElementById('ongkirText').textContent = `Rp ${deliveryOngkir.toLocaleString('id-ID')}`;
}

function toRad(deg) { return deg * (Math.PI / 180); }

function konfirmasiDelivery() {
  const noTelp = document.getElementById('noTelpInput').value.trim();
  const alamat = document.getElementById('alamatInput').value.trim();

  if (!noTelp) {
    showToast('⚠️ Nomor telepon wajib diisi ya!');
    document.getElementById('noTelpInput').focus();
    return;
  }
  if (noTelp.length < 9) {
    showToast('⚠️ Nomor telepon tidak valid!');
    return;
  }
  if (deliveryJarak === 0) {
    showToast('⚠️ Tentukan lokasi pengantaran di peta dulu ya!');
    return;
  }

  deliveryNoTelp = noTelp;
  deliveryAlamat = alamat;
  closeDeliveryModal();
  openPayment();
}

// ===== OVERRIDE openPayment agar tampilkan ongkir jika delivery =====
const _origOpenPayment = openPayment;
openPayment = function() {
  if (cart.length === 0) return;
  document.getElementById('paymentOverlay').classList.add('active');
  document.getElementById('paymentModal').classList.add('open');
  document.querySelectorAll('input[name="payment"]').forEach(r => r.checked = false);
  document.getElementById('paymentInfoBox').style.display = 'none';

  // Tampilkan/sembunyikan info ongkir
  let ongkirEl = document.getElementById('paymentOngkirInfo');
  if (jenisLayanan === 'diantar') {
    const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
    const grandTotal = subtotal + deliveryOngkir;
    if (!ongkirEl) {
      ongkirEl = document.createElement('div');
      ongkirEl.id = 'paymentOngkirInfo';
      ongkirEl.className = 'ongkir-info-box';
      document.querySelector('.payment-body').insertBefore(ongkirEl, document.querySelector('.payment-label'));
    }
    ongkirEl.innerHTML = `
      <div class="ongkir-row"><span><i class="fas fa-shopping-bag"></i> Subtotal</span><strong>Rp ${subtotal.toLocaleString('id-ID')}</strong></div>
      <div class="ongkir-row"><span><i class="fas fa-motorcycle"></i> Ongkir (${deliveryJarak.toFixed(1)} km)</span><strong>Rp ${deliveryOngkir.toLocaleString('id-ID')}</strong></div>
      <div class="ongkir-row total"><span><i class="fas fa-receipt"></i> Total Bayar</span><strong>Rp ${grandTotal.toLocaleString('id-ID')}</strong></div>
      <div style="margin-top:12px;padding:12px;background:#fff5ec;border-radius:8px;font-size:0.85rem;color:var(--text);">
        <div><i class="fas fa-phone"></i> <strong>${deliveryNoTelp}</strong></div>
        ${deliveryAlamat ? `<div style="margin-top:4px"><i class="fas fa-map-marker-alt"></i> ${deliveryAlamat}</div>` : ''}
      </div>
    `;
    ongkirEl.style.display = 'block';
    // Update cart total display
    document.getElementById('cartTotal').textContent = `Rp ${grandTotal.toLocaleString('id-ID')}`;
  } else {
    if (ongkirEl) ongkirEl.style.display = 'none';
  }
};

// ===== MODAL STATUS PESANAN =====
function showStatusModal() {
  // Snapshot cart sebelum dikosongkan 
  if (pesananCart.length === 0) {
    pesananCart = JSON.parse(JSON.stringify(cart));
  }

  const modal = document.getElementById('statusModal');
  const overlay = document.getElementById('statusOverlay');
  overlay.classList.add('active');
  modal.classList.add('open');

  const itemsEl = document.getElementById('statusItems');
  itemsEl.innerHTML = `
    <h5>Item Pesanan:</h5>
    ${pesananCart.map(c => `
      <div class="status-item">
        <img src="${c.img}" alt="${c.name}">
        <div>
          <p>${c.name}</p>
          <span>x${c.qty}  •  Rp ${(c.price * c.qty).toLocaleString('id-ID')}</span>
        </div>
      </div>
    `).join('')}
  `;

  if (jenisLayanan === 'diantar') {
    jalankanStatusDelivery();
  } else {
    jalankanStatusDitempat();
  }
}

function jalankanStatusDitempat() {
  setStatus('processing', 'Sedang di proses sabar ya wal... 👨‍🍳', false);
  document.getElementById('statusDetail').innerHTML = `
    <div class="status-badge dine-in"><i class="fas fa-store"></i> Makan di Tempat</div>
    <div style="margin-top:16px;padding:12px;background:#fff3cd;border-radius:8px;font-size:0.85rem;color:#856404;text-align:center;">
      <i class="fas fa-clock"></i> Estimasi siap: <strong>10-15 menit</strong><br>
      <small>Silakan tunggu di tempat, makanan sedang diproses</small>
    </div>
  `;
  
  // Simulasi proses memasak (5 detik untuk demo, otomatis kembali ke menu)
  setTimeout(() => {
    setStatus('ready', 'Pesanan sudah siap! Silakan diambil 🍽️', true);
    document.getElementById('statusDetail').innerHTML += `
      <div class="arrived-note" style="background:#d4edda;color:#155724;margin-top:16px;">
        <i class="fas fa-check-circle"></i> Pesanan ready! Silakan ambil di kasir
      </div>
    `;
    document.getElementById('statusFooter').style.display = 'block';
    
    // Auto close modal dan kembali ke menu setelah 3 detik lagi
    setTimeout(() => {
      closeStatusModal();
    }, 3000);
  }, 5000);
}

function jalankanStatusDelivery() {
  const jarakKm = deliveryJarak.toFixed(1);
  const estimasiMenit = Math.max(15, Math.round(deliveryJarak * 4) + 10);

  setStatus('otw', 'OTW nihh... 🛵💨', false);
  document.getElementById('statusDetail').innerHTML = `
    <div class="status-badge delivery"><i class="fas fa-motorcycle"></i> Pesan Diantar</div>
    <div class="status-info-rows">
      <div class="sinfo-row"><i class="fas fa-phone"></i><span>Kontak: <strong>${deliveryNoTelp}</strong></span></div>
      ${deliveryAlamat ? `<div class="sinfo-row"><i class="fas fa-map-marker-alt"></i><span>${deliveryAlamat}</span></div>` : ''}
      <div class="sinfo-row"><i class="fas fa-route"></i><span>Jarak: <strong>${jarakKm} km</strong></span></div>
      <div class="sinfo-row"><i class="fas fa-clock"></i><span>Estimasi tiba: <strong>~${estimasiMenit} menit</strong></span></div>
      <div class="sinfo-row"><i class="fas fa-wallet"></i><span>Ongkir: <strong>Rp ${deliveryOngkir.toLocaleString('id-ID')}</strong></span></div>
    </div>
  `;

  // Simulasi: setelah estimasiMenit (dipercepat untuk demo), status berubah jadi sampai
  const waktuSimulasi = Math.min(estimasiMenit * 1000, 10000); // max 10 detik untuk demo
  setTimeout(() => {
    setStatus('arrived', 'Pesanan sudah sampai! 🎉', true);
    document.getElementById('statusDetail').innerHTML += `
      <div class="arrived-note"><i class="fas fa-check-circle"></i> Pesanan telah sampai di tujuan! Terima kasih sudah pesan di Warung Ne'Cil!</div>
    `;
    document.getElementById('statusFooter').style.display = 'block';
  }, waktuSimulasi);
}

function setStatus(type, message, done) {
  const iconWrap = document.getElementById('statusIconWrap');
  const icon = document.getElementById('statusIcon');
  const msgEl = document.getElementById('statusMessage');

  iconWrap.className = 'status-icon-wrap ' + type;
  msgEl.textContent = message;

  if (type === 'processing') {
    icon.className = 'fas fa-utensils';
  } else if (type === 'ready') {
    icon.className = 'fas fa-check-circle';
  } else if (type === 'otw') {
    icon.className = 'fas fa-motorcycle';
  } else if (type === 'arrived') {
    icon.className = 'fas fa-check-circle';
  }
}

function closeStatusModal() {
  document.getElementById('statusOverlay').classList.remove('active');
  document.getElementById('statusModal').classList.remove('open');
  // Kembali ke atas halaman (menu awal)
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Reset state
  jenisLayanan = null;
  deliveryOngkir = 0;
  deliveryJarak = 0;
  deliveryNoTelp = '';
  deliveryAlamat = '';
  pesananCart = [];
}
