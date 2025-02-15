import styled from "styled-components";

export const CartContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #f0f4f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;

  h2 {
    margin-bottom: 1rem;
    color: #333;
  }
    P { 
      color: #333;
    }
`;

export const CartList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 80%; 
  max-width: 800px; /* limit max width */

  li {
    background-color: #fff;
    margin-bottom: 1rem;
    border-radius: 6px;
    box-shadow: 0 3px 12px rgba(0,0,0,0.05);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    .item-info {
      font-size: 1rem;
      color: #333;
    }

    button {
      padding: 0.4rem 0.8rem;
      font-size: 0.9rem;
      background-color: #e53935; 
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #d32f2f; 
      }
    }
  }
`;