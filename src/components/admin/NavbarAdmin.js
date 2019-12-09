import React from "react";

const NavbarAdmin = () => {
  return (
    <div className="menu">
      <nav className="container navbar navbar-axpand-md navbar-light">
        <a href="" className="navbar-brand">
          profondément Essentielle
        </a>
        <ul>
          <li className="nav-item">
            <Link to="" className="nav-link">
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link">
              Rendez-vous
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link">
              Article
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link">
              Avis
            </Link>
          </li>
        </ul>
        <button>
          <Link to="/">Site public</Link>
        </button>
      </nav>
    </div>
  );
};

export default NavbarAdmin;
