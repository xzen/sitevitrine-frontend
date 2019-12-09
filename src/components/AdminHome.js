import React from "react";
// import { Link } from "react-router-dom";

const AdminHome = () => (
  <div className="container-fluid home-admin" id="conponent-body">
    <div className="row">
      <div className="home-admin-col col-5">
        <div>
          <h4>Accepter</h4>
          <div className="rdv">
            <div className="content-admin-rdv">
              <p className="text-padding">non</p>
              <p className="text-padding">date</p>
              <p className="text-padding">lieux</p>
              <p className="text-padding">heure</p>
            </div>
          </div>
          <div className="rdv">
            <div className="content-admin-rdv">
              <p className="text-padding">non</p>
              <p className="text-padding">date</p>
              <p className="text-padding">lieux</p>
              <p className="text-padding">heure</p>
            </div>
          </div>
        </div>
        <div className="rdv">
          <h4>En attente</h4>
          <div>
            <div className="content-admin-rdv">
              <p className="text-padding">non</p>
              <p className="text-padding">date</p>
              <p className="text-padding">lieux</p>
              <p className="text-padding">heure</p>
              <button className="btn btn-success">acceter</button>
              <button className="btn btn-danger">refuser</button>
            </div>
            <div className="content-admin-rdv">
              <p className="text-padding">non</p>
              <p className="text-padding">date</p>
              <p className="text-padding">lieux</p>
              <p className="text-padding">heure</p>
              <button className="btn btn-success btn-rdv">acceter</button>
              <button className="btn btn-danger btn-rdv">refuser</button>
            </div>
          </div>
        </div>
      </div>

      <div className="home-admin-col col-7">
        <h4>Liste articles</h4>
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="img-home-adim col-md-4">
              <img
                src={require("../img/3article-aromatherapie.jpg")}
                class="card-img"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <div className="content-admin-date-author">
                  <p>date: </p>
                  <p>auteur: </p>
                </div>
                <button>modifier</button>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="img-home-adim col-md-4">
              <img
                src={require("../img/1article-aromatherapie.jpg")}
                class="card-img"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <div className="content-admin-date-author">
                  <p>date: </p>
                  <p>auteur: </p>
                </div>
                <button>modifier</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="img-home-adim col-md-4">
              <img
                src={require("../img/2article-aromatherapie.jpg")}
                class="card-img"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <div className="content-admin-date-author">
                  <p>date: </p>
                  <p>auteur: </p>
                </div>
                <button>modifier</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* fin case liste articles admin */}
    </div>
  </div>
);

export default AdminHome;
