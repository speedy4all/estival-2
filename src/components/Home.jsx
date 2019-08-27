import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'
const Home = props => {
  return (
    <React.Fragment>
      <h1>My site</h1>
      <div>
        <InputGroup >
          <InputGroupAddon addonType="prepend">search</InputGroupAddon>
          <Input placeholder="username" />
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
