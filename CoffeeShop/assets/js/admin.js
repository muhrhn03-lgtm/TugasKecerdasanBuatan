// ===== AUTH GUARD (admin only) =====
if (!sessionStorage.getItem('wn_active')) {
  localStorage.removeItem('wn_session');
  window.location.href = 'login.html';
}
const session = JSON.parse(localStorage.getItem('wn_session') || 'null');
if (!session || session.role !== 'admin') {
  window.location.href = session ? 'index.html' : 'login.html';
}

document.getElementById('adminUserName').textContent = session.name;

function logout() {
  localStorage.removeItem('wn_session');
  window.location.href = 'login.html';
}

// ===== ACCOUNT MODAL =====
function openAcctModal() {
  document.getElementById('acctName').textContent = session.name;
  document.getElementById('acctRole').textContent = 'Administrator';
  document.getElementById('acctUsername').textContent = 'Username: ' + session.username;
  document.getElementById('acctRoleInfo').textContent = 'Role: Admin';
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

// ===== DATA =====
const defaultMenuData = [
  { id: 1, cat: "minuman", name: "Kopi Hitam Arabika", desc: "Kopi arabika pilihan, diseduh manual pour-over dengan aroma khas pegunungan.", price: 18000, badge: "Terlaris", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400" },
  { id: 2, cat: "minuman", name: "Kopi Susu Gula Aren", desc: "Espresso double shot dengan susu segar dan lelehan gula aren asli.", price: 22000, badge: "Favorit", img: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400" },
  { id: 3, cat: "minuman", name: "Es Kopi Vietnam", desc: "Kopi robusta kental diseduh drip, disiram es dan susu kental manis.", price: 20000, img: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=400" },
  { id: 4, cat: "minuman", name: "Matcha Latte", desc: "Bubuk matcha premium asal Jepang dengan susu oat, creamy dan wangi.", price: 25000, img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400" },
  { id: 5, cat: "minuman", name: "Teh Tarik Spesial", desc: "Teh hitam strong ditarik dengan susu evaporasi, berbuih tebal.", price: 15000, badge: "Hemat", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400" },
  { id: 6, cat: "minuman", name: "Jus Alpukat Coklat", desc: "Alpukat Kalimantan segar diblender dengan susu coklat dan es serut.", price: 20000, img: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=400" },
  { id: 7, cat: "minuman", name: "Thai Tea Original", desc: "Teh Thailand asli dengan susu kental, berwarna oranye menggoda.", price: 18000, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" },
  { id: 8, cat: "minuman", name: "Coklat Panas Belgia", desc: "Coklat premium Belgia murni, creamy dan kaya rasa kakao.", price: 22000, img: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=400" },
  { id: 9, cat: "minuman", name: "Es Jeruk Peras", desc: "Jeruk lokal segar diperas langsung, manis alami tanpa pemanis buatan.", price: 12000, badge: "Segar", img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400" },
  { id: 10, cat: "minuman", name: "Cappuccino Classic", desc: "Espresso dengan milk foam tebal, ditaburkan bubuk kayu manis.", price: 24000, img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400" },
  { id: 11, cat: "minuman", name: "Smoothie Mangga Lassi", desc: "Mangga harum diblender dengan yogurt dan madu, menyegarkan.", price: 22000, img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400" },
  { id: 12, cat: "minuman", name: "Caramel Macchiato", desc: "Espresso dengan vanilla syrup, susu steam dan drizzle karamel.", price: 26000, img: "https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?w=400" },
  { id: 13, cat: "minuman", name: "Teh Lemon Mint", desc: "Teh hijau segar dengan irisan lemon dan daun mint dingin.", price: 14000, img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400" },
  { id: 14, cat: "minuman", name: "Red Velvet Latte", desc: "Minuman premium merah khas dengan cream cheese foam di atasnya.", price: 28000, badge: "Baru", img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400" },
  { id: 15, cat: "minuman", name: "Kopi Banjar Bajigur", desc: "Resep khas Kalimantan: kopi dengan santan, jahe, dan gula kelapa.", price: 16000, badge: "Khas", img: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=400" },
  { id: 16, cat: "makanan", name: "Pisang Goreng Keju", desc: "Pisang kepok goreng crispy, ditopping keju leleh dan susu kental.", price: 14000, badge: "Terlaris", img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400" },
  { id: 17, cat: "makanan", name: "Roti Bakar Coklat Keju", desc: "Roti tebal dibakar sempurna, isi coklat batang dan keju mozzarella.", price: 16000, img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400" },
  { id: 18, cat: "makanan", name: "Cireng Bumbu Rujak", desc: "Cireng crispy renyah disajikan dengan saus rujak pedas manis.", price: 12000, img: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400" },
  { id: 19, cat: "makanan", name: "Singkong Keju Goreng", desc: "Singkong empuk digoreng krispi, ditaburi keju parut melimpah.", price: 13000, img: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=400" },
  { id: 20, cat: "makanan", name: "French Fries Pedas", desc: "Kentang goreng crispy dengan bumbu pedas BBQ dan saus mayo.", price: 18000, img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400" },
  { id: 21, cat: "makanan", name: "Onion Ring Crispy", desc: "Cincin bawang bombay dibalut tepung renyah, disajikan saus sambal.", price: 16000, img: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400" },
  { id: 22, cat: "makanan", name: "Tahu Walik Crispy", desc: "Tahu dibalik diisi adonan bumbu rempah, digoreng garing sempurna.", price: 12000, badge: "Lokal", img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400" },
  { id: 23, cat: "makanan", name: "Kentang Wedges BBQ", desc: "Kentang belah empat berbumbu BBQ smoky, dioven hingga keemasan.", price: 20000, img: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400" },
  { id: 24, cat: "makanan", name: "Lumpia Sayur Goreng", desc: "Lumpia isi sayuran segar dengan kulit renyah, cocok untuk camilan.", price: 10000, img: "https://images.unsplash.com/photo-1561626423-a51b45aef0a1?w=400" },
  { id: 25, cat: "makanan", name: "Nugget Keju Special", desc: "Nugget ayam isi keju leleh, crispy di luar lembut di dalam.", price: 18000, img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400" },
  { id: 26, cat: "makanan", name: "Tempe Mendoan", desc: "Tempe tipis berlapis tepung bumbu, digoreng setengah matang khas Banjar.", price: 10000, badge: "Khas", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400" },
  { id: 27, cat: "makanan", name: "Waffle Coklat Strawberry", desc: "Waffle tebal lembut dengan topping saus coklat, strawberry, dan whipped cream.", price: 22000, img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400" },
  { id: 28, cat: "makanan", name: "Toast Peanut Butter Banana", desc: "Toast roti gandum dengan selai kacang, irisan pisang, dan madu.", price: 18000, badge: "Sehat", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400" },
  { id: 29, cat: "makanan", name: "Keripik Singkong Balado", desc: "Singkong lokal diiris tipis, digoreng krispi dengan bumbu balado pedas.", price: 8000, img: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400" },
  { id: 30, cat: "makanan", name: "Brownies Coklat Warm", desc: "Brownies fudgy hangat dengan saus coklat cair dan taburan almond.", price: 24000, badge: "Baru", img: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400" }
];

function getMenuData() {
  const saved = localStorage.getItem('wn_menu');
  return saved ? JSON.parse(saved) : defaultMenuData;
}
function saveMenuData(data) {
  localStorage.setItem('wn_menu', JSON.stringify(data));
}
function getUsers() {
  let users = JSON.parse(localStorage.getItem('wn_users') || '[]');
  const seen = new Set();
  const deduped = users.filter(u => {
    if (seen.has(u.username)) return false;
    seen.add(u.username);
    return true;
  });
  // Simpan kembali jika ada duplikat yang dibersihkan
  if (deduped.length !== users.length) {
    localStorage.setItem('wn_users', JSON.stringify(deduped));
  }
  return deduped;
}
function formatRp(n) {
  return 'Rp ' + Number(n).toLocaleString('id-ID');
}

let menuData = getMenuData();

// ===== SIDEBAR NAVIGATION =====
function showSection(name, btn) {
  document.querySelectorAll('.panel-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.sidebar-item').forEach(b => b.classList.remove('active'));
  document.getElementById('section-' + name).classList.add('active');
  btn.classList.add('active');
  if (name === 'menu') renderMenuTable();
  if (name === 'users') renderUsersTable();
  if (name === 'dashboard') renderDashboard();
}

// ===== DASHBOARD =====
function renderDashboard() {
  menuData = getMenuData();
  const users = getUsers();
  document.getElementById('statTotal').textContent = menuData.length;
  document.getElementById('statMinuman').textContent = menuData.filter(m => m.cat === 'minuman').length;
  document.getElementById('statMakanan').textContent = menuData.filter(m => m.cat === 'makanan').length;
  document.getElementById('statUsers').textContent = users.length;

  const recent = [...menuData].slice(-5).reverse();
  document.getElementById('dashRecentTable').innerHTML = `
    <thead><tr><th>Gambar</th><th>Nama</th><th>Kategori</th><th>Harga</th></tr></thead>
    <tbody>${recent.map(item => `
      <tr>
        <td><img class="table-img" src="${item.img || 'https://via.placeholder.com/48'}" onerror="this.src='https://via.placeholder.com/48'" /></td>
        <td><div class="table-name">${item.name}</div></td>
        <td><span class="cat-badge ${item.cat}">${item.cat === 'minuman' ? '☕ Minuman' : '🍟 Makanan'}</span></td>
        <td class="price-text">${formatRp(item.price)}</td>
      </tr>`).join('')}
    </tbody>`;
}

// ===== MENU TABLE =====
let activeCatTab = 'all';

function setCatTab(cat) {
  activeCatTab = cat;
  document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
  const map = { all: 'tabAll', minuman: 'tabMinuman', makanan: 'tabMakanan' };
  document.getElementById(map[cat]).classList.add('active');
  renderMenuTable();
}

document.getElementById('tabAll').addEventListener('click', () => setCatTab('all'));
document.getElementById('tabMinuman').addEventListener('click', () => setCatTab('minuman'));
document.getElementById('tabMakanan').addEventListener('click', () => setCatTab('makanan'));

function renderMenuTable() {
  menuData = getMenuData();
  const q = document.getElementById('menuSearch').value.toLowerCase();
  const filtered = menuData.filter(m =>
    (activeCatTab === 'all' || m.cat === activeCatTab) &&
    m.name.toLowerCase().includes(q)
  );
  document.getElementById('menuCountBadge').textContent = filtered.length;
  const tbody = document.getElementById('menuTableBody');
  if (!filtered.length) {
    tbody.innerHTML = `<tr><td colspan="6"><div class="empty-state"><i class="fas fa-search"></i>Menu tidak ditemukan</div></td></tr>`;
    return;
  }
  tbody.innerHTML = filtered.map(item => `
    <tr>
      <td><img class="table-img" src="${item.img || 'https://via.placeholder.com/48'}" onerror="this.src='https://via.placeholder.com/48'" /></td>
      <td>
        <div class="table-name">${item.name}</div>
        <div class="table-desc">${item.desc}</div>
      </td>
      <td><span class="cat-badge ${item.cat}">${item.cat === 'minuman' ? '☕ Minuman' : '🍟 Makanan'}</span></td>
      <td class="price-text">${formatRp(item.price)}</td>
      <td>${item.badge ? `<span class="badge-pill">${item.badge}</span>` : '–'}</td>
      <td>
        <div class="action-btns">
          <button class="btn-edit" onclick="openMenuModal(${item.id})" title="Edit"><i class="fas fa-pen"></i></button>
          <button class="btn-delete" onclick="confirmDelete(${item.id}, '${item.name.replace(/'/g, "\\'")}')" title="Hapus"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>`).join('');
}

// ===== USERS TABLE =====
function renderUsersTable() {
  const users = getUsers();
  document.getElementById('userCountBadge').textContent = users.length;
  const tbody = document.getElementById('usersTableBody');
  if (!users.length) {
    tbody.innerHTML = `<tr><td colspan="5"><div class="empty-state"><i class="fas fa-users"></i>Belum ada pengguna</div></td></tr>`;
    return;
  }
  tbody.innerHTML = users.map(u => {
    const isAdmin = u.role === 'admin';
    const isBlocked = u.blocked === true;
    const isSelf = u.username === session.username;
    return `
    <tr>
      <td><div class="table-name">${u.name}</div></td>
      <td>${u.username}</td>
      <td><span class="user-role-badge ${u.role}">${isAdmin ? '<i class="fas fa-user-shield"></i> Admin' : '<i class="fas fa-user"></i> Konsumen'}</span></td>
      <td>
        ${isBlocked
          ? '<span class="status-badge diblokir"><i class="fas fa-ban"></i> Diblokir</span>'
          : '<span class="status-badge aktif"><i class="fas fa-check-circle"></i> Aktif</span>'}
      </td>
      <td>
        <div class="action-btns">
          ${!isAdmin && !isSelf ? (
            isBlocked
              ? `<button class="btn-edit btn-unblock" onclick="unblockUser('${u.username}')" title="Buka Blokir"><i class="fas fa-lock-open"></i></button>`
              : `<button class="btn-edit btn-block" onclick="blockUser('${u.username}')" title="Blokir"><i class="fas fa-ban"></i></button>`
          ) : ''}
          ${!isSelf ? `<button class="btn-delete" onclick="deleteUser('${u.username}', '${u.name.replace(/'/g, "\\'")}')"><i class="fas fa-trash"></i></button>` : ''}
          ${isSelf ? '<span style="font-size:0.75rem;color:var(--text-light)">Akun Anda</span>' : ''}
        </div>
      </td>
    </tr>`;
  }).join('');
}

function blockUser(username) {
  const users = getUsers().map(u => u.username === username ? { ...u, blocked: true } : u);
  localStorage.setItem('wn_users', JSON.stringify(users));
  showToast('🚫 Akun berhasil diblokir!');
  renderUsersTable();
}

function unblockUser(username) {
  const users = getUsers().map(u => u.username === username ? { ...u, blocked: false } : u);
  localStorage.setItem('wn_users', JSON.stringify(users));
  showToast('✅ Blokir akun berhasil dibuka!');
  renderUsersTable();
}

function deleteUser(username, name) {
  if (!confirm(`Hapus akun "${name}"? Aksi ini tidak bisa dibatalkan!`)) return;
  const users = getUsers().filter(u => u.username !== username);
  localStorage.setItem('wn_users', JSON.stringify(users));
  showToast('🗑️ Akun berhasil dihapus!');
  renderUsersTable();
  renderDashboard();
}

// ===== MODAL MENU =====
function openMenuModal(id = null) {
  document.getElementById('editId').value = '';
  document.getElementById('fName').value = '';
  document.getElementById('fCat').value = 'minuman';
  document.getElementById('fPrice').value = '';
  document.getElementById('fDesc').value = '';
  document.getElementById('fImg').value = '';
  document.getElementById('fBadge').value = '';
  document.getElementById('menuModalTitle').textContent = 'Tambah Menu Baru';

  if (id) {
    const item = menuData.find(m => m.id === id);
    if (!item) return;
    document.getElementById('editId').value = item.id;
    document.getElementById('fName').value = item.name;
    document.getElementById('fCat').value = item.cat;
    document.getElementById('fPrice').value = item.price;
    document.getElementById('fDesc').value = item.desc;
    document.getElementById('fImg').value = item.img || '';
    document.getElementById('fBadge').value = item.badge || '';
    document.getElementById('menuModalTitle').textContent = 'Edit Menu';
  }

  document.getElementById('menuModalOverlay').classList.add('active');
  document.getElementById('menuModal').classList.add('open');
}

function closeMenuModal() {
  document.getElementById('menuModalOverlay').classList.remove('active');
  document.getElementById('menuModal').classList.remove('open');
}

function saveMenu() {
  const name = document.getElementById('fName').value.trim();
  const cat = document.getElementById('fCat').value;
  const price = parseInt(document.getElementById('fPrice').value);
  const desc = document.getElementById('fDesc').value.trim();
  const img = document.getElementById('fImg').value.trim();
  const badge = document.getElementById('fBadge').value.trim();

  if (!name || !cat || !price || !desc) return showToast('⚠️ Nama, kategori, harga, dan deskripsi wajib diisi!');

  menuData = getMenuData();
  const editId = parseInt(document.getElementById('editId').value);

  if (editId) {
    const idx = menuData.findIndex(m => m.id === editId);
    if (idx !== -1) menuData[idx] = { ...menuData[idx], name, cat, price, desc, img, badge };
    showToast('✅ Menu berhasil diperbarui!');
  } else {
    const newId = menuData.length ? Math.max(...menuData.map(m => m.id)) + 1 : 1;
    menuData.push({ id: newId, cat, name, desc, price, badge, img });
    showToast('✅ Menu baru berhasil ditambahkan!');
  }

  saveMenuData(menuData);
  closeMenuModal();
  renderMenuTable();
  renderDashboard();
}

// ===== DELETE =====
let deleteTargetId = null;

function confirmDelete(id, name) {
  deleteTargetId = id;
  document.getElementById('confirmMsg').textContent = `"${name}" akan dihapus permanen.`;
  document.getElementById('confirmOverlay').classList.add('active');
  document.getElementById('confirmBox').classList.add('open');
}

function closeConfirm() {
  deleteTargetId = null;
  document.getElementById('confirmOverlay').classList.remove('active');
  document.getElementById('confirmBox').classList.remove('open');
}

function doDelete() {
  if (!deleteTargetId) return;
  menuData = getMenuData().filter(m => m.id !== deleteTargetId);
  saveMenuData(menuData);
  closeConfirm();
  renderMenuTable();
  renderDashboard();
  showToast('🗑️ Menu berhasil dihapus!');
}

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ===== INIT =====
renderDashboard();
