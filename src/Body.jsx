import { useEffect, useState } from 'react'
import RestuarantCard from './RestaurantCard';

const Body=()=>{
    const [restaurantList,setRestaurantList]=useState([]);
    const [filteredList,setFilteredList]=useState([]);
    const [searchText,setSearchText]=useState("");

    console.log(restaurantList);

    const fetchData= async ()=>{
        const response= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await response.json();
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const showAllRestaurants=()=>{
        setFilteredList(restaurantList);
    }
    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <main className="w-full md:w-9/12 mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-[200px_200px_200px] gap-4 md:gap-10 mt-10 px-[1px]">
                <input type="text" placeholder='Search..' className='px-4 py-1 rounded-lg border border-solid focus:outline-none'value={searchText} onChange={(e)=> setSearchText(e.target.value)} onKeyDown={(e)=> {if(e.key==="Enter"){
                    const filterList=restaurantList.filter(res=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredList(filterList);
                }}}></input>
                <button className='bg-orange-400 focus:outline-none hover:shadow-lg rounded-lg cursor-pointer' onClick={()=>{
                    const filteredList=restaurantList.filter(res=> res.info.avgRating>4);
                    setFilteredList(filteredList);
                }}>Top Restaurants</button>
                <button className='bg-orange-400 focus:outline-none hover:shadow-lg rounded-lg cursor-pointer' onClick={showAllRestaurants}>All Restaurants</button>
            </div>
            <div>
                <div className='box-border text-[#02060c] md:gap-x-8 cursor-pointer grid text-sm font-extralight grid-cols-[230.469px_230.469px] md:grid-cols-[240.469px_240.469px_240.469px_240.469px] h-auto mb-10 mt-10 gap-4 md:gap-y-8 w-full md:w-[1057.88px] pl-[2px] md:pl-0'>
                   {filteredList.map((restaurant)=> <RestuarantCard key={restaurant.info.id} data={restaurant}/>)} 
                </div>
            </div>
        </main>
    )
}

export default Body;