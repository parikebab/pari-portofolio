// =====================================================
// PARI PORTFOLIO — EASY EDIT VERSION
// Untuk mengganti teks: edit index.html
// Untuk mengganti gambar: ganti file di folder assets/
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.page');
  const pageButtons = document.querySelectorAll('[data-page]');

  function showPage(id) {
    pages.forEach(page => page.classList.toggle('active', page.id === id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(revealVisible, 80);
  }

  pageButtons.forEach(button => {
    button.addEventListener('click', () => showPage(button.dataset.page));
  });

  function revealVisible() {
    document.querySelectorAll('.page.active .reveal').forEach((element, index) => {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
        setTimeout(() => element.classList.add('show'), index * 80);
      }
    });
  }

  window.addEventListener('scroll', revealVisible);
  revealVisible();

  // Cursor animation — otomatis mati pada layar sentuh.
  const cursor = document.querySelector('.cursor');
  if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('pointermove', event => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    });

    document.querySelectorAll('a, button, .project').forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursor.style.width = '34px';
        cursor.style.height = '34px';
        cursor.style.background = 'rgba(255,255,255,.35)';
      });
      element.addEventListener('mouseleave', () => {
        cursor.style.width = '18px';
        cursor.style.height = '18px';
        cursor.style.background = 'transparent';
      });
    });
  } else {
    cursor.style.display = 'none';
  }
});
