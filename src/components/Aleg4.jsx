import React from "react";
import { Button, Row, Alert } from "reactstrap";
import "../Stile.css";
import Typist from "react-typist";

const Aleg4 = props => {
  return (
    <div>
      <div class="bg2" style={{ height: "87vh" }}>
      <img class="minge" src="https://i.imgur.com/8wCMBoa.png"></img>
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
              onClick={() => props.switchToPage("aleg5")}
            >
              Go on right door.
            </Button>
          </Row>

          <Row>
            <Button
              color="primary"
              size="lg"
              block
              onClick={() => props.switchToPage("aleg6")}
            >
              Go on left door.
            </Button>
          </Row>
        </div>
      </div>
      <div className="d-flex align-items-end justify-content-center">
        <Alert color="primary">
          <Typist>(Ball) : Look there are two doors ahead!!</Typist>
        </Alert>
      </div>
    </div>
  );
};

export default Aleg4;
