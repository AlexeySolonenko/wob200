import React, { Component } from 'react';
import { ShortTermCourses, LongTermCourses } from '../../moduleLoader';
import { Router, Route, Link} from 'react-router-dom';
import { ScrollToTopOnMount } from '../../utilsLoader';
import * as m from '../../moduleLoader';
import { CoursesNav } from '../CoursesNav';
import { AccommodationNav } from '../AccommodationNav';
import { AssistanceNav } from '../AssistanceNav';
import { searchNestedArrays } from '../../Utils/searchNestedArrays';
import { t } from '../../TextLoader';

export class ServicesPage extends Component {
    render(){
        let coursesSection = false;
        let accomSection = false;
        let assistSection = false;
        if (this.props.location.pathname.includes('courses-nav')) { coursesSection = true} else {coursesSection = false};
        // !!!! ALSO ADD /SERVICES/ to identification
        if (this.props.location.pathname.includes('accommodation-nav')) { accomSection = true} else {accomSection = false};
        if (this.props.location.pathname.includes('assistance-nav')) { assistSection = true} else {assistSection = false};

        let lang = this.props.lang;
        // const findText = props.findText;
        const findText = searchNestedArrays;
        
        const servicesPageTitle = findText(t,['ServicesText','servicesPageTitle',lang]);
        const servicesPageWelcMsg = findText(t,['ServicesText','servicesPageWelcMsg',lang]);

        const servicesPageMenuCoursesTitle = findText(t,['ServicesText','servicesPageMenuCoursesTitle',lang]);
        const servicesPageMenuAccomTitle = findText(t,['ServicesText','servicesPageMenuAccomTitle',lang]);
        const servicesPageMenuAssistTitle = findText(t,['ServicesText','servicesPageMenuAssistTitle',lang]);



        return(
            <div>
                <ScrollToTopOnMount />
                <div className = "main-wrapper mt-5">
                    <div className="container">
                        <div className=" row pt-3 bg-white">
                            <div className="col-sm-12">
                                <h3>{servicesPageTitle}</h3>
                                <p>{servicesPageWelcMsg}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-wrapper">
                    <section className="service-area pt-1 pb-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="row">
                                        <Link to="/services/courses-nav" className="col-sm-12 genric-btn success-border">{servicesPageMenuCoursesTitle}</Link>
                                        <Route path={`${this.props.match.url}/courses-nav`} render={(props)=><m.CoursesNav {...props} lang={this.props.lang} /> }  />
                                        <Link to="/services/accommodation-nav"  className="col-sm-12 genric-btn success-border">{servicesPageMenuAccomTitle}</Link>
                                        <Route path={`${this.props.match.url}/accommodation-nav` } component={AccommodationNav} />
                                        <Link to="/services/assistance-nav"  className="col-sm-12 genric-btn success-border">{servicesPageMenuAssistTitle}</Link>
                                        <Route path={`${this.props.match.url}/assistance-nav` } component={AssistanceNav} />
                                    </div>
                                </div>
                                <div className="col-md-8 pt-2 pb-2">
                                    <Route exact path={`${this.props.match.url}/courses-nav`} render={(props)=><m.CoursesThumbsAssembled {...props} lang={this.props.lang} />} />
                                    <Route exact path='/services/courses-nav/short-term' component={ShortTermCourses} />
                                </div>
                                <div className="col-sm-12">
                                    
                                    <Link to="/services/courses-nav/long-term"> LONG TERM </Link>
                                    
                                    <Route exact path={`${this.props.match.url}/long-term`} component={LongTermCourses} />  
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}