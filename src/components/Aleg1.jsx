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
            src="https://i.imgur.com/r15dRQp.png"
          ></img>

          <Row>
            <Button
              color="primary"
              size="lg"
              block
              onClick={() => props.switchToPage("aleg3")}
            >
              Enter.
            </Button>
          </Row>

          <Row>
            <Button
              color="primary"
              size="lg"
              block
              onClick={() => props.switchToPage("aleg4")}
            >
              Don't enter and go ahead.
            </Button>
          </Row>
        </div>
      </div>

      <div className="d-flex align-items-end justify-content-center">
        <Alert color="primary">
          <Typist>(Man in Black) : This door will take you outside.</Typist>
        </Alert>
      </div>
    </div>
  );
};

export default Aleg1;
