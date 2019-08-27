import React from "react";
import "../Stile.css"
import { Button } from 'reactstrap';

const Home = props => {
  return (
    <React.Fragment>
      
      <div class="div1">
        <h1>Ball story</h1>
        
        <p>Ball journey</p>
        <p>This is Ball Story site application</p>
        <button   onClick={() => {
            props.switchPage("About");
        }} ><Button color="success">Start</Button>{' '}</button>
       
      </div>
    </React.Fragment>
  );
};

export default Home;
