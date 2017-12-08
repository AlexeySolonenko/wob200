import React from 'react';
import { Link } from 'react-router-dom';

export const SingleServiceThumb = (props) =>  {
let link = props.link;
if(!props.link) { link="/"};
        return(
                <div className="single-service">
                    <div className="thumb" style={{background: props.backImg}}>
                        <div className="overlay overlay-content d-flex justify-content-center align-items-center">
                            <Link to={link} className="primary-btn hover d-inline-flex align-items-center">
                                <span className="mr-10">{props.buttonLbl}</span><span className="lnr lnr-arrow-right"></span>
                            </Link>
                        </div>
                    </div>
                    <div className="desc">
                    <h6 className="text-uppercase text-white">{props.title}</h6>
                    <p className="text-white">{props.descr}</p>
                    </div>
                </div>
        );
};