import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import GlobeIcon from './globe.svg';

class Header extends Component {
  render() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#000000"}}>
              <Link className="navbar-brand m-0 p-0 ml-4 mr-3 h1" to='/'>Takeshi<br/>Kitano</Link>
              
              <button className="navbar-toggler" type="button" 
                      data-toggle="collapse" 
                      data-target="#navbarSupportedContent" 
                      aria-controls="navbarSupportedContent" aria-expanded="false" 
                      aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to='/Movies'>Movies</Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to='/Biography'>Biography</Link>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto mr-4">
                  <li className="nav-item active mr-2" style={{color: "#ffffff"}}>
                    <a className="nav-link">Light</a>
                  </li>
                  <li className="nav-item">
                    <img src={GlobeIcon} width="30" height="30" className="" alt="GlobeIcon"></img>
                  </li>
                </ul>
              </div>
            </nav>
    );
  }
}
export default Header;