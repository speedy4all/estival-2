import React from "react";
import "../Stile.css"

const Home = props => {
  return (
    <React.Fragment>
      
      <div>
        <h1>Ball story</h1>
        <p>Ball journey</p>
        <button onClick={() => {
            props.switchPage("About");
        }} >Start</button>
      </div>
    </React.Fragment>
  );
};

export default Home;
