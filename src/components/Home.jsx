import React from "react";
import { Navbar, NavbarBrand, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">tripME</NavbarBrand>
          <InputGroup >
            <InputGroupAddon addonType="prepend">search</InputGroupAddon>
            <Input placeholder="destinatie" />
            <Button color="info" onClick={() => {
              props.switchPage("About");
            }} >enter</Button>
          </InputGroup>
          <Button className="button1" onClick={() => {
            props.switchPage("About");
          }} >Help!
            </Button>{' '}

<<<<<<< HEAD
        </Row>
        <Row>
          <br />
        </Row>
        

        <Row>
          <Col sm={4}></Col>
          <Col className="carusel">
            <Carusel />
          </Col>
        </Row>
        <Row >
          <Col sm={2} className="fil">Filters</Col>
=======
        </Navbar>

>>>>>>> b27fb13048dfcd1e22b780d8e0e7e24409a0e72e

        <Col sm={2} className="fil">
          <Row>
            <br />
          </Row>Filters
        <Row>
            <br />
          </Row>
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
            <FormGroup>
              <Label for="exampleSelect">Mese</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>mic dejun</option>
                <option>toate mesele incluse</option>
                <option>mic dejun si cina incluse</option>
                <option>self catering</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Tipuri de pat preferat</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>paturi twin</option>
                <option>pat double</option>
              </Input>
            </FormGroup>
          </Form>
          <Button>Submit</Button>


        </Col>
        <Col sm={10} className="ab"></Col>
      </div>
    </React.Fragment >
  );
};

export default Home;
