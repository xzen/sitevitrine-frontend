import React from "react";

import Prix from "./Prix";
import Articles from "./Articles";
import Presentation from "./Presentation";
import Formulaire from "./FormRdv";

const Home = props => {
  return (
    <div className="home">
      <div className="home-top">
        <div className="home-top-text container">
          <h1 className="display-5 title-home-top">
            L'aromathérapie au service de votre santé
          </h1>
          <p className="lead">
            Réservez votre première consultation dès aujourd'hui
          </p>
          <button className="btn btn-primary btn-lg px-4 py-3 mt-3">
            Pendre RDV
          </button>
        </div>
      </div>
      <Presentation />
      <Prix />
      <Articles />
      <Formulaire />
    </div>
  );
};

export default Home;
