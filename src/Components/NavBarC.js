import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '../moduleLoader';


export class NavBarC extends Component { 

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

            <div  >
                    <nav className="navbar navbar-expand-lg navbar-light row justify-content-between" >
                        <div className="container justify-content-between fixed-top">
                                    <a className="navbar-brand fixed" ><mark>HORIZONTAL LOGO</mark></a>
                                    <button onClick={(()=>{window.scrollTo(0,0);})} className="navbar-toggler" type="button" data-toggle="collapse" data-target=".custom-navbar-collapsible01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                    
                                    <div className="collapse navbar-collapse main-menubar justify-content-end custom-navbar-collapsible01" >
                                        <nav className="nav d-none d-xl-flex d-lg-flex nav-fill mr-0">
                                            <Link className="nav-item" to="/">{homeLbl}</Link>
                                            <Link className="nav-item" to="/services">{navServicesLbl}</Link>
                                            <Link className="nav-item" to="/freeServices">{freeServicesLbl}</Link>
                                            <Link className="nav-item" to="/contacts">{contactsLbl}</Link>
                                            <LanguageSwitcher  className="nav-item" langSwitcher={this.props.langSwitcher} lang={this.props.lang}  />
                                        </nav> 
                                    </div>
                        </div>

                    </nav>

            </div>
        );
    }
}

