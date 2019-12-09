import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container main-footer-content">
        <div>
          <Link to="">
            <img
              src={require("../img/icon/fb-icon.svg")}
              className="icon-social"
            />
          </Link>
          <Link to="">
            <img
              src={require("../img/icon/insta-icon.svg")}
              className="icon-social"
            />
          </Link>
        </div>

        <p>
          <Link to="/">Accueil</Link>
        </p>
        <p>
          <Link to={{ pathname: "/", hash: "#consultations" }}>
            Consultations
          </Link>
        </p>
        <p>
          <Link to="/testimonials">Témoignages</Link>
        </p>
        <p>
          <Link to="/blog">Blog</Link>
        </p>
        <p>
          <Link to="/contact">Contact</Link>
        </p>
        <p>
          <Link to="/admin">Administrateur</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
