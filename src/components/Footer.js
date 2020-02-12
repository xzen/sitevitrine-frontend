import React from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import { openModal } from './admin/modal/actions/';

const Footer = ({ dispatch }) => {
  return (
    <footer className="main-footer">
      <div className="container main-footer-content">
        <div>
          <Link to="">
            <img
              src={require("../img/icon/fb-icon.svg")}
              className="icon-social"
              alt="facebook"
            />
          </Link>
          <Link to="">
            <img
              src={require("../img/icon/insta-icon.svg")}
              className="icon-social"
              alt="instagram"
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
          <button to="/admin" onClick={ () => dispatch(openModal(true)) }>Administrateur</button>
        </p>
      </div>
    </footer>
  );
};

export default connect()(Footer);
