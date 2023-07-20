import React from "react";
import style from "./Btn.module.scss";
function Btn({ children }) {
  return (
    <div>
      <button className={style.btn}> {children}</button>
    </div>
  );
}

export default Btn;
