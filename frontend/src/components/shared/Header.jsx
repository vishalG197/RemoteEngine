// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, removeAuthToken } from '../../utils/authUtils';


const Header = () => {
 
 

  const handleLogout = () => {
    // Dispatch your logout action to handle the logout process
    removeAuthToken()
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
