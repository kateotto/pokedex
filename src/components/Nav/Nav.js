import React from "react";
import styles from "./Nav.module.scss";
import Title from "../Title/Title";

function Nav(props) {
  return (
    <nav className={styles.nav}>
      <Title title="Pokedex" />
    </nav>
  );
}

export default Nav;
