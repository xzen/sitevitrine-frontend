import React from "react";
import "../scss/index.scss";

const Articles = () => {
  return (
    <>
      <h1 className="text-center mt-4 mb-5">Articles</h1>
      <div className="container home-cards">
        <div className="card-deck">
          <div className="card ml-0">
            <img
              src={require("../img/1article-aromatherapie.jpg")}
              className="card-img-top"
              alt="ar4"
            />
            <div className="card-body">
              <h4 className="card-title">Qu’est-ce-que l’aromathérapie ?</h4>
              <p className="card-text">
                L’aromathérapie est l’utilisation des huiles essentielles dans
                un but préventif, curatif ou de mieux-être...
              </p>
              <p className="card-date">
                <small className="text-muted">12/10/2019</small>
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src={require("../img/2article-aromatherapie.jpg")}
              className="card-img-top"
              alt="aro"
            />
            <div className="card-body">
              <h4 className="card-title">
                Coup de froid ? Pensez à l'Huile Essentielle de Saro Bio
              </h4>
              <p className="card-text">
                Si d’aventure vous entendez parler d’huile essentielle de
                mandravasarotra, sachez que c’est l’huile essentielle de Saro...
              </p>
              <p className="card-date">
                <small className="text-muted">20/10/2019</small>
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src={require("../img/3article-aromatherapie.jpg")}
              className="card-img-top"
              alt="aro2"
            />
            <div className="card-body">
              <h4 className="card-title">
                Moustiques, piqûres, Huiles Essentielles
              </h4>
              <p className="card-text">
                Les tout petits seront protégés avec les eaux florales*ou
                hydrolats (Camomille Romaine bio, Fleur d’Oranger bio) et jamais
                avec les huiles essentielles...
              </p>
              <p className="card-date">
                <small className="text-muted">25/10/2019</small>
              </p>
            </div>
          </div>

          <div className="card mr-0">
            <img
              src={require("../img/4article-aromatherapie.jpg")}
              className="card-img-top"
              alt="aro3"
            />
            <div className="card-body">
              <h4 className="card-title">Check-list spéciale vacances</h4>
              <p className="card-text">
                Vous préparez vos vacances ou vous l'êtes peut-être déjà.
                L'équipe Revelessence vous propose sa check-list de produits
                indispensables...
              </p>
              <p className="card-date">
                <small className="text-muted">29/10/2019</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
