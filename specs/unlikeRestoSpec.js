import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unlike A Resto', () => {
  const favoriteContainer = () => {
    document.body.innerHTML = '<div class="favorite"></div>';
  };

  beforeEach(async () => {
    favoriteContainer();
    await FavoriteRestoIdb.putResto({id: 1});
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });


  // POSITIF

  it('Should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({id: 1});

    expect(document.querySelector('[aria-label="unlike this resto"]'))
        .toBeTruthy();
  });

  it('Should not display like widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({id: 1});

    expect(document.querySelector('[aria-label="like this resto"]'))
        .toBeFalsy();
  });

  it('Should be able to remove liked resto from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({id: 1});

    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });

  // NEGATIF

  it('Should not throw error if the unliked resto is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({id: 1});

    // hapus dulu resto dari daftar resto yang disukai
    await FavoriteRestoIdb.deleteResto(1);

    // kemudian, simulasikan pengguna menekan widget batal menyukai resto
    document.querySelector('[aria-label="unlike this resto').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
