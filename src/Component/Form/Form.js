import React, { Component } from "react";
import "./Form.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
class Form extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content-area group">
          <center className="main-section">
            <fieldset>
              <legend>Question Section</legend>

              <input placeholder="Type Your Question Here" type="text" />

              <br />
              <input placeholder="Type Your Answer" type="textarea" />
              <br />
              <div className="upload-btn-wrapper">
                <button className="btn">Upload a file</button>
                <input type="file" name="myfile" />
              </div>
              <br />
              <input type="submit" value="Submit" />
            </fieldset>
          </center>
        </div>

        <Footer />
      </div>
    );
  }
}
export default Form;
