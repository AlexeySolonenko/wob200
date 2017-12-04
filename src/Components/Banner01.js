import React, { Component } from 'react';

export class Banner01 extends Component {
    render(){
        let lang = this.props.lang;

        return(
            <div className="banner-area pt-2">
                <div className="container">
                <div className="row justify-content-center height align-items-center">
                    <div className="col-lg-8">
                    <div className="banner-content text-center">
                        <span className="text-white top text-uppercase">{this.props.findTexts('bannerSmallText',lang)}</span>
                        <h1 className="text-white text-uppercase">{this.props.findTexts('bannerBigText',lang)}</h1>
                        <a href="#" className="primary-btn d-inline-flex align-items-center"><span className="mr-10">{this.props.findTexts('bannerButton',lang)}</span><span className="lnr lnr-arrow-right"></span></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}