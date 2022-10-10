import React, { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountValid, setAmountValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 0 ||
      enteredAmountNum > 5
    ) {
      setAmountValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNum);
  };
  
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountValid && <p>Please enter a valid number(1-5).</p>}
    </form>
  );
};
export default MealItemForm;
