import React, { Component } from "react";

import { Card, Button,CardColumns } from "react-bootstrap";

class PaginaInicial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <br/>
        <CardColumns >
        {this.props.produtos.map((item, key) => (
          <Card style={{ width: "100%", height:"250px"}} key ={key} >
            <Card.Img variant="top" src={item.imagem}  style={{ width: "45%", height:"40%",margin:"0 auto"}}/>
            <Card.Body>
              <b style={{width: "80%",float:"left",textAlign:"left"}}>{item.nome}</b>
              <b style={{width: "50%",float:"right",marginTop:"2%",textAlign:"right"}}>R$ {item.valor}</b>
              <Button variant="primary" style={{position: "absolute",padding:"1% 20%",bottom:"0px",right:"20%",marginBottom:"4%"}} onClick={() => this.props.comprar(item)}>Comprar</Button>
            </Card.Body>
          </Card>
        ))}
        </CardColumns>
      </div>
    );
  }
}
export default PaginaInicial;
