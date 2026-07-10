const RestuarantCard=({data})=>{
    const {name,avgRating,cuisines,cloudinaryImageId}=data.info;
    return (
        <div className="items-center border-b-[#02060c] border-l-[#02060c] border-r-[#02060c] border-t-[#02060c] box-border text-[#02060c] gap-x-3 cursor-pointer grid text-sm font-extralight grid-cols-[240.469px] h-[259.297px] leading-[16.8px] gap-y-3 w-[240.469px]">
            <div className="border-b-[#02060c] border-l-[#02060c] border-r-[#02060c] border-t-[#02060c] box-border text-[#02060c] cursor-pointer text-sm font-extralight h-[160.297px] leading-[16.8px] w-[240.469px]">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} className="rounded-lg overflow-x-hidden overflow-y-hidden w-full h-full"></img>
            </div>
                <div className="border-b-[#02060ceb] border-l-[#02060ceb] border-r-[#02060ceb] border-t-[#02060ceb] box-border text-[#02060ceb] cursor-pointer text-lg font-semibold h-[22px] tracking-[-0.45px] leading-[22px] overflow-x-hidden overflow-y-hidden w-[228.469px]">{name}</div>
                <p>{avgRating}</p>
                <div className="border-b-[#02060c99] border-l-[#02060c99] border-r-[#02060c99] border-t-[#02060c99] box-border text-[#02060c99] cursor-pointer font-extralight h-[21px] tracking-[-0.4px] leading-[21px] min-h-auto min-w-auto overflow-x-hidden overflow-y-hidden w-[228.469px]">
                    <div>{cuisines.join(", ")}</div>
                </div>
        </div>
    )
}

export default RestuarantCard;