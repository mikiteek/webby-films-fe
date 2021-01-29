import React, {Component} from "react";
import {connect} from "react-redux";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import filmsOperations from "../../redux/films/filmsOperations";
import filmsSelector from "../../redux/films/filmsSelector";
import Header from "../../components/Header";
import MovieItem from "../../components/MovieItem";
import styles from "./HomePage.module.scss";
import Spinner from "../../components/Spinner";

class HomePage extends Component {
  componentDidMount() {
    this.props.onGetAllFilms();
  }

  render() {
    const {films} = this.props;

    return (
      <div>
        {this.props.spinner && <Spinner/>}
        <Header/>
        <div className={styles.mainBlock}>
          <main className="container">
            <ul>
              {films.length > 0 && films.map(film => (
                <MovieItem key={film._id}
                           title={film.title}
                           id={film._id}
                           releaseYear={film.releaseYear}
                           format={film.format}
                           stars={film.stars}
                />
              ))
              }
            </ul>
          </main>
        </div>
        <ToastContainer/>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetAllFilms: filmsOperations.getAllFilms,
}

const mapStateToProps = state => ({
  films: filmsSelector.getFilms(state),
  spinner: filmsSelector.getSpinner(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);