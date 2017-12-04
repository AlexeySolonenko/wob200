import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Header extends Component {
constructor(props){
  super(props);
  this.state = {};


};



    render(){
      let lang = this.props.payload.appLang;
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
                      <Link className="m-1" to="/"><a className="m-1">{this.props.labelName('home',lang)}</a></Link>
                      <Link to="/services"><a>{this.props.labelName('services',lang)}</a></Link>
                      <Link to="/freeServices"><a>{this.props.labelName('freeServices',lang)}</a></Link>
                      <Link to="/contacts"><a>{this.props.labelName('contacts',lang)}</a></Link>
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