import Modal from "../UI/Modal";
import CartList from "./CartList";
import styled from "styled-components";
const StyledCartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`
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
`
const Cart = ({toggleShowCart}) => {
  return <Modal toggleModal={toggleShowCart}>
    <CartList/>
    <StyledCartTotal>
      <span>Total Amount</span>
      <span>35.62</span>
    </StyledCartTotal>
    <StyledCartActions>
      <button className="button--alt" onClick={toggleShowCart}>Close</button>
      <button className="button">Order</button>
    </StyledCartActions>
  </Modal>;
};
export default Cart;
