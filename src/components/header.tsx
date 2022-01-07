import * as React from "react";
import { FaBars } from "react-icons/fa";

import * as style from "./header.module.scss";

const Header = () => (
  <header className={style.header}>
    <div className={style.buttonContainer}>
      <button>
        <FaBars title="menu" role="img" />
      </button>
    </div>
  </header>
);

export default Header;
