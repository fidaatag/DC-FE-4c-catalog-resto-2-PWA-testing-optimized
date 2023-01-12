import TheRestoSource from '../data/theresto-source';

const restoReview = async (url, name, review) => {
  const inputReview = {
    id: url.id,
    name,
    review,
  };

  const allReviewContainer = document.querySelector('.allcoment');
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const date = new Date().toLocaleDateString('id-ID', options);
  const newReview = `
        <div class="comentitem">
            <h5>${name} <span>(${date})</span></h5>
            <p>${review}</p>
        </div>
    `;

  const reviewResponse = await TheRestoSource.addReview(inputReview);
  console.log(reviewResponse);

  allReviewContainer.innerHTML += newReview;
};

export default restoReview;
