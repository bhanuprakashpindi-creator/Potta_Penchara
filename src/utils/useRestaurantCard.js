
import { useEffect,useState } from "react";

const useRestaurantCard=()=>
{

    const [restaurant,setRestaurant]=useState([]);

            
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async ()=>
    {
        const data = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json();
        setRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []);
    }

    return restaurant;
}
export default useRestaurantCard;