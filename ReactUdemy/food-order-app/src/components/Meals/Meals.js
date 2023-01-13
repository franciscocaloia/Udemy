import React from "react";
import MealsList from "./MealsList";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <div>
      <MealsSummary />
      <MealsList />
    </div>
  );
};

export default Meals;
