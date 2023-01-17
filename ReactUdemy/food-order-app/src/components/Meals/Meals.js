import React, { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import MealsList from "./MealsList";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();
  function dataProcessor(data) {
    const listedData = [];
    for (const key in data) {
      listedData.push({
        id: key,
        ...data[key],
      });
    }
    setMeals(listedData);
  }

  useEffect(() => {
    sendRequest(
      "https://food-order-app-7a792-default-rtdb.firebaseio.com/meals.json",
      {},
      dataProcessor
    );
  }, [sendRequest]);

  return (
    <div>
      <MealsSummary />
      {isLoading && <p>isLoading</p>}
      {!isLoading && error && <p>{error}</p>}
      {!isLoading && !error && <MealsList meals={meals} />}
    </div>
  );
};

export default Meals;
