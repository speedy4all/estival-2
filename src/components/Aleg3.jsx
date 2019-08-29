import React from 'react';
import { Button, Row, Alert } from "reactstrap";
const Aleg3 = props => {
    return (
     
      <div class="div2" style={{ height: "100vh" }}>
            <center class="gameover">GAME OVER</center>
            <div>
                <button class="buttonHome" onClick={() => props.switchToPage('Home')}>
                    <Button color="danger">Restart</Button>{" "}
                </button>
                <img class="goimage" src="https://www196.lunapic.com/editor/working/15670669902556798?9435129990"></img>
            </div>
        </div>
        
    );
}

export default Aleg3;