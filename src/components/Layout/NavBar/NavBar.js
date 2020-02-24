import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BsPerson, BsArrowBarUp, BsMap } from "react-icons/bs";
import {withRouter} from 'react-router-dom'
import "./NavBar.css";

const MyNavBar = React.memo(props => {
  const [actual, setActual] = useState('');

  const links = [
    { text: 'My routes', href: '/routes', icon: <BsMap className="icon"></BsMap> },
    { text: 'Upload route', href: '/routes/upload', icon: <BsArrowBarUp class="icon"></BsArrowBarUp> }
  ]
  const handleClick = (e) => {
    setActual(e.target.text)
  }

  const getNavLinkClass = path => {
    return props.location.pathname === path ? 'nav-link active' : 'nav-link'
  }


  return (
    <Navbar className="bg-light" fixed="top" bg="light" expand="lg">
      <Navbar.Brand href="/dashboard">{props.brandName}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="justify-content-end" activeKey="/home">
          {links.map(link => {
            console.log(link.text == actual)
            return (<span  >
              <Nav.Link className={getNavLinkClass(link.href)} onSelect={handleClick}  href={link.href}>
              {link.icon}
              {link.text}
          </Nav.Link>
            </span>
            )
          })}

          <NavDropdown variant="secondary" drop="left" title={<BsPerson className="icon"></BsPerson>}>
            <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/logout">Log Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});
MyNavBar = withRouter(MyNavBar)
export default MyNavBar;
