import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

class ListarItens extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid" id="tabela">
        <br />
        <h4 style={{ float: "left", paddingBottom: "10px" }}>Minhas Compras</h4>
        <Table responsive>
          {this.props.produtos.map((item, key) => (
            <Link
              onClick={() => this.props.mudarIndice(item)}
              to="/produto"
              id="btnProduto"
              key={key}
              className="list-group-item list-group-item-action"
            >
              <div
                className="row"
                key={key}
                style={{ padding: "5px 0 ", width: "100%" }}
              >
                <div className="col-2" >
                  <b style={{ padding: "0px 100% 0px 0" }}>{item.produto.nome}</b>
                </div>
                <div className="col-7">{item.produto.descricao}</div>
                <div className="col-2">
                  <b style={{ padding: "0px 0 0px 100%" }}>{item.dataCompra}</b>
                </div>
              </div>
            </Link>
          ))}
        </Table>
      </div>
    );
  }
}
export default ListarItens;
