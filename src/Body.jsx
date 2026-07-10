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
        <main className="w-full md:w-9/12 mx-auto">
            <div className="flex">
                <h2>Search</h2>
                <h2>Filter</h2>
            </div>
            <div>
                <h2>All Restaurant cards</h2>
                <div className='border-b-[#02060c] border-l-[#02060c] border-r-[#02060c] border-t-[#02060c] box-border text-[#02060c] cursor-pointer text-sm font-extralight h-[160.297px] leading-[16.8px] w-[240.469px]'>
                    <div>
                        <div className='border-b-[#02060c] border-l-[#02060c] border-r-[#02060c] border-t-[#02060c] box-border text-[#02060c] gap-x-8 cursor-pointer grid text-sm font-extralight grid-cols-[240.469px_240.469px_240.469px_240.469px] h-auto leading-[16.8px] mb-10 mt-10 gap-y-8 w-[1057.88px]'>
                   {restaurantList.map((restaurant)=> <RestuarantCard key={restaurant.info.id} data={restaurant}/>)} 
                   </div>
                   </div>
                </div>
            </div>
        </main>
    )
}

export default Body;