import React from "react";

const Home = props => {
  return (
    <React.Fragment>
      <h1>My site</h1>
      <div>
        <p>This is my first site application</p>
        <button onClick={() => {
            props.switchPage("About");
        }} >About page</button>
      </div>
    </React.Fragment>
  );
};

export default Home;
