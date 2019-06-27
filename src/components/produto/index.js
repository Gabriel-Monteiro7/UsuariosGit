import React, { Component } from "react";

import { Container, Row, Col, Card } from "react-bootstrap";
class Produto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container" id="tabela">
        <Container>
          <Row>
            <Col><Card>
              <Card.Img
                variant="top"
                src={this.props.produto.produto.imagem}
              />
            </Card></Col>
            <Col><Card>
              <Card.Img
                variant="top"
                src={this.props.produto.produto.imagem}
              />
            </Card></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Produto;
