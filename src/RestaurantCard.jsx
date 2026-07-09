const RestuarantCard=({data})=>{
    const {name,avgRating,cuisines}=data.info;
    return (
        <div className="border border-solid border-black h-80">
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating}</p>
        </div>
    )
}

export default RestuarantCard;