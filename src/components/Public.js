import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Footer from "./Footer";

const Public = props => {
  const isAdmin = props.location.pathname.includes("admin");
  return (
    <>
      <Navbar isAdmin={isAdmin} />
      <Switch>
        <Route exact path={props.match.url} component={Home} />
        <Route exact path={`${props.match.url}blog`} component={Blog} />
        <Route
          exact
          path={`${props.match.url}testimonials`}
          component={Testimonials}
        />
        <Route exact path={`${props.match.url}contact`} component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
};

export default Public;