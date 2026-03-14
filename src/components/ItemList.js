import { addItems } from "../StoreSlices/CartSlice";
import { CDN_LINK, IMG_CDN_LINK } from "../utils/common";
import { useDispatch } from "react-redux";
const ItemList = ({ items, isAdd }) => {
  console.log(items);
  const dispatch = useDispatch();
  const handelerAddItems = (item) => {
    dispatch(addItems(item));
  };
  if (items.length === 0) {
    return (
      <div className="font-bold text-2xl">
        <h1>
          {" "}
          Opps! Looks Like The Cart Is Empty . Please add The Items Into Cart
          Before CheckOut
        </h1>
      </div>
    );
  }
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="menuItems"
          key={item?.card?.info?.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between">
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name} -</span>
              <span>
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 ">
            <div className="absolute">
              {isAdd && (
                <button
                  className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg hover: cursor-pointer"
                  onClick={() => handelerAddItems(item)}>
                  Add+
                </button>
              )}
            </div>
            <img src={IMG_CDN_LINK + item?.card?.info?.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
