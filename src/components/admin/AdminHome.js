import React, { Component } from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";
import Articles from "../Articles";
import ListPatient from "../ListPatient";

class AdminHome extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div
          className="container-fluid home-admin text-center"
          id="conponent-body"
        >
          <div className="row">
            <div className="home-admin-col col-5">
              <h4>A rappeler</h4>
              <ListPatient />
            </div>

            <div className="home-admin-col col-7 text-center">
              <h4>Liste articles</h4>
              <Articles limit={2} truncateSize={10} col={6} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AdminHome;
