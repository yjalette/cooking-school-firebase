import React, { Component } from 'react';
import {Col, Row, Jumbotron, Container} from 'react-bootstrap';

import vasoFront from '../images/vasoFront.jpg';
import vasoSide from '../images/vasoSide.jpg'


class Slider extends Component {
  
  render() {
    
    return (
      <div>
        <Row className="flex row">
          <Col xs={6}>
            <img src={vasoFront} className="img-fluid" alt="front" />
          </Col>
          <Col xs={6}>
            <Jumbotron fluid className="flex">
              <Container>
              <h1>Vasiliki Vourliotaki</h1>
                <p>Chef de Cuisine<br/>Innovative approach to Greek-inspired Mediterranean cuisine </p>
              </Container>
            </Jumbotron>;
          </Col>
        </Row>

      </div>
      
    )
  }
}

export default Slider;