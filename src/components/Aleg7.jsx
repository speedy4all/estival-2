import React from "react";
import { Button, Row, Alert } from "reactstrap";
import "../Stile.css";
import Typist from "react-typist";

const Aleg7 = props => {
  return (
    <div class="div4" style={{ height: "100vh" }}>
      <center class="good">Good Ending</center>
      <div>
        <button class="buttonHome" onClick={() => props.switchToPage("FirstPage")}>
          <Button color="danger">Back to start</Button>{" "}
        </button>
        <img class="goimage" src="https://i.imgur.com/3y2CzN2.png"></img>

      </div>
      <div className="d-flex align-items-end justify-content-center">
        <Alert color="primary">
          <Typist>(Ball) : Yes, I am home!!</Typist>
        </Alert>
      </div>
    </div>
  );
};

export default Aleg7;