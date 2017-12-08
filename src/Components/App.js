import React, { Component } from 'react';
import * as m from '../moduleLoader';
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom';
import { t } from '../TextLoader';
import * as u from '../utilsLoader';
import _ from 'lodash';


class App extends Component {

  constructor(props){
    super(props);
    this.state = m.initState;
    this.switchLang = this.switchLang.bind(this);
    this.findText = this.findText.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);

  };  
    findText = u.searchNestedArrays; 

  scrollHandler(e){
      console.log(e.clientY);
  }
  
  switchLang() {
    let newState = this.state;
    this.state.appLang == 'en' ? newState.appLang = 'ru' : newState.appLang = 'en';
    this.setState({
      newState
    });
  };


  render() {
    return (
     
      <div className="App" onScroll={this.scrollHandler} >
        <BrowserRouter >
          <div id="top1">
              <Route render={(props) => <m.NavBarC langSwitcher={this.switchLang} texts={t} {...props} findText={this.findText} lang={this.state.appLang} />} />
              <m.NavBarSpacer />
              <div > 
                <Route render={(props) => <m.NavBarCollapsible langSwitcher={this.switchLang} texts={t} {...props} findText={this.findText} lang={this.state.appLang} />} />
                  <Route exact path='/' render={(props) => <m.LandingPage {...props} texts={t} findText={this.findText} lang={this.state.appLang} />} />
                  <Route path="/services" render={(props)=> <m.ServicesPage {...props} texts={t} lang={this.state.appLang} /> } />
                  <Route exact path="/freeServices" component={m.FreeServicesPage} />
                  <Route  path="/contacts" component={m.ContactsPage} />
                <div className="main-wrapper">
                  {/* <!-- Start Subscription Area --> */}
                  <m.SubscriptionArea />
                  {/* <!-- End Subscription Area --> */}
                  <m.FooterWidget />
                  <m.Footer />
                </div>
              </div>
          </div>
        </BrowserRouter>

      </div>
    );
  }
};

export default App;
