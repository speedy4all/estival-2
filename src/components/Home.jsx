import React from 'react';
import { Navbar, NavbarBrand, InputGroup, InputGroupAddon, InputGroupText, Input, Form, FormGroup, Label, FormText } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
import Carusel from './Carusel';
import Filter from './Filter';
import Header from './header'

const Home = props => {
  return (
    <React.Fragment>
      <div className="Homecss">
        
        <Header switchPage={props.switchPage}/>
        <Col sm={2} className="fil">Filters
        <Filter filterData={() => ({})} />
        </Col>
      </div>
    </React.Fragment>

  );
};

export default Home;