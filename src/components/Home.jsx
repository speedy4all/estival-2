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
        <Row>
          <Col sm={4}>Filters</Col>

        </Row>
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
              
            </Form>
          </Col>
          <Col sm={10} className="ab"></Col>
        </Row>
      </Container>
      </div>
    </React.Fragment>
  );
};

export default Home;
