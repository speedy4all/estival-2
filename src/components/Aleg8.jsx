import React from "react";
import { Button, Row, Alert } from "reactstrap";
import "../Stile.css";
import Typist from "react-typist";

const Aleg8 = props => {
  return (
    <div class="div3" style={{ height: "100vh" }}>
      <center class="bad">Bad Ending</center>
      <div>
        <button class="buttonHome" onClick={() => props.switchToPage("FirstPage")}>
          <Button color="danger">Back to start</Button>{" "}
        </button>
        <img class="goimage" src="https://i.imgur.com/8Cfecms.png"></img>

      </div>
      <div className="d-flex align-items-end justify-content-center">
        <Alert color="primary">
          <Typist>(Ball) : I don't know where I am, I think I'll find another owner.</Typist>
        </Alert>
      </div>
    </div>
  );
};

export default Aleg8;