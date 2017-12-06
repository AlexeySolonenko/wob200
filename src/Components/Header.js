import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { textDb } from '../TextLoader';


export class Header extends Component {
constructor(props){
  super(props);
  this.state = {};

};
    
    render(){

      let lang = this.props.payload;
      const findText = this.props.findText;
      const db = this.props.texts;
      const navServices = findText(db,['NavBarText','services',lang]);
      const home = findText(db,['NavBarText','home',lang]);
      const freeServices = findText(db,['NavBarText','freeServices',lang]);
      const contacts = findText(db,['NavBarText','contacts',lang]);

        return(
          <header>
            <div className="container">
              <div className="header-wrap">
                <div className="header-top d-flex justify-content-between align-items-center">
                  <div className="logo">
                    <a href="index.html"><img src="img/logo.png" alt=""/></a>
                  </div>
                  <div className="main-menubar d-flex align-items-center">
                    <nav className="show ml-1 mr-1">
                      <Link className="m-1" to="/">{home}</Link>
                      <Link to="/services">{navServices}</Link>
                      <Link to="/freeServices">{freeServices}</Link>
                      <Link to="/contacts">{contacts}</Link>
                    </nav>
                    <div className="menu-bar"><span className="lnr lnr-menu"></span></div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        );
    }
}