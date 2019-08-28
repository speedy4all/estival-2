import React from "react";
import { Button, Row, Alert } from "reactstrap";
import "../Stile.css";
import Typist from "react-typist";

const About = props => {
  return (
    <React.Fragment>
      <div class="bg">
        <div>
          <button class="buttonHome" onClick={props.switchPage}>
            <Button  color="danger">Back home</Button>{" "}
          </button>
        </div>

        <div
          className="d-flex flex-column align-items-end mr-3 "
          style={{ height: "87vh" }}
        >
          <img
            class="imagine"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/124ca078-9c51-4c1d-9873-11275781abe8/ddbu3ez-48d7e5ed-056e-4fb0-8527-35dd328f602a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEyNGNhMDc4LTljNTEtNGMxZC05ODczLTExMjc1NzgxYWJlOFwvZGRidTNlei00OGQ3ZTVlZC0wNTZlLTRmYjAtODUyNy0zNWRkMzI4ZjYwMmEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TaBKElK-E49GPvcvG3dPNh3Hmeb5c5hwNVEyWhC6X68"
          ></img>




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
        </div>

      </div>
      <div className="d-flex align-items-end justify-content-center">
        <Alert color="primary">
          <Typist>
            Salut Minge, te pot ajuta eu sa scapi de aici, urmeaza-ma.
          </Typist>
        </Alert>

      </div>
    </React.Fragment>
  );
};



export default About;
