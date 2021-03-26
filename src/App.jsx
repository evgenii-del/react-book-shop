import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Cart, Catalog, Detail, Login, NotFound } from './pages';
import { PrivateRoute } from './components';

const App = () => (
  <div className="wrapper">
    <Router>
      <Switch>
        <PrivateRoute exact path="/catalog" component={Catalog} />
        <PrivateRoute exact path="/catalog/:id" component={Detail} />
        <PrivateRoute exact path="/cart" component={Cart} />
        <PrivateRoute exact path="/catalog/:id" component={Detail} />
        <PrivateRoute exact path="/login" component={Login} isLogin />
        <Route exact path="*" render={() => <NotFound />} />
      </Switch>
    </Router>
  </div>
);

export default App;
