import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
// import img from "../../src/pic1.jpeg";

class Counter extends Component {
  styles = {
    fontSize: 15,
    fontWeight: "bold",
  };

  render() {
    const img = this.props.counter.imageURI;

    return (
      <Card
        bg="dark"
        variant="dark"
        text="light"
        style={{ width: "18rem", margin: "2%" }}
      >
        <Card.Img
          variant="top"
          style={{ height: 250, width: "100%" }}
          src={img}
        />
        <Card.Body>
          <Row>
            <Col sm="3">
              <FontAwesomeIcon
                onClick={() => this.props.onIncrement(this.props.counter)}
                icon={faThumbsUp}
              ></FontAwesomeIcon>
            </Col>
            <Col sm="3">
              <FontAwesomeIcon
                icon={faThumbsDown}
                onClick={() => this.props.onDecrement(this.props.counter)}
              ></FontAwesomeIcon>
            </Col>
            <Col sm="6">
              <Card-text>Score: {this.props.counter.score}</Card-text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default Counter;
