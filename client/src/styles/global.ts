// styles.ts
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

export const TeamText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 70vh;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 3.5rem;
  background-color: #000080;
`;

export const MenuIconOpen = styled(Link)`
  display: flex;
  justify-content: start;
  font-size: 1.5rem;
  margin-left: 2rem;
  color: #ffffff;
`;

export const MenuIconClose = styled(Link)`
  display: flex;
  justify-content: end;
  font-size: 1.5rem;
  margin-top: 0.75rem;
  margin-right: 1rem;
  color: #ffffff;
`;

export const SidebarMenu = styled.div<{ close: boolean }>`
  width: 250px;
  height: 100vh;
  background-color: #000080;
  position: fixed;
  top: 0;
  left: ${({ close }) => (close ? '0' : '-100%')};
  transition: 0.6s;
`;

export const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 75px;
  padding: 1rem 0 1.25rem;
`;

export const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 18px;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.2s ease;
  border-radius: 20px;


  &:hover {
    width: 100%;
    text-align: center;
    margin: 0 0.5rem;
    padding:1rem; 
    border-radius: 20px;
    .MuiTypography-h4 {
      font-size: 20px;
    }
    .size-icon{
      font-size: 20px;
    }
  }

  &:focus,
  &:active {
    width: 100%;
    height: 45px;
    text-align: center;
    margin: 0 0.5rem;
    // border:1px solid #6167C9;
    .MuiTypography-h4 {
      font-size: 25px;
      color: #6167C9;
    }
  }
`;

export const GlobalStyles = createGlobalStyle`
  .nav-item li {
    width: 180px;
    height: 50px;
    border-radius: 10px;

    a {
      font-size: 14px;
      color: rgb(163, 214, 197);
      margin-left: 30px;

      &:hover {
        color: rgb(251, 251, 251);
      }
    }
  }

  .sidebar {
    position: relative;
    background-color: #1976d2;
    overflow-x: hidden;
    transition: width 0.3s ease;
  }

  .sidebar.w-16 {
    width: 16px;
  }

  .sidebar.collapsed {
    width: 0;
  }

  .sidebar.collapsed .nav-item {
    display: none;
  }

  .toggle-sidebar {
    position: absolute;
    right: 15px;
    left: auto;

    &[data-collapsed='true'] {
      left: 0;
    }
  }
`;

