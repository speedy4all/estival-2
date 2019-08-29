import React from "react";
import { Button, Row, Alert } from "reactstrap";
import "../Stile.css";
import Typist from "react-typist";

const Aleg5 = props => {
  return (
    <div>
      <div class="bg4" style={{ height: "87vh" }}>
        <div
          className="d-flex flex-column align-items-end mr-3 "
          style={{ height: "87vh" }}
        >
          <img
            class="invizibil"
            src="https://www.transparenttextures.com/patterns/asfalt-light.png"
          ></img>
          <Row>
            <Button
              color="primary"
              size="lg"
              block
              onClick={() => props.switchToPage("aleg7")}
            >
              Open the door.
            </Button>
          </Row>
        </div>
      </div>

      <div className="d-flex align-items-end justify-content-center">
        <Alert color="primary">
          <Typist>(Ball) : Let's get out of here.</Typist>
        </Alert>
      </div>
    </div>
  );
};

export default Aleg5;
