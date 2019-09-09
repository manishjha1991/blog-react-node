import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import Form from "./Component/Form/Form";
import DashBoard from "./Component/DashBoard/DashBoard";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/"  exact component={Home} />
          <Route path="/form/" component={Form} />
          <Route path="/dashboard/" component={DashBoard} />
        </Router>
      </div>
    );
  }
}

export default App;
