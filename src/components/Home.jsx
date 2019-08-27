import React from "react";
import './style.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'
const Home = props => {
  return (
    <React.Fragment>
      <h1 className = "titlu1">Trip Me</h1>
      <div>
        <InputGroup >
          <div className = "titlu">
          <InputGroupAddon addonType="prepend">search</InputGroupAddon>
          <Input placeholder="username" />
          </div>
        </InputGroup>
        <p>This is TRIP_ME application</p>

        <button onClick={() => {
          props.switchPage("About");
        }} >About page</button>


      </div>
    </React.Fragment>
  );
};

export default Home;
