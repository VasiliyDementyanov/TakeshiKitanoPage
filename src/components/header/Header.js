import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import GlobeIcon from './globe.svg';

class Header extends Component {
  render() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#000000"}}>
              <Link className="navbar-brand" to='/'>Takeshi<br/>Kitano</Link>
              
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to='/Movies'>Movies</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/Biography'>Biography</Link>
                  </li>
                </ul>
                <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                  <li className="nav-item" style={{color: "#ffffff"}}>Light</li>
                  <li className="nav-item">
                    <img src={GlobeIcon} style={{fill: "red"}} width="30" height="30" className="my-2 my-sm-0" alt="GlobeIcon"></img>
                  </li>
                </ul>
              </div>
            </nav>

            // <Link className="navbar-brand" to='/Choice'><div>Takeshi<br/>Kitano</div></Link>
            // <a className="navbar-brand" href="#">Takeshi<br/>Kitano</a>
            //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
            //     <ul className="navbar-nav mr-auto">
            //       <li className="nav-item active">
            //         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            //       </li>
            //       <li className="nav-item">
            //         <a className="nav-link" href="#">Link</a>
            //       </li>
            //       <li className="nav-item dropdown">
            //         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //           Dropdown
            //         </a>
            //         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            //           <a className="dropdown-item" href="#">Action</a>
            //           <a className="dropdown-item" href="#">Another action</a>
            //           <div className="dropdown-divider"></div>
            //           <a className="dropdown-item" href="#">Something else here</a>
            //         </div>
            //       </li>
            //       <li className="nav-item">
            //         <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            //       </li>
            //     </ul>
            //     <form className="form-inline my-2 my-lg-0">
            //       <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            //       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            //     </form>
            //   </div>
    );
  }
}

export default Header;
