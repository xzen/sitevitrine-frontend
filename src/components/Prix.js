import React from "react";
// import ScrollableAnchor from "react-scrollable-anchor";

const Prix = () => {
  return (
    // <ScrollableAnchor id="consultations">
    <div>
      <h1 className="text-center">Mes consultations</h1>

      <div className="type-consultation">
        <div className="modalité-consultation">
          <h5 className="title">
            Je propose différentes modalités de consultations :{" "}
          </h5>
          <ul>
            <li>A votre domicile</li>
            <li>A mon domicile</li>
            <li>Par téléphone ou visioconférence</li>
            <li>Dans un café</li>
          </ul>
        </div>

        <div className="prix-consultation">
          <h5 className="title">Prix : </h5>
          <ul>
            <li>Première consultation 65€</li>
            <li>Consultation de suivi 50€</li>
          </ul>
        </div>

        <div className="horaires-consutation">
          <h5 className="title">Horaires</h5>
          <div className="horaires">
            <p className="mr-5">Lun - Ven</p>
            <p>17h30 - 20h30</p>
          </div>

          <div className="horaires">
            <p className="mr-5">Sam - Dim </p>
            <p>9h - 18h</p>
          </div>
        </div>
      </div>
    </div>
    // </ScrollableAnchor>
  );
};

export default Prix;
