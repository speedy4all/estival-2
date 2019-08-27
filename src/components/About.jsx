import React from "react";
import "../Screen1Style.css";


const About = props => {
  return (
    <React.Fragment>
      <h1>Nothing for now</h1>
      <div>
        <p>
          You just can go back to home page 
        </p>
        <button onClick={props.switchPage}>Back home</button>
      </div>
    </React.Fragment>
  );
};



export default About;
