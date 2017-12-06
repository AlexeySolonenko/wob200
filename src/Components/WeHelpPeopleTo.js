import React, { Component } from 'react';
import { SingleService } from '../moduleLoader';

export class WeHelpPeopleTo extends Component {
    render(){

        let lang = this.props.lang;
        const findText = this.props.findText;
        const db = this.props.texts;

        const gridTitle = findText(db,['ServicesText','thumbsGridHeaderTitle',lang]);
        const gridTitleDescr = findText(db,['ServicesText','thumbsGridHeaderDescr', lang]);
      
        const shortTermBackImg = findText(db,['ServicesText','shortTerm', 'backImg']);
        const shortTermTitle = findText(db,['ServicesText','shortTerm', 'title',lang]);
        const shortTermDescr = findText(db,['ServicesText','shortTerm', 'descr',lang]);
        const shortTermBtnLbl = findText(db,['ServicesText','shortTerm', 'buttonLbl',lang]);

         
        return(
            <section className="service-area">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                    <div className="section-title text-center">
                        <h3 className="text-white">{gridTitle}</h3>
                        <span className="text-white text-uppercase">{gridTitleDescr}</span>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <SingleService title={shortTermTitle} descr={shortTermDescr} buttonLbl={shortTermBtnLbl} backImg={shortTermBackImg} />

                    <div className="col-lg-3 col-sm-6">
                    <div className="single-service">
                        <div className="thumb" style={{background: "url(img/s1.jpg)"}}>
                        <div className="overlay overlay-content d-flex justify-content-center align-items-center">
                            <a href="#" className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
                        </div>
                        </div>
                        <div className="desc">
                        <h6 className="text-uppercase text-white">Creative Design</h6>
                        <p className="text-white">WordPress, the premier free open-source blogging utility, has gone through several upgrades in</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                    <div className="single-service">
                        <div className="thumb" style={{background: "url(img/s2.jpg)"}}>
                        <div className="overlay overlay-content d-flex justify-content-center align-items-center">
                            <a href="#" className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
                        </div>
                        </div>
                        <div className="desc">
                        <h6 className="text-uppercase text-white">Driving Lesson</h6>
                        <p className="text-white">The buying of large-screen TVs has absolutely skyrocketed lately. It seems that everyone wants one – </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                    <div className="single-service">
                        <div className="thumb" style={{background: "url(img/s3.jpg)"}}>
                        <div className="overlay overlay-content d-flex justify-content-center align-items-center">
                            <a href="#" className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
                        </div>
                        </div>
                        <div className="desc">
                        <h6 className="text-uppercase text-white">Climbing Stairs</h6>
                        <p className="text-white">Having used discount toner cartridges for twenty years, there have been a lot of changes in the </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                    <div className="single-service">
                        <div className="thumb" style={{background: "url(img/s4.jpg)"}}>
                        <div className="overlay overlay-content d-flex justify-content-center align-items-center">
                            <a href="#" className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
                        </div>
                        </div>
                        <div className="desc">
                        <h6 className="text-uppercase text-white">Bike Accident</h6>
                        <p className="text-white">Every avid independent filmmaker has dre amed about making that special interest documentary, or </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                    <div className="single-service">
                        <div className="thumb" style={{background: "url(img/s5.jpg)"}}>
                        <div className="overlay overlay-content d-flex justify-content-center align-items-center">
                            <a href="#" className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
                        </div>
                        </div>
                        <div className="desc">
                        <h6 className="text-uppercase text-white">Car Driving</h6>
                        <p className="text-white">Looking to buy a new computer Overwhelmed by all of the options available to you? Stressed by the </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                    <div className="single-service">
                        <div className="thumb" style={{background: "url(img/s6.jpg)"}}>
                        <div className="overlay overlay-content d-flex justify-content-center align-items-center">
                            <a href="#" className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
                        </div>
                        </div>
                        <div className="desc">
                        <h6 className="text-uppercase text-white">Beach HoTel</h6>
                        <p className="text-white">Shure’s Music Phone Adapter (MPA) is our favorite iPhone solution, since it lets you use the headphones </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                    <div className="single-service">
                        <div className="thumb" style={{background: "url(img/s7.jpg)"}}>
                        <div className="overlay overlay-content d-flex justify-content-center align-items-center">
                            <a href="#" className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
                        </div>
                        </div>
                        <div className="desc">
                        <h6 className="text-uppercase text-white">Under Passway</h6>
                        <p className="text-white">Over 92% of computers are infected with Adware and spyware. Such software is rarely accompanied by</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                    <div className="single-service">
                        <div className="thumb" style={{background: "url(img/s8.jpg)"}}>
                        <div className="overlay overlay-content d-flex justify-content-center align-items-center">
                            <a href="#" className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
                        </div>
                        </div>
                        <div className="desc">
                        <h6 className="text-uppercase text-white">Dawn to dusk</h6>
                        <p className="text-white">Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}