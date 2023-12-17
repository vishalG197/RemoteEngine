import React from 'react'
import { Routes,Route} from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import OnboardingForm from '../developer/OnboardingForm';
import NotFound from './NotFound';
import Homepage from './HomePage';
import WelcomePage from './WelcomePage';
const AllRoutes = () => {
  return (
    <div>
      <Routes>
    
    <Route path="/" element ={<Homepage/>} />
    <Route path="/dashbaord" element ={<WelcomePage/>} />
   <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/onboarding" element={<OnboardingForm/>} />
      
      <Route path="*" element={<NotFound/>} />
  
</Routes>
    </div>
  )
}

export default AllRoutes
