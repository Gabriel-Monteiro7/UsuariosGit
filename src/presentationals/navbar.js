import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom'
import "../App.css";

const NavBar = (props) => {
  return (
    <div className="">
      <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/compras" className="nav-link">Favoritos</Link>
        </Nav>
      </Navbar>
      
    </div>
  );
};
export default NavBar;
