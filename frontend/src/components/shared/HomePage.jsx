// src/components/Homepage.js

import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import styled from 'styled-components'; // Import styled-components

const Homepage = () => {
  const [showRegister, setShowRegister] = React.useState(false);

  return (
    <StyledDiv>
      <main>
        <section>
          <h2>Welcome to RemoteEngine</h2>
          <h4>Explore our platform for clients and developers.</h4>
        </section>
<section>
        {showRegister ? (
          <Register />
        ) : (
          <Login />
        )}
</section>
        <p>
          {showRegister
            ? 'Already have an account? '
            : "Don't have an account? "}
          <Link onClick={() => setShowRegister(!showRegister)}>
            {showRegister ? 'Login here' : 'Register here'}
          </Link>
        </p>
      </main>
      <footer>
        <p>&copy; 2023 Project Name. All rights reserved.</p>
      </footer>
    </StyledDiv>
  );
};

export default Homepage;

// Apply styled CSS using the classname
const StyledDiv = styled.div`
  // Add your CSS styles here
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  main {
    text-align: center;
    margin-top: 50px;

    section {
      margin-bottom: 20px;
      text-align: center;
      align-items: center;
      justify-content:center;
      border:1px solid #ccc;
      h2 {
        color: #333;
      }

      p {
        color: #666;
      }
    }

    p {
      border:1px solid #ccc;
      padding:20px;
      a {
        color: #3498db;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  footer {
    margin-top: 50px;
    border:1px solid #ccc;
    text-align: center;
    color: #888;
  }
`;
