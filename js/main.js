// Language switching
const langBtns = document.querySelectorAll('.lang-btn');
let currentLang = 'lv';

langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    if (lang === currentLang) return;
    currentLang = lang;

    langBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('[data-lv][data-en]').forEach(el => {
      el.textContent = el.dataset[lang];
    });

    document.documentElement.lang = lang;
  });
});
