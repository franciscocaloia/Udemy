import styled from "styled-components";

import useInput from "../../hooks/use-input";

const StyledForm = styled.form`
  margin: 1rem 0;
  height: 19rem;
  overflow: auto;

  .control {
    margin-bottom: 0.5rem;
  }

  .control label {
    font-weight: bold;
    margin-bottom: 0.25rem;
    display: block;
  }

  .control input {
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 20rem;
    max-width: 100%;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  .actions button {
    font: inherit;
    color: #5a1a01;
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-radius: 25px;
    padding: 0.5rem 2rem;
  }

  .actions button:hover,
  .actions button:active {
    background-color: #ffe6dc;
  }

  .actions .submit {
    border: 1px solid #5a1a01;
    background-color: #5a1a01;
    color: white;
  }

  .actions .submit:hover,
  .actions .submit:active {
    background-color: #7a2706;
  }

  .invalid label {
    color: #ca3e51;
  }

  .invalid input {
    border-color: #aa0b20;
    background-color: #ffeff1;
  }
`;

const isNotEmpty = (value) => {
  console.log(value);
  return value.trim() !== "";
};

const Checkout = ({ onClosecheckout, onConfirm }) => {
  function onSubmit(event) {
    event.preventDefault();
    if (formValid) {
      onConfirm({
        name: nameValue,
        street: streetValue,
        postal: postalValue,
        city: cityValue,
      });
      nameReset();
      streetReset();
      postalReset();
      cityReset();
    }
  }

  const {
    inputValue: nameValue,
    inputError: nameError,
    inputValid: nameValid,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(isNotEmpty);
  const {
    inputValue: streetValue,
    inputError: streetError,
    inputValid: streetValid,
    inputChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: streetReset,
  } = useInput(isNotEmpty);
  const {
    inputValue: postalValue,
    inputError: postalError,
    inputValid: postalValid,
    inputChangeHandler: postalChangeHandler,
    inputBlurHandler: postalBlurHandler,
    reset: postalReset,
  } = useInput(isNotEmpty);
  const {
    inputValue: cityValue,
    inputError: cityError,
    inputValid: cityValid,
    inputChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: cityReset,
  } = useInput(isNotEmpty);
  const formValid = cityValid && nameValid && streetValid && postalValid;
  return (
    <StyledForm onSubmit={onSubmit}>
      <div className={`control ${nameError && "invalid"}`}>
        <label htmlFor="inputName">Name</label>
        <input
          id="inputName"
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
      </div>
      <div className={`control ${streetError && "invalid"}`}>
        <label htmlFor="inputStreet">Street</label>
        <input
          id="inputStreet"
          value={streetValue}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
      </div>
      <div className={`control ${postalError && "invalid"}`}>
        <label htmlFor="inputPostal">Postal</label>
        <input
          id="inputPostal"
          value={postalValue}
          onChange={postalChangeHandler}
          onBlur={postalBlurHandler}
        />
      </div>
      <div className={`control ${cityError && "invalid"}`}>
        <label htmlFor="inputName">City</label>
        <input
          id="inputName"
          value={cityValue}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
      </div>
      <div className="actions">
        <button type="button" onClick={onClosecheckout}>
          Cancel
        </button>
        <button className="submit" type="submit">
          Confirm
        </button>
      </div>
    </StyledForm>
  );
};

export default Checkout;
