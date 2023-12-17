// WelcomePage.js

import React from 'react';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1>Welcome to the Developer App</h1>
      <p>
        Start your journey by onboarding and showcasing your skills and experiences.
      </p>
      <p>
        Connect with companies looking for talented developers like you!
      </p>
      <button onClick={() => { /* Redirect to onboarding page or relevant route */ }}>
        Get Started
      </button>
    </div>
  );
}

export default WelcomePage;
