import React from 'react';

export const SingleService = (props) =>  {

        return(
                <div className="col-lg-3 col-sm-6">
                    <div className="single-service">
                        <div className="thumb" style={{background: props.backImg}}>
                        <div className="overlay overlay-content d-flex justify-content-center align-items-center">
                            <a href="#" className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">{props.buttonLbl}</span><span className="lnr lnr-arrow-right"></span></a>
                        </div>
                        </div>
                        <div className="desc">
                        <h6 className="text-uppercase text-white">{props.title}</h6>
                        <p className="text-white">{props.descr}</p>
                        </div>
                    </div>
                </div>
        );
};