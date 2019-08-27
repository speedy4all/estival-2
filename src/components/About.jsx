import React from "react";
import { Button } from "reactstrap"
const About = props => {
  return (
    <React.Fragment>
      <h1>Nothing for now</h1>
      <div>
        <p>
          You just can go back to home page 
        </p>
        <button onClick={props.switchPage}><Button color="danger">danger</Button>{' '}</button>
      </div>
    </React.Fragment>
  );
};



export default About;
