/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
/* eslint-disable no-undef */
/* eslint-disable quotes */
const assert = require("assert");

Feature("Liking Restaurant");

Before(({ I }) => {
  I.amOnPage("/");
});

Scenario("Showing empty like restaurant", ({ I }) => {
  I.amOnPage("/#/favorite");
  I.see("There are no favorite restaurants", "#emptyData");
});

Scenario("Like a restaurant", async ({ I }) => {
  I.amOnPage("/");

  I.seeElement(".restaurant-item__title");

  const firstRestaurant = locate(".restaurant-item__title a").first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");

  I.seeElement(".restaurant-item");

  const likeRestaurantName = await I.grabTextFrom(".restaurant-item__title");

  assert.strictEqual(firstRestaurantName, likeRestaurantName);
});
