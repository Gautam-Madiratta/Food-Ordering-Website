import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [filterList, setFilterSet] = useState(restaurantList);

  const filterButtonClick = () => {
    const newlyfilterList = restaurantList.filter(
      (res) => res.info.avgRating > 4
    );
    setFilterSet(newlyfilterList);
  };

  const resetButtonClick = () => {
    setFilterSet(restaurantList);
  };

  return (
    <div className="body">
      <button onClick={filterButtonClick} className="filter-Btn">
        Top Rated Restaurants
      </button>
      <button onClick={resetButtonClick} className="reset-Btn">
        Reset
      </button>
      <div className="res-container">
        {filterList.map((data) => {
          return (
            <div key={data.info.id}>
              <RestaurantCard data={data}></RestaurantCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
