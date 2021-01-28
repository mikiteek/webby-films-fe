import React, {Component} from "react";

import {Route, Switch} from "react-router-dom";
import HomePage from "./views/HomePage";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path={"/"} exact component={HomePage}/>
        </Switch>
      </>
    );
  }
}

export default App;