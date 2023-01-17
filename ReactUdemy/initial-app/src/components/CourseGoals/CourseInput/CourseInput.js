import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";

const StyledFormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ inputValid }) => (inputValid ? "black" : "red")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${({ inputValid }) => (inputValid ? "#ccc" : "red")};
    background-color: ${({ inputValid }) =>
      inputValid ? "#fad0ec" : "salmon"};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;
const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputValid, setInputValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setInputValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setInputValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <StyledFormControl inputValid={inputValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </StyledFormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
