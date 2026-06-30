/* ===========================
   PRODUCTS DATA
=========================== */
const products = [
  {id:1,name:"Classic Leather Watch",category:"Accessories",price:4500,original:6000,desc:"Premium genuine leather strap watch with sapphire glass and Swiss movement. Timeless elegance for every occasion.",image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",badge:"Bestseller",rating:4.5,delivery:"2–3 Days",stock:"In Stock"},
  {id:2,name:"Wireless Noise-Cancel Headphones",category:"Electronics",price:8999,original:12000,desc:"Premium over-ear headphones with 40hr battery life, active noise cancellation, and Hi-Fi sound quality.",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",badge:"Hot",rating:5,delivery:"1–2 Days",stock:"In Stock"},
  {id:3,name:"Men's Slim Fit Suit",category:"Fashion",price:12500,original:18000,desc:"Tailored slim-fit suit in premium wool blend. Perfect for weddings, events, and formal occasions.",image:"https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&h=400&fit=crop",badge:"Premium",rating:4,delivery:"3–4 Days",stock:"In Stock"},
  {id:4,name:"Perfume – Oud Royale",category:"Fragrance",price:3200,original:4500,desc:"Long-lasting oriental fragrance with notes of Oud, rose, and amber. Inspired by Arabian royalty.",image:"https://images.unsplash.com/photo-1707899997123-226a3f57aa32?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",badge:"New",rating:4.5,delivery:"2–3 Days",stock:"In Stock"},
  {id:5,name:"Smart Fitness Band",category:"Electronics",price:5500,original:7500,desc:"Track steps, heart rate, sleep & calories. IP68 waterproof with 10-day battery. Works with iOS & Android.",image:"https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",badge:"Sale",rating:4,delivery:"1–2 Days",stock:"In Stock"},
  {id:6,name:"Luxury Handbag – Brown",category:"Fashion",price:7800,original:11000,desc:"Genuine leather handbag with gold-tone hardware, multiple compartments, and detachable strap.",image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",badge:"Trending",rating:4.5,delivery:"2–3 Days",stock:"In Stock"},
  {id:7,name:"Running Sports Shoes",category:"Footwear",price:5200,original:7200,desc:"Lightweight mesh running shoes with cushioned sole, breathable upper and anti-slip grip.",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",badge:"Popular",rating:4,delivery:"2–4 Days",stock:"In Stock"},
  {id:8,name:"Sunglasses – Aviator Gold",category:"Accessories",price:2800,original:4200,desc:"UV400 polarized aviator sunglasses with gold metal frame and gradient lenses.",image:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",badge:"Hot",rating:4.5,delivery:"1–2 Days",stock:"In Stock"},
  {id:9,name:"Laptop Backpack 40L",category:"Bags",price:3600,original:5000,desc:"Waterproof 40L laptop backpack with USB charging port, anti-theft pocket, and ergonomic design.",image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",badge:"Sale",rating:5,delivery:"2–3 Days",stock:"In Stock"},
  {id:10,name:"Silk Kurta Set",category:"Fashion",price:4200,original:6500,desc:"Handcrafted pure silk kurta with embroidery detailing. Available in multiple sizes and colors.",image:"https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&h=400&fit=crop",badge:"Eid Special",rating:4,delivery:"3–5 Days",stock:"In Stock"},
  {id:11,name:"Bluetooth Speaker",category:"Electronics",price:6500,original:9000,desc:"360° surround sound speaker with deep bass, 24hr battery, waterproof design & built-in mic.",image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",badge:"Bestseller",rating:4.5,delivery:"1–3 Days",stock:"In Stock"},
  {id:12,name:"Skincare Gift Set",category:"Beauty",price:3900,original:5500,desc:"Luxurious 5-piece skincare set: cleanser, toner, serum, moisturizer & eye cream for radiant skin.",image:"https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",badge:"Gift",rating:5,delivery:"2–3 Days",stock:"In Stock"},
  {id:13,name:"Formal Leather Belt",category:"Accessories",price:1800,original:2800,desc:"Genuine full-grain leather belt with gold buckle. Perfect for formal and semi-formal wear.",image:"https://images.unsplash.com/photo-1666723043169-22e29545675c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",badge:"Classic",rating:4,delivery:"2–3 Days",stock:"In Stock"},
  {id:14,name:"Casual Polo T-Shirt",category:"Fashion",price:1500,original:2200,desc:"100% cotton pique polo with embroidered logo. Breathable, comfortable & available in 8 colors.",image:"https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&h=400&fit=crop",badge:"Daily Wear",rating:4,delivery:"2–4 Days",stock:"In Stock"},
  {id:15,name:"Gold Chain Necklace",category:"Jewelry",price:9500,original:14000,desc:"18K gold-plated stainless steel chain necklace. Hypoallergenic, tarnish-resistant, and elegant.",image:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",badge:"Luxury",rating:4.5,delivery:"3–5 Days",stock:"In Stock"},
  {id:16,name:"Power Bank 20000mAh",category:"Electronics",price:4100,original:6000,desc:"20000mAh fast-charge power bank with dual USB & Type-C, LED display, and compact design.",image:"https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=400&h=400&fit=crop",badge:"Must Have",rating:5,delivery:"1–2 Days",stock:"In Stock"},
  {id:17,name:"Woolen Shawl – Kashmiri",category:"Fashion",price:6800,original:9500,desc:"Authentic hand-woven Kashmiri shawl with intricate embroidery. Warm, soft, and timeless.",image:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop",badge:"Handmade",rating:4.5,delivery:"4–6 Days",stock:"In Stock"},
  {id:18,name:"Gaming Mouse RGB",category:"Electronics",price:3300,original:4800,desc:"Ergonomic gaming mouse with 7 buttons, 12000 DPI sensor, RGB lighting & braided cable.",image:"https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",badge:"Gaming",rating:4,delivery:"2–3 Days",stock:"In Stock"},
  {id:19,name:"Stainless Steel Flask",category:"Lifestyle",price:2200,original:3200,desc:"Double-wall vacuum insulated 1L flask. Keeps drinks hot 24hrs or cold 48hrs. Leak-proof lid.",image:"https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?w=400&h=400&fit=crop",badge:"Eco",rating:5,delivery:"2–3 Days",stock:"In Stock"},
  {id:20,name:"Printed Diary – Hardcover",category:"Stationery",price:980,original:1500,desc:"A5 premium hardcover diary with 200 ivory pages, ribbon bookmark, and pen loop. Great gift.",image:"https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=400&fit=crop",badge:"Gift",rating:4,delivery:"1–2 Days",stock:"In Stock"},
];

let cart = [];
let currentFilter = 'none';
let currentSearch = '';
let displayedProducts = [...products];

/* ===========================
   HERO STARS
=========================== */
function createStars(){
  const c = document.getElementById('heroStars');
  for(let i=0;i<60;i++){
    const s = document.createElement('div');
    s.className='star';
    const sz = Math.random()*3+1;
    s.style.cssText=`width:${sz}px;height:${sz}px;top:${Math.random()*100}%;left:${Math.random()*100}%;--dur:${Math.random()*3+2}s;animation-delay:${Math.random()*3}s;`;
    c.appendChild(s);
  }
}
createStars();

/* ===========================
   TYPING ANIMATION
=========================== */
const words = ["Discover & Browse","Select & Shop","Deliver & Enjoy"];
let wi=0,ci=0,deleting=false;
const el = document.getElementById('typingText');
function type(){
  const w = words[wi];
  if(!deleting){
    el.textContent = w.slice(0,ci+1);
    ci++;
    if(ci===w.length){ setTimeout(()=>{deleting=true;type();},2000); return; }
  } else {
    el.textContent = w.slice(0,ci-1);
    ci--;
    if(ci===0){ deleting=false; wi=(wi+1)%words.length; }
  }
  setTimeout(type, deleting?60:100);
}
type();

/* ===========================
   PRODUCTS RENDER
=========================== */
function getColumns(){
  const w = window.innerWidth;
  if(w>=1200) return 4;
  if(w>=900) return 3;
  if(w>=540) return 2;
  return 1;
}

function getCardAnim(idx, cols){
  const pos = idx % cols;
  const w = window.innerWidth;
  if(cols===4){ if(pos===0||pos===1) return 'anim-left'; return 'anim-right'; }
  if(cols===3){ if(pos===0) return 'anim-left'; if(pos===2) return 'anim-right'; return 'anim-bottom'; }
  if(cols===2){ return pos===0?'anim-left':'anim-right'; }
  // mobile 1 col: alternate
  if(idx%3===0) return 'anim-right';
  if(idx%3===1) return 'anim-bottom';
  return 'anim-right';
}

function renderStars(r){
  let s='';
  for(let i=1;i<=5;i++){
    if(i<=Math.floor(r)) s+=`<i class="fa-solid fa-star"></i>`;
    else if(i-r<1) s+=`<i class="fa-solid fa-star-half-stroke"></i>`;
    else s+=`<i class="fa-regular fa-star empty"></i>`;
  }
  return `<span class="stars">${s}</span>`;
}

function renderProducts(arr){
  const grid = document.getElementById('productsGrid');
  const noRes = document.getElementById('noResultMsg');
  // clear old cards
  Array.from(grid.children).forEach(c=>{ if(!c.id) grid.removeChild(c); });

  if(arr.length===0){
    noRes.style.display='block';
    return;
  }
  noRes.style.display='none';

  const cols = getColumns();
  arr.forEach((p,idx)=>{
    const inCart = cart.some(c=>c.id===p.id);
    const card = document.createElement('div');
    card.className='product-card';
    card.id=`card-${p.id}`;
    const anim = getCardAnim(idx, cols);
    const delay = (idx%cols)*0.12;
    card.innerHTML=`
      <div class="pc-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x400/161D2E/F5B800?text=Star+Brands'"/>
        <span class="pc-badge">${p.badge}</span>
      </div>
      <div class="pc-body">
        <div class="pc-category">${p.category}</div>
        <div class="pc-title">${p.name}</div>
        <div class="pc-desc">${p.desc}</div>
        <div class="pc-price">Rs. ${p.price.toLocaleString()} <span class="original">Rs. ${p.original.toLocaleString()}</span></div>
        <div class="pc-btns">
          <button class="btn-details" onclick="openDetail(${p.id})">
            <i class="fa-solid fa-eye" style="margin-right:4px;"></i>Details
          </button>
          <button class="btn-cart ${inCart?'added':''}" id="cart-btn-${p.id}" onclick="toggleCart(${p.id})">
            ${inCart?'<i class="fa-solid fa-check" style="margin-right:4px;"></i>Added':'<i class="fa-solid fa-cart-plus" style="margin-right:4px;"></i>Add to Cart'}
          </button>
        </div>
      </div>`;

    // Use IntersectionObserver for scroll animations
    grid.appendChild(card);

    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(en=>{
        if(en.isIntersecting){
          setTimeout(()=>{
            card.classList.add(anim,'visible');
          }, delay*1000);
          obs.unobserve(card);
        }
      });
    },{threshold:0.1});
    obs.observe(card);
  });
}

function getFilteredProducts(){
  let arr = [...products];
  if(currentSearch.trim()){
    const q = currentSearch.toLowerCase();
    arr = arr.filter(p=>
      p.name.toLowerCase().includes(q)||
      p.category.toLowerCase().includes(q)||
      p.desc.toLowerCase().includes(q)
    );
  }
  if(currentFilter==='low') arr.sort((a,b)=>a.price-b.price);
  else if(currentFilter==='high') arr.sort((a,b)=>b.price-a.price);
  return arr;
}

function rerender(){ renderProducts(getFilteredProducts()); }
window.addEventListener('resize',()=>{ rerender(); });

/* ===========================
   SEARCH
=========================== */
const searchBox = document.getElementById('searchBox');
const searchToggle = document.getElementById('searchToggle');
const searchInput = document.getElementById('searchInput');
let searchOpen = false;

searchToggle.addEventListener('click',(e)=>{
  e.stopPropagation();
  searchOpen=!searchOpen;
  searchBox.classList.toggle('open',searchOpen);
  if(searchOpen) setTimeout(()=>searchInput.focus(),350);
});

document.addEventListener('click',(e)=>{
  if(searchOpen && !searchBox.contains(e.target) && e.target!==searchToggle){
    searchOpen=false;
    searchBox.classList.remove('open');
  }
});

function doSearch(){
  currentSearch = searchInput.value.trim();
  rerender();
}

searchInput.addEventListener('keydown',(e)=>{ if(e.key==='Enter') doSearch(); });
document.getElementById('searchGo').addEventListener('click', doSearch);

/* ===========================
   FILTER
=========================== */
const filterBtn = document.getElementById('filterBtn');
const filterDropdown = document.getElementById('filterDropdown');
const filterLabel = document.getElementById('filterLabel');

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
  if(type==='low'){ document.getElementById('fLow').classList.add('filter-active'); filterLabel.classList.add('show'); }
  else if(type==='high'){ document.getElementById('fHigh').classList.add('filter-active'); filterLabel.classList.add('show'); }
  else { filterLabel.classList.remove('show'); }
  rerender();
}

/* ===========================
   CART
=========================== */
function toggleCart(id){
  const p = products.find(p=>p.id===id);
  const idx = cart.findIndex(c=>c.id===id);
  const btn = document.getElementById(`cart-btn-${id}`);
  if(idx===-1){
    cart.push(p);
    if(btn){
      btn.className='btn-cart added';
      btn.innerHTML='<i class="fa-solid fa-check" style="margin-right:4px;"></i>Added';
    }
    showToast('Item added to cart! 🛒','#10B981');
  } else {
    cart.splice(idx,1);
    if(btn){
      btn.className='btn-cart';
      btn.innerHTML='<i class="fa-solid fa-cart-plus" style="margin-right:4px;"></i>Add to Cart';
    }
  }
  updateCartUI();
}

function removeFromCart(id){
  cart = cart.filter(c=>c.id!==id);
  updateCartUI();
  renderCartDrawer();
  // update button on grid
  const btn = document.getElementById(`cart-btn-${id}`);
  if(btn){
    btn.className='btn-cart';
    btn.innerHTML='<i class="fa-solid fa-cart-plus" style="margin-right:4px;"></i>Add to Cart';
  }
}

function updateCartUI(){
  const badge = document.getElementById('cartBadge');
  badge.textContent = cart.length;
  badge.style.display = cart.length>0?'flex':'none';
  document.getElementById('cartTotal').textContent = 'Rs. ' + cart.reduce((s,p)=>s+p.price,0).toLocaleString();
  renderCartDrawer();
}

function renderCartDrawer(){
  const el = document.getElementById('cartItems');
  if(cart.length===0){
    el.innerHTML=`<div class="cart-empty">
      <i class="fa-solid fa-cart-shopping"></i>
      <p style="font-weight:600;margin-bottom:0.5rem;">Your cart is empty</p>
      <p style="font-size:0.85rem;">Add items to get started!</p>
    </div>`;
    return;
  }
  el.innerHTML = cart.map(p=>`
    <div class="cart-item">
      <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/70x70/161D2E/F5B800?text=SB'"/>
      <div class="cart-item-info">
        <h4>${p.name}</h4>
        <div class="ci-price">Rs. ${p.price.toLocaleString()}</div>
        <div class="cart-item-actions">
          <button class="ci-detail-btn" onclick="openDetail(${p.id})"><i class="fa-solid fa-eye" style="margin-right:4px;"></i>Details</button>
          <button class="ci-delete-btn" onclick="removeFromCart(${p.id})"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    </div>
  `).join('');
}

function openCart(){
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
  renderCartDrawer();
}
function closeCart(){
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
}

/* ===========================
   MOBILE NAV
=========================== */
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

/* ===========================
   DETAIL PAGE
=========================== */
function openDetail(id){
  const p = products.find(p=>p.id===id);
  const full = Math.floor(p.rating);
  const half = p.rating%1>=0.5?1:0;
  const empty = 5-full-half;
  const stars = '<i class="fa-solid fa-star"></i>'.repeat(full)+
                (half?'<i class="fa-solid fa-star-half-stroke"></i>':'')+
                '<i class="fa-regular fa-star empty"></i>'.repeat(empty);

  document.getElementById('detailInner').innerHTML=`
    <div class="detail-grid">
      <div class="detail-img"><img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/400x400/161D2E/F5B800?text=Star+Brands'"/></div>
      <div class="detail-info">
        <div class="detail-cat">${p.category}</div>
        <div class="detail-title">${p.name}</div>
        <div class="detail-rating">
          <span class="stars">${stars}</span>
          <span class="rating-count">(${p.rating}/5 Rating)</span>
        </div>
        <div class="detail-desc">${p.desc}</div>
        <div class="detail-meta">
          <div class="dm-row"><i class="fa-solid fa-truck"></i><span class="dm-label">Delivery</span><span class="dm-val">${p.delivery}</span></div>
          <div class="dm-row"><i class="fa-solid fa-box"></i><span class="dm-label">Availability</span><span class="dm-val" style="color:#10B981;">${p.stock}</span></div>
          <div class="dm-row"><i class="fa-solid fa-tag"></i><span class="dm-label">Original Price</span><span class="dm-val" style="text-decoration:line-through;color:var(--muted);">Rs. ${p.original.toLocaleString()}</span></div>
          <div class="dm-row"><i class="fa-solid fa-percent"></i><span class="dm-label">You Save</span><span class="dm-val" style="color:#10B981;">Rs. ${(p.original-p.price).toLocaleString()}</span></div>
        </div>
        <div class="detail-price">Rs. ${p.price.toLocaleString()}</div>
        <div class="detail-btns">
          <button class="btn-buynow" onclick="placeOrder('${p.name}')">
            <i class="fa-solid fa-bolt"></i> Buy Now
          </button>
          <a class="btn-whatsapp" href="https://wa.me/923414460761?text=Hi%2C%20I%20want%20to%20order%20*${encodeURIComponent(p.name)}*%20(Rs.%20${p.price})%20from%20Star%20Brands!" target="_blank">
            <i class="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>
    </div>`;

  document.getElementById('detailOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}

function closeDetail(){
  document.getElementById('detailOverlay').classList.remove('open');
  document.body.style.overflow='';
}

document.getElementById('detailOverlay').addEventListener('click',function(e){
  if(e.target===this) closeDetail();
});

/* ===========================
   ORDER
=========================== */
function placeOrder(name){
  closeDetail();
  showToast(`✅ Order Placed for "${name}"! We'll contact you soon.`,'#10B981');
}

/* ===========================
   TOAST
=========================== */
function showToast(msg, color='#10B981'){
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  m.textContent = msg;
  t.style.background = color;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}

/* ===========================
   INIT
=========================== */
rerender();
updateCartUI();

// Close detail on ESC
document.addEventListener('keydown',(e)=>{
  if(e.key==='Escape'){
    closeDetail();
    closeCart();
    closeMobileNav();
  }
});