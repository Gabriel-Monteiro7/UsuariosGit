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
      <div className="container" id="tabela">
        <br />
        <h1 style={{ float: "left", paddingBottom: "10px" }}>Minhas Compras</h1>

        <Table responsive className="table table-hover">
          <tbody>
            {this.props.produtos.map((item, key) => (
              <Link to="/produto" id="btnProduto" key={key} >
                <tr onClick={() => this.props.mudarIndice(item)} key={key} >
                  <td>{item.id}</td>
                  <td>{item.produto.descricao}</td>
                  <td>{item.dataCompra}</td>
                </tr>
              </Link>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default ListarItens;
