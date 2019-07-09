/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

import "../../App.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { visivel: true, indice: null };
  }
  change(value, indice) {
    this.setState({ visivel: value, indice });
  }
  render() {
    return (
      <div className="container ">
        <h4 style={{ padding: "10px 100% 10px 0" }}>Produtos</h4>
        {this.props.produtos.length < 3 ? (
          <div style={{ margin: "40% 0 0 0 " }} />
        ) : (
          <div className="card-columns">
            {this.props.produtos.map((item, key) => (
              <div
                className="card infor"
                onMouseOver={() => this.change(false, key)}
                onMouseLeave={() => this.change(true, null)}
                key={key}
                style={{ width: "80%" }}
              >
                <img src={item.imagem} className="img-thumbnail " />
                <div style={{ height: "80px" }}>
                  {key === this.state.indice && !this.state.visivel ? (
                    <button type="button" className="btn btn-warning btn-sm">
                      Comprar
                    </button>
                  ) : (
                    <div>
                      <p className="">{item.nome}</p>
                      <p className="">R$ {item.valor}</p>{" "}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
export default Home;
