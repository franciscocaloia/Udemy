import { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../../store/cart-context";
import MealsItemForm from "./MealsItemForm";
const StyledMealsItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  h3 {
    margin: 0 0 0.25rem 0;
  }
  .description {
    font-style: italic;
  }

  .price {
    margin-top: 0.25rem;
    font-weight: bold;
    color: #ad5502;
    font-size: 1.25rem;
  }
`;
const MealsItem = ({ item }) => {
  const cartContext = useContext(CartContext);
  const { id, name, price, description } = item;
  function onAdd(amount) {
    cartContext.addItem({ ...item, amount });
  }
  return (
    <StyledMealsItem>
      <div>
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="price">${price.toFixed(2)}</div>
      </div>
      <div>
        <MealsItemForm id={id} onAdd={onAdd} />
      </div>
    </StyledMealsItem>
  );
};
export default MealsItem;
