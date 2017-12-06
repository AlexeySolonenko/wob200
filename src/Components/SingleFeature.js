import React from 'react';

export const SingleFeature = (props) => { 
    return (
        <div className="col-md-4">
            <div className="single-feature d-flex flex-wrap justify-content-between">
                <div className="icon d-flex align-items-center justify-content-center">
                <span className={"lnr lnr-"+props.icon}></span>
                </div>
                <div className="desc">
                <h6 className="title text-uppercase">{props.title}</h6>
                <p>{props.text}</p>
                </div>
            </div>
        </div>
    );
};