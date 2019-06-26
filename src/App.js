import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/Navbar';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <NavBar /> 
        {/* <Route exact path="/" component={Visualizacao} />
        <Route path="/cadastro" component={Cadastro} />
        <Redirect from="*" to="/" /> */}
      </Switch>
    </div>
  );
}

export default App;
