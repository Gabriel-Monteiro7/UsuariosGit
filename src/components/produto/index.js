import React, { Component } from "react";

import { Card} from "react-bootstrap";
class Produto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let produto = this.props.produto.produto;
    return (
      <div className="container" id="tabela">
        <br />
        <h4 style={{ float: "left", position: "absolute" }}>
          Informações do produto
        </h4>
        {this.props.produto.produto !== undefined ? (
          <div
            className="row"
            style={{
              background: "#F2F2F2",
              padding: "15px",
              borderRadius: "5px",
              marginTop: "40px"
            }}
          >
            <div className="col-6">
              <Card style={{ height: "100%"}}>
                <Card.Img variant="top" src={produto.imagem} />
              </Card>
            </div>
            <div className="col-6">
              <Card className="text-left" style={{ height: "100%" }}>
                <Card.Body>
                  <Card.Title>{produto.nome}</Card.Title>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <i>{"Valor:  "}</i> {produto.valor}
                    </li>
                    <li className="list-group-item">
                      <i>{"Data da compra:  "}</i>{" "}
                      {this.props.produto.dataCompra}
                    </li>
                    <li className="list-group-item">
                      <i>{"Peso:  "}</i> {produto.peso} kg
                    </li>
                    <li className="list-group-item">
                      <i>{"Altura:  "}</i> {produto.dimensoes.altura} m
                    </li>
                    <li className="list-group-item">
                      <i>{"Comprimento:  "}</i> {produto.dimensoes.comprimento} m
                    </li>
                    <li className="list-group-item">
                      <i>{"Largura:  "}</i> {produto.dimensoes.largura} m
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </div>
        
        ) : <div style={{margin:"20% 0 0 0 "}}><h5>Nenhum produto selecionado</h5></div>}

      </div>
    );
  }
}
export default Produto;
