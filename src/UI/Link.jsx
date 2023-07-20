import React from "react";
import style from "./Link.module.scss";

function Link({ children }) {
  return (
    <li>
      <a className={style.link} href="">
        {children}
      </a>
    </li>
  );
}

export default Link;
