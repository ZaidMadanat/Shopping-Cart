// src/styles/DisplayCardStyles.js
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 400;   /* Adjust as needed */
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;

  /* Slight hover effect */
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }

  /* Title styling */
  h3 {
    font-size: 1rem;
    margin: 0.5rem 0;
    color: #333;
  }

  /* Image styling: fixed size, centered, covers area */
  img {
    width: 150px;  
    height: 150px; 
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  /* Rating styling */
  h4 {
    font-size: 1rem;
    margin: 0.5rem 0;
    color: #666;
  }
`;