import { useEffect, useState } from 'react'
const Body=()=>{
    const [restaurantList,setRestaurantList]=useState([]);

    console.log(restaurantList);

    const fetchData= async ()=>{
        const response= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await response.json();
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <main>
            <div className="flex">
                <h2>Search</h2>
                <h2>Filter</h2>
            </div>
            <div>
                <h2>rendered first time</h2>
            </div>
        </main>
    )
}

export default Body;