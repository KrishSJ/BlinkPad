import React, { Component } from "react";
import Counter from "./Counter";
import { Row, Col, Container } from "react-bootstrap";

class Counters extends Component {
  render() {
    let cardRender = this.props.counters.map((counter) => (
      <Col key={counter._id} sm="6" align="center">
        <Counter
          counter={counter}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
        ></Counter>
      </Col>
    ));
    return (
      <Container>
        <Row>{cardRender}</Row>
      </Container>
    );
  }
}

export default Counters;
