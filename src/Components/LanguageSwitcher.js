import React, { Component } from 'react';

export class LanguageSwitcher extends Component {
    render(){

        let lang = this.props.lang;
        let flagImg = '';
        if(lang == 'ru'){flagImg='/img/ru.svg'};
        if(lang == 'en'){flagImg='/img/gb.svg'};
        return(
            <div className={this.props.className} onClick={this.props.langSwitcher} >
               <img src={flagImg} width="25px" />
            </div>
        );
    }
}