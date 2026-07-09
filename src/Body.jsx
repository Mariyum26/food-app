import { useEffect, useState } from 'react'
import RestuarantCard from './RestaurantCard';

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
                <h2>All Restaurant cards</h2>
                <div className='grid grid-cols-4 gap-1'>
                   {restaurantList.map((restaurant)=> <RestuarantCard key={restaurant.info.id} data={restaurant}/>)} 
                </div>
            </div>
        </main>
    )
}

export default Body;