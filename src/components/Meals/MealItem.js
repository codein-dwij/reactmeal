import { useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const price = `₹${(props.price * 75).toFixed(2)}`;
  const ctx = useContext(CartContext);
  const addToCartHandler = amount => {
    ctx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    })
  };
  return (
    

    <li>
      <div className={styles.meal}>
        <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
        </div>
      
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
      </div>
      
    </li>
  );
};

export default MealItem;
