import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator';

const createLikeButtonPresenterWithResto = async (resto) => {
  await FavoriteButtonInitiator.init({
    FavButtonContainer: document.querySelector('.favorite'),
    resto,
  });
};

export {createLikeButtonPresenterWithResto};
