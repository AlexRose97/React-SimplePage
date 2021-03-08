import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { Inicio } from "./components/navbar/Inicio";
import { Info } from "./components/navbar/Info";
import { Err404 } from "./components/Err404";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Inicio} />
            <Route exact path="/Inicio" component={Inicio} />
            <Route exact path="/Info" component={Info} />
            <Route component={Err404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

/*
<Route exact path="/">
    <Redirect to="/home" />
</Route>
*/
export default App;
