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
        <Container>
          <Row>
            <Col sm={1}>tripME</Col>
            <Col sm={10}><InputGroup >
              <InputGroupAddon addonType="prepend">search</InputGroupAddon>
              <Input placeholder="destination" />
              <Button color="info" onClick={() => {
                props.switchPage("About");
              }} >enter</Button>{' '}
            </InputGroup>
            </Col>
            <Col sm={1}>
              <Button className="button1" onClick={() => {
                props.switchPage("About");
              }} >Help!</Button>{' '}
            </Col>

          </Row>
          <Row >
            <Col sm={2} className="fil">Filters</Col>

<<<<<<< HEAD
          </Row>
          <Row>
            <Col className="fil" sm={2}>
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
              </Form>
            </Col>
            <Col sm={10} className="ab"></Col>
          </Row>
        </Container>
=======
        </Row>
        <div className="carusel" >
            <Carusel />
        </div>
        <Row>
          <Col sm={2}>
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
            </Form>
          </Col>
          <Col sm={10} className="ab"></Col>
        </Row>
      </Container>
>>>>>>> 5141f001da37cf6adcd2e8121cd66f41e3f9644c
      </div>
    </React.Fragment>
  );
};

export default Home;
