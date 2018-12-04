import React from 'react';
import {Link} from 'react-router-dom'
const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
              <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="secret">Secret</Link>
                  </li>

                </ul>

              </div>
            </nav>
  );
};

export default navbar;