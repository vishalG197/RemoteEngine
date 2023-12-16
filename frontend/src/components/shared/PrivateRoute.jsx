// src/components/shared/PrivateRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/authUtils';

const PrivateRoute = ({childran}) => {
  // Check if the user is authenticated
  const isAuth = isAuthenticated();

if(isAuth){
        return <Navigate to="/login" />
      }
     
        return childran;
};

export default PrivateRoute;
