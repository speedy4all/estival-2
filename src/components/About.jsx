import React from "react";
import "../Stile.css";
import Aleg1 from './Aleg1';
import Aleg2 from './Aleg2';
import Aleg3 from './Aleg3';
import FirstPage from "./FirstPage";
import Home from "./Home"

class About extends React.Component {

  constructor(props) {
    super(props);

    this.switchToPage = this.switchToPage.bind(this);
    this.state = {
      currentPage: <FirstPage switchToPage={this.switchToPage} switchPage={props.switchPage} />
    }
  }

  switchToPage(link) {
    switch (link) {
      case 'FirstPage':
      this.setState({ currentPage: <FirstPage switchToPage={this.switchToPage} /> });
      break;
      case 'aleg1':
        this.setState({ currentPage: <Aleg1 switchToPage={this.switchToPage} /> });
        break;
      case 'aleg2':
        this.setState({ currentPage: <Aleg2 switchToPage={this.switchToPage} /> });
        break;
        case 'aleg3':
          this.setState({ currentPage: <Aleg3 switchToPage={this.switchToPage} /> });
          break;
         
      default:
        this.setState({ currentPage: <FirstPage switchToPage={this.switchToPage} /> });
        break;
    }
  }


  render() {
    return (
      <React.Fragment>

        {this.state.currentPage}
      </React.Fragment>
    );
  }
};



export default About;
