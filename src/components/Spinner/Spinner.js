import React, {Component} from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Spinner.module.scss";

class Spinner extends Component {
  render() {
    return (
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            visible={true}
          />
        </div>
      </div>
    );
  }
}

export default Spinner;