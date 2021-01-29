import React, {Component, lazy, Suspense} from "react";
import {Route, Switch} from "react-router-dom";

import Spinner from "./components/Spinner";

const AsyncHomePage = lazy(() => import("./views/HomePage" /* webpackChunkName: "home-page" */));
const AsyncAddFilmPage = lazy(() => import("./views/AddFilmPage" /* webpackChunkName: "add-film-page" */));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route path={"/"} exact component={AsyncHomePage}/>
          <Route path={"/add-film"} exact component={AsyncAddFilmPage}/>
        </Switch>
      </Suspense>
    );
  }
}

export default App;