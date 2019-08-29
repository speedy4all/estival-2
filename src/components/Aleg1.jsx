import React from "react";
import { Button, Row, Alert } from "reactstrap";
import "../Stile.css";
import Typist from "react-typist";

const Aleg1 = props => {
  return (
    <div>
      <div class="bg1" style={{ height: "87vh" }}>
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
              onClick={() => props.switchToPage("aleg3")}
            >
              I should go with Man in Black
            </Button>
          </Row>

          <Row>
            <Button
              color="primary"
              size="lg"
              block
              onClick={() => props.switchToPage("aleg4")}
            >
              I should go alone
            </Button>
          </Row>
        </div>
      </div>

      <div className="d-flex align-items-end justify-content-center">
        <Alert color="primary">
          <Typist>(Man in Black) : I can help you go home</Typist>
        </Alert>
      </div>
    </div>
  );
};

export default Aleg1;
