import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
const StyledButton = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;
  ${({ bump }) => bump && "animation: bump 300ms ease-out;"}

  &:hover,
  &:active {
    background-color: #2c0d00;
  }

  .icon {
    width: 1.35rem;
    height: 1.35rem;
    margin-right: 0.5rem;
  }

  .badge {
    background-color: #b94517;
    padding: 0.25rem 1rem;
    border-radius: 25px;
    margin-left: 1rem;
    font-weight: bold;
  }

  &:hover .badge,
  &:active .badge {
    background-color: #92320c;
  }

  .bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;
const HeaderCartButton = ({ toggleShowCart }) => {
  const [bump, setBump] = useState(false);
  const cartContext = useContext(CartContext);
  const { items } = cartContext;
  useEffect(() => {
    if (items.length > 0) {
      setBump(true);
    }
    const timer = setTimeout(() => {
      setBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  const totalItems = cartContext.items.reduce(
    (prev, item) => prev + item.amount,
    0
  );
  return (
    <StyledButton bump={bump} onClick={toggleShowCart}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{totalItems}</span>
    </StyledButton>
  );
};
export default HeaderCartButton;
