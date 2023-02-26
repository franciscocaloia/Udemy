import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
// { title: "Test Item", quantity: 3, total: 18, price: 6 }
const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  const cartList = items.map((item) => <CartItem key={item.id} item={item} />);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartList}</ul>
    </Card>
  );
};

export default Cart;
