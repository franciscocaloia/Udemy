import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = ({ expenses }) => {
  return (
    <Card className="expenses">
      <ExpenseItem {...expenses[0]} />
      <ExpenseItem {...expenses[1]} />
      <ExpenseItem {...expenses[2]} />
      <ExpenseItem {...expenses[3]} />
    </Card>
  );
};
export default ExpenseList;
