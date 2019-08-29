import React from "react";
import { Button, Row, Alert } from "reactstrap";
import "../Stile.css";
import Typist from "react-typist";

const Aleg6 = props => {
  return (
    <div>
      <div class="bg5" style={{ height: "87vh" }}>
        <div
          className="d-flex flex-column align-items-end mr-3 "
          style={{ height: "87vh" }}
        >
          <Row>
            <Button
              color="primary"
              size="lg"
              block
              onClick={() => props.switchToPage("aleg8")}
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

export default Aleg6;
