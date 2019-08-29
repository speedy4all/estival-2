import React from "react";
import { Button, Row, Alert } from "reactstrap";
import "../Stile.css";
import Typist from "react-typist";

const Story = props => (
  <div class="divStory" style={{ height: "100vh" }}>
    <div class="Story">
        <Typist>Once upon a time, a boy was playing with his ball at home and accidentaly dropped it in the sewers.
          The ball found itself in a wierd dungeon where he met a sctrange man.
        </Typist>
      </div><div
      className="d-flex flex-column align-items-end mr-3 "
      style={{ height: "0vh", width: "30vh" }}
    >
      
      <Button
        color="danger"
        size="lg"
        block
        onClick={() => props.switchToPage("FirstPage")}
      >
        Begin
      </Button>
    </div>
  </div>
);

export default Story;
