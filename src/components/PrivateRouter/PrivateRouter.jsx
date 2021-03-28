import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useSelector((state) => state.user);
  const obj = { ...rest };

  return (
    <Route
      {...rest}
      render={(props) => {
        if (obj.isLogin) {
          return token ? <Redirect to="/catalog" /> : <Component />;
        }
        return token ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
