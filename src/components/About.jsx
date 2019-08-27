import React from "react";
import { Button } from "reactstrap"
const About = props => {
  return (
    <React.Fragment>

      <div>

        <button onClick={props.switchPage}><Button color="danger">Back home</Button>{' '}</button>
      </div>
      






    </React.Fragment>
  );
};



export default About;
