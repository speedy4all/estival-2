import React, { Component } from "react";
import Home from "../components/Home";
import About from "../components/About";

class App extends Component {
  constructor(props) {
    super(props);

    // this.switchPage = this.switchPage.bind(this);
    // this.state = {
    //   showAbout: false,
    // };

    this.state = {
      play: false,
      pause: true,
    }
    this.url = "http://streaming.tdiradio.com:8000/house.mp3";
    this.audio = new Audio(this.url);
  }

  // switchPage(page) {
  //   this.setState({showAbout: page === 'About' ? true : false});
  // }

  render() {
    return this.state.showAbout ? <About switchPage={this.switchPage} /> : <Home switchPage={this.switchPage} />;
  }
}

export default App;
