import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "../App.css";
import Footer from "../presentationals/footer";
import NavBar from "../presentationals/navbar";
import {
  selectCompras,
  selectProduto,
  selectTodosProdutos
} from "../utils/request";
import Home from "./home/index";
import CompraFeita from "./listarItens/index";
import Produto from "./produto/index";

const initValue = {
  produtosComprados: [],
  todosProdutos: [{}],
  minhaLista: [],
  produtoSelecionado: []
};
class Loja extends Component {
  state = { ...initValue };
  componentWillMount() {
    selectTodosProdutos().then(response => {
      this.setState({ todosProdutos: response.data });
    });
    selectCompras().then(response => {
      this.setState({ minhaLista: response.data });
    });
  }
  comprar(item) {
    let compra = this.state.produtosComprados;
    compra.push(item);
    this.setState({ produtosComprados: compra });
  }
  mudarIndice(item) {
    selectProduto(item.id).then(response => {
      this.setState({ produtoSelecionado: response.data });
    });
  }
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <Home
                {...props}
                produtos={this.state.todosProdutos}
                comprar={item => this.comprar(item)}
                prodoutosComprados={this.state.produtosComprados}
              />
            )}
          />
          <Route
            path="/Compras"
            render={props => (
              <CompraFeita
                {...props}
                produtos={this.state.minhaLista}
                mudarIndice={item => this.mudarIndice(item)}
              />
            )}
          />
          <Route
            path="/produto"
            render={props => (
              <Produto {...props} produto={this.state.produtoSelecionado} />
            )}
          />
          <Redirect from="*" to="/" />
          {/* <Route path="/cadastro" component={Cadastro} /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Loja;
