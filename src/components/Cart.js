import { ClearCart } from "../utlis/cartSlice";
import { useSelector, useDispatch } from "react-redux";

//   console.log(cartItemName);
//   const [{ name }] = cartItemName;
//   console.log(name);

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(ClearCart());
  };

  const cartItems = useSelector((store) => store.cart.items); // Getting the cart items from the store

  return (
    <div className="cart-container">
      <h1 className="cart-title">CART</h1>
      <button className="clear-cart-button" onClick={handleClearCart}>
        Clear Cart
      </button>
{cartItems.length == 0 && <h4> Your cart is empty</h4>}
      <ul className="cart-list">
        {cartItems.map((dish) => (
          <li key={dish.key} className="cart-item">
            <span> {dish.name} - </span>
            <span>{dish.price} </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
