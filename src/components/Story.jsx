import React from "react";
import { Button, Row, Alert } from "reactstrap";
import "../Stile.css";
import Typist from "react-typist";

const Story = props => (

    <div>
        <Row>
          <Button
            color="primary"
            size="lg"
            block
            onClick={() => props.switchToPage("FirstPage")}
          >
            I should go with the Man in Black
          </Button>
        </Row>
    </div>
    

);

export default Story;