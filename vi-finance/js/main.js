// Nav toggle
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// Nav shrink on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const isMobile = window.innerWidth < 1024;
  const base = isMobile ? '16px 28px' : '20px 60px';
  const shrunk = isMobile ? '12px 28px' : '13px 60px';
  nav.style.padding = window.scrollY > 60 ? shrunk : base;
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
  });
}, { threshold: 0.08 });
reveals.forEach(el => obs.observe(el));

// Email waitlist form
function handleSubmit() {
  const email = document.getElementById('emailInput').value;
  const msg = document.getElementById('pr-msg');
  if (!email || !email.includes('@')) {
    msg.style.color = '#e05a5a';
    msg.textContent = '⚠ Inserisci un indirizzo email valido.';
    return;
  }
  msg.style.color = '#3bdb82';
  msg.textContent = '✓ Iscritto! Ti avviseremo al lancio. Grazie.';
  document.getElementById('emailInput').value = '';
}
