import styled from "styled-components";

export const CardContainer = styled.div`
  width: 350px;   
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }

  
  h3 {
    font-size: 1rem;
    margin: 0.5rem 0;
    color: #333;
  }

  
  img {
    width: 150px;  
    height: 150px; 
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  
  h4 {
    font-size: 1rem;
    margin: 0.5rem 0;
    color: #666;
  }
`;