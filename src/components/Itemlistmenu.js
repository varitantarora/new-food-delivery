import { useDispatch } from "react-redux";
import { addItem } from "../utlis/cartSlice";

const Itemlistmenu = () => {
  // Define the menu data for the restaurant
  const restaurantMenu = [
    { name: "Dish 1", price: "Rs 100", key: "1" },
    { name: "Dish 2", price: "Rs 1200", key: "2" },
    { name: "Dish 3", price: "Rs 80", key: "3" },
    { name: "Dish 4", price: "Rs 1005", key: "4" },
    { name: "Dish 5", price: "Rs 900", key: "5" },
    { name: "Dish 6", price: "Rs 101", key: "6" },
    { name: "Dish 7", price: "Rs 130", key: "7" },
    { name: "Dish 8", price: "Rs 1400", key: "8" },
  ];

  //dispatch the action
  const dispatch = useDispatch();
  const handleAddItem = (dish) => {
    dispatch(addItem(dish));
    //action.payload in the cartSlice is whatever we are passing in addItem here
  };

  return (
    <ul className="menu-list">
      {restaurantMenu.map((dish) => (
        <li key={dish.key} className="menu-item">
          <div className="dishinfo">
            <strong>{dish.name}</strong> - <span>{dish.price}</span>
          </div>
          <button className="Addtocart" onClick={() => handleAddItem(dish)}>
            Add+
          </button>
        </li>
      ))}
    </ul>
  );
};
export default Itemlistmenu;
