import React from "react";
import "../Stile.css";
import { Button } from "reactstrap";

const Home = props => {
  return (
    <React.Fragment>



      <div class="div1">

        <h1 class="titlu">Ball story</h1>
        <button class="buttonStart" onClick={() => {
          props.switchPage("About");
        }} ><Button color="success">Start Game</Button>{' '}</button>
      </div>

      <div class="div1">
        <h1 class="titlu">Ball story</h1>
        <button
          class="buttonStart"
          onClick={() => {
            props.switchPage("About");
          }}
        >
          <Button color="success">Start Game</Button>{" "}
        </button>

      </div>
      </React.Fragment>
  );
};

export default Home;
