import styles from "./MealsSummary.module.css";
const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>
        it's not just
        <br />
        Food, It's an
        <br />
        <span>Experience!</span> 
      </h2>
      <p>
        Just confirm your order and enjoy our delecious fastest delivery.
      </p>
      <p>
        Eat what make you Happy!
      </p>
    </section>
  );
};
export default MealsSummary;
