import HamburgerMenu from '../utils/hamburger-menu';
import UrlParse from '../routes/url-parse';
import routes from '../routes/routes';

class App {
  constructor({BtnBurger, menu, ShowResto}) {
    this._BtnBurger = BtnBurger;
    this._menu = menu;
    this._ShowResto = ShowResto;

    this._initialAppShell();
  }

  _initialAppShell() {
    HamburgerMenu.init({
      BtnBurger: this._BtnBurger,
      menu: this._menu,
    });
  }

  async renderPage() {
    const url = UrlParse.parseActiveUrlWithCombiner();
    const page = routes[url];
    try {
      this._ShowResto.innerHTML = await page.render();
      await page.afterRender();

    } catch (error) {
      console.log('PAGE 404');
    }

    // skip link
    const skiplinkElem = document.querySelector('.skip-link');
    skiplinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#goheader').focus();
      console.log(document.querySelector('#goheader'));
    });
  }
};
export default App;
