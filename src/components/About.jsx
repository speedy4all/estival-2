import React from "react";
import { Button } from "reactstrap"
const About = props => {
  return (
    <React.Fragment>
      
      <h1>Nothing for now</h1>
      <div>
        
        <button onClick={props.switchPage}><Button color="danger">Back home</Button>{' '}</button>
      </div>
      <div class="row">
  <div class="col-sm-4"></div>
  <div class="col-sm-8"><Button color="primary" size="lg" block>Alegerea 1</Button></div>
</div>
<div class="row">
  <div class="col-sm-4"></div>
  <div class="col-sm-8"><Button color="primary" size="lg" block>Alegerea 2</Button></div>
</div>
      
      
    </React.Fragment>
  );
};



export default About;
