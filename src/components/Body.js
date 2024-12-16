import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //Local State Variable
  const [restaurantList, setRestaurantList] = useState([]);
  const [restaurantListCopy, setRestaurantListCopy] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  //get the data from api
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();

    //optional Chaining
    setRestaurantList(
      data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestaurantListCopy(
      data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Filters
  const filterButtonClick = () => {
    const newlyfilterList = restaurantList.filter(
      (res) => res.info.avgRating > 4.5
    );
    setRestaurantList(newlyfilterList);
  };

  const resetButtonClick = () => {
    getData();
  };

  //online status implementation
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Seems Like you are offline !!!!!</h1>;
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* Search box  */}
      <input
        type="text"
        className="search-box"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      ></input>

      <button
        className="search-btn"
        onClick={() => {
          let searchFilteredList = restaurantList.filter((res) => {
            let caseSensitiveTerm = searchTerm.toLowerCase();
            return res.info.name.toLowerCase().includes(caseSensitiveTerm);
          });
          setRestaurantListCopy(searchFilteredList);
        }}
      >
        Search
      </button>
      <button onClick={filterButtonClick} className="filter-Btn">
        Top Rated Restaurants
      </button>
      <button onClick={resetButtonClick} className="reset-Btn">
        Reset
      </button>
      <div className="res-container">
        {restaurantListCopy.map((data) => {
          return (
            <div className="restaurants" key={data.info.id}>
              <RestaurantCard data={data}></RestaurantCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
