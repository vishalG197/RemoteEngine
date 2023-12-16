// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; // Assuming you use Redux for state management
import { logoutAction } from '../redux/auth'; // Replace with your actual logout action

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Adjust based on your state structure
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch your logout action to handle the logout process
    dispatch(logoutAction());
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
