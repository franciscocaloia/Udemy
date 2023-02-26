import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { UIActions } from "../../store/ui-slice";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalItems = items.reduce((prev, actual) => prev + actual.quantity, 0);
  function toggleCart() {
    dispatch(UIActions.toggleShowCart());
  }
  return (
    <button onClick={toggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
