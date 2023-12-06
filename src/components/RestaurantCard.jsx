import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {name, cuisines, costForTwo, avgRating} = resData?.info;
  const {deliveryTime, lastMileTravelString} = resData?.info.sla;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL +resData.info.cloudinaryImageId} alt="res-img" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4> 
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} mins</h4>
      <h4>Distance {lastMileTravelString}</h4>
    </div>
  );
};

export default RestaurantCard;