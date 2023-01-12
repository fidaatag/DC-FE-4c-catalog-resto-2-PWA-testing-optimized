const HamburgerMenu = {
  init({BtnBurger, menu}) {
    BtnBurger.addEventListener('click', (event) => {
      this._toggleMenu(event, menu);
      event.preventDefault();
    });
  },

  _toggleMenu(event, menu) {
    event.stopPropagation();
    menu.classList.toggle('open');
  },
};

export default HamburgerMenu;
