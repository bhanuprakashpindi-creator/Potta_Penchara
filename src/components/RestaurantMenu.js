import { useState } from "react";
import RestaurantMenuMock from "../utils/RestaurantMenuMock";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(-1);
  const data = RestaurantMenuMock;
  const categories = data?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  );
  console.log(categories);
  return (
    <div data-items className="text-center">
      <h1 className="font-bold my-6 text-2xl">Roti Wala.com</h1>
      <p className="font-blod text-lg"></p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          useShowIndex={() => {
            index == showIndex ? setShowIndex(-1) : setShowIndex(index);
          }}
          showItems={showIndex === index ? true : false}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
