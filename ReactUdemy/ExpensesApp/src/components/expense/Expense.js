import "./Expense.css";
import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
const Expense = ({ expenses }) => {
  const [expenseFilter, setExpenseFilter] = useState("2020");
  const onFilterSelected = (filterSelected) => {
    setExpenseFilter(filterSelected);
  };
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === expenseFilter
  );
  return (
    <Card className="expenses">
      <ExpenseFilter
        expenseFilter={expenseFilter}
        onFilterSelected={onFilterSelected}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
};
export default Expense;
