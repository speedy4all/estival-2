import React from "react";
import { Button, Row, Alert } from "reactstrap";
import "../Stile.css";
import Typist from "react-typist";

const Story = props => (
  
    <div class="divStory">
      <div class="Story">
  <Typist>
    A fost odata;
  </Typist>
  </div>
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