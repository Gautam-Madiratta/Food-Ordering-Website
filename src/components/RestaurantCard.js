import { Navigate, useNavigate } from "react-router";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { data } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, sla } = data?.info;
  const imageLink = CDN_URL + cloudinaryImageId;
  const navigation = useNavigate();

  const cardClicked = () => {
    navigation("/restaurant/" + data.info.id);
  };

  return (
    <div
      className="res-card"
      style={{ backgroundColor: "lightgray" }}
      onClick={cardClicked}
    >
      <div className="res-logo">
        <img alt="res-logo" src={imageLink}></img>
      </div>
      <div className="card-text">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>Rating : {avgRating}</h4>
        <h4>Delivery Time: {sla.deliveryTime} min</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
