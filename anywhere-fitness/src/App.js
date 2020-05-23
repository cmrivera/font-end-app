import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MyClassBoard from "./components/classBoard";
import PrivateRoute from "./components/privateRoute";
import Login from "./components/loginPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/loginPage" component={Login} />
          <Route component={Login} />
          <PrivateRoute exact path="/classBoard" component={MyClassBoard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
