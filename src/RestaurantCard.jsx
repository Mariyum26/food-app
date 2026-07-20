const RestuarantCard=({data})=>{
    const {name,avgRating,cuisines,cloudinaryImageId,areaName,costForTwo}=data;
    return (
        <div className="border-box text-[#02060c] cursor-pointer grid text-sm font-extralight grid-cols-[230.469px] md:grid-cols-[240.469px] h-[264.297px] md:w-[240.469px] w-full">
            <div className="text-[#02060c] text-sm font-extralight h-[160.297px] shadow-xl">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} className="rounded-lg w-full h-full object-cover"></img>
            </div>
            <div className="pl-2 h-auto">
                <div className="text-[#02060ceb] cursor-pointer text-lg h-[25px] font-bold overflow-x-hidden overflow-y-hidden ">{name}</div>
                <div className="flex text-md font-semibold">
                    <div>★</div>
                    <div>{avgRating}</div>
                    <div className="ml-2">{costForTwo}</div>
                </div>
                <div className="box-border text-[#02060c99] cursor-pointer font-extralight h-[21px]  w-[228.469px] text-base font-semibold">
                    <div className="h-[18px] overflow-y-hidden">{cuisines.join(", ")}</div>
                    <div>📍{areaName}</div>
                </div>
                </div>
        </div>
    )
}

export default RestuarantCard;