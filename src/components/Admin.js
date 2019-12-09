import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import AdminHome from "./AdminHome";
import AdminRdv from "./AdminRdv";
import AdminBlog from "./AdminBlog";
import NotFound from "./NotFound";

const Admin = props => {
  const isAdmin = props.location.pathname.includes("admin");
  return (
    <>
      <Navbar isAdmin={isAdmin} />
      <Switch>
        <Route exact path={props.match.url} component={AdminHome} />
        <Route
          exact
          path={`${props.match.url}admin-rdv`}
          component={AdminRdv}
        />
        <Route
          exact
          path={`${props.match.url}admin-blog`}
          component={AdminBlog}
        />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
};

export default Admin;
