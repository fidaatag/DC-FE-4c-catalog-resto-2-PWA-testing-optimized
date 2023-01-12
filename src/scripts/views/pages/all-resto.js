import TheRestoSource from '../../data/theresto-source';
import {createItemRestoTemplate, spinner, badconnection} from '../template/template-creator';

const AllResto = {
  async render() {
    return `
            <div class="titlecard">
                <h3 tabindex="0">All The Restaurants In This City</h3>
                <span class="line"></span>
            </div>

            <div class="loading" id="loading"></div>
            <div class="cardcontainer" id="restocard"></div>
        `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const restocard = document.querySelector('#restocard');
    loading.innerHTML = spinner();
    restocard.style.visibility = 'hidden';

    try {
      const resto = await TheRestoSource.allResto();
      resto.forEach( (res) => {
        restocard.innerHTML += createItemRestoTemplate(res);
      });

      loading.style.display = 'none';
      restocard.style.visibility = 'visible';

    } catch (error) {
      loading.style.display = 'none';
      restocard.style.visibility = 'visible';
      restocard.style.display = 'block';
      restocard.innerHTML = badconnection();
    }
  },
};

export default AllResto;
