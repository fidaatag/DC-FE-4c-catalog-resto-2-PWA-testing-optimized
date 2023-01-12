/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
import '../styles/style.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  BtnBurger: document.querySelector('#hamburger'),
  menu: document.querySelector('#menu'),
  ShowResto: document.querySelector('#showresto'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
