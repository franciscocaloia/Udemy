import Modal from "../UI/Modal";
import CartList from "./CartList";
import styled from "styled-components";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";
import useHttp from "../../hooks/use-http";
const StyledCartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;
const StyledCartActions = styled.div`
  text-align: right;

  & button {
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
  }

  & button:hover,
  & button:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }

  & .button--alt {
    color: #8a2b06;
  }

  & .button {
    background-color: #8a2b06;
    color: white;
  }
`;
const Cart = ({ toggleShowCart }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const cartContext = useContext(CartContext);
  const [data, setData] = useState();
  const { isLoading, error, sendRequest } = useHttp();
  function dataProcessor(fetchData) {
    setData(fetchData);
    cartContext.clearCart();
  }
  function onConfirm(user) {
    sendRequest(
      "https://food-order-app-7a792-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, items: cartContext.items }),
      },
      dataProcessor
    );
  }
  function onClosecheckout() {
    setShowCheckout(false);
  }
  function handleAddItem(item) {
    cartContext.addItem({ ...item, amount: 1 });
  }
  function handleRemoveItem(id) {
    cartContext.removeItem(id);
  }

  const cartContent = (
    <>
      <CartList
        handleRemoveItem={handleRemoveItem}
        handleAddItem={handleAddItem}
        items={cartContext.items}
      />
      <StyledCartTotal>
        <span>Total Amount</span>
        <span>${cartContext.totalAmount.toFixed(2)}</span>
      </StyledCartTotal>
      {showCheckout && !isLoading && (
        <Checkout onConfirm={onConfirm} onClosecheckout={onClosecheckout} />
      )}
      {!showCheckout && (
        <StyledCartActions>
          <button className="button--alt" onClick={toggleShowCart}>
            Close
          </button>
          <button
            className="button"
            onClick={() => {
              setShowCheckout(true);
            }}
          >
            Order
          </button>
        </StyledCartActions>
      )}
    </>
  );
  return (
    <Modal toggleModal={toggleShowCart}>
      {isLoading && <h3>Processing order...</h3>}
      {!isLoading && !data && <>{cartContent}</>}
      {!isLoading && data && <h2>Id de la orden: {JSON.stringify(data)}</h2>}
      {!isLoading && error && <h3> {error}</h3>}
    </Modal>
  );
};
export default Cart;
