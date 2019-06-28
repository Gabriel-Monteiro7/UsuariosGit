import axios from "axios";

const urlBase = "https://bannetloja.herokuapp.com/produtos";

const selectTodosProdutos = () => {
  return axios.get(urlBase);
};

const selectCompras = () => {
  return axios.get("https://bannetcompras.herokuapp.com/compras");
};

const selectProduto = indice => {
  return axios.get("https://bannetcompras.herokuapp.com/compras/" + indice);
};

export { selectTodosProdutos, selectProduto, selectCompras };
