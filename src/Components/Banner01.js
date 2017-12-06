import React, { Component } from 'react';

export class Banner01 extends Component {
    render(){
        let lang = this.props.lang;
        const findText = this.props.findText;
        const db = this.props.texts;
        const bannerSmallText = findText(db,['LandingBanner','bannerSmallText',lang]);
        const bannerBigText = findText(db,['LandingBanner','bannerBigText',lang]);
        const bannerButton = findText(db,['LandingBanner','bannerButton',lang]);
        
        return(
            <div className="banner-area pt-2">
                <div className="container">
                <div className="row justify-content-center height align-items-center">
                    <div className="col-lg-8">
                    <div className="banner-content text-center">
                        <span className="text-white top text-uppercase">{bannerSmallText}</span>
                        <h1 className="text-white text-uppercase">{bannerBigText}</h1>
                        <a href="#" className="primary-btn d-inline-flex align-items-center"><span className="mr-10">{bannerButton}</span><span className="lnr lnr-arrow-right"></span></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}