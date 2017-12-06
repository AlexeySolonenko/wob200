import React, { Component } from 'react';
import { SingleFeature } from '../moduleLoader';

export class FeatureArea extends Component {
    render(){
        let lang = this.props.lang;
        const findText = this.props.findText;
        const db = this.props.texts;
        const noIntermIcon = findText(db,['LandingFeatureArea','noIntermediaries', 'icon']);
        const noIntermTitle = findText(db,['LandingFeatureArea','noIntermediaries', 'title',lang]);
        const noIntermText = findText(db,['LandingFeatureArea','noIntermediaries', 'text',lang]);

        const localPresIcon = findText(db,['LandingFeatureArea','localPresence', 'icon']);
        const localPresTitle = findText(db,['LandingFeatureArea','localPresence', 'title',lang]);
        const localPresText = findText(db,['LandingFeatureArea','localPresence', 'text',lang]);

        const persApprIcon = findText(db,['LandingFeatureArea', 'personalizedApproach', 'icon']);
        const persApprTitle = findText(db,['LandingFeatureArea', 'personalizedApproach', 'title',lang]);
        const persApprText = findText(db,['LandingFeatureArea', 'personalizedApproach', 'text',lang]);

        return(
             <section className="featured-area">
                <div className="container">
                    <div className="row">
                        <SingleFeature text={noIntermText} icon={noIntermIcon} title={noIntermTitle} />
                        <SingleFeature text={localPresText} icon={localPresIcon} title={localPresTitle} />
                        <SingleFeature text={persApprText} icon={persApprIcon} title={persApprTitle} />

                        
                    </div>
                </div>
            </section>
        );
    }
}