// App.js

import React from 'react';
import { Routes,Route} from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import OnboardingForm from './components/developer/OnboardingForm';
import Header from './components/shared/Header';
import AllRoutes from './components/shared/AllRoutes';

function App() {
  return (
    <div>
      <Header/>
      <AllRoutes/>
    </div>
  );
}

export default App;
