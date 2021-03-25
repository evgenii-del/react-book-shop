import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';

import { Cart, Catalog, Detail, Login, NotFound } from './pages';

const App = () => {
  const { token } = useSelector((state) => state.user);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <PrivateRoute exact path="/catalog" component={Catalog} />
          <PrivateRoute exact path="/catalog/:id" component={Detail} />
          <PrivateRoute exact path="/cart" component={Cart} />
          <PrivateRoute exact path="/catalog/:id" component={Detail} />
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
