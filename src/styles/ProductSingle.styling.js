import styled from "styled-components";


export const ProductCard = styled.div`
  background-color: #fff;
  width: 500px; 
  border-radius: 8px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  text-align: center;
  margin: 3rem auto; 

  img {
    width: 200px; 
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  h3 {
    margin: 0.5rem 0;
    font-size: 1.4rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.4;
  }

  .card-buy {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;

    h4 {
      font-size: 1rem;
      color: #333;
      margin: 0;
    }

    button {
      padding: 0.6rem 1.2rem;
      font-size: 1rem;
      font-weight: 500;
      background-color: #4caf50; 
      color: #fff;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #43a047; 
      }
    }
  }
`;

export const Popup = styled.div`
  position: fixed;
  top: 100px; 
  left: 50%;
  transform: translateX(-50%);
  background-color: #4caf50;
  color: #fff;
  padding: 0.8rem 1.2rem;
  border-radius: 6px;
  box-shadow: 0 3px 12px rgba(0,0,0,0.2);
  font-size: 1rem;
  z-index: 9999; 
`;