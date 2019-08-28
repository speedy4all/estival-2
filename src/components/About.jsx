import React from "react";
import { Button, Row } from "reactstrap";
import "../Stile.css";
import Typist from "react-typist";

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
          className="d-flex flex-column align-items-end mr-3 "
          style={{ height: "87vh" }}
        >
          <img
            class="imagine"
            src="https://www.shitpostbot.com/resize/585/400?img=%2Fimg%2Fsourceimages%2Fcalypso-twisted-metal-5a86b4cd8e306.jpeg"
          ></img>
          <div> 
            <Typist>
            Salut Minge, te pot ajuta eu sa scapi de aici, urmeaza-ma.
            </Typist>
          </div>
          

          <Row>
            <Button
              color="primary"
              size="lg"
              block
              onClick={() => props.switchPage("aleg1")}
            >
              Alegerea 1
            </Button>
          </Row>

          <Row>
            <Button color="primary" size="lg" block>
              Alegerea 2
            </Button>
          </Row>
        </div><div className="d-flex align-items-end justify-content-center">
              <Typist>Animate this text.</Typist>
            </div>
      </div>
    </React.Fragment>
  );
};



export default About;
