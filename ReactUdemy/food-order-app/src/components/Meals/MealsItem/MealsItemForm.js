import { useState } from "react";
import styled from "styled-components";
import Input from "../../UI/Input";
const StyledForm = styled.form`
  button {
    font: inherit;
    cursor: pointer;
    background-color: #8a2b06;
    border: 1px solid #8a2b06;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;
  }
  & button:hover,
  & button:active {
    background-color: #641e03;
    border-color: #641e03;
  }
`;

const MealsItemForm = ({ id, onAdd }) => {
  const [amount, setAmount] = useState(1);
  function handleSubmit(event) {
    event.preventDefault();
    onAdd(+amount);
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        label="amount"
        input={{
          id: "amount" + id,
          type: "number",
          min: "1",
          max: "10",
          value: amount,
          onChange: (amount) => {
            setAmount(amount);
          },
        }}
      />
      <button>+ Add</button>
    </StyledForm>
  );
};
export default MealsItemForm;
