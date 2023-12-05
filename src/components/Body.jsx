import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofResturants, setlistofResturants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
//  console.log("Re-Rendered");
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D28.7040592%26lng%3D77.10249019999999%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
      );
      const dataJson = await data.json();
      const restaurants =
        dataJson.data.cards[5].card.card.gridElements?.infoWithStyle
          .restaurants;
      console.log(restaurants);
      setlistofResturants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return listofResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text"
           className="search-box"
            value={searchText}
            onChange={(e)=>{
              setsearchText(e.target.value);
            }}
            />
          <button
            onClick={() => {
              console.log(searchText);
              const searchedFilters = listofResturants.filter((res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(searchedFilters);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofResturants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
