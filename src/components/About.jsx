import React from "react";
import { Button,Row } from "reactstrap";

const About = props => {
  return (
    <React.Fragment>


      <div>

        <button onClick={props.switchPage}><Button color="danger">Back home</Button>{' '}</button>
      </div>
     
      

      <div className="d-flex flex-column align-items-end mr-3 justify-content-end" style={{height:'87vh'}}>
        

        <Row><Button color="primary" size="lg" block>Alegerea 1</Button></Row>

        <Row><Button color="primary" size="lg" block>Alegerea22</Button></Row>
        
      </div>

    </React.Fragment>
  );
};

export default About;
