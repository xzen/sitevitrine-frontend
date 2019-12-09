import React from "react";
import { Switch, Route } from "react-router-dom";

import Public from "./Public";
import Admin from "./Admin";

const App = () => {
  return (
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/" component={Public} />
    </Switch>
  );
};

export default App;
