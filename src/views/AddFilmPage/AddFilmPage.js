import React, {Component} from "react";

import Header from "../../components/Header";
import AddFilmForm from "../../components/AddFilmForm";
import styles from "./AddFilmPage.module.scss";

class AddFilmPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className={styles.mainBlock}>
          <main className="container">
            <AddFilmForm/>
          </main>
        </div>
      </div>
    );
  }
}

export default AddFilmPage;