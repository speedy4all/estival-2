import React from "react";

const Home = props => {
  return (
    <React.Fragment>
      <h1>tripME</h1>
      <div>
        <p>This is TRIP_ME application</p>
        <button onClick={()  => {
            props.switchPage("About");
        }} >About page</button>
      </div>
    </React.Fragment>
  );
};

export default Home;
