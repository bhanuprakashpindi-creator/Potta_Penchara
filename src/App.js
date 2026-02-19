import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import Loginpage from "./components/Loginpage";
// import Grocery from "./components/Grocery";


const Grocery = lazy(()=>
   import("./components/Grocery")
);
const Applayout =()=>(
   <div className="App">
      <Header/>
      <Outlet/>
   </div>
   
);
const approuter =createBrowserRouter([
   {
      path:"/",
      element:<Applayout/>,
      errorElement:<Error/>,
      children:[
         {
      path:"/",
      element:<Body />,
   },
         {
      path:"/about",
      element:<About/>,
   },
   {
      path:"/contact",
      element:<Contact/>
   },
   {
      path:"/grocery",
      element:(<Suspense fallback={<h1>Loding;;.....</h1>}><Grocery/></Suspense> )
   },
   {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
   },
   {
      path:"/login",
      element:<Loginpage/>
   },

   
      ],
      
   },
   
])


 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={approuter}/>);
