import { useState } from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import { v4 as uuidv4 } from "uuid";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const StyledCard = styled(Card)`
  padding: 10px;
  margin: 10px;
`;
const StyledFormControl = styled.div`
  & * {
    box-sizing: border-box;
  }
  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }
  & input:focus {
    outline: none;
    border-color: #4f005f;
  }
`;
const StyledForm = styled.form`
  margin: auto;
  width: 90%;
  max-width: 40rem;
`;

const NewUser = ({ onNewUser }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(null);
  const closeModalHandler = () => {
    setError(null);
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      setError({
        title: "Invalid input",
        content: "Please enter all the fields",
      });
      return;
    }

    if (parseInt(enteredAge) <= 0) {
      setError({
        title: "Invalid input",
        content: "Please enter a valid age (> 0)",
      });
      return;
    }
    const newUser = {
      id: uuidv4(),
      username: enteredUsername,
      age: parseInt(enteredAge),
    };
    onNewUser(newUser);
    setEnteredAge("");
    setEnteredUsername("");
  };
  return (
    <div>
      {error && (
        <ErrorModal
          closeModal={closeModalHandler}
          title={error.title}
          content={error.content}
        />
      )}
      <StyledCard>
        <StyledForm onSubmit={submitHandler}>
          <StyledFormControl>
            <label>Username</label>
            <input
              value={enteredUsername}
              type="text"
              onChange={usernameChangeHandler}
            />
          </StyledFormControl>
          <StyledFormControl>
            <label>Age</label>
            <input
              value={enteredAge}
              type="number"
              onChange={ageChangeHandler}
            />
          </StyledFormControl>
          <StyledFormControl>
            <Button type="submit">Add user</Button>
          </StyledFormControl>
        </StyledForm>
      </StyledCard>
    </div>
  );
};
export default NewUser;
