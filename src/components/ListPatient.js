import React, { Component } from "react";
class ListPatient extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="rdv">
            <div className="content-admin-rdv">
              <p className="pl-1 pr-4">non</p>
              <p className="pl-1 pr-4">prénom</p>
              <p className="pl-1 pr-4">email</p>
              <p className="pl-1 pr-4">téléphone</p>
              <p className="pl-1 pr-4">sujet</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListPatient;
