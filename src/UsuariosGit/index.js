/* eslint-disable no-restricted-globals */
import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "../App.css";
import Footer from "../presentationals/footer";
import NavBar from "../presentationals/navbar";
import { selectAllUsers } from "../utils/request";
import Home from "./home/index";
import ListarUsers from "./listarUsers/index";

const initValue = {
  users: [],
  allUsers: [],
  user: [],
  btnSubir: "hidden"
};
class UsuariosGit extends Component {
  state = { ...initValue };
  componentWillMount() {
    selectAllUsers().then(response => {
      this.setState({ allUsers: response.data });
    });
  }
  add(item) {
    if (!this.state.users.includes(item)) {
      let users = this.state.users;
      users.push(item);
      this.setState({ users });
    }
    console.log(this.state.produtosComprados);
  }
  remove(item) {
    if (confirm("Você deseja mesmo excluir o usuario?")) {
      let users = this.state.users;
      users = users.filter(user => user.id !== item.id);
      this.setState({ users });
      console.log(this.state.users);
    }
  }
  handleScroll() {
    if (pageYOffset > 0) this.setState({ btnTopo: "visible" });
    else this.setState({ btnTopo: "hidden" });
  }
  componentDidMount() {
    window.onscroll = () => this.handleScroll();
  }
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
                <ListarUsers
                  users={this.state.users}
                  mudarIndice={item => this.mudarIndice(item)}
                  remove={item => this.remove(item)}
                />
              )}
            />
            <Redirect from="*" to="/" />
          </Switch>
          <span
            style={{ visibility: this.state.btnTopo }}
            className=" btnSubir fixed-bottom"
            onClick={() => window.scroll(0, 0)}
          >
            <div>
              <i className="fas fa-angle-double-up fa-2x" />
            </div>
          </span>
        </div>

        <div className="app-footer">
          <Footer />
        </div>
      </div>
    );
  }
}
export default UsuariosGit;
