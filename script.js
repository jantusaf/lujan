// Menú móvil
const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  }
});

// Aparición suave al hacer scroll
document.documentElement.classList.add('js');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Ampliar fotos de la galería
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const box = document.createElement('div');
    box.className = 'lightbox';
    box.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    box.addEventListener('click', () => box.remove());
    document.body.appendChild(box);
  });
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelector('.lightbox')?.remove();
});
