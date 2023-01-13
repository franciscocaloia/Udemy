import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = ({ onExpenseAdd }) => {
  const [showNewExpense, setShowNewExpense] = useState(false);
  const toggleShowNewExpense = () => {
    setShowNewExpense((prevState) => !prevState);
  };
  return (
    <div className="new-expense">
      {showNewExpense ? (
        <ExpenseForm
          toggleShowNewExpense={toggleShowNewExpense}
          onExpenseAdd={onExpenseAdd}
        />
      ) : (
        <button onClick={toggleShowNewExpense}>New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
