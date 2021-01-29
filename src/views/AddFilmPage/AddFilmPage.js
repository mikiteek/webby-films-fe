import React, {Component} from "react";
import {connect} from "react-redux";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../../components/Header";
import AddFilmForm from "../../components/AddFilmForm";
import AddFilmsFromFilesForm from "../../components/AddFilmsFromFilesForm";
import Spinner from "../../components/Spinner";
import filmsSelector from "../../redux/films/filmsSelector";
import styles from "./AddFilmPage.module.scss";

class AddFilmPage extends Component {
  render() {
    return (
      <div>
        {this.props.spinner && <Spinner/>}
        <Header/>
        <div className={styles.mainBlock}>
          <main className="container">
            <AddFilmForm/>
            <AddFilmsFromFilesForm/>
          </main>
        </div>
        <ToastContainer/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  spinner: filmsSelector.getSpinner(state),
})

export default connect(mapStateToProps)(AddFilmPage);