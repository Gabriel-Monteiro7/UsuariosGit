import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom'
import "../App.css";

const NavBar = (props) => {
  return (
    <div className="">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Link to="/loja" className="nav-link">Loja</Link>
        </Nav>
      </Navbar>
      
    </div>
  );
};
export default NavBar;
