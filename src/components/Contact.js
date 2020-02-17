import React from "react";

const FormRvd = () => {
  return (
    <div id={"contact"}>
      <div className="container mt-4">
        <form>
          <h2>Prendre contact</h2>

          <div className="row mt-3">
            <div className="col">
              <label htmlFor="lastName">Nom</label>
              <input type="text" id="lastName" className="form-control" />
            </div>
            <div className="col">
              <label htmlFor="firstName">Prénom</label>
              <input type="text" id="firstName" className="form-control" />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" className="form-control" />
            </div>
            <div className="col">
              <label htmlFor="phone">Téléphone</label>
              <input type="tel" id="phone" className="form-control" />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <label htmlFor="text">Suject</label>
              <textarea type="text" id="suject" className="form-control" />
            </div>
          </div>

          <div className="row mt-3 mb-3">
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Envoyer ma demande
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRvd;
