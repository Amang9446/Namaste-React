import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fecthRest();
  }, []);

  const fecthRest = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D30.7008554%26lng%3D76.6788091%26restaurantId%3D81041%26catalog_qa%3Dundefined%26submitAction%3DE"
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
