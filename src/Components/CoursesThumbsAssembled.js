import React, {Component} from 'react';
import * as m from '../moduleLoader';

export class CoursesThumbsAssembled extends Component {
    
    render(){
        return (
            <div className="row">
                <div className="col-sm-6 col-md-4"><m.ShortTermCoursesThumb lang={this.props.lang}/></div>
                <div className="col-sm-6 col-md-4"><m.LongTermCoursesThumb lang={this.props.lang}/></div>
                <div className="col-sm-6 col-md-4"><m.FamilyKidsCoursesThumb lang={this.props.lang}/></div>
                <div className="col-sm-6 col-md-4"><m.BusinessCoursesThumb lang={this.props.lang}/></div>
                <div className="col-sm-6 col-md-4"><m.TeacherCertsCoursesThumb lang={this.props.lang}/></div>
                <div className="col-sm-6 col-md-4"><m.ExamsCoursesThumb lang={this.props.lang}/></div>
            </div>
        );
    }
};