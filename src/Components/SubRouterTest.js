import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import * as m from '../moduleLoader';

const RenderingWithReact = () => (
    <div> Rendering With React </div>
);

const Components = () => (
    <div> Components </div>
);

const PropsVState = () => (
    <div> Props V State </div>
);

export const SubRouterTest = ( { match} ) => {
    return(
        <div  className="main-wrapper">
      
            <div className="banner-area">
                <div className="container">
                    <div className="row justify-content-center height align-items-center">
                        <div className="col-md-4 ">
                            <h2>SubRouterTest</h2>
                            <ul>
                            <li>
                                <Link to={`${match.url}/rendering`}>
                                Rendering with React
                                </Link>
                            </li>
                            <li>
                                <Link to={`${match.url}/components`}>
                                Components
                                </Link>
                            </li>
                            <li>
                                <Link to={`${match.url}/props-v-state`}>
                                Props v. State
                                </Link>
                            </li>
                            </ul>
                            <Route exact path={`${match.url}/rendering`} component={RenderingWithReact} />
                            <Route exact path={`${match.url}/components`} component={Components} />
                            <Route exact path={`${match.url}/props-v-state`} component={PropsVState} />
                            <Route exact path={match.url} render={ () => (<h3> Welcome to subrouter</h3> )} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};