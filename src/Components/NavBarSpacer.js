import React, { Component } from 'react';

export class NavBarSpacer extends Component {
constructor(props){
    super(props);
    this.state = {
        navBarBannerShow: false
    };
    this.handleScroll = this.handleScroll.bind(this);
};
    handleScroll(e){
        if(window.scrollY > 60) {
            this.setState({
                navBarBannerShow: true
            });
        } else {
            this.setState({
                navBarBannerShow: false
            });
        }
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {

        return (
            <div>
                {this.state.navBarBannerShow ? 
                    <div>  
                        <div className=" d-sm-block d-md-block d-lg-none  d-xl-none navbar-spacer-sm" > </div>  
                        <div className=" d-sm-none d-md-none d-lg-block d-xl-block navbar-spacer-lg" > </div>
            
                    </div>
                    : null}
            </div>
         );
    };
}