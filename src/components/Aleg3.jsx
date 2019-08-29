import React from "react";
import { Button, Row, Alert } from "reactstrap";
const Aleg3 = props => {
  return (
    <div class="div2" style={{ height: "100vh" }}>
      <center class="gameover">GAME OVER</center>
      <div>
        <button class="buttonHome" onClick={() => props.switchToPage("FirstPage")}>
          <Button color="danger">Restart</Button>{" "}
        </button>
        <img class="goimage" src="https://i.imgur.com/WeVNWFP.png"></img>
      </div>
    </div>
  );
};

export default Aleg3;
