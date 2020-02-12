import React from "react";
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";

import Public from "./Public";
import Admin from "../components/admin/Admin";
import Blog from "../components/Blog";
import NotFound from "./NotFound";

const PrivateAdmin = ({ isLoged, path, ReactComponent }) => (
  <Route
    path={path}
    render={() => {
      if (isLoged) {
        return <ReactComponent />
      }

      return <Public />
    }}
  />
)

const App = ({ isLoged }) => {
  return (
    <Switch>
      <PrivateAdmin isLoged={isLoged} path="/admin" ReactComponent={Admin} />
      {/*<Route path="/admin" component={Admin} />*/}
      {/*<Route path="/blog" component={Blog} />*/}
      <Route path="/" component={Public} />
      <Route component={NotFound} />
    </Switch>
  );
};

const mapToProps = (state) => {
  const { isLoged } = state.session;

  return ({ isLoged });
}

export default connect(mapToProps)(App);
