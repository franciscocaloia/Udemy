import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store";
import { useDispatch } from "react-redux";
const ProductItem = ({ item }) => {
  const { title, price, description } = item;
  const dispatch = useDispatch();
  function addItemHandler() {
    dispatch(cartActions.addItem(item));
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
