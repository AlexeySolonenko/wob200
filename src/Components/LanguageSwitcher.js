import React, { Component, cloneElement } from 'react';

export class LanguageSwitcher extends Component {
    render(){

        let lang = this.props.lang;
        let flagImg = '';
        if(lang == 'ru'){flagImg='./img/ru.svg'};
        if(lang == 'en'){flagImg='./img/gb.svg'};
        console.log(flagImg);
        return(
            <div onClick={this.props.langSwitcher} className="text-right">
               <img src={flagImg} width="25px" />
            </div>
        );
    }
}