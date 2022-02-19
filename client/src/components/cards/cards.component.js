import React from "react";
import { Card, Button } from "react-bootstrap";
import "./cards.styles.css";
import "../../data/cardData";

import { useHistory } from "react-router-dom";

import { BrowserRouter as Router } from "react-router-dom";

function Cards({ icon, heading, content, button, color, type, email }) {
  const history = useHistory();

  return (
    <div>
      <Card className="cards" style={{ backgroundColor: color }}>
        <Card.Body>
          <br></br>
          <i className={icon}></i>
          <br></br>
          <br></br>
          <div className="heading">{heading}</div>
          <br></br>
          <div className="content">{content}</div>
          <br></br>
          <br></br>
          <Router>
            <Button
              variant="info"
              className="button"
              onClick={() =>
                history.push({
                  pathname: `/${type}`,
                  state: email,
                })
              }
            >
              {button}
            </Button>{" "}
          </Router>

          <br></br>
          <br></br>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
