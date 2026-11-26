(() => {
  const html = document.documentElement;
  const languageSwitch = document.getElementById('languageSwitch');
  const menuToggle = document.getElementById('menuToggle');
  const primaryNav = document.getElementById('primaryNav');
  const year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  function setLanguage(language) {
    const lang = language === 'en' ? 'en' : 'hi';
    html.lang = lang;
    document.querySelectorAll('[data-hi][data-en]').forEach((element) => {
      const value = element.getAttribute(`data-${lang}`);
      if (value !== null) element.innerHTML = value;
    });
    if (languageSwitch) {
      languageSwitch.textContent = lang === 'hi' ? 'EN' : 'हिंदी';
      languageSwitch.setAttribute('aria-label', lang === 'hi' ? 'Switch to English' : 'हिंदी में देखें');
    }
    document.title = lang === 'hi'
      ? 'अखिल भारतीय सांस्कृतिक विकास महासंघ | स्थापना 1995'
      : 'Akhil Bharatiya Sanskritik Vikas Mahasangh | Established 1995';
  }

  if (languageSwitch) {
    languageSwitch.addEventListener('click', () => setLanguage(html.lang === 'hi' ? 'en' : 'hi'));
  }

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'मेन्यू बंद करें' : 'मेन्यू खोलें');
    });
    primaryNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        primaryNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
