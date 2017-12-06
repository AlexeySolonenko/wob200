import React, { Component } from 'react';
import * as m from '../moduleLoader';
import { BrowserRouter, Route } from 'react-router-dom';
import { t } from '../TextLoader';
import * as u from '../utilsLoader';
import _ from 'lodash';


class App extends Component {

  constructor(props){
    super(props);
    this.state = m.initState;
    this.switchLang = this.switchLang.bind(this);
    this.findText = this.findText.bind(this);

  };  
    findText = u.searchNestedArrays; 

  switchLang() {
    let newState = this.state;
    this.state.appLang == 'en' ? newState.appLang = 'ru' : newState.appLang = 'en';
    this.setState({
      newState
    });
  };

  render() {
    return (
     
      <div className="App">
        <BrowserRouter >
          <div>
              <div className="main-wrapper-first">
                <m.LanguageSwitcher langSwitcher={this.switchLang} lang={this.state.appLang} />
                <m.Header texts={t} findText={this.findText} payload={this.state.appLang} />
              </div>
              {/* <m.LandingPage /> */} 
                <Route exact path='/' render={(props) => <m.LandingPage {...props} texts={t} findText={this.findText} lang={this.state.appLang} />} />
                <Route exact path="/services" render={(props)=> <m.ServicesPage {...props} labelName={this.translateMenuItems}/> } />
                <Route exact path="/freeServices" component={m.FreeServicesPage} />
                <Route exact path="/contacts" component={m.ContactsPage} />
              <div className="main-wrapper">
                {/* <!-- Start Subscription Area --> */}
                <m.SubscriptionArea />
                {/* <!-- End Subscription Area --> */}
                <m.FooterWidget />
                <m.Footer />
              </div>
          </div>
        </BrowserRouter>

      </div>
    );
  }
};

export default App;
