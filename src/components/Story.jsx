import React from "react";
import { Button, Row, Alert } from "reactstrap";
import "../Stile.css";
import Typist from "react-typist";

const Story = props => (

    <div class="divStory">
        <Button
              color="primary"
              size="lg"
              block
              onClick={() => props.switchToPage("FirstPage")}
            >
              Open the door.
            </Button>
       
    </div>
    
    

);

export default Story;