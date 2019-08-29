import React from 'react';
import { Button, Row, Alert } from "reactstrap";
import "../Stile.css";
import Typist from "react-typist";

const FirstPage = props => (
    <div>
        <div class="bg">
            <div>
                <button class="buttonHome" onClick={props.switchPage}>
                    <Button color="danger">Back home</Button>{" "}
                </button>
            </div>

            <div
                className="d-flex flex-column align-items-end mr-3 "
                style={{ height: "87vh" }}
            >
                <img
                    class="imagine"
                    src="https://i.imgur.com/vnz4uTe.png"
                ></img>




                <Row>
                    <Button
                        color="primary"
                        size="lg"
                        block
                        onClick={() => props.switchToPage("aleg1")}
                    >
                        I should go with the Man in Black
      </Button>
                </Row>

                <Row>
                    <Button color="primary" size="lg" block onClick={() => props.switchToPage('aleg2')}>
                        I should find a way out alone
      </Button>
                </Row>
            </div>

        </div>
        <div className="d-flex align-items-end justify-content-center">
            <Alert color="primary">
                <Typist>
                (Man in Black) : I can help you go home
    </Typist>
            </Alert>

        </div>
    </div>
);

export default FirstPage;