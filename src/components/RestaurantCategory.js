import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, useShowIndex }) => {
  const handleClick = () => {
    // setShowItems(!showItems);
    useShowIndex();
  };
  console.log(data);
  return (
    <div>
      <div className="bg-gray-100 mx-auto my-4 shadow-lg p-4 w-6/12 m-auto ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}>
          <span className="font-bold text-lg">
            {data?.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
