import RestaurentCard, { withPromotedRestaurant } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantCard from "../utils/useRestaurantCard";
import { useState, useEffect } from "react";
import { useOnlineStatus } from "../utils/useOnlineStatus";
const Body = () => {
  const [ListRestuarent, setListRestuarent] = useState([]);
  const [filteredRestuarent, setFilteredRestuarent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantPromoted = withPromotedRestaurant(RestaurentCard);
  // const fetchData = async () => {
  //   const data = await fetch(
  //   );

  //   const json = await data.json();

  //   const restaurants =
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  const restaurant = useRestaurantCard(RestaurentCard);
  useEffect(() => {
    setListRestuarent(restaurant);
    setFilteredRestuarent(restaurant);
  }, [restaurant]);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  if (ListRestuarent.length === 0) {
    return <Shimmer />;
  }
  if (!onlineStatus)
    return (
      <div>
        <h1>
          Opps! Looks Like Your Internet Is Broken.. Please Check Your Internet
          😭😭
        </h1>
      </div>
    );
  return (
    <div className="body">
      <div className="flex">
        <div className="m-2 p-2  self-center">
          <input
            type="text"
            className="border-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className=" m-1 border-2 bg-green-400"
            onClick={() => {
              const filteredRes = ListRestuarent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestuarent(filteredRes);
            }}>
            Search
          </button>
        </div>

        <button
          className="m-5  border-2 bg-blue-300"
          onClick={() => {
            const filteredList = ListRestuarent.filter(
              (res) => res.info.avgRating > 4,
            );
            setFilteredRestuarent(filteredList);
          }}>
          Top Restaurants
        </button>
      </div>

      <div className="flex flex-wrap gap-3 ">
        {filteredRestuarent.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.avgRating > 4 ? (
              <RestaurantPromoted resData={restaurant} />
            ) : (
              <RestaurentCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
