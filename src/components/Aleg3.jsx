import React from "react";
import { Button, Row, Alert } from "reactstrap";
import Typist from "react-typist";
const Aleg3 = props => {
  return (
    <div class="div2" style={{ height: "100vh" }}>
      <center class="gameover">GAME OVER</center>
      <div>
        <button class="buttonHome" onClick={() => props.switchToPage("FirstPage")}>
          <Button color="danger">Restart</Button>{" "}
        </button>
        <img class="goimage" src="https://i.imgur.com/aseAyuF.png"></img>
      </div>
      <div className="d-flex align-items-end justify-content-center">
        <Alert color="danger">
          <Typist>(Ball) : The Man in Black tricked me, I'm stuck here forever! </Typist>
        </Alert>
      </div>
    </div>
  );
};

export default Aleg3;
