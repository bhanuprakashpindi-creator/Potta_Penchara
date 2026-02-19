import { Link } from "react-router-dom";
const Loginpage = () => {
  return (
    <div className=" w-6/12 bg-pink-300 mx-auto my-50">
      <div>
        <h1 className="text-center text-5xl p-3 m-0">Login Page</h1>
      </div>
      <div className="text-center  my-5 text-xl">
        <input
          className="text-center border-2 mx-5"
          type="text"
          placeholder="Enter Your Email"></input>
      </div>
      <div className="text-center my-5 text-xl">
        <input
          type="text"
          className="text-center border-2 mx-5"
          placeholder="Enter the Password"></input>
      </div>
      <div className="text-center my-5 text-xl">
        <button className=" border-2">
          <Link to="/" className="link">
            {" "}
            Submit
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Loginpage;
