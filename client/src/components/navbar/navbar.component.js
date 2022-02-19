import { LogError } from "concurrently";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import img from "../../assets/1.png";

function Navbarr() {
  const history = useHistory();
  const location = useLocation();

  function handleClick(event) {
    history.push({
      pathname: event.target.id,
      state: location.state,
    });
  }

  return (
    <div>
      <Navbar bg="light" variant="light" navbar-fixed-top className="navbar">
        <Container>
          <img
            src={img}
            alt=""
            width={100}
            onClick={handleClick}
            height={80}
            id="/homepage"
            className="navbar_Link"
          ></img>
          <div className="me-auto">
            <div className="c navbar_Link" id="/homepage" onClick={handleClick}>
              Home
            </div>
            <div className="c navbar_Link" id="/wurs" onClick={handleClick}>
              Check ADHD
            </div>
            <div className="c">Signed in as {location.state}</div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarr;
