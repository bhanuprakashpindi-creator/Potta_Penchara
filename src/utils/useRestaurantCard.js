import { useEffect, useState } from "react";

const useRestaurantCard = () => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&page_type=DESKTOP_WEB_LISTING",
      );

      console.log(data.status);

      const json = await data.json();
      console.log(json);

      setRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [],
      );
    } catch (err) {
      console.error(err);
    }
  };
  return restaurant;
};
export default useRestaurantCard;
