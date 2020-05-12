import React, { Component } from "react";
import Counter from "./Counter";
import { Row, Col, Container } from "react-bootstrap";

class Counters extends Component {
  render() {
    // let { props } = this.props;

    let cardRender = this.props.counters.map((counter) => (
      //<card-group style={{ display: "flex", flexDirection: "row" }}>

      <Col key={counter.id} sm="6" align="center">
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
