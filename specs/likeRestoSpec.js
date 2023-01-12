import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Resto', () => {
  const favoriteContainer = () => {
    document.body.innerHTML = '<div class="favorite"></div>';
  };

  beforeEach(() => {
    favoriteContainer();
  });

  // POSITIF

  it('Should show the like button the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({id: 1});

    expect(document.querySelector('[aria-label="like this resto"]'))
        .toBeTruthy();
  });

  it('Should not to show the unlike button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({id: 1});

    expect(document.querySelector('[aria-label="unlike this resto"]'))
        .toBeFalsy();
  });

  it('Should be able to like the resto', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({id: 1});

    document.querySelector('.favbutton').dispatchEvent(new Event('click'));
    const resto = await FavoriteRestoIdb.getResto(1);
    expect(resto).toEqual({id: 1});

    FavoriteRestoIdb.deleteResto(1);
  });

  // NEGATIF

  it('Should not add a movie again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({id: 1});

    // Tambahkan resto dengan ID 1 ke daftar resto yang disukai
    await FavoriteRestoIdb.putResto({id: 1});

    // Simulasikan pengguna menekan tombol suka resto
    document.querySelector('.favbutton').dispatchEvent(new Event('click'));

    // tidak ada resto yang ganda
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{id: 1}]);

    FavoriteRestoIdb.deleteResto(1);
  });

  it('Should not add a resto when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({});

    document.querySelector('.favbutton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
