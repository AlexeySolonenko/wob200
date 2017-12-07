import React, { Component } from 'react';
import { SingleServiceThumb } from '../moduleLoader';
import { Link } from 'react-router-dom';
import * as m from '../moduleLoader';

export class WeHelpPeopleTo extends Component {
    render(){

        let lang = this.props.lang;
        const findText = this.props.findText;
        const db = this.props.texts;

        const gridTitle = findText(db,['ServicesText','thumbsGridHeaderTitle',lang]);
        const gridTitleDescr = findText(db,['ServicesText','thumbsGridHeaderDescr', lang]);
         
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
                    <m.ShortTermCoursesThumb lang={this.props.lang} />
                    <m.LongTermCoursesThumb lang={this.props.lang} />
                    <m.FamilyKidsCoursesThumb lang={this.props.lang} />
                    <m.BusinessCoursesThumb lang={this.props.lang} />
                    <m.TeacherCertsCoursesThumb lang ={this.props.lang} />
                    <m.ExamsCoursesThumb lang={this.props.lang} />




                </div>
                </div>
            </section>
        );
    }
}