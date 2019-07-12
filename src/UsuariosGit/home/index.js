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
        <h4 style={{ padding: "10px 84% 10px 0" }}>Usuarios Git</h4>
        {this.props.allUsers.length < 1 ? (
          <div style={{ margin: "40% 0 0 0 " }} />
        ) : (
          <div className="card-columns">
            {this.props.allUsers.map((item, key) => (
              <div
                className="card cardPersonalizado"
                onMouseOver={() => this.change(false, key)}
                onMouseLeave={() => this.change(true, null)}
                key={key}
                style={{ width: "80%" }}
              >
                <img src={item.avatar_url} className="card-img" />
                <p className="card-img-overlay" id="id">
                  {item.id}
                </p>
                <div
                  className="card-img-overlay"
                  style={{ padding: "100% 0 0 0" }}
                >
                  {key === this.state.indice && !this.state.visivel ? (
                    <div
                      style={{
                        background: "white",
                        width: "100%",
                        height: "100%",
                        margin: "0px"
                      }}
                      className="row"
                    >
                      <div className="col-5" id="inf">
                        <p>{item.login}</p>
                      </div>
                      <div className="col-7" id="inf">
                        <span>
                          <a
                            href={item.html_url}
                            target="_blank"
                            style={{
                              width: "100%",
                              textDecoration: "none",
                              color: "#212529"
                            }}
                          >
                            Visit
                          </a>
                        </span>
                        {this.isFavorito(item) ? (
                          <span
                            style={{ color: "white", background: "#ea4c89" }}
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
            ))}
          </div>
        )}
      </div>
    );
  }
}
export default Home;
