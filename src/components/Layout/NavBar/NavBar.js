import React from "react";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";

import {
  Navbar,
  NavDropdown,
  FormControl,
  Button,
  Nav,
  Form
} from "react-bootstrap";

const MyNavBar = props => {
  const [navState, setNavState] = useState({
    loggedIn: false
  });
  return (
    <Navbar className="bg-light" fixed="top" bg="light" expand="lg">
      <Navbar.Brand href="dashboard">{props.brandName}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="routes">My routes</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="routes/upload">Upload route</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="logout" >Log out</Nav.Link>
          </Nav.Item>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavBar;
