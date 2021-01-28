import React, {Component} from "react";

import Navigation from "../Navigation";
import SearchForm from "../SearchForm";
import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    const headerStyles = [styles.header, "container"].join(" ");
    return (
      <div className={styles.wrapperHome}>
        <header className={headerStyles}>
          <Navigation/>
          <SearchForm/>
        </header>
      </div>
    );
  }
}

export default Header;