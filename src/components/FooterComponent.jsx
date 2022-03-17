import React, { Component } from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="link" to="#">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="#">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="link" to="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 text-center">
            <h5>Social</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
