import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as m from '../moduleLoader';



export class RouterSwitch01 extends Component {
    render(){
        return(
                    <Route exact path='/' component={m.LandingPage} />
                    <Route exact path ='/accommodation' component={m.AccommodationPage} />
        );
    }
}