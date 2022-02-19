import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import img from "../../assets/1.png";

function Navbarr() {
  return (
    <div>
      <Navbar bg="light" variant="light" navbar-fixed-top className="navbar">
        <Container>
          <Navbar.Brand href="/homepage">
            <img src={img} alt="" width={100} height={80}></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/homepage" className="c">
              Home
            </Nav.Link>

            <Nav.Link href="/wurs" className="c">
              Check ADHD
            </Nav.Link>
            <Nav.Link href="#" className="c"></Nav.Link>
            <Nav.Link href="#" className="c">
              Signed in
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarr;
