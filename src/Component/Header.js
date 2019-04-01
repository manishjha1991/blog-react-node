import React from "react";
import { Link } from 'react-router-dom'
import Form from "./Form";




function Header(props) {
  return (
    <div>
      <header>
        <h1>Website Title</h1>
        <p>Website slogan included here.</p>
        <nav className="site-nav">
          <ul className="group">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/form">Form</Link>
            </li>
            <li>
            <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
            <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Header;
