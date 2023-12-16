// authUtils.js

// Function to set the user's authentication token in local storage
export const setAuthToken = (token) => {
   localStorage.setItem('token', token);
 };
 
 // Function to get the user's authentication token from local storage
 export const getAuthToken = () => {
   return localStorage.getItem('token');
 };
 
 // Function to remove the user's authentication token from local storage
 export const removeAuthToken = () => {
   localStorage.removeItem('token');
 };
 
 // Function to check if the user is authenticated based on the presence of the token
 export const isAuthenticated = () => {
   const token = getAuthToken();
   return !!token; // Returns true if the token is present, indicating the user is authenticated
 };
 