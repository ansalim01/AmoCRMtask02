import React from "react";
import "./BurgerBtn.scss";
function BurgerBtn({ setToggleBurgerBtn, toggleBurgerBtn }) {
  return (
    <div
      className={toggleBurgerBtn ? "burgerBtn active" : "burgerBtn"}
      onClick={() => setToggleBurgerBtn(!toggleBurgerBtn)}
    >
      <span></span>
    </div>
  );
}

export default BurgerBtn;
