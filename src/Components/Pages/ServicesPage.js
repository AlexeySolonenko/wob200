import React, { Component } from 'react';
import { ShortTermCourses, LongTermCourses } from '../../moduleLoader';
import { Router, Route, Link} from 'react-router-dom';
import { ScrollToTopOnMount } from '../../utilsLoader';
import * as m from '../../moduleLoader';
import { CoursesNav } from '../CoursesNav';
import { AccommodationNav } from '../AccommodationNav';
import { AssistanceNav } from '../AssistanceNav';

const Mod1 = (props) => {
    return (
        <div>
            test
        </div>
    );
}

export class ServicesPage extends Component {
    render(){
        console.log(this.props.location);
        let coursesSection = false;
        let accomSection = false;
        let assistSection = false;
        if (this.props.location.pathname.includes('courses-nav')) { coursesSection = true} else {coursesSection = false};
        if (this.props.location.pathname.includes('accommodation-nav')) { accomSection = true} else {accomSection = false};
        if (this.props.location.pathname.includes('assistance-nav')) { assistSection = true} else {assistSection = false};
        console.log(coursesSection);
        console.log(this.props.location.pathname);
        return(
            <div>
                <ScrollToTopOnMount />

                <div className="custom-header-spacer">

                </div>
                <div className="main-wrapper">
                    <section className="featured-area">
                    <div className="container">
                    <div className="row">
                    <div className="col-sm-12">

                        <nav className="show ml-1 mr-1 text-dark mb-1 mt-1">
                            <Link to="/services/courses-nav" className={coursesSection?"text-primary":"text-muted"}> COURSES </Link>
                            <Link to="/services/accommodation-nav" className={accomSection?"text-primary":"text-muted"} > ACCOMMODATION </Link>
                            <Link to="/services/assistance-nav"  className={assistSection?"text-primary":"text-muted"} >ASSISTANCE</Link>
                        </nav>
                    </div>
                    </div>
                    </div>
                    </section>
                </div>


                <div className="main-wrapper">
                    <section className="featured-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Route path={`${this.props.match.url}/courses-nav`} component={CoursesNav} />
                            <Route path={`${this.props.match.url}/accommodation-nav` } component={AccommodationNav} />
                            <Route path={`${this.props.match.url}/assistance-nav` } component={AssistanceNav} />
                            <Route exact path='/services' component={CoursesNav} />
                        </div>

                        <div className="col-md-8">
                            Services Page
                        <Mod1  />
                        <Link to="/services/courses-nav/short-term"  > SHORT TERM </Link>
                        <Link to="/services/courses-nav/long-term" > LONG TERM </Link>
                        <Route exact path={`${this.props.match.url}/short-term`} component={ShortTermCourses} />
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