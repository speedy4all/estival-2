import React from "react";

const Home = props => {
  return (
    <React.Fragment>
      <html bgcolor='aqua'>
        <h1>Keep calm and listen</h1>

        <div>

          <p>Press to calm</p>
          <button onClick={() => {
            // props.switchPage("About");
            this.setState({ play: true, pause: false })
            this.audio.play();

          }} >Play</button>
          <button onClick={()=>{
            this.setState({ play: false, pause: true })
            this.audio.pause();
          }}>STOP
          </button>
          
        </div>
      </html>

    </React.Fragment>
  );
};

export default Home;
