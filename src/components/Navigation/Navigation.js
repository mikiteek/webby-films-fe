import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import Logo from "../../static/images/header/icons/film.svg";
import styles from "./Navigation.module.scss";

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className={styles.nav}>
          <h1>
            <NavLink
              to={"/"}
              className={styles.headerTitleLink}
            >
              <img className={styles.logo} src={Logo} alt={"Filmoteka"}/>
              <span className={styles.headerTitle}>Filmoteka</span>
            </NavLink>
          </h1>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <NavLink
                exact
                to={"/"}
                className={styles.navLink}
                activeClassName={styles.navLinkActive}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.navListItem}>
              <NavLink
                exact
                to={"/add-film"}
                className={styles.navLink}
                activeClassName={styles.navLinkActive}
              >
                Add film
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;