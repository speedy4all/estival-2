import React from "react";
import "../Stile.css";
import Aleg1 from "./Aleg1";
import Aleg2 from "./Aleg2";
import Aleg3 from "./Aleg3";
import Aleg4 from "./Aleg4";
import Aleg5 from "./Aleg5";
import Aleg6 from "./Aleg6";
import Aleg7 from "./Aleg7";
import Aleg8 from "./Aleg8";
import Aleg31 from "./Aleg31";
import FirstPage from "./FirstPage";
import Story from "./Story";
import Home from "./Home";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.switchToPage = this.switchToPage.bind(this);
    this.state = {
      currentPage: (
        <Story
          switchToPage={this.switchToPage}
          switchPage={props.switchPage}
        />
      )
    };
  }

  switchToPage(link) {
    switch (link) {
      case "FirstPage":
        this.setState({
          currentPage: <FirstPage switchToPage={this.switchToPage} />
        });
        break;
      case "aleg1":
        this.setState({
          currentPage: <Aleg1 switchToPage={this.switchToPage} />
        });
        break;
      case "aleg2":
        this.setState({
          currentPage: <Aleg2 switchToPage={this.switchToPage} />
        });
        break;
      case "aleg3":
        this.setState({
          currentPage: <Aleg3 switchToPage={this.switchToPage} />
        });
        break;
      case "aleg4":
        this.setState({
          currentPage: <Aleg4 switchToPage={this.switchToPage} />
        });
        break;
      case "aleg5":
        this.setState({
          currentPage: <Aleg5 switchToPage={this.switchToPage} />
        });
        break;
      case "aleg6":
        this.setState({
          currentPage: <Aleg6 switchToPage={this.switchToPage} />
        });
        break;
        case 'aleg7':
        this.setState({ currentPage: <Aleg7 switchToPage={this.switchToPage} /> });
        break;
        case 'aleg8':
        this.setState({ currentPage: <Aleg8 switchToPage={this.switchToPage} /> });
        break;
        case 'aleg31':
        this.setState({ currentPage: <Aleg31 switchToPage={this.switchToPage} /> });
        break;

      default:
        this.setState({
          currentPage: <FirstPage switchToPage={this.switchToPage} />
        });
        break;
    }
  }

  render() {
    return <React.Fragment>{this.state.currentPage}</React.Fragment>;
  }
}

export default About;
