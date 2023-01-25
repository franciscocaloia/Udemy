import { useMemo, useState } from "react";

const useInput = (validateInput) => {
  const [inputValue, setInputValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const inputValid = useMemo(
    () => validateInput(inputValue),
    [inputValue, validateInput]
  );
  const inputError = !inputValid && inputTouched;

  function inputChangeHandler(event) {
    setInputValue(event.target.value);
  }
  function inputBlurHandler() {
    setInputTouched(true);
  }
  function reset() {
    setInputValue("");
  }
  return {
    inputValue,
    inputError,
    inputValid,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;
