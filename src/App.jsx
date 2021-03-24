import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Cart, Catalog, Detail, Login, NotFound } from './pages';

const App = () => {
  const { token } = useSelector((state) => state.user);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route
            exact
            path="/catalog"
            render={() => (token ? <Catalog /> : <Redirect to="/login" />)}
          />
          <Route
            exact
            path="/catalog/:id"
            render={() => (token ? <Detail /> : <Redirect to="/login" />)}
          />
          <Route
            exact
            path="/cart"
            render={() =>
              token ? <Cart setIsOverlayOpen={setIsOverlayOpen} /> : <Redirect to="/login" />
            }
          />
          <Route
            exact
            path="/login"
            render={() => (token ? <Redirect to="/catalog" /> : <Login />)}
          />
          <Route exact path="*" render={() => <NotFound />} />
        </Switch>
      </Router>
      <div className={`overlay ${isOverlayOpen ? 'overlay_active' : undefined}`} />
    </div>
  );
};

export default App;
