import React from 'react';
import "../Stile.css";
import { Button, Row } from 'reactstrap';

const Aleg1 = props => {
    return (

        <div class="bg1" style={{ height: "87vh" }}>
        <Row>
            <Button color="primary" size="sm" onClick={() => props.switchToPage('aleg2')}>Alegere 1.1 {' '}</Button>
        </Row>
        <Row>
            <Button color="primary" size="sm" onClick={() => props.switchToPage('aleg3')}>Alegere 1.2 {' '}</Button>
        </Row>
        </div>
        

    );
};

export default Aleg1;
