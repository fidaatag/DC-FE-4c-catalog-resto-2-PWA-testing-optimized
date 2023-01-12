import FavoriteRestoIdb from '../data/favorite-resto-idb';
import {createAddFavoriteButtonTemplate, createRemoveFavoriteButtonTemplate}
  from '../views/template/template-creator';

const FavoriteButtonInitiator = {
  async init({FavButtonContainer, resto}) {
    this._FavButtonContainer = FavButtonContainer;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const {id} = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderRemove();
    } else {
      this._renderAdd();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getResto(id);
    return !!resto;
  },

  _renderAdd() {
    this._FavButtonContainer.innerHTML = createAddFavoriteButtonTemplate();

    const favButtob = document.querySelector('.favbutton');
    favButtob.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderRemove() {
    this._FavButtonContainer.innerHTML = createRemoveFavoriteButtonTemplate();

    const favButton = document.querySelector('.favbutton');
    favButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
