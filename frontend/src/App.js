// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/shared/PrivateRoute';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import OnboardingForm from './components/developer/OnboardingForm';

function App() {
  return (
    <Router>
      <div>
        {/* Header or Navigation Component */}
        {/* Include any shared components like a navigation bar or header here */}
        
        <Switch>
          {/* Public Routes */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          {/* Private Routes */}
          <PrivateRoute path="/onboarding" component={OnboardingForm} />

          {/* Add more routes as needed */}
          
          {/* Default Route */}
          <Route path="/" exact>
            {/* Home or Dashboard component */}
            <div>Welcome to the Application!</div>
          </Route>

          {/* 404 Page */}
          <Route>
            <div>Page not found!</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
