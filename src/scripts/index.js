import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../scripts/Navbar/index";
import "../scripts/Hero/index";
import "../scripts/Footer/index";

const menuToggle = document.querySelector(".menu-toggle, .menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
});

// Fetch Data
import("../DATA.json").then(({ default: dataJSON }) => {
  let dataRestaurant = dataJSON["restaurants"];
  let dataCardRestaurant = "";
  dataRestaurant.forEach((resto) => {
    dataCardRestaurant += `
        <article tabindex="0" class="restaurant-item" alt="Menu untuk melihat restoran">
            <img tabindex="0" class="restaurant-item__thumbnail" src="${resto["pictureId"]}" alt="${resto["name"]}" title="${resto["name"]}">
                <div tabindex="0" class="restaurant-item__content">
                    <p tabindex="0" class="restaurant-item__city">${resto["city"]}</p>
                    <p tabindex="0" class="restaurant-item__rating">Rating: <strong tabindex="0">${resto["rating"]}</strong></p>
                    <h2 tabindex="0" class="restaurant-item__title"><a href="#">${resto["name"]}</a></h2>
                    <p tabindex="0" class="restaurant-item__description">${resto["description"]}</p>
                </div>
        </article>
        `;
  });
  document.querySelector("#restaurant").innerHTML = dataCardRestaurant;
});
