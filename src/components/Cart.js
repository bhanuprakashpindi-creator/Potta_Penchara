import ItemList from "./ItemList";
import { useSelector } from "react-redux";
const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  return (
    <div className="text-center">
      <div className="m-5 p-5 font-bold text-lg">
        <h1>Cart</h1>
      </div>
      <div className="">
        <ItemList items={items} isAdd={false} />
      </div>
    </div>
  );
};
export default Cart;
