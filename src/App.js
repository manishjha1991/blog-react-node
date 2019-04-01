import React, { Component } from "react";

import "./App.css";
import Home from "./Component/Home";
import Form from "./Component/Form";
import DashBoard from "./Component/DashBoard"
class App extends Component {
  render() {
    return (
      <div>
        {/* <Home /> */}
        <Form />
        {/* <DashBoard/> */}
      </div>
    );
  }
}

export default App;
