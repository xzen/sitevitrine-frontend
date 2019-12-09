import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  console.log("props.isAdmin", props.isAdmin);
  return (
    <div className="menu">
      <nav className="container navbar navbar-expand-md navbar-light">
        <a href="" className="navbar-brand">
          Pronfondément Essentielle
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#menu"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Consultations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/testimonials" className="nav-link">
                Témoignages
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            {!props.isAdmin && (
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
