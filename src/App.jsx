import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  Cart, Catalog, Detail, Login, NotFound,
} from './pages';

const App = () => {
  const { token } = useSelector((state) => state.user);

  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/catalog" render={() => (token ? <Catalog /> : <Redirect to="/login" />)} />
          <Route exact path="/catalog/:id" render={() => (token ? <Detail /> : <Redirect to="/login" />)} />
          <Route exact path="/cart" render={() => (token ? <Cart /> : <Redirect to="/login" />)} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="*" render={() => <NotFound />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
