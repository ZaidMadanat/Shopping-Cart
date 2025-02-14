import styled from "styled-components";

/* Container at the top, styled as a sticky navbar */
export const NavContainer = styled.div`
  margin: 0;  
  max-width: 100vw;
  display: flex;
  align-items: center;
  padding:  0.5rem 0.5rem;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled.img`
  width: 120px; /* Adjust as needed */
  height: auto;
`;

export const NavMenu = styled.ul`
  display: flex;
  margin-left: auto; 
  gap: 1.5rem;
  list-style: none;
`;

export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
      color: #f06666; /* highlight color on hover */
    }
  }
`;

export const CartNavItem = styled(NavItem)`
`;

export const CartIcon = styled.img`
  width: 24px;
  height: 24px;
`;

