import React from 'react';
import { Navbar, NavbarBrand, InputGroup, InputGroupAddon, InputGroupText, Input, Form, FormGroup, Label, FormText, Button } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
import Carusel from './Carusel';
import Filter from './Filter';


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
        </Navbar>

        <Col sm={2} className="fil">Filters
        <Filter filterData={()=>({})}/>
        </Col>
      </div>
    </React.Fragment>

  );
};

export default Home;