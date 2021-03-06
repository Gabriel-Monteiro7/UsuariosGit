/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class ListarUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  change(value, indice) {
    this.setState({ visivel: value, indice });
  }
  render() {
    return (
      <div className="container ">
        <h4 style={{ padding: "10px 84% 10px 0" }}>Usuarios Salvos</h4>
        {this.props.users.length < 1 ? (
          <div style={{ margin: "0 0 60% 0" }} />
        ) : (
          <div class="row">
            {this.props.users.map((item, key) => (
              <div class="col-lg-3 col-md-6 my-2">
                <div
                  className="card cardPersonalizado"
                  onMouseOver={() => this.change(false, key)}
                  onMouseLeave={() => this.change(true, null)}
                  key={key}
                >
                  <img src={item.avatar_url} className="card-img" />
                  <p
                    className="card-img-overlay offset-md-11 offset-sm-11"
                    id="id"
                  >
                    {item.id}
                  </p>
                  <div className="card-img-overlay informacao">
                    {key === this.state.indice && !this.state.visivel ? (
                      <div className="informacoes">
                        <div
                          style={{
                            float: "left"
                          }}
                        >
                          <p>{item.login}</p>
                        </div>
                        <div id="inf">
                          <Link style={{ color: "#212529" }}>
                            <i className="fas fa-plus-circle fa-lg" id="plus" />
                          </Link>

                          <span
                            style={{ color: "white", background: "#ea4c89" }}
                            onClick={() => this.props.remove(item)}
                          >
                            <i className="fas fa-heart fa-xs" /> Liked
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
export default ListarUsers;
