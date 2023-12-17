// NotFound.js

import React from 'react';
import styled from 'styled-components'; // Import styled-components

const NotFound = () => {
  return (
    <StyledDiv>
      <h2>Page Not Found</h2>
      <p>The requested page could not be found.</p>
    </StyledDiv>
  );
};

export default NotFound;

// Apply styled CSS using the classname
const StyledDiv = styled.div`
  // Add your CSS styles here
  text-align: center;
  margin-top: 50px;

  h2 {
    color: #e74c3c; // Red color for emphasis
  }

  p {
    color: #555;
  }
`;
