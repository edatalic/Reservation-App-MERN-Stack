import useFetch from "../../hooks/useFetch.js";
import "./featuredProperties.css";

const FeaturedProperties = () => {

    const {data,loading,error} = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="fp">
        {loading ? ("loading") : (<>
            {data.map(item=>(
                <div className="fpItem" key={item._id}>
                    <img src={item.photos[0]} alt="" className="fpImg" />
                    <span className="fpName">{item.name}</span>
                    <span className="fpCity">{item.city}</span>
                    <span className="fpPrice">Starting from {item.cheapestPrice}$</span>
                    {item.rating && <div className="fpRating">
                        <button>{item.rating}</button>
                        <span> Fabulous </span>
                    </div>}
                </div>
            ))}
        </>)}
    </div>
  )
}

export default FeaturedProperties