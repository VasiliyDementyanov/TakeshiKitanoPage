import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import Header from "./header/Header";
import Welcome from "./welcome/Welcome";
import MoviesHOC from "./moviesHOC/MoviesHOC";
import Biography from "./biography/Biography";

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/Movies" component={MoviesHOC} />
          <Route exact path="/Biography" component={Biography} />
        </Switch>
      </Router>
    );
  }
}
export default App;
