import React, {Component} from "react";
import {withRouter} from "react-router-dom";

import Navigation from "../Navigation";
import SearchForm from "../SearchForm";
import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    const headerStyles = [styles.header, "container"].join(" ");
    const {location: {pathname}} = this.props;
    return (
      <div className={styles.wrapperHome}>
        <header className={headerStyles}>
          <Navigation/>
          {pathname === "/" && <SearchForm/>}
        </header>
      </div>
    );
  }
}

export default withRouter(Header);