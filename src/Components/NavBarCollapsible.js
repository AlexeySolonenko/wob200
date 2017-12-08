import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '../moduleLoader';


export class NavBarCollapsible extends Component { 

    render() {

        let lang = this.props.lang;
        const findText = this.props.findText;
        const db = this.props.texts;
        const navServices = findText(db,['NavBarText','services',lang]);
        const home = findText(db,['NavBarText','home',lang]);
        const freeServices = findText(db,['NavBarText','freeServices',lang]);
        const contacts = findText(db,['NavBarText','contacts',lang]);

        const homeLbl  = (this.props.location.pathname === "/" ? <h5><u className="text-dark">{home}</u></h5>: <h5>{home}</h5>);
        const navServicesLbl  = (this.props.location.pathname.includes("/services") ? <h5><u className="text-dark">{navServices}</u></h5>: <h5>{navServices}</h5>);
        const freeServicesLbl  = (this.props.location.pathname.includes("/freeServices") ? <h5><u className="text-dark">{freeServices}</u></h5>: <h5>{freeServices}</h5>);
        const contactsLbl  = (this.props.location.pathname.includes("/contacts") ? <h5><u className="text-dark">{contacts}</u></h5>: <h5>{contacts}</h5>);
        return (
                        <div className="container"  > 
                            <div className="row main-menubar" style={{width:"100%"}}>
                                <div className=" col-sm-12 collapse custom-navbar-collapsible01 d-lg-none justify-content-end d-xl-none">
                                    <br />
                                    <Link className="text-right text-uppercase nav-item" to="/">{homeLbl}</Link>
                                    <br />
                                    <Link className="text-right text-uppercase nav-item" to="/services">{navServicesLbl}</Link>
                                    <br />
                                    <Link  className="text-right text-uppercase nav-item" to="/freeServices">{freeServicesLbl}</Link>
                                    <br />
                                    <Link className="text-right text-uppercase nav-item" to="/contacts">{contactsLbl}</Link>
                                    <br />
                                    <a><LanguageSwitcher className="text-right nav-item" langSwitcher={this.props.langSwitcher} lang={this.props.lang}  /></a>
                                    <br />
                                </div>
                            </div>
                        </div>

        );
    }
}