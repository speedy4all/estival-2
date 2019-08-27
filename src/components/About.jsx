import React from "react";
import { Button, Row } from "reactstrap";
import "../Stile.css";

const About = props => {
  return (
    <React.Fragment>
      <div class="bg">
        <div>
          <button onClick={props.switchPage}>
            <Button color="danger">Back home</Button>{" "}
          </button>
        </div>

        <div
          className="d-flex flex-column align-items-end mr-3 justify-content-end"
          style={{ height: "87vh" }}
        >
          <Row>
            <Button color="primary" size="lg" block>
              Alegerea 1
            </Button>
          </Row>

          <Row>
            <Button color="primary" size="lg" block>
              Alegerea 2
            </Button>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
