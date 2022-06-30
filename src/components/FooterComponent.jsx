import React, { Component } from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="site-footer">
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-4">
            <h5 className="footer-header">Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="link" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/classes">
                  Classes
                </Link>
              </li>
              <li>
                <Link className="link" to="/plans">
                  Plans
                </Link>
              </li>
              <li>
                <Link className="link" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="link" to="/contactus">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 text-center">
            <h5 className="footer-header">Social</h5>
            {/* <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com"
            > */}
            <i class="fa fa-brands fa-instagram"></i> {/* </a> */}
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i className="fa-brands fa-instagram fa-lg fa-light" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
