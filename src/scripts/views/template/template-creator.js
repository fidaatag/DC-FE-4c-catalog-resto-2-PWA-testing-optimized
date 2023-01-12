/* eslint-disable indent */
/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createItemRestoTemplate = (resto) => `
    <div class="card-item">

        <div class="card-img">
            <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL_S + resto.pictureId}" 
            alt="${resto.name} Restaurant's photo">
        </div>

        <div class="card-name">
            <h4 id="card-name"><a href="/#/detail/${resto.id}">
            ${resto.name}
            </a>
            </h4>
        </div>

        <div class="card-desk">
            <p>${resto.description}</p>
        </div>

        <div class="card-info">
            <p>⌂ ${resto.city}</p>
            <p>☆ ${resto.rating}</p>
        </div>

        <div class="card-booking">
            <button>Booking</button>
        </div>

    </div>
`;

const createDetailRestoTemplate = (detail) => `
        <div class="titlecard">
            <h3>
                <span class="detail-name-resto">${detail.restaurant.name}</span> 
                <span class="rating">(☆ ${detail.restaurant.rating})</span>
            </h3>
            <span class="line"></span>
        </div>

        <div class="detailcontainer">
            <img src="${CONFIG.BASE_IMAGE_URL + detail.restaurant.pictureId}" 
                 alt="${detail.restaurant.name}">
            <div class="detailinfo">
                <table class="info">
                    <tr>
                        <th>City</th>
                        <td>: ${detail.restaurant.city}</td>
                    </tr>
                    <tr>
                        <th>Addres</th>
                        <td>: ${detail.restaurant.address}</td>
                    </tr>
                </table>

                <div class="menuresto">
                    <h4 class="titlemenu"> ${detail.restaurant.name} Menu</h4>
                    <div class="menulist">
                        <div class="foodlist">
                            <h4>Foods</h4>
                            <ol>
                                ${detail.restaurant.menus.foods.map((food) => `<li>${food.name}</li>`)
                                    .join('')
                                }
                            </ol>
                        </div>
                        <div class="drinklist">
                            <h4>Drinks</h4>
                            <ol>
                                ${detail.restaurant.menus.drinks
                                    .map((drink) => `<li>${drink.name}</li>`)
                                    .join('')
                                }
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div class="desc">
                <h4>Descriptions</h4>
                <p>
                    ${detail.restaurant.description} 
                </p>
            </div>
        </div>

        <div class="favorite">
            
        </div>

        <div class="restocoment">
            <h4>Review Customer</h4>
            <div class="comentcontent">
                <div class="allcoment">
                    ${
                        detail.restaurant.customerReviews
                            .map((review) =>
                                `<div class="comentitem">
                                        <h5>${review.name} <span>(${review.date})</span></h5>
                                        <p class="textcoment">${review.review}</p>
                                </div>`)
                            .join('')
                    }                 
                </div>

                <div class="addcoment">
                    <h5>Add Your Comment</h5>
                    <form>
                        <input type="text" name="name" id="" placeholder="Your name">
                        <textarea name="comment" id="" placeholder="Write your comment here!"></textarea>
                        <button type="submit" class="addcomentbutton">add coment</button>
                    </form>
                </div>
                
            </div>
        </div>  
    
`;

const createAddFavoriteButtonTemplate = () => `
    <button aria-label="like this resto" class="favbutton" id="addfav">
        <span class="addfav">Add</span> Your Favorite Resto 
    </button>
`;

const createRemoveFavoriteButtonTemplate = () => `
    <button aria-label="unlike this resto" class="favbutton" id="removefav">
        <span class="removefav">Remove</span> Your Favorite Resto 
    </button>
`;

const creatNoFavortiteRestoPage = () => `
    <div class="nofavrestopage">
        <img src="./no-food.png" alt="No food icon">
        <p>No food is your favorite</p>
    </div>
`;

const spinner = () => `
    <div class="spinner-wrapper">
        <span class="spinner-grow merah" role="status"></span>
        <span class="spinner-grow kuning" role="status"></span>
        <span class="spinner-grow biru" role="status"></span>
    </div>
`;

const badconnection = () => `
    <div class="badconnection">
        <img src="./disconnect.png" alt="disconnect">
        <p>Bad connection, swipe up to refresh!</p>
    </div>
`;

export {
    createItemRestoTemplate,
    createDetailRestoTemplate,
    createAddFavoriteButtonTemplate,
    createRemoveFavoriteButtonTemplate,
    creatNoFavortiteRestoPage,
    spinner,
    badconnection,
};
