import { useState } from "react";
import RestaurantMenuMock from "../utils/RestaurantMenuMock";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const data = RestaurantMenuMock;
  const categories = data?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  );
  console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">Roti Wala.com</h1>
      <p className="font-blod text-lg"></p>
      {categories.map((category) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
