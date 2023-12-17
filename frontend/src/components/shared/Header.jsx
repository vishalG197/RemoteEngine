// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, removeAuthToken } from '../../utils/authUtils';
import styled from 'styled-components'; // Import styled-components

const Header = () => {
  const handleLogout = () => {
    // Dispatch your logout action to handle the logout process
    removeAuthToken();
  };

  return (
    <StyledHeader>
      <nav>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <StyledLink to="/dashboard">Dashboard</StyledLink>
              </li>
              <li>
                <StyledButton onClick={handleLogout}>Logout</StyledButton>
              </li>
            </>
          ) : (
            <>
              <li>
                <StyledLink to="/login">Login</StyledLink>
              </li>
              <li>
                <StyledLink to="/register">Register</StyledLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;

// Apply styled CSS using the classname
const StyledHeader = styled.header`
  // Add your CSS styles here
  background-color: #d220d2;
  color: white;
  padding: 10px 0;
  text-align: center;

  nav {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;

      li {
        margin-right: 20px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;

const StyledLink = styled(Link)`
  // Add your CSS styles for links here
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledButton = styled.button`
  // Add your CSS styles for buttons here
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
