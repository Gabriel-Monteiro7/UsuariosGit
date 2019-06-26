import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import "../App.css";

const NavBar = props => {
  return (
    <div className="">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
export default NavBar;
