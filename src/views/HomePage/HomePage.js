import React, {Component} from "react";

import Header from "../../components/Header";
import MovieItem from "../../components/MovieItem";
import styles from "./HomePage.module.scss";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header/>

        {/*<MovieItem/>*/}
      </div>
    );
  }
}

export default HomePage;