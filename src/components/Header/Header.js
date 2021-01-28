import React, {Component} from "react";

import Navigation from "../Navigation";
import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    const headerStyles = [styles.header, "container"].join(" ");
    return (
      <div className={styles.wrapperHome}>
        <header className={headerStyles}>
          <Navigation/>
        </header>
      </div>
    );
  }
}

export default Header;