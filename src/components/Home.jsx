import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
import { Form, FormGroup, Label, FormText } from 'reactstrap';
import Carusel from './Carusel';

const Home = props => {
  return (
    <React.Fragment>
      <div className="Homecss">
        <Row>
          <Col sm={1} className="logo">tripME</Col>
          <Col sm={10}>
            <InputGroup >
              <InputGroupAddon addonType="prepend">search</InputGroupAddon>
              <Input placeholder="destination" />
              <Button color="info" onClick={() => {
                props.switchPage("About");
              }} >enter
              </Button>
            </InputGroup>
          </Col>
          <Col sm={1}>
            <Button className="button1" onClick={() => {
              props.switchPage("About");
            }} >Help!
            </Button>{' '}
          </Col>
        </Row>
        <Row>
          <br />
        </Row>
        <Col sm={2} className="fil">Filters
        <br />
          <Form>
            <FormGroup>
              <Label for="exampleSelect">Clasificare dupa stele</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>*</option>
                <option>**</option>
                <option>***</option>
                <option>****</option>
                <option>*****</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Distanta fata de centru</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>500m</option>
                <option>1km</option>
                <option>2-5km</option>
                <option>5-10km</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Facilitati</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>parcare</option>
                <option>mic dejun</option>
                <option>restaurant</option>
                <option>sala de jocuri</option>
                <option>sala de fitness</option>
                <option>accepta animale de companie</option>
              </Input>
            </FormGroup>
          </Form>
        </Col>
        <Col sm={10} className="ab"></Col>
      </div>
    </React.Fragment>
  );
};

export default Home;
