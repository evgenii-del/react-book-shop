import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {Cart, Catalog, Detail, Login, NotFound} from './pages';

function App() {
  return (
    <div className="wrapper">
        <Router>
            <Switch >
                <Route exact path="/catalog">
                    <Catalog/>
                </Route>
                <Route exact path="/catalog/:id">
                    <Detail/>
                </Route>
                <Route exact path="/cart">
                    <Cart/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
