import React, { Component } from "react";
import Home from "../components/Home";
import About from "../components/About";
import { Button } from 'reactstrap';


class App extends Component {
  constructor(props) {
    super(props);
    

    this.switchPage = this.switchPage.bind(this);
    this.state = {
      showAbout: false,
    };
  }

  switchPage(page) {
    this.setState({showAbout: page === 'About' ? true : false});
  }

  render() {
    return this.state.showAbout ? <About switchPage={this.switchPage} /> : <Home switchPage={this.switchPage} />;
  }
}

export default App;
