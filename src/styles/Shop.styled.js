import styled from "styled-components";

export const ShopContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f4f8;
  h1 { 
  color: #333;
  }

`;

export const ProductGrid = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;               
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);

  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-bottom: 0.5rem;
  }

  h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #333;
  }

  .card-info {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;

    h4 {
      margin: 0;
      font-size: 0.9rem;
      color: #666;
    }
  }
`;