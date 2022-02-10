import React from "react";
import mealsImage from "../../assests/meals.jpg";
import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';

const Header = props => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>MealsReact</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} />
      </div>
    </React.Fragment>
  );
};

export default Header;
