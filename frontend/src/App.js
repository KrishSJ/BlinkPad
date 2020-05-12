import React, { Component } from "react";
import Counters from "./components/Counters";
import axios from "axios";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: [],
    };
  }
  componentWillMount = () => {
    axios
      .get("http://localhost:3002/getScores")
      .then((response) => {
        if (response.status === 200) {
          this.setState({ counters: response.data });
          console.log(response.data[0].score);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    console.log(counters);
    console.log(counter);

    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    console.log(index);

    counters[index].score++;
    console.log(counters);

    axios
      .put("http://localhost:3002/like", counter)
      .then((response) => {
        console.log("inside success");
        console.log("Status Code : ", response.status);
        if (response.status === 200) {
          this.setState({ counters });
        }
      })
      .catch((err) => {
        console.log("In error");
        console.log(err);
      });
  };

  handleDecrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    console.log(counters[index]);
    //counters[index] = { ...counter };
    counters[index].score--;

    axios
      .put("http://localhost:3002/dislike", counters[index])
      .then((response) => {
        console.log("inside success");
        console.log("Status Code : ", response.status);
        if (response.status === 200) {
          this.setState({ counters });
        }
      })
      .catch((err) => {
        console.log("In error");
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" style={{ marginBottom: "10px" }}>
          <Navbar.Brand>Nithin Krishna</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link
              href="https://github.com/KrishSJ/BlinkPad"
              style={{ color: "#FFF" }}
              target="_blank"
            >
              <FontAwesomeIcon
                size="2x"
                color="white"
                icon={faGithub}
                to=""
              ></FontAwesomeIcon>
            </Nav.Link>
            <Nav.Link
              style={{ color: "#FFF" }}
              href="https://www.linkedin.com/in/nithin-gollanapally/"
              target="_blank"
            >
              <FontAwesomeIcon
                size="2x"
                color="white"
                icon={faLinkedin}
              ></FontAwesomeIcon>
            </Nav.Link>
          </Nav>
        </Navbar>
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </>
    );
  }
}

export default App;
