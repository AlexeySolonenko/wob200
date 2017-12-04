import React, { Component, cloneElement } from 'react';
import * as m from '../moduleLoader';
import { BrowserRouter, Route } from 'react-router-dom';


const preRedux = {
  labels: [
  { id: '1',
    title: 'Header',
    navBar: {
      menuItems: [
        { services: [
          { en: 'services' },
          { ru: 'услуги' }
        ]},
        { home: [
          { en: 'home' },
          { ru: 'главная' }
        ]},
        { freeServices: [
          { en: 'free services' },
          { ru: 'бесплатные услуги' }
        ]},
        { contacts: [
          { en: 'contacts' },
          { ru: 'связаться' }
        ]}
      ]
    }
  }],
    appLang: 'en',
    texts: [
      {
        bannerSmallText: [
          { ru: 'МЫ ПОМОГАЕМ ЛЮДЯМ' },
          { en: 'WE ARE HELPING PEOPLE TO' }
        ]
      },
      {
        bannerBigText: [
          { ru: 'ЖИТЬ ЛУЧШЕ И ЯРЧЕ' },
          { en: 'IMPROVE LIFE AND ENOJY IT' } 
        ]
      },
      {  bannerButton: [
          { ru: 'ПОЕХАЛИ!' },
          { en: "LET'S GO!" }
        ]
      }
    ]
};


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      preRedux: preRedux
    };
    this.translateMenuItems = this.translateMenuItems.bind(this);
    this.switchLang = this.switchLang.bind(this);
    this.translateBanner = this.translateBanner.bind(this);

  };  

  translateMenuItems(itemName, lang) {
    let namesArr=this.state.preRedux.labels[0].navBar.menuItems.find((i)=>(Object.keys(i)==itemName));
    namesArr=namesArr[itemName];
    let result=namesArr.find((i)=>(Object.keys(i)==lang))[lang];
    return result;
  };

  translateBanner(itemName, lang) {
    let namesArr=this.state.preRedux.texts.find((i)=>(Object.keys(i)==itemName));
    namesArr=namesArr[itemName];
    let result=namesArr.find((i)=>(Object.keys(i)==lang))[lang];
    return result;
  }

  switchLang() {
    let preRedux = this.state.preRedux;
    this.state.preRedux.appLang == 'en' ? preRedux.appLang = 'ru' : preRedux.appLang = 'en';
    this.setState({
      preRedux: preRedux
    });
  };


  render() {


    return (
      <div className="App">
        <BrowserRouter >
          <div>
              <div className="main-wrapper-first">
                <m.LanguageSwitcher langSwitcher={this.switchLang} lang={this.state.preRedux.appLang} />
                <m.Header labelName={this.translateMenuItems} payload={this.state.preRedux}/>
              </div>
              {/* <m.LandingPage /> */} 
                <Route exact path='/' render={(props) => <m.LandingPage {...props} findTexts={this.translateBanner} lang={this.state.preRedux.appLang} />} />
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
}

export default App;
