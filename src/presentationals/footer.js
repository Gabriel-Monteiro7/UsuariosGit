/* eslint-disable react/jsx-no-target-blank */

import React from "react";
import "../App.css";

const Footer = props => {
  return (
    <div className="">
      <footer id="sticky-footer" className="py-4 bg-dark text-white-50 ">
        <div className="container text-center">
          <div>
            <a href="https://github.com/" target="_blank">
              <i className="fab fa-github" />
            </a>
            <a href="https://twitter.com/?lang=pt" target="_blank">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <i className="fab fa-facebook" />
            </a>
          </div>
          <small>WebSite 2019 @ All rights reserved</small>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
