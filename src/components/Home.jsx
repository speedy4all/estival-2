import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
import { Form, FormGroup, Label, FormText } from 'reactstrap';

const Home = props => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={1}>tripME</Col>
          <Col sm={11}><InputGroup >
            <InputGroupAddon addonType="prepend">search</InputGroupAddon>
            <Input placeholder="destination" />
            <Button color="info" onClick={() => {
              props.switchPage("About");
            }} >enter</Button>{' '}
          </InputGroup>
          </Col>

        </Row>
        <Row>
          <Col sm={4}>Filters</Col>
          <Col sm={8}>Restul paginii</Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Home;
