import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../StoreSlices/CartSlice";
const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handelPopItems = () => {
    dispatch(removeItem());
  };
  return (
    <div className="text-center">
      <div className="m-4 p-2 font-bold text-lg">
        <h1>Cart</h1>
      </div>
      <button
        className="border bg-black text-white font-bold m-4 p-2 hover:cursor-pointer"
        onClick={() => handleClearCart()}>
        ClearCart
      </button>
      <button
        className="border bg-black text-white font-bold m-4 p-2 hover:cursor-pointer"
        onClick={handelPopItems}>
        Remove Last Item
      </button>
      <div className="w-6/12 mx-auto">
        <ItemList items={items} isAdd={false} />
      </div>
    </div>
  );
};
export default Cart;
