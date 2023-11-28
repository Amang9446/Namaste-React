import { useState } from "react";
import { resturantsList } from "../utils/static";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
  const [listofResturants, setlistofResturants] = useState(resturantsList)
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofResturants.filter(
              (res) => res.data.avgRating > 4
            );
            setlistofResturants(filteredList)
            console.log(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {resturantsList.map((resData) => (
          <RestaurantCard key={resData.data.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;