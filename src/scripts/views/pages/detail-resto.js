/* eslint-disable max-len */
import UrlParse from '../../routes/url-parse';
import TheRestoSource from '../../data/theresto-source';
import {createDetailRestoTemplate, spinner, badconnection} from '../template/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import restoReview from '../../utils/add-review';

const DetailResto = {
  async render() {
    return `
          <div class="loading" id="loading"></div>
          <div class="detailrestocontainer"> </div>
        `;
  },

  async afterRender() {
    const url = UrlParse.parseActiveUrlWithOutCombiner();
    const loading = document.querySelector('#loading');
    const DetailRestoCont = document.querySelector('.detailrestocontainer');

    // change main display to spinner
    loading.innerHTML = spinner();
    DetailRestoCont.style.visibility = 'hidden';

    try {
      const resto = await TheRestoSource.detailResto(url.id);
      DetailRestoCont.innerHTML += createDetailRestoTemplate(resto);

      // add favorite
      FavoriteButtonInitiator.init({
        FavButtonContainer: DetailRestoCont.children[2],
        resto: {
          id: resto.restaurant.id,
          name: resto.restaurant.name,
          city: resto.restaurant.city,
          pictureId: resto.restaurant.pictureId,
          description: resto.restaurant.description,
          rating: resto.restaurant.rating,
        },
      });

      console.log(resto);
      console.log(resto.restaurant.pictureId);

      // change spinner display to main
      loading.style.display = 'none';
      DetailRestoCont.style.visibility = 'visible';

      // add comment
      const addReview = DetailRestoCont.children[3].children[1].children[1];
      const nameInput = addReview.children[1].children[0];
      const reviewInput = addReview.children[1].children[1];
      const btnSubmitInput = addReview.children[1].children[2];

      console.log(DetailRestoCont.children[3].children[1].children[1]);
      console.log(addReview.children[1].children[0]);

      btnSubmitInput.addEventListener('click', async (e) => {
        e.preventDefault();

        await restoReview(url, nameInput.value, reviewInput.value);

        nameInput.value = '';
        reviewInput.value ='';
      });

    } catch (error) {
      loading.style.display = 'none';
      DetailRestoCont.style.visibility = 'visible';
      DetailRestoCont.style.display = 'block';
      DetailRestoCont.innerHTML = badconnection();
    }
  },
};

export default DetailResto;
