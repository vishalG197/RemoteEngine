// src/components/Homepage.js

import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <header>
        <h1>Project Name</h1>
      </header>
      <main>
        <section>
          <h2>Welcome to Project Name</h2>
          <p>Explore our platform for clients and developers.</p>
        </section>
        <section>
          <h2>Get Started</h2>
          <nav>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/onboarding">Developer Onboarding</Link>
              </li>
            </ul>
          </nav>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Project Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
