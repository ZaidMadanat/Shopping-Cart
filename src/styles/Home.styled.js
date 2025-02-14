import styled from "styled-components";

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: #f0f4f8;
  box-shadow: inset 0 0 100px rgba(0,0,0,0.05);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const HomeTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

export const HomeParagraph = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #444;
`;

export const CardRow = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  width: 220px;
    @media (max-width: 768px) {
        flex-direction: column; 
        align-items: center;
    }  
`;

