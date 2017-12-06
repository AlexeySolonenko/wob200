import React, { Component } from 'react';
import * as m from '../../moduleLoader';

export class LandingPage extends Component {
    render(){
        return(
            <div>
                <div className="main-wrapper">
                    <m.Banner01 findText={this.props.findText} lang={this.props.lang} texts={this.props.texts}/>
                    <m.FeatureArea  findText={this.props.findText} lang={this.props.lang} texts={this.props.texts}/>
                    <m.WeHelpPeopleTo findText={this.props.findText} lang={this.props.lang} texts={this.props.texts} />
                </div>
                <div className="main-wrapper">
                    <m.HowWeWork />
                </div>
                <div className="main-wrapper">
                    <m.SuccessStories />
                </div>
          </div>
        );
    }
}