import React, { Component } from "react";

const Patient = ({ firstname, lastname, email, telephone, suject }) => {
  return (
    <div>
      <div className="row">
        <div className="rdv">
          <div className="content-admin-rdv">
            <p className="pl-4 pr-5">{firstname}</p>
            <p className="pl-1 pr-5">{lastname}</p>
            <p className="pl-1 pr-5">{email}</p>
            <p className="pl-1 pr-5">{telephone}</p>
            <p className="pl-1 pr-5">{suject}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

class ListPatient extends Component {
  render() {
    return (
      <div>
        {/* <Patient
          key={patient._id}
          firstname={patient.firstname}
          lastname={patient.lastname}
          email={patient.email}
          telephone={patient.telephone}
          suject={patient.suject}
        /> */}
        <div className="row">
          <div className="rdv">
            <div className="content-admin-rdv">
              <p className="pl-4 pr-5">non</p>
              <p className="pl-1 pr-5">prénom</p>
              <p className="pl-1 pr-5">email</p>
              <p className="pl-1 pr-5">téléphone</p>
              <p className="pl-1 pr-5">sujet</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListPatient;
