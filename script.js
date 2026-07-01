/* ======================
   DELIVERY CHARGE
====================== */
const DELIVERY_CHARGE = 180;

/* ======================
   PRODUCTS DATA
====================== */
const products = [
  {id:1,name:"Classic Leather Watch",category:"Accessories",price:4500,original:6000,desc:"Premium genuine leather strap watch with sapphire glass and Swiss movement. Timeless elegance for every occasion.",image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",badge:"Bestseller",rating:4.5,delivery:"2–3 Days",stock:"In Stock"},
  {id:2,name:"Wireless Noise-Cancel Headphones",category:"Electronics",price:8999,original:12000,desc:"Premium over-ear headphones with 40hr battery life, active noise cancellation, and Hi-Fi sound quality.",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",badge:"Hot",rating:5,delivery:"1–2 Days",stock:"In Stock"},
  {id:3,name:"Men's Slim Fit Suit",category:"Fashion",price:12500,original:18000,desc:"Tailored slim-fit suit in premium wool blend. Perfect for weddings, events, and formal occasions.",image:"https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&h=400&fit=crop",badge:"Premium",rating:4,delivery:"3–4 Days",stock:"In Stock"},
  {id:4,name:"Perfume – Oud Royale",category:"Fragrance",price:3200,original:4500,desc:"Long-lasting oriental fragrance with notes of Oud, rose, and amber. Inspired by Arabian royalty.",image:"https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&h=400&fit=crop",badge:"New",rating:4.5,delivery:"2–3 Days",stock:"In Stock"},
  {id:5,name:"Smart Fitness Band",category:"Electronics",price:5500,original:7500,desc:"Track steps, heart rate, sleep & calories. IP68 waterproof with 10-day battery. Works with iOS & Android.",image:"https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",badge:"Sale",rating:4,delivery:"1–2 Days",stock:"In Stock"},
  {id:6,name:"Luxury Handbag – Brown",category:"Fashion",price:7800,original:11000,desc:"Genuine leather handbag with gold-tone hardware, multiple compartments, and detachable strap.",image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",badge:"Trending",rating:4.5,delivery:"2–3 Days",stock:"In Stock"},
  {id:7,name:"Running Sports Shoes",category:"Footwear",price:5200,original:7200,desc:"Lightweight mesh running shoes with cushioned sole, breathable upper and anti-slip grip.",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",badge:"Popular",rating:4,delivery:"2–4 Days",stock:"In Stock"},
  {id:8,name:"Sunglasses – Aviator Gold",category:"Accessories",price:2800,original:4200,desc:"UV400 polarized aviator sunglasses with gold metal frame and gradient lenses.",image:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",badge:"Hot",rating:4.5,delivery:"1–2 Days",stock:"In Stock"},
  {id:9,name:"Laptop Backpack 40L",category:"Bags",price:3600,original:5000,desc:"Waterproof 40L laptop backpack with USB charging port, anti-theft pocket, and ergonomic design.",image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",badge:"Sale",rating:5,delivery:"2–3 Days",stock:"In Stock"},
  {id:10,name:"Silk Kurta Set",category:"Fashion",price:4200,original:6500,desc:"Handcrafted pure silk kurta with embroidery detailing. Available in multiple sizes and colors.",image:"https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&h=400&fit=crop",badge:"Eid Special",rating:4,delivery:"3–5 Days",stock:"In Stock"},
  {id:11,name:"Bluetooth Speaker",category:"Electronics",price:6500,original:9000,desc:"360 surround sound speaker with deep bass, 24hr battery, waterproof design and built-in mic.",image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",badge:"Bestseller",rating:4.5,delivery:"1–3 Days",stock:"In Stock"},
  {id:12,name:"Skincare Gift Set",category:"Beauty",price:3900,original:5500,desc:"Luxurious 5-piece skincare set: cleanser, toner, serum, moisturizer and eye cream for radiant skin.",image:"https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",badge:"Gift",rating:5,delivery:"2–3 Days",stock:"In Stock"},
  {id:13,name:"Formal Leather Belt",category:"Accessories",price:1800,original:2800,desc:"Genuine full-grain leather belt with gold buckle. Perfect for formal and semi-formal wear.",image:"https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400&h=400&fit=crop",badge:"Classic",rating:4,delivery:"2–3 Days",stock:"In Stock"},
  {id:14,name:"Casual Polo T-Shirt",category:"Fashion",price:1500,original:2200,desc:"100% cotton pique polo with embroidered logo. Breathable, comfortable and available in 8 colors.",image:"https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&h=400&fit=crop",badge:"Daily Wear",rating:4,delivery:"2–4 Days",stock:"In Stock"},
  {id:15,name:"Gold Chain Necklace",category:"Jewelry",price:9500,original:14000,desc:"18K gold-plated stainless steel chain necklace. Hypoallergenic, tarnish-resistant, and elegant.",image:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",badge:"Luxury",rating:4.5,delivery:"3–5 Days",stock:"In Stock"},
  {id:16,name:"Power Bank 20000mAh",category:"Electronics",price:4100,original:6000,desc:"20000mAh fast-charge power bank with dual USB and Type-C, LED display, and compact design.",image:"https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=400&h=400&fit=crop",badge:"Must Have",rating:5,delivery:"1–2 Days",stock:"In Stock"},
  {id:17,name:"Woolen Shawl – Kashmiri",category:"Fashion",price:6800,original:9500,desc:"Authentic hand-woven Kashmiri shawl with intricate embroidery. Warm, soft, and timeless.",image:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop",badge:"Handmade",rating:4.5,delivery:"4–6 Days",stock:"In Stock"},
  {id:18,name:"Gaming Mouse RGB",category:"Electronics",price:3300,original:4800,desc:"Ergonomic gaming mouse with 7 buttons, 12000 DPI sensor, RGB lighting and braided cable.",image:"https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",badge:"Gaming",rating:4,delivery:"2–3 Days",stock:"In Stock"},
  {id:19,name:"Stainless Steel Flask",category:"Lifestyle",price:2200,original:3200,desc:"Double-wall vacuum insulated 1L flask. Keeps drinks hot 24hrs or cold 48hrs. Leak-proof lid.",image:"https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?w=400&h=400&fit=crop",badge:"Eco",rating:5,delivery:"2–3 Days",stock:"In Stock"},
  {id:20,name:"Printed Diary – Hardcover",category:"Stationery",price:980,original:1500,desc:"A5 premium hardcover diary with 200 ivory pages, ribbon bookmark, and pen loop. Great gift.",image:"https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=400&fit=crop",badge:"Gift",rating:4,delivery:"1–2 Days",stock:"In Stock"},
];

/* ======================
   LOCALSTORAGE STATE
====================== */
function saveState(){
  try{
    localStorage.setItem('sb_cart', JSON.stringify(cart));
    localStorage.setItem('sb_filter', currentFilter);
    localStorage.setItem('sb_user', JSON.stringify(currentUser));
  }catch(e){}
}
function loadState(){
  try{
    const c = localStorage.getItem('sb_cart');
    if(c) cart = JSON.parse(c);
    const f = localStorage.getItem('sb_filter');
    if(f && (f==='low'||f==='high'||f==='none')) currentFilter = f;
    const u = localStorage.getItem('sb_user');
    if(u) currentUser = JSON.parse(u);
  }catch(e){}
}

let cart = [];
let currentFilter = 'none';
let currentSearch = '';
let currentUser = null;
let loginMode = 'signin'; // 'signin' | 'signup'

loadState();

/* Navbar always fixed — no hide on scroll */

/* ======================
   HERO STARS
====================== */
(function createStars(){
  const c = document.getElementById('heroStars');
  for(let i=0;i<60;i++){
    const s = document.createElement('div');
    s.className = 'star';
    const sz = Math.random()*3+1;
    s.style.width = sz+'px';
    s.style.height = sz+'px';
    s.style.top = Math.random()*100+'%';
    s.style.left = Math.random()*100+'%';
    s.style.setProperty('--dur',(Math.random()*3+2)+'s');
    s.style.animationDelay = Math.random()*3+'s';
    c.appendChild(s);
  }
})();

/* ======================
   TYPING ANIMATION
====================== */
const words = ["Discover & Browse","Select & Shop","Deliver & Enjoy"];
let wi=0, ci=0, deleting=false;
const typingEl = document.getElementById('typingText');
function type(){
  const w = words[wi];
  if(!deleting){
    typingEl.textContent = w.slice(0, ci+1);
    ci++;
    if(ci===w.length){ setTimeout(()=>{deleting=true; type();},2200); return; }
  } else {
    typingEl.textContent = w.slice(0, ci-1);
    ci--;
    if(ci===0){ deleting=false; wi=(wi+1)%words.length; }
  }
  setTimeout(type, deleting?55:95);
}
type();

/* ======================
   PRODUCTS RENDER
====================== */
function getColumns(){
  const w = window.innerWidth;
  if(w>=1200) return 4;
  if(w>=860) return 3;
  if(w>=500) return 2;
  return 1;
}
function getCardAnim(idx, cols){
  const pos = idx % cols;
  if(cols===4){ return (pos===0||pos===1)?'anim-left':'anim-right'; }
  if(cols===3){ if(pos===0) return 'anim-left'; if(pos===2) return 'anim-right'; return 'anim-bottom'; }
  if(cols===2){ return pos===0?'anim-left':'anim-right'; }
  if(idx%3===0) return 'anim-right';
  if(idx%3===1) return 'anim-bottom';
  return 'anim-right';
}
function renderProducts(arr){
  const grid = document.getElementById('productsGrid');
  const noRes = document.getElementById('noResultMsg');
  // Remove all product cards (keep noResultMsg element)
  Array.from(grid.querySelectorAll('.product-card')).forEach(c=>c.parentNode.removeChild(c));
  noRes.style.display='none';
  if(arr.length===0){ noRes.style.display='block'; return; }
  const cols = getColumns();
  arr.forEach((p,idx)=>{
    const inCart = cart.some(c=>c.id===p.id);
    const card = document.createElement('div');
    card.className = 'product-card';
    card.id = 'card-'+p.id;
    const anim = getCardAnim(idx, cols);
    const delay = (idx%cols)*0.1;
    card.innerHTML =
      '<div class="pc-img-wrap">' +
        '<img src="'+p.image+'" alt="'+p.name+'" loading="lazy" onerror="this.src=\'https://placehold.co/400x400/161D2E/F5B800?text=Star+Brands\'"/>' +
        '<span class="pc-badge">'+p.badge+'</span>' +
      '</div>' +
      '<div class="pc-body">' +
        '<div class="pc-category">'+p.category+'</div>' +
        '<div class="pc-title">'+p.name+'</div>' +
        '<div class="pc-desc">'+p.desc+'</div>' +
        '<div class="pc-price">Rs. '+p.price.toLocaleString()+' <span class="original">Rs. '+p.original.toLocaleString()+'</span></div>' +
        '<div class="pc-btns">' +
          '<button class="btn-details" onclick="openDetail('+p.id+')"><i class="fa-solid fa-eye" style="margin-right:4px;"></i>Details</button>' +
          '<button class="btn-cart'+(inCart?' added':'')+'" id="cart-btn-'+p.id+'" onclick="toggleCart('+p.id+')">'+(inCart?'<i class="fa-solid fa-check" style="margin-right:4px;"></i>Added':'<i class="fa-solid fa-cart-plus" style="margin-right:4px;"></i>Add to Cart')+'</button>' +
        '</div>' +
      '</div>';
    grid.appendChild(card);
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(en=>{
        if(en.isIntersecting){
          setTimeout(()=>{ card.classList.add(anim,'visible'); }, delay*1000);
          obs.unobserve(card);
        }
      });
    },{threshold:0.08});
    obs.observe(card);
  });
}
function getFilteredProducts(){
  // Always start from fresh copy of original products array
  let arr = products.map(p=>Object.assign({},p));

  // Apply search filter
  const q = (currentSearch||'').trim().toLowerCase();
  if(q){
    arr = arr.filter(p=>
      p.name.toLowerCase().indexOf(q)!==-1 ||
      p.category.toLowerCase().indexOf(q)!==-1 ||
      p.desc.toLowerCase().indexOf(q)!==-1
    );
  }

  // Apply price sort
  if(currentFilter==='low'){
    arr.sort(function(a,b){ return a.price - b.price; });
  } else if(currentFilter==='high'){
    arr.sort(function(a,b){ return b.price - a.price; });
  }

  return arr;
}
function rerender(){ renderProducts(getFilteredProducts()); }
let resizeTimer;
window.addEventListener('resize',()=>{
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(rerender, 200);
});

/* ======================
   SEARCH
====================== */
const searchBox = document.getElementById('searchBox');
const searchInput = document.getElementById('searchInput');
let searchOpen = false;

document.getElementById('searchToggle').addEventListener('click',(e)=>{
  e.stopPropagation();
  searchOpen = !searchOpen;
  searchBox.classList.toggle('open', searchOpen);
  if(searchOpen){
    setTimeout(()=>searchInput.focus(),300);
  } else {
    // closing without search — reset
    searchInput.value = '';
    currentSearch = '';
    rerender();
  }
});

// Close search on outside tap/click
document.addEventListener('click',(e)=>{
  if(searchOpen &&
     !searchBox.contains(e.target) &&
     e.target !== document.getElementById('searchToggle') &&
     !document.getElementById('searchToggle').contains(e.target)){
    closeSearch();
  }
});

function closeSearch(){
  searchOpen = false;
  searchBox.classList.remove('open');
  searchInput.value = '';
  currentSearch = '';
  rerender();
}
function doSearch(){
  currentSearch = searchInput.value.trim();
  rerender();
  // if empty, show all
  if(!currentSearch){ return; }
}
searchInput.addEventListener('keydown',(e)=>{ if(e.key==='Enter') doSearch(); });
document.getElementById('searchGo').addEventListener('click', doSearch);

/* ======================
   FILTER
====================== */
const filterBtn = document.getElementById('filterBtn');
const filterDropdown = document.getElementById('filterDropdown');
const filterDot = document.getElementById('filterDot');

filterBtn.addEventListener('click',(e)=>{
  e.stopPropagation();
  filterDropdown.classList.toggle('open');
});
document.addEventListener('click',(e)=>{
  if(!filterBtn.contains(e.target)) filterDropdown.classList.remove('open');
});
function applyFilter(type){
  currentFilter = type;
  filterDropdown.classList.remove('open');
  document.querySelectorAll('.filter-dropdown button').forEach(b=>b.classList.remove('filter-active'));
  if(type==='low'){
    document.getElementById('fLow').classList.add('filter-active');
    filterDot.classList.add('show');
  } else if(type==='high'){
    document.getElementById('fHigh').classList.add('filter-active');
    filterDot.classList.add('show');
  } else {
    filterDot.classList.remove('show');
  }
  saveState();
  // Small timeout to ensure DOM is ready before re-render
  setTimeout(function(){ rerender(); }, 10);
}
// Restore filter UI on load
if(currentFilter==='low'){ document.getElementById('fLow').classList.add('filter-active'); filterDot.classList.add('show'); }
else if(currentFilter==='high'){ document.getElementById('fHigh').classList.add('filter-active'); filterDot.classList.add('show'); }

/* ======================
   CART
====================== */
function toggleCart(id){
  const p = products.find(p=>p.id===id);
  const idx = cart.findIndex(c=>c.id===id);
  const btn = document.getElementById('cart-btn-'+id);
  if(idx===-1){
    cart.push(p);
    if(btn){ btn.className='btn-cart added'; btn.innerHTML='<i class="fa-solid fa-check" style="margin-right:4px;"></i>Added'; }
    showToast('Item added to cart! 🛒','#10B981');
  } else {
    cart.splice(idx,1);
    if(btn){ btn.className='btn-cart'; btn.innerHTML='<i class="fa-solid fa-cart-plus" style="margin-right:4px;"></i>Add to Cart'; }
  }
  saveState(); updateCartUI();
}
function removeFromCart(id){
  cart = cart.filter(c=>c.id!==id);
  const btn = document.getElementById('cart-btn-'+id);
  if(btn){ btn.className='btn-cart'; btn.innerHTML='<i class="fa-solid fa-cart-plus" style="margin-right:4px;"></i>Add to Cart'; }
  saveState(); updateCartUI(); renderCartDrawer();
}
function updateCartUI(){
  const badge = document.getElementById('cartBadge');
  badge.textContent = cart.length;
  badge.style.display = cart.length>0?'flex':'none';
  document.getElementById('cartTotal').textContent = 'Rs. '+cart.reduce((s,p)=>s+p.price,0).toLocaleString();
}
function renderCartDrawer(){
  const el = document.getElementById('cartItems');
  if(cart.length===0){
    el.innerHTML = '<div class="cart-empty"><i class="fa-solid fa-cart-shopping"></i><p style="font-weight:600;margin-bottom:0.4rem;">Your cart is empty</p><p style="font-size:0.82rem;">Add items to get started!</p></div>';
    return;
  }
  el.innerHTML = cart.map(p=>
    '<div class="cart-item">'+
      '<img src="'+p.image+'" alt="'+p.name+'" onerror="this.src=\'https://placehold.co/65x65/161D2E/F5B800?text=SB\'"/>'+
      '<div class="cart-item-info">'+
        '<h4>'+p.name+'</h4>'+
        '<div class="ci-price">Rs. '+p.price.toLocaleString()+'</div>'+
        '<div class="cart-item-actions">'+
          '<button class="ci-detail-btn" onclick="openDetail('+p.id+')"><i class="fa-solid fa-eye" style="margin-right:4px;"></i>Details</button>'+
          '<button class="ci-delete-btn" onclick="removeFromCart('+p.id+')"><i class="fa-solid fa-trash"></i></button>'+
        '</div>'+
      '</div>'+
    '</div>'
  ).join('');
}
function openCart(){
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
  document.body.classList.add('locked');
  renderCartDrawer();
}
function closeCart(){
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
  document.body.classList.remove('locked');
}

/* ======================
   MOBILE NAV
====================== */
function toggleMobileNav(){
  const nav = document.getElementById('mobileNav');
  const icon = document.getElementById('hamburgerIcon');
  nav.classList.toggle('open');
  icon.className = nav.classList.contains('open')?'fa-solid fa-xmark':'fa-solid fa-bars';
}
function closeMobileNav(){
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('hamburgerIcon').className='fa-solid fa-bars';
}

/* ======================
   LOGIN SYSTEM
====================== */
function openLogin(){
  document.getElementById('loginModal').classList.add('open');
  document.body.classList.add('locked');
  // update UI based on logged in
  if(currentUser){
    // already logged in — clicking shows logout option
    document.getElementById('modalSubtitle').textContent = 'Welcome back, '+currentUser.name+'!';
  }
  updateLoginMode();
}
function closeLogin(){
  document.getElementById('loginModal').classList.remove('open');
  document.body.classList.remove('locked');
  clearInputs();
}
function switchMode(){
  loginMode = loginMode==='signin'?'signup':'signin';
  updateLoginMode();
}
function updateLoginMode(){
  const sub = document.getElementById('modalSubtitle');
  const btnTxt = document.getElementById('loginBtnText');
  const sw = document.querySelector('.modal-switch');
  if(loginMode==='signin'){
    sub.textContent = 'Sign in to your account';
    btnTxt.textContent = 'Sign In';
    sw.innerHTML = "Don't have an account? <a onclick='switchMode()'>Sign Up</a>";
  } else {
    sub.textContent = 'Create your account';
    btnTxt.textContent = 'Sign Up';
    sw.innerHTML = "Already have an account? <a onclick='switchMode()'>Sign In</a>";
  }
}
function clearErr(errId, inputId){
  document.getElementById(errId).classList.remove('show');
  document.getElementById(inputId).classList.remove('error-input');
}
function clearInputs(){
  document.getElementById('emailInput').value='';
  document.getElementById('passInput').value='';
  ['emailErr','passErr'].forEach(id=>{ document.getElementById(id).classList.remove('show'); });
  ['emailInput','passInput'].forEach(id=>{ document.getElementById(id).classList.remove('error-input'); });
}
function showFieldError(errId, inputId, msg){
  const err = document.getElementById(errId);
  const inp = document.getElementById(inputId);
  err.textContent = msg; err.classList.add('show');
  inp.classList.add('error-input');
}
function handleLogin(){
  const email = document.getElementById('emailInput').value.trim();
  const pass = document.getElementById('passInput').value.trim();
  let valid = true;

  // Email validation
  if(!email){
    showFieldError('emailErr','emailInput','Email address is required'); valid=false;
  } else if(!email.includes('@')){
    showFieldError('emailErr','emailInput','Email must contain @ sign'); valid=false;
  } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    showFieldError('emailErr','emailInput','Please enter a valid email address'); valid=false;
  }

  // Password validation
  if(!pass){
    showFieldError('passErr','passInput','Password is required'); valid=false;
  } else if(pass.length<6){
    showFieldError('passErr','passInput','Password must be at least 6 characters'); valid=false;
  }

  if(!valid) return;

  // Loading state
  const btn = document.getElementById('submitLogin');
  const spinner = document.getElementById('loginSpinner');
  const btnTxt = document.getElementById('loginBtnText');
  btn.disabled = true;
  spinner.classList.add('show');
  btnTxt.textContent = loginMode==='signin'?'Signing In...':'Creating Account...';

  setTimeout(()=>{
    // Success
    const name = email.split('@')[0];
    currentUser = {email, name};
    saveState();
    updateUserUI();
    closeLogin();
    showToast('Welcome, '+name+'! Login successful ✓','#10B981');
    // reset btn
    btn.disabled=false; spinner.classList.remove('show');
    btnTxt.textContent = loginMode==='signin'?'Sign In':'Sign Up';
  }, 2000);
}
function updateUserUI(){
  const icon = document.getElementById('loginIcon');
  const avatar = document.getElementById('loginAvatar');
  const label = document.getElementById('loginLabel');
  if(currentUser){
    icon.style.display='none';
    avatar.style.display='flex';
    avatar.textContent = currentUser.name.charAt(0).toUpperCase();
    label.textContent = currentUser.name;
    document.getElementById('loginBtn').onclick = logoutUser;
  } else {
    icon.style.display='flex';
    avatar.style.display='none';
    label.textContent = 'Sign Up';
    document.getElementById('loginBtn').onclick = openLogin;
  }
}
function logoutUser(){
  currentUser = null; saveState(); updateUserUI();
  showToast('Logged out successfully','#6B7280');
}
// Restore user UI on load
updateUserUI();

/* ======================
   DETAIL PAGE
====================== */
function openDetail(id){
  const p = products.find(p=>p.id===id);
  const full = Math.floor(p.rating);
  const half = p.rating%1>=0.5?1:0;
  const empty = 5-full-half;
  const stars =
    '<i class="fa-solid fa-star"></i>'.repeat(full)+
    (half?'<i class="fa-solid fa-star-half-stroke"></i>':'')+
    '<i class="fa-regular fa-star empty"></i>'.repeat(empty);
  const total = p.price + DELIVERY_CHARGE;
  const waMsg = encodeURIComponent('Hi, I want to order *'+p.name+'* (Rs. '+p.price+') from Star Brands! Total with delivery: Rs. '+total);

  document.getElementById('detailInner').innerHTML =
    '<div class="detail-grid">'+
      '<div class="detail-img"><img src="'+p.image+'" alt="'+p.name+'" onerror="this.src=\'https://placehold.co/400x400/161D2E/F5B800?text=Star+Brands\'"/></div>'+
      '<div class="detail-info">'+
        '<div class="detail-cat">'+p.category+'</div>'+
        '<div class="detail-title">'+p.name+'</div>'+
        '<div class="detail-rating"><span class="stars">'+stars+'</span><span class="rating-count">('+p.rating+'/5)</span></div>'+
        '<div class="detail-desc">'+p.desc+'</div>'+
        '<div class="detail-meta">'+
          '<div class="dm-row"><i class="fa-solid fa-truck"></i><span class="dm-label">Delivery</span><span class="dm-val">'+p.delivery+' &nbsp;|&nbsp; <span style="color:var(--gold)">Rs. '+DELIVERY_CHARGE+' charge</span></span></div>'+
          '<div class="dm-row"><i class="fa-solid fa-box"></i><span class="dm-label">Availability</span><span class="dm-val" style="color:#10B981;">'+p.stock+'</span></div>'+
          '<div class="dm-row"><i class="fa-solid fa-tag"></i><span class="dm-label">Original Price</span><span class="dm-val" style="text-decoration:line-through;color:var(--muted);">Rs. '+p.original.toLocaleString()+'</span></div>'+
          '<div class="dm-row"><i class="fa-solid fa-piggy-bank"></i><span class="dm-label">You Save</span><span class="dm-val" style="color:#10B981;">Rs. '+(p.original-p.price).toLocaleString()+'</span></div>'+
        '</div>'+
        '<div class="detail-price-wrap">'+
          '<div class="detail-price">Rs. '+total.toLocaleString()+'</div>'+
          '<div class="detail-price-note">Item Rs. '+p.price.toLocaleString()+' + Delivery Rs. '+DELIVERY_CHARGE+' = Total</div>'+
        '</div>'+
        '<div class="detail-btns">'+
          '<button class="btn-buynow" onclick="placeOrder(\''+p.name+'\','+total+')"><i class="fa-solid fa-bolt"></i> Buy Now</button>'+
          '<a class="btn-whatsapp" href="https://wa.me/923414460761?text='+waMsg+'" target="_blank"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>'+
        '</div>'+
      '</div>'+
    '</div>';

  document.getElementById('detailOverlay').classList.add('open');
  document.body.classList.add('locked');
}
function closeDetail(){
  document.getElementById('detailOverlay').classList.remove('open');
  document.body.classList.remove('locked');
}
document.getElementById('detailOverlay').addEventListener('click',function(e){
  if(e.target===this) closeDetail();
});

/* ======================
   ORDER
====================== */
function placeOrder(name, total){
  closeDetail();
  showToast('Order placed for "'+name+'"! Total: Rs. '+total.toLocaleString()+' ✓','#10B981');
}

/* ======================
   TOAST
====================== */
function showToast(msg, color){
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  m.textContent = msg;
  t.style.background = color||'#10B981';
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3200);
}

/* ======================
   INIT
====================== */
rerender();
updateCartUI();

// ESC key
document.addEventListener('keydown',(e)=>{
  if(e.key==='Escape'){ closeDetail(); closeCart(); closeLogin(); closeMobileNav(); closeSearch(); }
});

// Close mobile nav on outside click
document.addEventListener('click',(e)=>{
  const nav = document.getElementById('mobileNav');
  const ham = document.getElementById('hamburger');
  if(nav.classList.contains('open') && !nav.contains(e.target) && !ham.contains(e.target)){
    closeMobileNav();
  }
});
