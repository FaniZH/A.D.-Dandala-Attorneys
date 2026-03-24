/* ═══════════════════════════════
   YEAR — automated
═══════════════════════════════ */
const yr = new Date().getFullYear();
const yearEl = document.getElementById('fyear');
if(yearEl) yearEl.textContent = yr;
document.querySelectorAll('.blog-year').forEach(el => el.textContent = yr);

/* ═══════════════════════════════
   SCROLL TO TOP
═══════════════════════════════ */
const scrollBtn = document.getElementById('scrollTop');
if(scrollBtn){
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('show', window.scrollY > 400);
  });
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
}

/* ═══════════════════════════════
   BURGER / MOBILE MENU
   — burger opens, X closes
═══════════════════════════════ */
const burgerBtn   = document.getElementById('burgerBtn');
const mobileMenu  = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

if(burgerBtn && mobileMenu){
  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
}
if(mobileClose && mobileMenu){
  mobileClose.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
}

function closeMobile(){
  if(mobileMenu){
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ═══════════════════════════════
   BLOG PAGE NAVIGATION
═══════════════════════════════ */
function openBlog(){
  window.location.href = 'blog.html';
  /*window.location.href = 'index.html';*/
}

/* ═══════════════════════════════
   BLOG CATEGORY FILTER
   (used on blog.html)
═══════════════════════════════ */
function filterBlog(cat, btn){
  document.querySelectorAll('.blog-cats button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#articlesGrid [data-cat]').forEach(card => {
    card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
  });
}

/* ═══════════════════════════════
   SCROLL ANIMATIONS
═══════════════════════════════ */
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add('on');
      obs.unobserve(e.target);
    }
  });
}, {threshold: 0.1});
document.querySelectorAll('.anim').forEach(el => obs.observe(el));

/* ═══════════════════════════════
   CONTACT FORM SUBMIT
═══════════════════════════════ */
function handleSubmit(e){
  e.preventDefault();
  alert('Thank you — we will be in touch shortly.');
}