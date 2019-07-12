/* eslint-disable no-restricted-globals */
import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "../App.css";
import Footer from "../presentationals/footer";
import NavBar from "../presentationals/navbar";
import {
  selectAllUsers
} from "../utils/request";
import Home from "./home/index";
import CompraFeita from "./listarUsers/index";

const initValue = {
  users: [],
  allUsers: [],
  user: [],
};
class Loja extends Component {
  state = { ...initValue };
  componentWillMount() {
    selectAllUsers().then(response => {
      console.log(response.data);
      this.setState({ allUsers: response.data });
    });
    if (this.state.allUsers.length < 3) {
    }
  }
  add(item) {
    if (!this.state.users.includes(item)) {
      let users = this.state.users;
      users.push(item);
      this.setState({users });
    }
    console.log(this.state.produtosComprados);
  }
  remove(item) {
    console.log("Cu")
    if (confirm("Você deseja mesmo excluir o usuario?")) {
      console.log("OI")
      let users = this.state.users
      users = users.filter(user => user.id !== item.id)
      this.setState({users });
      console.log(this.state.users)
    }
  }
  // mudarIndice(item) {
  //   selectUser(item.id).then(response => {
  //     this.setState({ user: response.data });
  //   });
  // }
  render() {
    return (
      <div className="">
        <div className="">
          <NavBar />
        </div>
        <div className="container-fluid">
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <Home
                  {...props}
                  allUsers={this.state.allUsers}
                  add={item => this.add(item)}
                  remove={item => this.remove(item)}
                  users={this.state.users}
                />
              )}
            />
            <Route
              path="/Compras"
              render={props => (
                <CompraFeita
                  users={this.state.users}
                  mudarIndice={item => this.mudarIndice(item)}
                  remove={item => this.remove(item)}
                />
              )}
            />
            <Redirect from="*" to="/" />
            {/* <Route path="/cadastro" component={Cadastro} /> */}
          </Switch>
        </div>

        <div className="app-footer">
          <Footer />
        </div>
      </div>
    );
  }
}
export default Loja;
