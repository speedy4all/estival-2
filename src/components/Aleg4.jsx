import React from 'react';
import { Button, Row, Alert } from "reactstrap";
import "../Stile.css";
import Typist from "react-typist";

const Aleg4 = props => {
    return (

        <div>
        <div class="bg2" style={{ height: "87vh" } }>
        

            <div
                className="d-flex flex-column align-items-end mr-3 "
                style={{ height: "87vh" }}
            >
                




                <Row>
                    <Button
                        color="primary"
                        size="lg"
                        block
                        onClick={() => props.switchToPage("aleg5")}
                    > 
                        Go right.
      </Button>
                </Row>

                <Row>
                    <Button color="primary" size="lg" block onClick={() => props.switchToPage('aleg6')}>
                      Go left.
      </Button>
                </Row>
            </div>

        </div>
        <div className="d-flex align-items-end justify-content-center">
            <Alert color="primary">
                <Typist>
                (Ball) : Look there are two doors!!
    </Typist>
            </Alert>
        

        
        
            
        
        </div>
        </div>
        

    );
};

export default Aleg4;

