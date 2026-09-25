const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  siteNav.classList.toggle('is-open', !isOpen);
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    siteNav.classList.remove('is-open');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const translations = {
  en: {
    menu: 'Menu', navWork: 'Work', navAbout: 'About', navContact: 'Contact',
    heroEyebrow: 'Illustrator / image-maker',
    heroTitle: 'Illustration for stories<br />worth <em>getting lost in.</em>',
    heroIntro: 'I create charismatic and curious images for books, publishers, and people with stories to tell.',
    exploreWork: 'Explore selected work <span>↘</span>',
    statementKicker: 'A little about the work',
    statementCopy: 'Playful visual worlds, thoughtful details, and a soft spot for the unexpected.',
    workEyebrow: 'Selected projects', workTitle: 'A few things<br /><em>I’ve made.</em>',
    workNote: 'A selection of editorial, publishing, and personal illustration.', illustration: 'Illustration',
    aboutEyebrow: 'Hi, I’m Dani Vendramini', aboutTitle: 'Images with<br /><em>a point of view.</em>',
    aboutFirst: 'Hi, I’m Dani Vendramini, an illustrator based in São Paulo, Brazil and available worldwide. I create illustrations for children’s and young readers’ books, including picture books, covers, chapter headings, spreads, spot illustrations, and vignettes.',
    aboutSecond: 'My work combines traditional and digital techniques, using watercolor, gouache, pencils, pens, crayons, and handmade wood-stamp textures to create illustrations with a tactile, playful quality.',
    aboutThird: 'I’m especially drawn to characters—their personalities, little details, and the stories they can tell without words. My goal is to create images that feel warm and relatable, giving young readers a chance to recognize themselves and their world in the stories they encounter. I’m always excited to collaborate on stories that have something to say.',
    moreAbout: 'More about me <span>↘</span>', contactEyebrow: 'Have a good idea?',
    contactTitle: 'Let’s make<br /><em>something</em> together.',
    contactFooter: 'Available worldwide.',
    footerTagline: 'Illustrations & good things', backToTop: 'Back to top ↑',
  },
  es: {
    menu: 'Menú', navWork: 'Obra', navAbout: 'Sobre mí', navContact: 'Contacto',
    heroEyebrow: 'Ilustradora / creadora de imágenes',
    heroTitle: 'Ilustración para historias<br />en las que <em>perderse.</em>',
    heroIntro: 'Creo imágenes carismáticas y curiosas para libros, editoriales y personas con historias que contar.',
    exploreWork: 'Ver obra seleccionada <span>↘</span>',
    statementKicker: 'Un poco sobre el trabajo',
    statementCopy: 'Mundos visuales lúdicos, detalles pensados y una debilidad por lo inesperado.',
    workEyebrow: 'Proyectos seleccionados', workTitle: 'Algunas cosas<br /><em>que he hecho.</em>',
    workNote: 'Una selección de ilustración editorial, para publicaciones y personal.', illustration: 'Ilustración',
    aboutEyebrow: 'Hola, soy Dani Vendramini', aboutTitle: 'Imágenes con<br /><em>un punto de vista.</em>',
    aboutFirst: 'Hola, soy Dani Vendramini, una ilustradora de São Paulo, Brasil, disponible para trabajar en todo el mundo. Creo ilustraciones para libros infantiles y juveniles, incluyendo álbumes ilustrados, portadas, encabezados de capítulos, dobles páginas, ilustraciones puntuales y viñetas.',
    aboutSecond: 'Mi trabajo combina técnicas tradicionales y digitales: acuarela, gouache, lápices, bolígrafos, crayones y texturas hechas a mano con sellos de madera, para crear ilustraciones con una cualidad táctil y lúdica.',
    aboutThird: 'Me atraen especialmente los personajes: sus personalidades, los pequeños detalles y las historias que pueden contar sin palabras. Mi objetivo es crear imágenes cálidas y cercanas, que permitan a los lectores jóvenes reconocerse a sí mismos y a su mundo en las historias que encuentran. Siempre me entusiasma colaborar en historias que tienen algo que decir.',
    moreAbout: 'Más sobre mí <span>↘</span>', contactEyebrow: '¿Tienes una buena idea?',
    contactTitle: 'Hagamos<br /><em>algo</em> juntas.',
    contactFooter: 'Disponible en todo el mundo.',
    footerTagline: 'Ilustraciones y cosas buenas', backToTop: 'Volver arriba ↑',
  },
  pt: {
    menu: 'Menu', navWork: 'Trabalhos', navAbout: 'Sobre mim', navContact: 'Contato',
    heroEyebrow: 'Ilustradora / criadora de imagens',
    heroTitle: 'Ilustração para histórias<br />em que vale a pena <em>se perder.</em>',
    heroIntro: 'Crio imagens carismáticas e curiosas para livros, editoras e pessoas com histórias para contar.',
    exploreWork: 'Ver trabalhos selecionados <span>↘</span>',
    statementKicker: 'Um pouco sobre o trabalho',
    statementCopy: 'Mundos visuais brincalhões, detalhes cuidadosos e um carinho especial pelo inesperado.',
    workEyebrow: 'Projetos selecionados', workTitle: 'Algumas coisas<br /><em>que eu fiz.</em>',
    workNote: 'Uma seleção de ilustrações editoriais, publicações e trabalhos pessoais.', illustration: 'Ilustração',
    aboutEyebrow: 'Olá, eu sou Dani Vendramini', aboutTitle: 'Imagens com<br /><em>um ponto de vista.</em>',
    aboutFirst: 'Olá, eu sou Dani Vendramini, uma ilustradora de São Paulo, Brasil, disponível para trabalhar no mundo todo. Crio ilustrações para livros infantis e juvenis, incluindo livros ilustrados, capas, aberturas de capítulos, páginas duplas, ilustrações pontuais e vinhetas.',
    aboutSecond: 'Meu trabalho combina técnicas tradicionais e digitais, usando aquarela, guache, lápis, canetas, giz de cera e texturas feitas à mão com carimbos de madeira para criar ilustrações com uma qualidade tátil e lúdica.',
    aboutThird: 'Sou especialmente atraída por personagens — suas personalidades, pequenos detalhes e as histórias que podem contar sem palavras. Meu objetivo é criar imagens acolhedoras e relacionáveis, dando aos jovens leitores a chance de se reconhecerem e reconhecerem seu mundo nas histórias que encontram. Estou sempre animada para colaborar em histórias que têm algo a dizer.',
    moreAbout: 'Mais sobre mim <span>↘</span>', contactEyebrow: 'Tem uma boa ideia?',
    contactTitle: 'Vamos criar<br /><em>algo</em> juntas.',
    contactFooter: 'Disponível no mundo todo.',
    footerTagline: 'Ilustrações e coisas boas', backToTop: 'Voltar ao topo ↑',
  },
};

const applyLanguage = (language) => {
  const copy = translations[language] || translations.en;
  document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = copy[element.dataset.i18nHtml];
  });
  document.querySelectorAll('[data-language]').forEach((button) => {
    const selected = button.dataset.language === language;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  localStorage.setItem('portfolio-language', language);
};

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.language));
});

applyLanguage(localStorage.getItem('portfolio-language') || 'en');

const carousel = document.querySelector('.hero-carousel');
const slides = carousel?.querySelectorAll('.carousel-slide');
const carouselCount = carousel?.querySelector('.carousel-count');
let activeSlide = 0;

const showSlide = (index) => {
  if (!slides?.length) return;
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle('is-active', slideIndex === activeSlide);
  });
  carouselCount.textContent = `${activeSlide + 1} / ${slides.length}`;
};

carousel?.querySelectorAll('[data-carousel-direction]').forEach((button) => {
  button.addEventListener('click', () => {
    showSlide(activeSlide + (button.dataset.carouselDirection === 'next' ? 1 : -1));
  });
});

if (slides?.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.setInterval(() => showSlide(activeSlide + 1), 5000);
}

const lightbox = document.querySelector('#image-lightbox');
const lightboxImage = lightbox?.querySelector('.lightbox-image');
const closeLightbox = () => {
  if (!lightbox) return;
  lightbox.hidden = true;
  document.body.classList.remove('lightbox-open');
};

document.querySelectorAll('[data-lightbox-image]').forEach((card) => {
  card.addEventListener('click', (event) => {
    event.preventDefault();
    const thumbnail = card.querySelector('img');
    lightboxImage.src = card.href;
    lightboxImage.alt = thumbnail.alt;
    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
    lightbox.querySelector('.lightbox-close').focus();
  });
});

lightbox?.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !lightbox?.hidden) closeLightbox();
});
