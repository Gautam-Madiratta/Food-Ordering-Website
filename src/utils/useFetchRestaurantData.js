import { MENU_ITEMS } from "./constants";
import { useEffect, useState } from "react";

const useFetchRestaurantData = (id) => {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    getMenuList();
  }, []);

  const getMenuList = async () => {
    const response = await fetch(MENU_ITEMS + id);
    const data = await response.json();
    setMenuList(data.data.cards);
  };

  return menuList;
};

export default useFetchRestaurantData;
