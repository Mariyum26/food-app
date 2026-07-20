import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
const RestaurantMenu=()=>{
    const [resMenu,setResMenu]=useState(null);

    const {resId}=useParams();

    const fetchMenu=async()=>{
        const response= await fetch("http://localhost:3000/restaurant/" + resId);
        const data = await response.json();
        setResMenu(data);
    }
    
    useEffect(()=>{
        fetchMenu();
    },[]);

    if(resMenu==null) return <h1>Loading</h1>;
    return (
        <div>
            <div>{resMenu.info.name}</div>
            <div>Aloo tikki</div>
            <div>Noddles</div>
        </div>
    )
}

export default RestaurantMenu;