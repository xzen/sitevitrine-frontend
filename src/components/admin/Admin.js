import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "../Navbar";
import Footer from "../Footer";

import AdminHome from "../admin/AdminHome";
import AdminRdv from "../admin/AdminRdv";
import AdminBlog from "../admin/AdminBlog";
import NotFound from "../NotFound";

const Admin = props => {
  const isAdmin = props.location.pathname.includes("admin");
  return (
    <>
      <Navbar isAdmin={isAdmin} />
      <Switch>
        <Route exact path={props.match.url} component={AdminHome} />
        <Route exact path={`${props.match.url}adminRdv`} component={AdminRdv} />
        <Route
          exact
          path={`${props.match.url}adminBlog`}
          component={AdminBlog}
        />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
};

export default Admin;
