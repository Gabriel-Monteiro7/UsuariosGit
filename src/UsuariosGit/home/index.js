/* eslint-disable react/jsx-no-target-blank */
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
  isFavorito(item) {
    if (this.props.users.includes(item)) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="container ">
        <h4 style={{ padding: "10px 88% 10px 0" }}>Usuarios Git </h4>
        {this.props.allUsers.length < 1 ? (
          <div />
        ) : (
          <div class="row">
            {this.props.allUsers.map((item, key) => (
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
                          <span
                            style={{
                              float: "left"
                            }}
                          >
                            <a
                              href={item.html_url}
                              target="_blank"
                              style={{
                                textDecoration: "none",
                                color: "#212529"
                              }}
                            >
                              Visit
                            </a>
                          </span>
                          {this.isFavorito(item) ? (
                            <span
                              style={{
                                color: "white",
                                background: "#ea4c89"
                              }}
                              onClick={() => this.props.remove(item)}
                            >
                              <i className="fas fa-heart fa-xs" /> Liked
                            </span>
                          ) : (
                            <span onClick={() => this.props.add(item)}>
                              <i className="fas fa-heart fa-xs" /> Like
                            </span>
                          )}
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
export default Home;
