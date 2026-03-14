import { CDN_LINK } from "../utils/common";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurentCard = (props) => {
  const { resData } = props;
  const { loggedinUser } = useContext(UserContext);
  return (
    <div
      data-testid="itemCard"
      className="w-[250px] h-[400px] m-2 hover:scale-95">
      <img
        className="w-[250px] h-[175px] rounded-4xl "
        alt="Rest img"
        src={CDN_LINK + resData.info.cloudinaryImageId}
      />
      <div className="p-3  w-[240px] h-[225px]">
        <h4 className="font-extrabold py-1">{resData.info.name}</h4>
        <h5 className=" wrap-break-word py-1">
          {resData.info.cuisines.join(",")}
        </h5>
        <div className="card-about py-1">
          <span className="rating">★{resData.info.avgRating} Stars</span>
          <h5 className="time py-1">{resData.info.sla.deliveryTime} MINS</h5>
          <h5 className="costForTwo py-1">{resData.info.costForTwo}</h5>
          <h5>{loggedinUser}</h5>
        </div>
      </div>
    </div>
  );
};
export const withPromotedRestaurant = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Best Choice..
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};
export default RestaurentCard;
