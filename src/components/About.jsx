import React from "react";

const About = props => {
  return (
    <React.Fragment>
      <h4>This is the about page</h4>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et obcaecati
          unde perspiciatis doloremque, in eaque harum eligendi nemo nihil?
          
        </p>
        <button onClick={props.switchPage}>Back home</button>
      </div>
    </React.Fragment>
  );
};

export default About;
