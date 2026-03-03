import { LOGO_LINK } from "../utils/common";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedinUser } = useContext(UserContext);
  return (
    <div className="flex items-center border-0 justify-between bg-green-100 shadow-2xl ">
      <div className="logo-container">
        <img className="w-30" src={LOGO_LINK} />
      </div>
      <div className="">
        <ul className="flex  gap-3 items-center">
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="link">
              Grocery
            </Link>
          </li>
          <li>🛒</li>
          <li>{loggedinUser}</li>
          <button
            className="border-2 bg-green-200"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}>
            <Link to="/login">{btnName}</Link>
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
