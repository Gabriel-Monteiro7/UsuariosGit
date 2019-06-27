import React, { Component } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./navbar";
import Footer from "./footer";
import "../App.css";

import PaginaInicial from "./paginaInicial/index";
import Compras from "./listarItens/index";
import Produto from "./produto/index";

import { selectTodosProdutos, selectProduto, selectCompras } from "./request";

const initValue = {
  produtosComprados: [],
  todosProdutos: [{}],
  minhaLista: [],
  produtoSelecionado:[]
};
class User extends Component {
  state = { ...initValue };
  componentWillMount() {
    selectTodosProdutos().then(response => {
      this.setState({ todosProdutos: response.data });

    });
    selectCompras().then(response => {
      this.setState({ minhaLista: response.data});

    });
  }
  comprar(item) {
    let compra = this.state.produtosComprados;
    compra.push(item);
    this.setState({ produtosComprados: compra });
  }
  mudarIndice(item){
    selectProduto(item.id).then(response => {
      this.setState({ produtoSelecionado: response.data});
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
              <PaginaInicial
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
              <Compras {...props} produtos={this.state.minhaLista} mudarIndice ={item => this.mudarIndice(item)} />
            )}
          />
          <Route path="/produto" render={props => (
              <Produto {...props} produto = {this.state.produtoSelecionado} />
            )}/>
          <Redirect from="*" to="/" />
          {/* <Route path="/cadastro" component={Cadastro} /> */}
        </Switch>
        <Footer/>
      </div>
    );
  }
}
export default User;
