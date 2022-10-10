import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import styles from "./Meals.module.css";
const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
      <div className={styles.image}>
        <img
          src="https://images.unsplash.com/photo-1641977916755-a90f24d6c673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        ></img>
      </div>
    </React.Fragment>
  );
};
export default Meals;
