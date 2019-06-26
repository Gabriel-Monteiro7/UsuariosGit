import React from "react";
import { Switch, Route,Redirect } from 'react-router-dom'
import NavBar from './components/Navbar';
import "./App.css";

import PaginaInicial from "./components/paginaInicial/index"
function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/loja" component={PaginaInicial} />
        <Redirect from="*" to="/" />
        {/* <Route path="/cadastro" component={Cadastro} /> */}
      </Switch>
    </div>
  );
}

export default App;
