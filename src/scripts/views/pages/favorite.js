/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import FavoriteRestaurantIdb from "../../data/favorite-restaurant";
import RestaurantCard from "../templates/restaurant-card";

const Favorite = {
  async render() {
    return `
      <section class="content">
        <div class="latest">
          <div tabindex="0" class="latest__label">
            <h2>Your Favorite Restaurant</h2>
          </div>
          <div class="restaurant-list" id="fav-restaurant-list"></div>
        </div>
      </section>
        `;
  },

  async afterRender() {
    const data = await FavoriteRestaurantIdb.getAllRestos();

    const FavoriteRestaurantContainer = document.querySelector(
      "#fav-restaurant-list"
    );

    data.forEach((resto) => {
      FavoriteRestaurantContainer.innerHTML += RestaurantCard(resto);
    });
  },
};

export default Favorite;
