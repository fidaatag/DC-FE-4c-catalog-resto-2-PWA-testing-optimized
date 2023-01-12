import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import {createItemRestoTemplate, creatNoFavortiteRestoPage} from '../template/template-creator';

const FavoriterResto = {
  async render() {
    return `
        <div class="titlecard">
            <h3 tabindex="0">Your favorite Resto</h3>
            <span class="line"></span>
        </div>

        <div class="nofoodpage" id="nofoodpage"></div>
        <div class="cardcontainer" id="restocard"></div>
        `;
  },

  async afterRender() {
    const resto = await FavoriteRestoIdb.getAllResto();
    const restocard = document.querySelector('#restocard');
    const nofoodpage = document.querySelector('#nofoodpage');

    if (resto == 0) {
      nofoodpage.innerHTML += creatNoFavortiteRestoPage();
    } else {
      resto.forEach((res) => {
        restocard.innerHTML += createItemRestoTemplate(res);
      });
    }
  },
};

export default FavoriterResto;
