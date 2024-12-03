import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { data } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, sla } = data?.info;
  const imageLink = CDN_URL + cloudinaryImageId;
  return (
    <div className="res-card" style={{ backgroundColor: "lightgray" }}>
      <div className="res-logo">
        <img alt="res-logo" src={imageLink}></img>
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating : {avgRating}</h4>
      <h4>Delivery Time: {sla.deliveryTime} min</h4>
    </div>
  );
};

export default RestaurantCard;
