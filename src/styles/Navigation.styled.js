import styled from "styled-components";


export const NavContainer = styled.div`
  margin: 0;  
  display: flex;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  width: 120px; 
  height: auto;
  max-width: 100%;
`;

export const NavMenu = styled.ul`
  display: flex;
  margin-left: auto; 
  gap: 1.5rem;
  list-style: none;
  padding-right: 0;
`;

export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
      color: #f06666; 
    }
  }
`;

export const CartNavItem = styled(NavItem)`
`;

export const CartIcon = styled.img`
  width: 24px;
  height: 24px;
  max-width: 100%;
`;

