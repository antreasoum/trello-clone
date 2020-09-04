import React from "react";
import { Link } from "react-router-dom";
import "./style/boards.css";

function Nav1() {
  return (
    <div>
      <nav className="navbar">
        <a className="navbar-nav" href="/">
          <img
            src="images/logo.png"
            alt="logo"
            width="130"
            height="40"
            className="d-inline-block align-top"
          ></img>
        </a>

        <ul className="nav-links">
          <Link to="/login">
            <li className="nav-item">
              <a className="nav-link text-white" href="/login">
                Log In
              </a>
            </li>
          </Link>

          <Link to="/signup">
            <li className="nav-item2">
              <a className="nav-link" href="/signup">
                Sign Up
              </a>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

const nav2 = () => (
  <div>
    <nav className="navbar2">
      <a className="navbar2-nav" href="/">
        <img
          src="images/logo.png"
          alt="logo"
          width="130"
          height="40"
          className="d-inline-block align-top"
        ></img>
      </a>

      <ul className="nav-links2">
        <Link to="/">
          <li className="nav2-item">
            <a className="nav-link2 text-white" href="/"></a>
          </li>
        </Link>

        <Link to="/">
          <li className="nav2-item2">
            <a className="nav-link2 text-white" href="/"></a>
          </li>
        </Link>
      </ul>
    </nav>
  </div>
);

export default Nav1;
