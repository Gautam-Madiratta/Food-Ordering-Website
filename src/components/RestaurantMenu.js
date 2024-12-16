import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useFetchRestaurantData from "../utils/useFetchRestaurantData";

const RestaurantMenu = () => {
  const { id } = useParams();

  const menuList = useFetchRestaurantData(id);

  if (menuList.length === 0) return <Shimmer></Shimmer>;

  const { name, cuisines, costForTwoMessage, avgRatingString } =
    menuList[2]?.card?.card?.info;

  const { itemCards } =
    menuList[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {" "}
        {cuisines.join()} - {costForTwoMessage}
      </p>
      <span> Rating- {avgRatingString}</span>

      <h1>Menu</h1>

      <ul className="listofmenu">
        {itemCards.map((item, index) => (
          <li key={index}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
