import React, { Component } from 'react';
import * as m from '../../moduleLoader';

export class LandingPage extends Component {
    render(){
        return(
            <div>
                <div className="main-wrapper">
                    <m.Banner01 findTexts={this.props.findTexts} lang={this.props.lang} />
                    <m.FeatureArea />
                    <m.WeHelpPeopleTo />
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