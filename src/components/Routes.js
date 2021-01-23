import React from 'react';
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom';

import Home from './pages/Home';
import Sum from './pages/modals/Sum';

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sum" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;