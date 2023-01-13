import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = ({ expenses }) => {
  if (expenses.length === 0)
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem {...expense} />
      ))}
    </ul>
  );
};
export default ExpenseList;
