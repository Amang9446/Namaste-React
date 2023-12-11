import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESTURANT_DETAIL_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fecthRest();
  }, []);

  const fecthRest = async () => {
    const data = await fetch(
      RESTURANT_DETAIL_URL
    );
    const json = await data.json();
    console.log(json);
    setRestInfo(json.data);
  };

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = restInfo?.cards[0]?.card?.card?.info;
  const { itemCards } = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
console.log(itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
      <h3>
      <ul>
        {itemCards.map((item)=>(
          <li>{item.card.info.name}</li>
        ))}
      </ul>
      </h3>
    </div>
  );
};

export default RestaurantMenu;
