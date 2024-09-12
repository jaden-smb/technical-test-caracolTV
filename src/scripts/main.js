import { fetchData } from './services.js';
import { registerPartial } from './partials.js';
import { validateUrl } from './validations.js';

class TemplateManager {
  static async registerPartials() {
    const partials = [
      { name: 'menu', path: 'src/views/partials/menu.hbs' },
      { name: 'header', path: 'src/views/partials/header.hbs' },
      { name: 'pageLead', path: 'src/views/partials/pageLead.hbs' },
      { name: 'main', path: 'src/views/partials/main.hbs' },
    ];

    for (const partial of partials) {
      await registerPartial(partial.name, partial.path);
    }
  }

  static async fetchMainTemplate(url) {
    if (!validateUrl(url)) {
      throw new Error('Invalid URL for main template');
    }
    const response = await fetch(url);
    return await response.text();
  }
}

class DataManager {
  static async fetchData(url) {
    if (!validateUrl(url)) {
      throw new Error('Invalid URL for data');
    }
    return await fetchData(url);
  }
}

class UIManager {
  static setupHamburgerMenu() {
    const hamburgerButton = document.getElementById('hamburger-button');
    const hamburgerNav = document.getElementById('hamburger-nav');

    hamburgerButton.addEventListener('click', (event) => {
      event.stopPropagation();
      hamburgerNav.classList.toggle('hamburger-menu__nav--hidden');
      hamburgerNav.classList.toggle('hamburger-menu__nav--visible');
    });

    document.addEventListener('click', (event) => {
      if (!hamburgerNav.contains(event.target) && !hamburgerButton.contains(event.target)) {
        hamburgerNav.classList.add('hamburger-menu__nav--hidden');
        hamburgerNav.classList.remove('hamburger-menu__nav--visible');
      }
    });
  }

  static setupHeaderNavigation() {
    const showTrendButton = document.getElementById('show_trend');
    const headerNavigation = document.getElementById('header-navigation');

    showTrendButton.addEventListener('click', (event) => {
      event.stopPropagation();
      headerNavigation.style.display = headerNavigation.style.display === 'block' ? 'none' : 'block';
    });
  }
}

class MainApp {
  static async init() {
    try {
      await TemplateManager.registerPartials();

      const mainTemplateUrl = 'src/views/layout/template.hbs';
      const mainTemplate = await TemplateManager.fetchMainTemplate(mainTemplateUrl);
      Handlebars.registerPartial('template', mainTemplate);

      const dataUrl = 'data/test.json';
      const data = await DataManager.fetchData(dataUrl);

      const templateSource = document.getElementById('template').innerHTML;
      const template = Handlebars.compile(templateSource);
      const html = template(data);
      document.body.innerHTML = html;

      UIManager.setupHamburgerMenu();
      UIManager.setupHeaderNavigation();
    } catch (error) {
      console.error('Error loading templates or data:', error);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  MainApp.init();
});

function playAudio(url) {
  const audio = new Audio(url);
  audio.play();
}