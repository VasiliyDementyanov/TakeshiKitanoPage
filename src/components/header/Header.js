import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.scss";

class Header extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#000000" }}
      >
        <Link
          className={[
            "navbar-brand",
            "m-0",
            "p-0",
            "ml-4",
            "mr-3",
            styles.customNavbarBrand,
          ].join(" ")}
          to="/"
        >
          Takeshi
          <br />
          Kitano
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li
              className="nav-item active"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link
                className={["nav-link", styles.customNavLink].join(" ")}
                to="/Movies"
              >
                Movies
              </Link>
            </li>
            <li
              className="nav-item active"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link
                className={["nav-link", styles.customNavLink].join(" ")}
                to="/Biography"
              >
                Biography
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;
