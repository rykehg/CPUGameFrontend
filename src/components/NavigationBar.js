import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar, .dropdown-menu {
    background-color: #171941;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: gray;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">CPU Game • The Neumann Machine</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="Jogo" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/game/rules">Como jogar</Link>
            </NavDropdown.Item>
            <NavDropdown.Item to="">
              <Link to="/game/cards">Cartas do Jogo</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item to="">
              <Link to="/game/new">Jogar</Link>              
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">Sobre</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)