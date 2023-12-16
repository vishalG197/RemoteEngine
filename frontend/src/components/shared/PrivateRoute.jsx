// src/components/shared/PrivateRoute.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../utils/authUtils';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Check if the user is authenticated
  const isAuth = isAuthenticated();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          // Render the protected component if authenticated
          <Component {...props} />
        ) : (
          // Redirect to the login page if not authenticated
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
