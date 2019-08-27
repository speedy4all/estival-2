import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = props => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>tripME</Col>
          <Col><InputGroup >
            <InputGroupAddon addonType="prepend">search</InputGroupAddon>
            <Input placeholder="username" />
            <Button color="info" onClick={() => {
              props.switchPage("About");
            }} >enter</Button>{' '}
          </InputGroup>
          </Col>

        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Home;
