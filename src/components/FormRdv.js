import React from "react";

const FormRvd = () => {
  return (
    <div id={"contact"}>
      <div className="container rdv-from">
        <form>
          <h2>Prendre contact</h2>

          <div className="form-group form-check form-check-inline">
            <input className="form-check-input" id="gender-f" type="checkbox" />
            <label className="form-check-label" htmlFor="gender-f">
              Femme
            </label>
          </div>
          <div className="form-group form-check form-check-inline">
            <input className="form-check-input" id="gender-m" type="checkbox" />
            <label className="form-check-label" htmlFor="gender-m">
              Homme
            </label>
          </div>
          <div className="form-group form-check form-check-inline">
            <input className="form-check-input" id="gender-c" type="checkbox" />
            <label className="form-check-label" htmlFor="gender-c">
              Enfant
            </label>
          </div>

          <div className="contact">
            <div className="form-group">
              <label htmlFor="lastName">Nom</label>
              <input type="text" id="lastName" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">Prénom</label>
              <input type="text" id="firstName" className="form-control" />
            </div>
          </div>

          <div className="contact">
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Téléphone</label>
              <input type="tel" id="phone" className="form-control" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="text">Suject</label>
            <textarea type="text" id="suject" className="form-control" />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block mt-5"
          >
            Envoyer ma demande
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormRvd;
