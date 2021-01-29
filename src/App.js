import React, {Component} from "react";

import {Route, Switch} from "react-router-dom";
import HomePage from "./views/HomePage";
import AddFilmPage from "./views/AddFilmPage";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path={"/"} exact component={HomePage}/>
          <Route path={"/add-film"} exact component={AddFilmPage}/>
        </Switch>
      </>
    );
  }
}

export default App;