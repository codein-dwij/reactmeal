import { useContext,useEffect,useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const number =  ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0)
  const [btnIsHighlighted,setBtnIsHighlighted] = useState(false);
  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;
  const {items} = ctx;
  useEffect(()=>{
    if(items.length === 0){
      return;
    }
    setBtnIsHighlighted(true);
    const timer= setTimeout(()=>{
      setBtnIsHighlighted(false);
    },300)

    return () => {
      clearTimeout(timer);
    }
  },[items])
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.bump}>Your Cart</span>
      <span className={styles.badge}>
       {number}
      </span>
    </button>
  );
};

export default HeaderCartButton;
